document.querySelector('#submitButton').addEventListener('click', () => {
  let temp;

  if (document.querySelector('#cUnit').checked) {
    temp = document.getElementById('inputEl').value;
    temp = Number(temp);
    temp = celsius(temp);
    document.querySelector('#display').innerHTML = temp + ' C';
  } else  if (document.querySelector('#fUnit').checked) {
    temp = document.getElementById('inputEl').value;
    temp = Number(temp);
    temp = fahrenheit(temp);
    document.querySelector('#display').innerHTML = temp + ' F';
  }
  else {
    alert('Please select a unit');
  }
})

function celsius(temp) {
  return (temp - 32) * (5/9);
}

function fahrenheit(temp) {
  return temp * 9 / 5 + 32;
}
