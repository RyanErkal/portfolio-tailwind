import React from "react";
import "../index.css";

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
		<div class="bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl flex flex-row justify-end">
			<h3 class="text-slate-900 dark:text-white mr-4 hover:scale-125 hover:text-orange-400 dark:hover:text-purple-400 transition-all">
				About
			</h3>
			<h3 class="text-slate-900 dark:text-white mr-4 hover:scale-125 hover:text-orange-400 dark:hover:text-purple-400 transition-all">
				Portfolio
			</h3>
			<h3 class="text-slate-900 dark:text-white mr-4 hover:scale-125 hover:text-orange-400 dark:hover:text-purple-400 transition-all">
				Contact
			</h3>
			<button onClick={toggleDarkMode} id="dark-mode-toggle">
				<span
					id="dark-mode-icon"
					class="material-symbols-outlined hover:scale-125 dark:hover:scale-125 text-purple-400">
					dark_mode
				</span>
			</button>
		</div>
	);
}
