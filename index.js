"use strict";
const nakiriBtn = document.getElementById("nakirium-button");
if (nakiriBtn !== undefined && nakiriBtn !== null) {
    nakiriBtn.onclick = getNakirium;
}
const nakiriumSource = ["NPMhb_mIIhU", "eMIXyxt2xv4", "EVTIYVwYWz4"];
function getNakirium(e) {
    var _a, _b, _c;
    const nakiriPlayer = document.createElement("iframe");
    nakiriPlayer.setAttribute("title", "Nakirium");
    nakiriPlayer.setAttribute("frameborder", "0");
    nakiriPlayer.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");
    nakiriPlayer.setAttribute("allowfullscreen", "");
    nakiriPlayer.classList.add("grid-center");
    nakiriPlayer.id = "nakirium-player";
    let youtubeSrc = "https://www.youtube.com/embed/";
    const startTime = getRandomInt(570);
    youtubeSrc += nakiriumSource[getRandomInt(3)];
    youtubeSrc += "?start=";
    youtubeSrc += startTime;
    youtubeSrc += "&end=";
    youtubeSrc += startTime + 30;
    nakiriPlayer.setAttribute("src", youtubeSrc);
    (_b = (_a = e.target.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.appendChild(nakiriPlayer);
    (_c = e.target.parentElement) === null || _c === void 0 ? void 0 : _c.remove();
}
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
//# sourceMappingURL=index.js.map