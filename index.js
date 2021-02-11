function formValidation() {
  let uid = document.getElementById("userid");

  let uname = document.getElementById("username");
  let uadd = document.getElementById("address");
  let ucountry = document.getElementById("country");
  let uzip = document.getElementById("zip");
  let uemail = document.getElementById("email");
  let umsex = document.getElementById("msex");
  let ufsex = document.getElementById("fsex");
  if (userid_validation(uid, 5, 12)) {
    if (passid_validation(passid, 7, 12)) {
      if (allLetter(uname)) {
        if (alphanumeric(uadd)) {
          if (countryselect(ucountry)) {
            if (educationselect(educationlevel)) {
              if (allnumeric(uzip)) {
                if (ValidateEmail(uemail)) {
                  if (validsex(umsex, ufsex)) {
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  return false;
}

//User Passport/ID validation
function userid_validation(uid, mx, my) {
  let uid_len = uid.value.length;
  if (uid_len == 0 || uid_len >= my || uid_len < mx) {
    const alertMessage = document.createElement("p");
    alertMessage.style.color = "red";
    alertMessage.style.fontSize = "15px";
    const alertMessageNode = document.createTextNode(
      "The fields marked * cannot be left empty! | Please observe the input rules to key in data correctly! "
    );
    alertMessage.appendChild(alertMessageNode);

    let useriddiv = document.getElementById("iditem");
    let useridinput = document.getElementById("useridlabel");
    useriddiv.insertBefore(alertMessage, useridinput);
    uid.focus();
  }
}

//Checks if input is alphabetic
function allLetter(uname) {
  let letters = /^[A-Za-z]+$/;
  if (uname.value.match(letters)) {
    return true;
  } else {
    const alertMessage = document.createElement("p");
    alertMessage.style.color = "red";
    alertMessage.style.fontSize = "15px";
    const alertMessageNode = document.createTextNode(
      "The fields marked * cannot be left empty! | Please observe the input rules to key in data correctly! "
    );
    alertMessage.appendChild(alertMessageNode);

    let useriddiv = document.getElementById("iditem");
    let useridinput = document.getElementById("useridlabel");
    useriddiv.insertBefore(alertMessage, useridinput);
    uname.focus();
  }
}

//Checks if adress has alphanumeric characters
function alphanumeric(uadd) {
  let letters = /^[0-9a-zA-Z]+$/;
  if (uadd.value.match(letters)) {
    return true;
  } else {
    const alertMessage = document.createElement("p");
    alertMessage.style.color = "red";
    alertMessage.style.fontSize = "15px";
    const alertMessageNode = document.createTextNode(
      "The fields marked * cannot be left empty! | Please observe the input rules to key in data correctly! "
    );
    alertMessage.appendChild(alertMessageNode);

    let useriddiv = document.getElementById("iditem");
    let useridinput = document.getElementById("useridlabel");
    useriddiv.insertBefore(alertMessage, useridinput);
    uadd.focus();
  }
}

//checks if selection has been made
function countryselect(ucountry) {
  if (ucountry.value == "Default") {
    const alertMessage = document.createElement("p");
    alertMessage.style.color = "red";
    alertMessage.style.fontSize = "15px";
    const alertMessageNode = document.createTextNode(
      "The fields marked * cannot be left empty! | Please observe the input rules to key in data correctly! "
    );
    alertMessage.appendChild(alertMessageNode);

    let useriddiv = document.getElementById("iditem");
    let useridinput = document.getElementById("useridlabel");
    useriddiv.insertBefore(alertMessage, useridinput);
    ucountry.focus();
  } else {
    return true;
  }
}
//checks if education level has been chosen
function educationselect(educationlevel) {
  if (educationlevel.value == "Default") {
    const alertMessage = document.createElement("p");
    alertMessage.style.color = "red";
    alertMessage.style.fontSize = "15px";
    const alertMessageNode = document.createTextNode(
      "The fields marked * cannot be left empty! | Please observe the input rules to key in data correctly! "
    );
    alertMessage.appendChild(alertMessageNode);

    let useriddiv = document.getElementById("iditem");
    let useridinput = document.getElementById("useridlabel");
    useriddiv.insertBefore(alertMessage, useridinput);
    educationlevel.focus();
  } else {
    return true;
  }
}

//checks if zip code is alphanumeric
function allnumeric(uzip) {
  let numbers = /^[0-9]+$/;
  if (uzip.value.match(numbers)) {
    return true;
  } else {
    const alertMessage = document.createElement("p");
    alertMessage.style.color = "red";
    alertMessage.style.fontSize = "15px";
    const alertMessageNode = document.createTextNode(
      "The fields marked * cannot be left empty! | Please observe the input rules to key in data correctly! "
    );
    alertMessage.appendChild(alertMessageNode);

    let useriddiv = document.getElementById("iditem");
    let useridinput = document.getElementById("useridlabel");
    useriddiv.insertBefore(alertMessage, useridinput);
    uzip.focus();
  }
}
//checks email validity
function ValidateEmail(uemail) {
  let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (uemail.value.match(mailformat)) {
    return true;
  } else {
    const alertMessage = document.createElement("p");
    alertMessage.style.color = "red";
    alertMessage.style.fontSize = "15px";
    const alertMessageNode = document.createTextNode(
      "The fields marked * cannot be left empty! | Please observe the input rules to key in data correctly! "
    );
    alertMessage.appendChild(alertMessageNode);

    let useriddiv = document.getElementById("iditem");
    let useridinput = document.getElementById("useridlabel");
    useriddiv.insertBefore(alertMessage, useridinput);
    uemail.focus();
  }
}
//checks if sex has been chosen
function validsex(umsex, ufsex) {
  x = 0;

  if (umsex.checked) {
    x++;
  }
  if (ufsex.checked) {
    x++;
  }
  if (x == 0) {
    const alertMessage = document.createElement("p");
    alertMessage.style.color = "red";
    alertMessage.style.fontSize = "15px";
    const alertMessageNode = document.createTextNode(
      "The fields marked * cannot be left empty! | Please observe the input rules to key in data correctly! "
    );
    alertMessage.appendChild(alertMessageNode);

    let useriddiv = document.getElementById("iditem");
    let useridinput = document.getElementById("useridlabel");
    useriddiv.insertBefore(alertMessage, useridinput);
    umsex.focus();
  } else {
    alert("Form Succesfully Submitted");
    window.location.reload();
    return true;
  }
}
