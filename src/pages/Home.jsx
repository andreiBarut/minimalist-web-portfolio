import profilePic from "../assets/profilePic-removebg.png";

const Home = () => {
	return (
		<div className="home-container flex justify-center items-center gap-56 ">
			<section className="flex flex-col justify-center items-start gap-10 transition-all">
				<h6 className="text-2xl animate-pulse">Hi, I'm Andrei Barut</h6>
				<h2 className="text-5xl font-bold">
					Junior <br /> Software <br /> Developer
				</h2>
				<button className="bg-zinc-800 text-white p-5 rounded-2xl  hover:ring hover:ring-zinc-600 hover:ring-offset-8 transition-all    hover:scale-105">
					Get In Touch
				</button>
			</section>
			<section>
				<div className="bg-zinc-300 rounded-full w-96  transition-all ">
					<img
						className="w-96 filter  -translate-y-8  transition-all cursor-pointer grayscale hover:grayscale-0 "
						src={profilePic}
						alt="photo of me"
					/>
				</div>
			</section>
		</div>
	);
};

export default Home;
