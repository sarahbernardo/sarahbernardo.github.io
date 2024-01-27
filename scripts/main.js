// Image switcher code

let myImage = document.querySelector("img");

myImage.onclick = function() {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/ginger_soup.jpeg") {
    myImage.setAttribute("src", "images/hinterland-lineup-2024.jpeg");
  } else {
    myImage.setAttribute("src", "images/ginger_soup.jpeg");
  }
};

// Personalized welcome message code

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h2");

function setUserName() {
    let myName = prompt("Please enter your name.");
    if(!myName) {
        setUserName();
      } else {
        localStorage.setItem('name', myName);
        myHeading.innerHTML = 'Welcome to my site, ' + myName;
      }
    };

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Welcome to my site, ${storedName}`;
};

myButton.onclick = function() {
    setUserName();
  };


/*
This is a comment
*/

// This is a comment
