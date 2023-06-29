import React from "react";
import "../index.css";

//TODO Hamburger Menu Functionality

export default function Nav() {
	function toggleDarkMode() {
		const html = document.querySelector("html");
		const currentClass = html.getAttribute("class");
		if (currentClass === "dark") {
			html.setAttribute("class", "");
		} else {
			html.setAttribute("class", "dark");
		}
		document.getElementById("dark-mode-toggle").innerHTML =
			html.getAttribute("class") === "dark"
				? '<span class="material-symbols-outlined hover:scale-125 dark:hover:scale-125 text-orange-400">light_mode</span>'
				: '<span class="material-symbols-outlined hover:scale-125 dark:hover:scale-125 text-purple-400">dark_mode</span>';
	}

	return (
		<>
			<nav class="bg-slate-300 dark:bg-slate-900 px-6 py-8 shadow-xl flex flex-row">
				<span class="material-symbols-outlined text-slate-900 dark:text-white hover:text-orange-400 dark:hover:text-purple-400 basis-1/12 transition-all">
					menu
				</span>
				<div class="flex flex-row justify-end basis-11/12">
					<h3 class="text-slate-900 dark:text-slate-100 mr-4 hover:scale-110 hover:font-bold hover:text-orange-400 dark:hover:text-purple-400 transition-all">
						About
					</h3>
					<h3 class="text-slate-900 dark:text-slate-100 mr-4 hover:scale-110 hover:font-bold hover:text-orange-400 dark:hover:text-purple-400 transition-all">
						Portfolio
					</h3>
					<h3 class="text-slate-900 dark:text-slate-100 mr-4 hover:scale-110 hover:font-bold hover:text-orange-400 dark:hover:text-purple-400 transition-all">
						Contact
					</h3>
					<button onClick={toggleDarkMode} id="dark-mode-toggle">
						<span
							id="dark-mode-icon"
							class="material-symbols-outlined hover:scale-125 dark:hover:scale-125 text-purple-400 ">
							dark_mode
						</span>
					</button>
				</div>
			</nav>
		</>
	);
}
