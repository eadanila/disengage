if (
	(window.location.pathname === "/") ||
	(window.location.pathname === "/r/all") ||
	(window.location.pathname === "/r/popular") ||
	(document.referrer === "")
   ) {
	window.location.replace("https://duck.com/");
}
