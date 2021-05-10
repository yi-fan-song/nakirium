const nakiriBtn = document.getElementById("nakirium-button");
if (nakiriBtn !== undefined && nakiriBtn !== null) {
	nakiriBtn.onclick = getNakirium;
}

const nakiriumSource = ["NPMhb_mIIhU", "eMIXyxt2xv4", "EVTIYVwYWz4"];

let nakiriPlayer: HTMLIFrameElement;
// let nakiriumCounter = 0;

function getNakirium(e: MouseEvent) {
	if (nakiriPlayer) {
		nakiriPlayer.remove();
	}
	nakiriPlayer = document.createElement("iframe");

	nakiriPlayer.setAttribute("title", "Nakirium");
	nakiriPlayer.setAttribute("frameborder", "0");
	nakiriPlayer.setAttribute(
		"allow",
		"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
	);
	nakiriPlayer.setAttribute("allowfullscreen", "");

	nakiriPlayer.classList.add("grid-center");
	nakiriPlayer.id = "nakirium-player";

	let youtubeSrc = "https://www.youtube.com/embed/";

	const startTime = getRandomInt(570);

	youtubeSrc += nakiriumSource[getRandomInt(3)];
	youtubeSrc += "?autoplay=1&start=";
	youtubeSrc += startTime;
	youtubeSrc += "&end=";
	youtubeSrc += startTime + 30;

	nakiriPlayer.setAttribute("src", youtubeSrc);
	(e.target as HTMLElement).parentElement?.parentElement?.appendChild(
		nakiriPlayer
	);

	setTimeout(() => {
		document.getElementById("nakirium-player")?.focus();
	}, 5000);

	// if (nakiriumCounter < 10) {
	// 	(e.target as HTMLElement).innerHTML = "Give me more";
	// } else if (nakiriumCounter < 50) {
	// 	(e.target as HTMLElement).innerHTML =
	// 		"Yo chill, you're going to get diabetes";
	// } else {
	// 	(e.target as HTMLElement).innerHTML = "Seriously man, you need to stop";
	// }
	// nakiriumCounter++;
	// (e.target as HTMLElement).parentElement?.remove();
}

function getRandomInt(max: number) {
	return Math.floor(Math.random() * max);
}
