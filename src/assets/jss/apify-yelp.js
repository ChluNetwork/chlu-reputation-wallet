var apifyExecution;
var apifyResults;

function getUpWorkReviews() {
  var url = $("#upworkURL").val();
  console.log(url);
  if ((typeof url === 'undefined') || url.length == 0) {
    return false;
  }
  var actorUrl = 'https://api.apify.com/v2/acts/PWaorZyrfNgetFoHp/run-sync?token=9qcDHSZabd8uG3F5DQoB2gyYc';
  //var postData = { "url": "https://www.upwork.com/freelancers/~01572ad80a5f95b2b3" };
  var postData = { "url": url };
  syncActor(actorUrl, postData);
}

function syncActor(url, postData) {
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(postData),
    headers: {
      'content-type': 'application/json'
    },
  }).then(function(response) { return response.json(); })
    .then(function(data) {
      apifyExecution = data;
      apifyResults = data;
      storeResults(data);
    });
}

function getTripAdvisorReviews() {
  var url = $("#tripAdvisorURL").val();
  console.log(url);
  if ((typeof url === 'undefined') || url.length == 0) {
    return false;
  }
  //var crawlerUrl = 'https://api.apify.com/v1/ZzSb2nF9DzKbWKHkK/crawlers/shWyEM5aAptXrCGLC/execute?token=FKjYAr2TDHGvgA6f4R6LrtZ5r';
  var crawlerUrl = 'https://api.apify.com/v1/ZzSb2nF9DzKbWKHkK/crawlers/C8kADynYBKCusd8FB/execute?token=5cSywfMdEpGC9LCWYW9RBzLiS';
  var postData = {
    'customData': JSON.stringify({
      'mode': 'recheck',
      'url_list': [{'URL': url, 'cutoff_date': '1970-01-01'}]
    })
  };
  startCrawler(crawlerUrl, postData);
}

function getYelpReviews() {
  var url = $("#yelpURL").val();
  console.log(url);
  if ((typeof url === 'undefined') || url.length == 0) {
    return false;
  }
  var crawlerUrl = 'https://api.apify.com/v1/ZzSb2nF9DzKbWKHkK/crawlers/x9RP3rua6zcc7oPHK/execute?token=Hgr6dCi2Lx5q4Gu4mGQ9FCM5Q';
  var postData = {
    'customData': JSON.stringify({
      'mode': 'recheck',
      'url_list': [{'URL': url, 'cutoff_date': '1970-01-01'}]
    })
  };
  startCrawler(crawlerUrl, postData);
}

function startCrawler(crawlerUrl, postData) {
  fetch(crawlerUrl, {
    method: 'POST',
    body: JSON.stringify(postData),
    headers: {
      'content-type': 'application/json'
    },
  })
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      apifyExecution = data;
      keepPolling();
    });
  return false;
}

function keepPolling() {
  console.log(apifyExecution);
  if (apifyExecution.status !== 'SUCCEEDED' && apifyExecution.finishedAt === null) {
    console.log('setting timeout');
    setTimeout(function(){
      console.log('calling ' + apifyExecution.detailsUrl);
      fetch(apifyExecution.detailsUrl, {method: 'GET'})
        .then(function(response) { return response.json(); })
        .then(function(data) {
          apifyExecution = data;
          keepPolling();
        });
    }, 10000);
  } else {
    console.log('completed...');
    fetch(apifyExecution.resultsUrl, {method: 'GET'})
      .then(function(response) { return response.json(); })
      .then(function(data) {
        apifyExecution = data;
        apifyResults = data;
        var reviews = getCrawlerResults();
        storeResults(reviews);
      });
  }
}

function getCrawlerResults(){
  var reviews = [];
  for(var i in apifyResults) {
    for(var r in apifyResults[i].pageFunctionResult) {
      reviews.push((apifyResults[0].pageFunctionResult[r]));
    }
  }
  return reviews;
}

function storeResults(reviews){
  var promise = localStorage.getItem('did') ? Promise.resolve(null) : DID.generateDID();
  return promise
    .then(function(did) {
      if (did) {
        localStorage.setItem('did', JSON.stringify(did.publicDidDocument));
        localStorage.setItem('did-private-key', did.privateKeyBase58);
      }
      if (!localStorage.getItem('crawlerResults') || Array.isArray(reviews)) {
        localStorage.setItem('crawlerResults', JSON.stringify(reviews));
      }
      location = "/reputationResults";
    });
}

/////////////// IPFS

function storeLocalStorageReputation() {
  var did = JSON.parse(localStorage.getItem('did'));
  var reviews = JSON.parse(localStorage.getItem('crawlerResults'));
  if (did && reviews) {
    return storeReputation(did, reviews);
  } else {
    throw new Error('missing data');
  }
}

function storeReputation(did, reviews) {
  return new Promise(function (resolve, reject) {
    console.log('storeReputation', did, reviews);
    //var url = 'http://localhost:3001/reputation';
    var url = 'https://did.chlu.io/service/reputation';
    var req = {
      didDocument: did,
      reviews: reviews
    };
    // https://stackoverflow.com/questions/39519246/make-xmlhttprequest-post-using-json#39519299
    var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance
    xmlhttp.open("POST", url);
    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xmlhttp.onreadystatechange = function () {
      if(xmlhttp.readyState === 4) {
        if (xmlhttp.status === 200) {
          console.log('XMLHTTPREQUEST OK');
          resolve({ did: req.didDocument });
        } else {
          console.log('XMLHTTPREQUEST FAILED', xmlhttp.status);
          reject(xmlhttp.responseText);
        }
      }
    };
    xmlhttp.send(JSON.stringify(req));
  });
}
