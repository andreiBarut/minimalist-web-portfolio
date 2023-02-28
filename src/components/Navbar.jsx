import personalLogo from "../assets/AB-logos_transparent.png";
import { CiMail } from "react-icons/ci";
import { RiMenu4Fill } from "react-icons/ri";
import { useState } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useEffect } from "react";
import Logo from "./Logo";

const Navbar = () => {
	const [isClicked, setIsClicked] = useState(false);
	const [menuPosition, setMenuPosition] = useState("translateX(200%)");
	const [skew, setSkew] = useState("skew(0deg");

	const [theme, setTheme] = useState("light");

	useEffect(() => {
		if (theme === "dark") {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	}, [theme]);

	const handleThemeSwitch = () => {
		setTheme(theme === "dark" ? "light" : "dark");
	};

	//MOBILE NAV COMPONENT
	const mobileNav = (
		<div
			className="z-40 fixed right-0 filter backdrop-blur-2xl bg-violet-500 h-full w-1/2 lg:hidden"
			style={{
				transform: `${menuPosition}`,
				transitionProperty: "all",
				transition: "0.8s",
			}}
			data-aos="fade-zoom-in"
		>
			<ul
				className="flex flex-col justify-center items-center text-center text-zinc-50 gap-10"
				style={{
					margin: "0",
					position: "absolute",
					top: "50%",
					left: "50%",
					transform: "translate(-50%, -50%",
				}}
			>
				<li className="hover:scale-125 text-3xl md:text-4xl font-medium transition-all">
					<a href="#home">Home</a>
				</li>
				<li className="hover:scale-125 text-3xl md:text-4xl font-medium transition-all">
					<a href="#about">About</a>
				</li>
				<li className="hover:scale-125 text-3xl md:text-4xl font-medium transition-all">
					<a href="#projects">Projects</a>
				</li>
			</ul>
		</div>
	);

	const handleClick = () => {
		if (isClicked === false) {
			setIsClicked(true);
			setMenuPosition("translateX(0%)");
			setSkew("skew(180deg)");

			console.log(isClicked);
		} else if (isClicked === true) {
			setIsClicked(false);
			setMenuPosition("translateX(200%)");
			setSkew("skew(0deg)");

			console.log(isClicked);
		}
		console.log(menuPosition);
	};

	return (
		<>
			{mobileNav}
			<RiMenu4Fill
				className="flex text-4xl lg:hidden z-50 cursor-pointer fixed right-6 top-1 text-zinc-800 dark:text-zinc-50"
				onClick={handleClick}
				style={{ transform: `${skew}`, transition: "0.8s" }}
			/>
			<nav
				className="navbar-container fixed flex items-center justify-between px-10 transition-all font-medium filter backdrop-blur-md w-screen  text-sm md:text-lg z-30 dark:text-zinc-50 elementToAnimate"
				data-aos="zoom-in-up"
				data-aos-duration="700"
			>
				<div className="navbar-logo flex items-center justify-center transform hover:scale-125  cursor-pointer transition-all  ">
					{/* <img src={personalLogo} alt="my personal logo" className="h-12 w-auto " /> */}
					<Logo />
				</div>
				<BsFillMoonStarsFill
					className=" text-3xl text-zinc-700 dark:text-violet-400 absolute right-28 lg:left-36 cursor-pointer hover:scale-125   transition-all animate-pulse"
					onClick={handleThemeSwitch}
				/>

				<ul className="navbar-menu gap-12 hidden lg:flex">
					<li className="hover:scale-125   transition-all">
						<a href="#home">Home</a>
					</li>
					<li className="hover:scale-125 transition-all">
						<a href="#about">About</a>
					</li>
					<li className="hover:scale-125 transition-all">
						<a href="#projects">Projects</a>
					</li>
				</ul>
				<div className="navbar-mail hidden lg:flex items-center justify-center gap-1 hover:scale-125  transition-all">
					<CiMail className="text-2xl" />

					<a href="#">andreibarut@gmail.com</a>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
