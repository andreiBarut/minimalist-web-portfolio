import personalLogo from "../assets/AB-logos_transparent.png";
import { CiMail } from "react-icons/ci";
import { RiMenu4Fill } from "react-icons/ri";
import { BsFillMenuAppFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";
import { useState } from "react";

const Navbar = () => {
	const [isClicked, setIsClicked] = useState(false);
	const [menuPosition, setMenuPosition] = useState("translateX(200%)");
	const [skew, setSkew] = useState("skew(0deg");
	const [menuColor, setMenuColor] = useState("black");
	const mobileNav = (
		<div
			className="z-40 fixed right-0 bg-violet-500 h-full w-1/2 lg:hidden"
			style={{
				transform: `${menuPosition}`,
				transitionProperty: "all",
				transition: "0.8s",
			}}
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
				<li className="hover:scale-125 text-3xl md:text-6xl font-medium transition-all">
					<a href="#">Home</a>
				</li>
				<li className="hover:scale-125 text-3xl md:text-6xl font-medium transition-all">
					<a href="#">About</a>
				</li>
				<li className="hover:scale-125 text-3xl md:text-6xl font-medium transition-all">
					<a href="#">Projects</a>
				</li>
				<li className="hover:scale-125 text-3xl md:text-6xl font-medium transition-all">
					<a href="#">Blog</a>
				</li>
			</ul>
		</div>
	);

	const handleClick = (e) => {
		if (isClicked === false) {
			setIsClicked(true);
			setMenuPosition("translateX(0%)");
			setSkew("skew(180deg)");
			setMenuColor("white");
			console.log(isClicked);
		} else if (isClicked === true) {
			setIsClicked(false);
			setMenuPosition("translateX(200%)");
			setSkew("skew(0deg)");
			setMenuColor("black");
			console.log(isClicked);
		}
		console.log(menuPosition);
	};

	return (
		<>
			{mobileNav}
			<RiMenu4Fill
				className="flex text-4xl lg:hidden z-50 cursor-pointer fixed right-6 top-1"
				onClick={handleClick}
				style={{ transform: `${skew}`, transition: "0.8s", color: `${menuColor}` }}
			/>
			<nav className="navbar-container fixed flex items-center justify-between px-10 transition-all font-medium filter backdrop-blur-md w-screen  text-sm md:text-lg z-30">
				<div className="navbar-logo flex items-center justify-center transform hover:scale-125  cursor-pointer transition-all  animate-pulse">
					<img src={personalLogo} alt="my personal logo" className="h-12 w-auto " />
					Barut
				</div>
				<ul className="navbar-menu gap-12 hidden lg:flex">
					<li className="hover:scale-125   transition-all">
						<a href="#">Home</a>
					</li>
					<li className="hover:scale-125 transition-all">
						<a href="#">About</a>
					</li>
					<li className="hover:scale-125 transition-all">
						<a href="#">Projects</a>
					</li>
					<li className="hover:scale-125 transition-all">
						<a href="#">Blog</a>
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
