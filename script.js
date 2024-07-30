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

// VARIABLES
let language = "EN";

// CONSTANTS
const languageButton = document.querySelector("#language a");
const homeButton = document.querySelector("#home a");
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const credits = document.querySelector(".credits-divider p");
const contact = document.querySelector(".contact-text p");
const copyright = document.querySelector("#copyright-text");
const heroImg = document.querySelector(".title img");
// const aboutTextEn = document.getElementsByClassName(".about-en")
// const aboutTextZh = document.getElementsByClassName(".about-zh")

// TODO:更改分頁名稱
// TODO:aboutLanguage

// LANGUAGE_OBJECTS_ARRAY
const languages = [
    {
        "language ISO": "en",
        "nav text": ["◂Home", "中/英"],
        "hero img src": "./assets/hero-title/web-hero-title-music-sound-audio-design.png",
        "button text": ["music", "about", "scores"],
        "credits text": "credits & projects:",
        "contact text": "contact",
        "copyright text": "copyright jonalex.io",
    },
    {
        "language ISO": "zh",
        "nav text": ["◂首頁", "ZH/EN"],
        "hero img src": "./assets/hero-title/web-hero-title-音樂聲效-聲音設計-alt.png",
        "button text": ["音樂聲效", "關於我", "樂譜"],
        "credits text": "作品集：",
        "contact text": "與我聯絡",
        "copyright text": "版權 jonalex.io",
    }
]

// INITIALIZE_BUTTON
languageButton.onclick = changeLanguage;
update(languages[0]);

function update(language) {
    document.documentElement.lang = language["language ISO"];
    homeButton.innerText = language["nav text"][0];
    languageButton.innerText = language["nav text"][1];
    heroImg.src = language["hero img src"];
    btn1.innerText = language["button text"][0];
    btn2.innerText = language["button text"][1];
    btn3.innerText = language["button text"][2];
    credits.innerText = language["credits text"];
    contact.innerText = language["contact text"];
    copyright.innerText = language["copyright text"]
    // document.getElementsByClassName = 
}

function changeLanguage() {
    if (document.documentElement.lang.startsWith('en')) {
        update(languages[1])
    } else {
        update(languages[0])
    }
}