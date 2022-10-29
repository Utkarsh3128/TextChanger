function changeUpperText() {
  let text = document.getElementById("value1").value;
  document.getElementById("value1").value = text.toUpperCase();
}

function changeLowerText() {
  let text = document.getElementById("value1").value;
  document.getElementById("value1").value = text.toLowerCase();
}

function replaceTxt(){
    let text1 = document.getElementById("value1").value;
    let text2 = document.getElementById("value2").value;
    let text3 = document.getElementById("value3").value;
    document.getElementById("value1").value=text1.replace(text2, text3)
}

function replaceAll(){
    let text1 = document.getElementById("value1").value;
    let text2 = document.getElementById("value2").value;
    let text3 = document.getElementById("value3").value;
    document.getElementById("value1").value=text1.replaceAll(text2, text3)
}