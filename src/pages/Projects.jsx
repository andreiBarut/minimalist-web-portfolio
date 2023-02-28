import voteVTO from "../assets/voteVTO.png";
import grandmasRecipes from "../assets/grandmasRecipes.png";
import currencyExchange from "../assets/currencyExchange.png";
import { GiLightBulb } from "react-icons/gi";

const Projects = () => {
	return (
		<div
			className="projects-container h-max flex flex-col justify-center items-center mb-10 dark:text-zinc-50"
			id="projects"
			data-aos="zoom-in"
			data-aos-duration="500"
		>
			<h1 className="text-4xl font-bold p-10 flex justify-center items-center">
				<GiLightBulb className="text-6xl text-violet-400 animate-pulse" />
				Some of my Recent Projects{" "}
			</h1>
			<div className="hidden lg:flex items-center md:flex mb-20">
				<div className="w-4 h-4 rounded-full bg-zinc-800 dark:bg-zinc-300"></div>
				<div className="w-64 h-1 bg-zinc-800 dark:bg-zinc-300"></div>
				<div className="w-4 h-4 rounded-sm bg-zinc-800 dark:bg-zinc-300"></div>
			</div>
			<section className=" flex flex-row flex-wrap justify-center items-center gap-5">
				<article
					className="w-96  shadow-sm shadow-zinc-900 flex text-center flex-col justify-center items-center rounded-xl h-96"
					data-aos="flip-left"
					data-aos-duration="500"
				>
					<img
						src={grandmasRecipes}
						className="rounded-t-2xl w-52 "
						alt="project image"
					/>
					<h2 className=" text-2xl font-bold text-center mt-5">Cooking Assistant</h2>

					<p className="flex flex-wrap text-sm mx-auto text-center leading-6 ">
						Cooking assistant made with react, json as database, react router dom for
						dynamic routing. This project is an homage to my grandmother, who was a
						cook during the communist period. The recipes are taken from her cookbook.
					</p>
					<div className="flex flex-row gap-10 justify-center mt-5">
						<a
							href="/"
							className="hover:scale-125  text-violet-500 font-medium transition-all"
						>
							Check it Out
						</a>
						<a
							href="/"
							className="hover:scale-125 text-violet-500 font-medium  transition-all"
						>
							YouTube Demo
						</a>
					</div>
				</article>
				<article
					className="w-96  shadow-sm shadow-zinc-900 flex text-center flex-col justify-center items-center rounded-xl    h-96"
					data-aos="flip-left"
					data-aos-duration="500"
				>
					<img
						src={grandmasRecipes}
						className="rounded-t-2xl w-52 "
						alt="project image"
					/>
					<h2 className=" text-2xl font-bold text-center mt-5">Cooking Assistant</h2>

					<p className="flex flex-wrap text-sm mx-auto text-center leading-6 ">
						Cooking assistant made with react, json as database, react router dom for
						dynamic routing. This project is an homage to my grandmother, who was a
						cook during the communist period. The recipes are taken from her cookbook.
					</p>
					<div className="flex flex-row gap-10 justify-center mt-5">
						<a
							href="/"
							className="hover:scale-125  text-violet-500 font-medium transition-all"
						>
							Check it Out
						</a>
						<a
							href="/"
							className="hover:scale-125 text-violet-500 font-medium  transition-all"
						>
							YouTube Demo
						</a>
					</div>
				</article>
				<article
					className="w-96  shadow-sm shadow-zinc-900 flex text-center flex-col justify-center items-center rounded-xl    h-96"
					data-aos="flip-left"
					data-aos-duration="500"
				>
					<img
						src={grandmasRecipes}
						className="rounded-t-2xl w-52 "
						alt="project image"
					/>
					<h2 className=" text-2xl font-bold text-center mt-5">Cooking Assistant</h2>

					<p className="flex flex-wrap text-sm mx-auto text-center leading-6 ">
						Cooking assistant made with react, json as database, react router dom for
						dynamic routing. This project is an homage to my grandmother, who was a
						cook during the communist period. The recipes are taken from her cookbook.
					</p>
					<div className="flex flex-row gap-10 justify-center mt-5">
						<a
							href="/"
							className="hover:scale-125  text-violet-500 font-medium transition-all"
						>
							Check it Out
						</a>
						<a
							href="/"
							className="hover:scale-125 text-violet-500 font-medium  transition-all"
						>
							YouTube Demo
						</a>
					</div>
				</article>
				<article
					className="w-96  shadow-sm shadow-zinc-900 flex text-center flex-col justify-center items-center rounded-xl    h-96"
					data-aos="flip-left"
					data-aos-duration="500"
				>
					<img
						src={grandmasRecipes}
						className="rounded-t-2xl w-52 "
						alt="project image"
					/>
					<h2 className=" text-2xl font-bold text-center mt-5">Cooking Assistant</h2>

					<p className="flex flex-wrap text-sm mx-auto text-center leading-6 ">
						Cooking assistant made with react, json as database, react router dom for
						dynamic routing. This project is an homage to my grandmother, who was a
						cook during the communist period. The recipes are taken from her cookbook.
					</p>
					<div className="flex flex-row gap-10 justify-center mt-5">
						<a
							href="/"
							className="hover:scale-125  text-violet-500 font-medium transition-all"
						>
							Check it Out
						</a>
						<a
							href="/"
							className="hover:scale-125 text-violet-500 font-medium  transition-all"
						>
							YouTube Demo
						</a>
					</div>
				</article>
			</section>
		</div>
	);
};

export default Projects;
