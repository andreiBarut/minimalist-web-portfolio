import profilePic from "../assets/profilePic-removebg.png";

const Home = () => {
	return (
		<div className="home-container flex justify-center flex-row items-center  gap-5 md:gap-24 lg:gap-52 h-screen">
			<section className="flex flex-col justify-center items-start gap-5 transition-all relative">
				<h6 className="text-md lg:text-xl xl:text-2xl animate-pulse">
					Hi, I'm Andrei Barut
				</h6>
				<h2 className="text-3xl lg:text-5xl xl:text-6xl font-bold m">
					Junior <br /> Software <br /> Developer
				</h2>
				<p className="text-sm ">
					Portfolio made with{" "}
					<span className="bg-zinc-800 text-neutral-50    rounded-2xl p-1">
						Tailwind CSS
					</span>
				</p>
				<div className="flex items-center">
					<div className="w-4 h-4 rounded-sm bg-zinc-800"></div>
					<div className="w-64 h-1 bg-zinc-800"></div>
					<div className="w-4 h-4 rounded-full bg-zinc-800"></div>
				</div>
				<button className="bg-zinc-800 text-white p-5 rounded-2xl  hover:ring hover:ring-zinc-600 hover:ring-offset-8 transition-all    hover:scale-105">
					Get In Touch
				</button>
				<div className="w-4 h-4 rounded-full bg-zinc-300 absolute bottom-12 left-32 animate-pulse"></div>
			</section>
			<section className="hidden md:block ">
				<div className="bg-zinc-300 rounded-full w-80  transition-all">
					<img
						className="h-80 filter  -translate-y-5 rounded-xl transition-all cursor-pointer grayscale hover:grayscale-0 "
						src={profilePic}
						alt="photo of me"
					/>
				</div>
			</section>
		</div>
	);
};

export default Home;
