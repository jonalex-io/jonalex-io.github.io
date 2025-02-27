// SCORE_TOGGLES
var coll = document.getElementsByClassName("collapsible-button");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "100%";
        }
    });
}

document.addEventListener("DOMContentLoaded", function () {
    if (navigator.userAgent.toLowerCase().indexOf('android') > -1) {
        document.body.classList.add('android-device');
    }
});

// //////////////////////////////////////////////////////////////////
// **** LANGUAGE ****
// TODO:更改分頁名稱
// TODO:aboutLanguage

// VARIABLES
let language = "EN";

// CONSTANTS
const languageButton = document.querySelector("#language a");
const homeButton = document.querySelector("#home a");
const homeButtonBottom = document.querySelector("#bottom-nav #home a");
const heroImg = document.querySelector(".title img");
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const credits = document.querySelector(".credits-divider p");
const contact = document.querySelector(".contact-text p");
const copyright = document.querySelector("#copyright-text");
const aboutText = [
    document.querySelectorAll(".about-en"),
    document.querySelectorAll(".about-zh")
]

// LANGUAGE_OBJECTS_ARRAY
const languages = [
    {
        "language ISO": "en",
        "nav text": ["◂Home", "中/英"],
        "nav text bottom": "◂Home",
        "hero img src": "./assets/hero-title/web-hero-title-music-sound-audio-design.png",
        "button text": ["music", "about", "scores"],
        "credits text": "credits & projects:",
        "contact text": "contact",
        "copyright text": "copyright jonalex.io",
        "about text": aboutText[0],
    },
    {
        "language ISO": "zh",
        "nav text": ["◂首頁", "ZH/EN"],
        "nav text bottom": ["◂首頁"],
        "hero img src": "./assets/hero-title/web-hero-title-音樂聲效-聲音設計.png",
        "button text": ["音樂聲效", "關於我", "樂譜"],
        "credits text": "作品集：",
        "contact text": "與我聯絡",
        "copyright text": "版權 jonalex.io",
        "about text": aboutText[1]
    }
]

// LANGUAGE_ELEMENTS_MAP
const elementsMap = {
    languageButton: ["nav text", 1],
    homeButton: ["nav text", 0],
    homeButtonBottom: ["nav text bottom"],
    heroImg: ["hero img src", "src"],
    btn1: ["button text", 0],
    btn2: ["button text", 1],
    btn3: ["button text", 2],
    credits: ["credits text"],
    contact: ["contact text"],
    copyright: ["copyright text"]
};

// SET_EN_&_INITIALIZE_BUTTON
// update(languages[0]);
languageButton.onclick = changeLanguage;

// TODO: use loop to check each item in LANGUAGE_OBJECTS_ARRAY, if != null, update
function update(language) {
    document.documentElement.lang = language["language ISO"];
    if (homeButton != null) {
        homeButton.innerText = language["nav text"][0];
    }
    languageButton.innerText = language["nav text"][1];
    if (homeButton != null) {
        homeButtonBottom.innerText = language["nav text bottom"];
    }
    if (heroImg != null) {
        heroImg.src = language["hero img src"];
    }
    if (btn1 != null && btn2 != null && btn3 != null) {
        btn1.innerText = language["button text"][0];
        btn2.innerText = language["button text"][1];
        btn3.innerText = language["button text"][2];
    }
    credits.innerText = language["credits text"];
    contact.innerText = language["contact text"];
    if (copyright != null) {
        copyright.innerText = language["copyright text"]
    }
    if (aboutText != null) {
        aboutText.forEach(nodeList => {
            nodeList.forEach(element => {
                element.style.display = "none";
            });
        });
        language["about text"].forEach(element => {
            element.style.display = "block";
        });
    }
}
// function update(language) {
//     document.documentElement.lang = language["language ISO"];

//     Object.keys(elementsMap).forEach(
//         (key) => console.log(key)
//         // if string to key value is not null
//         // update
//     );



//     // ABOUT_TEXT
//     // * reset all aboutText visibility to none,
//     // * then only display the relevant "about text" language
//     aboutText.forEach((element) => element.style.display = "none");
//     language["about text"].style.display = "block";
// }


function changeLanguage() {
    if (document.documentElement.lang.startsWith('en')) {
        update(languages[1])
    } else {
        update(languages[0])
    }
}