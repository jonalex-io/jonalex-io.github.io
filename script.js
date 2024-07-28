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

// **** LANGUAGE ****

// VARIABLES
let language = "EN";

// CONSTANTS
const languageButton = document.querySelector("#language a");
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const credits = document.querySelector(".credits-divider p");
const contact = document.querySelector(".contact-text p");
// TODO: separate date with inline tag
// const copyright = document.querySelector("");

// LANGUAGE_OBJECTS_ARRAY
const languages = [
    {
        "language ISO": "en",
        "nav text": "中/英",
        "button text": ["music", "about", "scores"],
        "credits text": "credits & proejcts:",
        "contact text": "contact",
        "copyright text": "",
        text: ""
    },
    {
        "language ISO": "zh",
        "nav text": "ZH/EN",
        "button text": ["音樂音效", "關於我", "樂譜"],
        "credits text": "作品集：",
        "contact text": "與我聯絡",
        "copyright text": "",
        text: ""
    }
]

// INITIALIZE_BUTTON
languageButton.onclick = changeLanguage;
update(languages[0]);

function update(language) {
    document.documentElement.lang = language["language ISO"];
    btn1.innerText = language["button text"][0];
    btn2.innerText = language["button text"][1];
    btn3.innerText = language["button text"][2];
    languageButton.innerText = language["nav text"];
    credits.innerText = language["credits text"];
    // contact.innerText = language["contact text"];
}

function changeLanguage() {
    if (document.documentElement.lang.startsWith('en')) {
        update(languages[1])
    } else {
        update(languages[0])
    }
}