function randomPassword() {
  let passLength = document.getElementById("output-length").innerText;
  let capAlpha = "AZERTYUIOPMLKJHGFDSQWXCVBN";
  let smallAplha = "azertyuiopqmsldkfjghnwbxvc";
  let symbol = "&é@%£$µ";
  let num = 1234567890;
  let ranPassword = "";
  let result = "";
  const checkboxes1 = document.getElementById("checkboxes1");
  const checkboxes2 = document.getElementById("checkboxes2");
  const checkboxes3 = document.getElementById("checkboxes3");
  const checkboxes4 = document.getElementById("checkboxes4");
  for (let i = 0; i < passLength; i++) {
    if (
      checkboxes1.checked ||
      checkboxes2.checked ||
      checkboxes3.checked ||
      checkboxes4.checked
    ) {
      if (checkboxes1.checked) {
        ranPassword += smallAplha;
      } else {
        null;
      }

      if (checkboxes2.checked) {
        ranPassword += capAlpha;
      } else {
        null;
      }

      if (checkboxes3.checked) {
        ranPassword += num;
      } else {
        null;
      }

      if (checkboxes4.checked) {
        ranPassword += symbol;
      } else {
        null;
      }
    } else {
      document.getElementById("input-text").value =
        "Atleast select one checkbox!";
    }

    let random = Math.floor(Math.random() * ranPassword.length);
    ranPassword = ranPassword[random];
    result += ranPassword;
  }
  document.getElementById("input-text").value = result;
}

function passwordVisibility() {
  var passwordField = document.getElementById("input-text");
  var showEye = document.getElementById("show-eye")
  
  
  if (passwordField.type === "text") {
      passwordField.type = "password";
        showEye.src = "image/eye-slash-solid.svg"
      
    } else {
        passwordField.type = "text";
        showEye.src = "image/eye-solid.svg"
    }
    
}
