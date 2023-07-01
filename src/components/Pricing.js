import React from "react";
import Price from "./Price";

export default function Pricing() {
	return (
		<>
			<div class="bg-slate-200 dark:bg-slate-700 px-8 py-8 shadow-xl grid grid-cols-3 gap-6">
				<h1 class="text-3xl col-span-3 justify-self-center subpixel-antialiased">
					<strong class="text-orange-400 dark:text-purple-400 flex justify-center">
						Packages
					</strong>
				</h1>
				<Price
					title="Basic"
					price="£200"
					features={[
						"Single Page",
						"Responsive Design",
						"1 Iteration",
					]}
				/>
				<Price
					title="Pro"
					price="£350"
					features={[
						"3 Pages",
						"2 Iterations",
						"Stripe & Calendly Integration",
					]}
				/>
				<Price
					title="Premium"
					price="£500"
					features={["5 Pages", "5 Iterations", "Membership System"]}
				/>
			</div>
		</>
	);
}
