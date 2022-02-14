// 1. uzdevums

function text() {
  let a = "Vēl viena sekunde garām!";
  console.log(a);
}

// 2. uzdevums + 3. uzdevums

function timepass() {
  let b = 0;
  window.setInterval(function() {
    b = b + 1;
    console.log(b);

    let result = document.getElementById("result");
    result.innerHTML = " " + b;
  }, 1000);
}

// 4. uzdevums

function timepass0() {
  let b0 = 0;
  stoplet = window.setInterval(function() {
    b0 = b0 + 1;

    let result0 = document.getElementById("result0");
    result0.innerHTML = " " + b0;
  }, 1000);
}

function stop() {
  clearInterval(stoplet)
}

// 5. uzdevums + 6. uzdevums

function inc() {
  let c = parseInt(document.getElementById("number").value, 10);
  if (c >= 100) {
    number.style.backgroundColor = "#BF616A"

    setTimeout(() => {
      number.style.backgroundColor = "#ECEFF4"
    }, 2000)
  }
  c = isNaN(c) ? 0 : c;
  c > 99 ? c = 99 : "";
  c++;
  document.getElementById("number").value = c;
}

function dec() {
  let c = parseInt(document.getElementById("number").value, 10);
  if (c <= 0) {
    number.style.backgroundColor = "#BF616A"
    setTimeout(() => {
      number.style.backgroundColor = "#ECEFF4"
    }, 2000)
  }
  c = isNaN(c) ? 0 : c;
  c < 1 ? c = 1 : "";
  c--;
  document.getElementById("number").value = c;
}