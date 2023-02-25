const About = () => {
	return (
		<div className="about-container flex justify-center h-max">
			<section className="w-1/2">
				<img src="/" alt="about photo" />
			</section>
			<section className="w-1/2 flex flex-col justify-center items-start gap-10 text-sm">
				<h2 className="text-4xl font-bold">About me</h2>
				<p className=" leading-6">
					I am <span>front-end developer</span>, passionate, open to a new
					professional challenge and ready to take on responsibilities. Reliable team
					member always ready to help. Quick learner with problem-solving and
					decision-making mindset, and excellent interpersonal skills, I am seeking
					to be employed in a company with strong organizational culture, where I can
					add value using my skills and my previous professional experience within
					the IT Industry.
				</p>
				<p className=" leading-6">
					I have{" "}
					<span className="bg-zinc-800 text-neutral-50 m-2   rounded-2xl">
						over one year experience
					</span>{" "}
					of working with{" "}
					<span className="bg-zinc-800 text-neutral-50    rounded-2xl">
						JavaScript ES6, over two years of experience building static websites with
						HTML and CSS, 6+ months of working with ReactJs.
					</span>
					I am profficient in JavaScript syntax, understand the principles of{" "}
					<span className="bg-zinc-800 text-neutral-50    rounded-2xl">
						OOP and functional programming
					</span>
					. Over the past year I have developed various applications using{" "}
					<span className="bg-zinc-800 text-neutral-50    rounded-2xl">
						HTML, CSS, JavaScript, React, npm, git
					</span>{" "}
					and I'm always trying to improve and learn something new. This web
					portfolio is developed using{" "}
					<span className="bg-zinc-800 text-neutral-50    rounded-2xl">
						ReactJs and Tailwind CSS
					</span>
					. During my time at the{" "}
					<span className="bg-zinc-800 text-neutral-50    rounded-2xl">
						Software Development Academy Coding bootcamp
					</span>
					, I have learned{" "}
					<span className="bg-zinc-800 text-neutral-50    rounded-2xl">
						debugging and teamwork skills, as well as learning how to work with HTTP
						methods, how to fetch data using XHR, fetch and making calls to Web APIs
					</span>
					. I am familiar with{" "}
					<span className="bg-zinc-800 text-neutral-50   rounded-2xl">
						SQL, specifically MySql, as well as Google Cloud Firestore
					</span>
					, which I used to build a CRUD application which is showcased in this
					portfolio.
				</p>
				<p>Here are the technologies/ languages that I use:</p>
				<p>
					HTML, CSS, JS, ReactJs, Firebase, Tailwind, npm, git, GitHub, Linux,
					command line, Figma, SCSS, API, JSON
				</p>
			</section>
		</div>
	);
};

export default About;
