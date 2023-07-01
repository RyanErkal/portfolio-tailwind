import React from "react";

export default function Project(props) {
	return (
		<>
			<div class="col-span-1 bg-slate-100 dark:bg-slate-900 p-4 rounded-xl shadow-xl">
				<h3 class="text-xl text-slate-900 dark:text-white mb-4 flex justify-center">
					<strong class="text-orange-400 dark:text-purple-400">
						{props.title}
					</strong>
				</h3>
				<p class="text-slate-900 dark:text-slate-100 px-4 flex justify-center subpixel-antialiased">
					{props.description}
				</p>
				<div class="my-4 pt-2 text-center">
					{props.tech.map((tech) => (
						<span class="p-2 mx-2 border-solid border-2 border-orange-200 dark:border-purple-400 rounded hover:bg-orange-200 hover:dark:bg-purple-400 hover:shadow-xl hover:font-bold transition-all">
							{tech}
						</span>
					))}
				</div>
				<div class="my-4 pt-2 text-center">
					<span class="material-symbols-outlined text-slate-900 dark:text-slate-100 hover:text-orange-400 dark:hover:text-purple-400 transition-all">
						<a
							href={props.link}
							class="p-2 text-orange-400 dark:text-purple-400"></a>
						<span class="material-symbols-outlined">
							integration_instructions
						</span>
					</span>
					<span class="material-symbols-outlined text-slate-900 dark:text-slate-100 hover:text-orange-400 dark:hover:text-purple-400 transition-all">
						<a
							href={props.github}
							class="p-2 text-orange-400 dark:text-purple-400"></a>
						media_link
					</span>
				</div>
			</div>
		</>
	);
}
