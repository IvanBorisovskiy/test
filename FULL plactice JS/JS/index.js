function clickBtn1() {
  num1 = Number(document.querySelector('.first').value);
  num2 = Number(document.querySelector('.next').value);
  document.getElementById("result").innerHTML = (num1 + num2);
}

function clickBtn2() {
    num1 = document.querySelector('.first').value;
    num2 = document.querySelector('.next').value;
    document.getElementById("result").innerHTML = (num1 - num2);
  }

  function clickBtn3() {
    num1 = Number(document.querySelector('.first').value);
    num2 = Number(document.querySelector('.next').value);
    document.getElementById("result").innerHTML = (num1 * num2);
  }

  function clickBtn4() {
    num1 = document.querySelector('.first').value;
    num2 = document.querySelector('.next').value;
    document.getElementById("result").innerHTML = (num1 / num2);
  }