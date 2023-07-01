import React from "react";
import Project from "./Project";

//TODO fix sizing for different screen sizes
/////TODO add reusable Project cmponent
//TODO get contact form working
//TODO Add Stripe  Integrtion
//TODO add Calendly Integration

export default function Portfolio() {
	return (
		<>
			<div class="bg-slate-200 dark:bg-slate-700 px-8 py-8 shadow-xl grid grid-cols-3 gap-6">
				<h1 class="text-3xl col-span-3 justify-self-center subpixel-antialiased">
					<strong class="text-orange-400 dark:text-purple-400">
						Portfolio
					</strong>
				</h1>
				<Project
					title="Project1"
					description="desc1"
					tech={["HTML", "CSS", "JS"]}
					link="#"
					github="#"
				/>
				<Project
					title="Project2"
					description="desc2"
					tech={["React", "Node", "Tailwind CSS"]}
					link="#"
					github="#"
				/>
				<Project
					title="Project3"
					description="desc4"
					tech={["React", "Node", "Tailwind CSS", "Firebase"]}
					link="#"
					github="#"
				/>
				<Project
					title="Project4"
					description="desc4"
					tech={["React", "Node", "Tailwind CSS"]}
					link="#"
					github="#"
				/>
				<Project
					title="Project5"
					description="desc4"
					tech={["React", "Node", "Tailwind CSS"]}
					link="#"
					github="#"
				/>
				<Project
					title="Project6"
					description="desc4"
					tech={["React", "Node", "Tailwind CSS"]}
					link="#"
					github="#"
				/>
			</div>
		</>
	);
}
