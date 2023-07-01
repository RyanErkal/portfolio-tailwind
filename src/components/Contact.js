import React from "react";

export default function Contact() {
	return (
		<>
			<div class="bg-slate-100 dark:bg-slate-700 py-8 px-8">
				<h1 class="text-3xl mb-6 font-bold text-orange-400 dark:text-purple-400 flex justify-center">
					Contact
				</h1>

				<form class="mx-48">
					<div class="grid md:grid-cols-2 md:gap-6">
						<div class="relative z-0 mb-6">
							<input
								type="text"
								name="floating_first_name"
								id="floating_first_name"
								class="block py-2.5 px-0 w-full text-sm text-slate-900 bg-transparent border-0 border-b-2 border-slate-300 appearance-none dark:text-slate-100 dark:border-slate-600 dark:focus:border-purple-400 focus:outline-none focus:ring-0 focus:border-orange-400 peer"
								placeholder=" "
								required
							/>
							<label
								for="floating_first_name"
								class="peer-focus:font-medium absolute text-sm text-slate-900 dark:text-slate-100 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-400 peer-focus:dark:text-purple-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
								First name
							</label>
						</div>
						<div class="relative z-0 w-full mb-6 group">
							<input
								type="text"
								name="floating_last_name"
								id="floating_last_name"
								class="block py-2.5 px-0 w-full text-sm text-slate-900 bg-transparent border-0 border-b-2 border-slate-300 appearance-none dark:text-slate-100 dark:border-slate-600 dark:focus:border-purple-400 focus:outline-none focus:ring-0 focus:border-orange-400 peer"
								placeholder=" "
								required
							/>
							<label
								for="floating_last_name"
								class="peer-focus:font-medium absolute text-sm text-slate-900 dark:text-slate-100 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-400 peer-focus:dark:text-purple-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
								Last name
							</label>
						</div>
					</div>
					<div class="grid md:grid-cols-2 md:gap-6">
						<div class="relative z-0 mb-6">
							<input
								type="text"
								name="floating_first_name"
								id="floating_first_name"
								class="block py-2.5 px-0 w-full text-sm text-slate-900 bg-transparent border-0 border-b-2 border-slate-300 appearance-none dark:text-slate-100 dark:border-slate-600 dark:focus:border-purple-400 focus:outline-none focus:ring-0 focus:border-orange-400 peer"
								placeholder=" "
								required
							/>
							<label
								for="floating_first_name"
								class="peer-focus:font-medium absolute text-sm text-slate-900 dark:text-slate-100 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-400 peer-focus:dark:text-purple-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
								Email
							</label>
						</div>
						<div class="relative z-0 w-full mb-6 group">
							<input
								type="tel"
								name="floating_last_name"
								id="floating_last_name"
								class="block py-2.5 px-0 w-full text-sm text-slate-900 bg-transparent border-0 border-b-2 border-slate-300 appearance-none dark:text-slate-100 dark:border-slate-600 dark:focus:border-purple-400 focus:outline-none focus:ring-0 focus:border-orange-400 peer"
								placeholder=" "
								required
							/>
							<label
								for="floating_last_name"
								class="peer-focus:font-medium absolute text-sm text-slate-900 dark:text-slate-100 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-400 peer-focus:dark:text-purple-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
								Phone Number
							</label>
						</div>
					</div>
					<div class="relative z-0 mb-6">
						<input
							type="textarea"
							name="floating_first_name"
							id="floating_first_name"
							class="block py-2.5 px-0 w-full text-sm text-slate-900 bg-transparent border-0 border-b-2 border-slate-300 appearance-none dark:text-slate-100 dark:border-slate-600 dark:focus:border-purple-400 focus:outline-none focus:ring-0 focus:border-orange-400 peer"
							placeholder=" "
							required
						/>
						<label
							for="floating_first_name"
							class="peer-focus:font-medium absolute text-sm text-slate-900 dark:text-slate-100 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-400 peer-focus:dark:text-purple-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
							Your Message
						</label>
					</div>
					<button
						type="submit"
						class="text-slate-100 bg-orange-400 hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium hover:font-bold rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-purple-400 dark:hover:bg-purple-500 dark:focus:ring-purple-300 flex justify-self-center alignself--center">
						Submit
					</button>
				</form>
			</div>
		</>
	);
}
