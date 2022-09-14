var input = document.querySelectorAll('input');
var div = document.getElementById('resconv');
var res;
for (let i = 0; i < input.length; i++) {
  input[i].addEventListener('input', function() {
    if (inp1.value !== '' && inp2.value !== '') {
      res =  inp2.value / inp1.value;
      resconv.innerHTML = res + ' ' + 'BTC';
    }
  })
}
