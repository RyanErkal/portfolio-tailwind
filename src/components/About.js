import React from "react";
import developer from "./media/developer.png";

export default function About() {
	return (
		<>
			<div class="bg-slate-300 dark:bg-slate-800 px-6 py-8 shadow-xl grid grid-cols-2 gap-6 justfy-items-middle items-center">
				<img
					class="position- scale-50"
					src={developer}
					alt="developer"
				/>
				<p class="text-2xl text-slate-900 dark:text-slate-100 justify-items-center align-self-middle subpixel-antialiased">
					Hi, I'm{" "}
					<strong class="text-4xl text-orange-400 dark:text-purple-400">
						Ryan Erkal
					</strong>
					. I'm a Front End Web Developer.
					<p class="text-sm mt-2 text-slate-900 dark:text-slate-100 justify-items-center align-self-middle subpixel-antialiased">
						Disciplined Front End Web Developer with a strong
						foundation in HTML, CSS, JavaScript, and React. Proven
						ability to create efficient, scalable web applications
						and a passion for learning new technologies. Committed
						to providing high-quality results with little
						supervision and strong attention to detail.
					</p>
				</p>
			</div>
		</>
	);
}
