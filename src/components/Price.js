import React from "react";

export default function Price(props) {
	return (
		<>
			<div class="col-span-1 bg-slate-100 dark:bg-slate-900 p-4 rounded-xl shadow-xl">
				<h3 class="text-xl text-slate-900 dark:text-white mb-4 flex justify-center">
					<strong class="text-orange-400 dark:text-purple-400 px-2">
						{props.title}
					</strong>
				</h3>
				<p class="text-slate-900 dark:text-white px-2">
					{props.description}
				</p>
				<div class="my-4 pt-2 text-center">
					{props.features.map((feature) => (
						<p class="p-2 mx-2 transition-all">{feature}</p>
					))}
				</div>
				<div class="my-4 pt-2 text-center">
					<button class="p-2 mx-2 border-solid border-2 border-orange-200 dark:border-purple-400 rounded hover:bg-orange-200 hover:dark:bg-purple-400 hover:shadow-xl hover:font-bold transition-all">
						{props.price}
					</button>
				</div>
			</div>
		</>
	);
}
