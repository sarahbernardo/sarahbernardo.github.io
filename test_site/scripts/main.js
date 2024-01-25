// Image switcher code

let myImage = document.querySelector("img");

myImage.onclick = function() {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox_logo.png") {
    myImage.setAttribute("src", "images/chrome_logo.png");
  } else {
    myImage.setAttribute("src", "images/firefox_logo.png");
  }
};

// Personalized welcome message code

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    let myName = prompt("Please enter your name.");
    if(!myName) {
        setUserName();
      } else {
        localStorage.setItem('name', myName);
        myHeading.innerHTML = 'Mozilla is cool, ' + myName;
      }
    };

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
};

myButton.onclick = function() {
    setUserName();
  };


/*
This is a comment
*/

// This is a comment
