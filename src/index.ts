const nakiriBtn = document.getElementById("nakirium-button");
if (nakiriBtn !== undefined && nakiriBtn !== null) {
	nakiriBtn.onclick = getNakirium;
}

function getNakirium(e: MouseEvent) {
	const nakiriPlayer = document.createElement("iframe");

	nakiriPlayer.setAttribute("title", "Nakirium");
	nakiriPlayer.setAttribute("frameborder", "0");
	nakiriPlayer.setAttribute(
		"allow",
		"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
	);
	nakiriPlayer.setAttribute("allowfullscreen", "");

	nakiriPlayer.classList.add("grid-center");
	nakiriPlayer.id = "nakirium-player";

	const youtubeSrc = "https://www.youtube.com/embed/NPMhb_mIIhU";

	nakiriPlayer.setAttribute("src", youtubeSrc);

	(e.target as HTMLElement).parentElement?.parentElement?.appendChild(
		nakiriPlayer
	);
	(e.target as HTMLElement).parentElement?.remove();
}
