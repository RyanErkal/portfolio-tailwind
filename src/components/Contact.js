import React from "react";

export default function Contact() {
	return (
		<>
			<div class="bg-slate-100 dark:bg-slate-700 py-8 px-8">
				<h1 class="text-3xl mb-4 font-bold text-orange-400 dark:text-purple-400 flex justify-center">
					Contact
				</h1>
				<form class="flex flex-column justify-center align-middle">
					<label for="name">Name</label>
					<input type="text" id="name" name="name" />
					<label for="email">Email</label>
					<input type="email" id="email" name="email" />
					<label for="message">Message</label>
					<textarea id="message" name="message"></textarea>
					<button type="submit">Submit</button>
				</form>
			</div>
		</>
	);
}
