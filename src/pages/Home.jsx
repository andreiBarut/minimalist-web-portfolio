import { useEffect } from "react";
import profilePic from "../assets/profilePic-removebg.png";
import { useState } from "react";
const Home = () => {
	const keywordArr = ["Software", "Web", "Front-End"];

	return (
		<div
			className="home-container flex justify-center flex-row items-center  gap-5 md:gap-24 lg:gap-52 h-screen mb-32 dark:text-zinc-50"
			id="home"
		>
			<section className="flex flex-col justify-center items-start gap-5 transition-all relative">
				<h6 className="text-2xl lg:text-3xl xl:text-4xl animate-pulse">
					Hi, I'm Andrei Barut
				</h6>

				<h2 className="text-5xl xl:text-6xl font-bold text-violet-400 rounded-xl p-5">
					Junior <br /> Software <br /> Developer
				</h2>
				<p className="text-md ">
					Portfolio made with{" "}
					<span className="bg-zinc-800 text-neutral-50    rounded-2xl p-1">
						Tailwind CSS
					</span>
				</p>
				<div className="flex items-center md:flex">
					<div className="w-4 h-4 rounded-sm bg-zinc-800"></div>
					<div className="w-64 h-1 bg-zinc-800"></div>
					<div className="w-4 h-4 rounded-full bg-zinc-800"></div>
				</div>
				<button className="bg-zinc-800 text-white p-5 rounded-2xl hover:bg-violet-400 hover:ring hover:ring-zinc-600 hover:ring-offset-8 transition-all    hover:scale-105 mx-auto md:mx-0 dark:bg-zinc-200 dark:text-zinc-800">
					Get In Touch
				</button>
				<div className="w-4 h-4 rounded-full bg-violet-200 absolute bottom-12 left-52 md:left-32  animate-pulse"></div>
			</section>
			<section className="hidden md:block ">
				<div className="home-profile-circle bg-zinc-300 rounded-full w-56 md:w-80 lg:w-96  transition-all ">
					<img
						className=" filter  -translate-y-0 rounded-full transition-all cursor-pointer grayscale hover:grayscale-0 "
						src={profilePic}
						alt="photo of me"
					/>
				</div>
			</section>
		</div>
	);
};

export default Home;
