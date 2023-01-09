const html = document.querySelector("html")
const switchButton = document.querySelector(".switch")

const img = document.querySelector(".avatar img")

switchButton.addEventListener("click", () => {
	html.classList.toggle("light")

	if (html.classList.contains("light")) {
		img.src = "assets\\avatar-light.jpg"
	} else {
		img.src = "assets\\avatar.jpg"
	}
})
