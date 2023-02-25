import personalLogo from "../assets/AB-logos_transparent.png";
import { CiMail } from "react-icons/ci";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="navbar-container flex items-center justify-between px-10 transition-all font-medium  backdrop-blur text-xs">
			<div className="navbar-logo flex items-center justify-center transform hover:scale-125  cursor-pointer transition-all  animate-pulse">
				<img src={personalLogo} alt="my personal logo" className="h-12 w-auto " />
				Barut
			</div>
			<ul className="navbar-menu flex gap-12">
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
			<div className="navbar-mail flex items-center justify-center gap-1 hover:scale-125  transition-all">
				<CiMail className="text-2xl" />
				<a href="#">andreibarut@gmail.com</a>
			</div>
		</nav>
	);
};

export default Navbar;
