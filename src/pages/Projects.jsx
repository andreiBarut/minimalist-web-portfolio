import voteVTO from "../assets/voteVTO.png";
import { GiLightBulb } from "react-icons/gi";

const Projects = () => {
	return (
		<div className="projects-container h-max lg:h-screen flex flex-col justify-center items-center mb-10">
			<h1 className="text-4xl font-bold p-10 flex justify-center items-center">
				<GiLightBulb className="text-6xl text-violet-400 animate-pulse" />
				Some of my Recent Projects{" "}
			</h1>
			<section className="flex justify-center gap-10 lg:gap-16 flex-wrap flex-col lg:flex-row">
				<article className="flex flex-col justify-center items-center gap-2 w-96 lg:w-1/4 p-5 drop-shadow-xl shadow-xl border-zinc-300 rounded-3xl">
					<img src={voteVTO} className=" rounded-xl" alt="project image" />
					<h2 className=" text-2xl font-bold text-center">Custom Polls</h2>

					<p className="flex flex-wrap text-sm mx-auto text-center leading-6 ">
						Custom Voting Polls application developed for the local county veteran
						association developed with ReactJS. The app implements user
						authentification, firebase cloud database firestore, it allows the user to
						create custom polls and manage the forms from the poll dashboard. The
						votes can be public, private and results are displayed accordingly to the
						poll settings.
					</p>
					<div className="flex flex-row gap-10">
						<a
							href="/"
							className="hover:scale-125  text-violet-800 font-medium transition-all"
						>
							Check it Out
						</a>
						<a
							href="/"
							className="hover:scale-125 text-violet-800 font-medium  transition-all"
						>
							YouTube Demo
						</a>
					</div>
				</article>
				<article className="flex flex-col transform scale-105 justify-center items-center ring-2 ring-violet-200 gap-2 w-96 lg:w-1/4 p-5 drop-shadow-xl shadow-xl border-zinc-300 rounded-3xl">
					<img src={voteVTO} className=" rounded-xl" alt="project image" />
					<h2 className=" text-2xl font-bold text-center">Custom Polls</h2>

					<p className="flex flex-wrap text-sm mx-auto text-center leading-6 ">
						Custom Voting Polls application developed for the local county veteran
						association developed with ReactJS. The app implements user
						authentification, firebase cloud database firestore, it allows the user to
						create custom polls and manage the forms from the poll dashboard. The
						votes can be public, private and results are displayed accordingly to the
						poll settings.
					</p>
					<div className="flex flex-row gap-10">
						<a
							href="/"
							className="hover:scale-125  text-violet-800 font-medium transition-all"
						>
							Check it Out
						</a>
						<a
							href="/"
							className="hover:scale-125 text-violet-800 font-medium  transition-all"
						>
							YouTube Demo
						</a>
					</div>
				</article>
				<article className="flex flex-col justify-center items-center gap-2 w-96 lg:w-1/4 p-5 drop-shadow-xl shadow-xl border-zinc-300 rounded-3xl">
					<img src={voteVTO} className=" rounded-xl" alt="project image" />
					<h2 className=" text-2xl font-bold text-center">Custom Polls</h2>

					<p className="flex flex-wrap text-sm mx-auto text-center leading-6 ">
						Custom Voting Polls application developed for the local county veteran
						association developed with ReactJS. The app implements user
						authentification, firebase cloud database firestore, it allows the user to
						create custom polls and manage the forms from the poll dashboard. The
						votes can be public, private and results are displayed accordingly to the
						poll settings.
					</p>
					<div className="flex flex-row gap-10">
						<a
							href="/"
							className="hover:scale-125  text-violet-800 font-medium transition-all"
						>
							Check it Out
						</a>
						<a
							href="/"
							className="hover:scale-125 text-violet-800 font-medium  transition-all"
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
