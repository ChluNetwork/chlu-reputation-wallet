function loadSpinner() {
  var spinner = document.getElementById('hidden_div');
  var submitArea = document.getElementById('submit-area');
  var heroMessage = document.getElementById('hero-message');
  if (spinner.style.display == 'none') {
    spinner.style.display = '';
    submitArea.style.display = 'none';
    heroMessage.style.display = 'none';
  }
  else {
    spinner.style.display = 'none';
    submitArea.style.display = '';
    heroMessage.style.display = '';
  }
}
