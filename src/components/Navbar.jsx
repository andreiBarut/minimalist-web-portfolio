import personalLogo from "../assets/AB-logos_transparent.png";
import { CiMail } from "react-icons/ci";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="navbar-container flex items-center justify-between px-5 transition-all ">
			<div className="navbar-logo flex items-center justify-center transform hover:scale-105  cursor-pointer transition-all  animate-pulse">
				<img src={personalLogo} alt="my personal logo" className="h-12 w-auto " />
				Barut
			</div>
			<ul className="navbar-menu flex gap-3">
				<li className="hover:scale-105   transition-all">
					<Link to="/">Home</Link>
				</li>
				<li className="hover:scale-105 ">
					<Link to="/">About</Link>
				</li>
				<li className="hover:scale-105 ">
					<Link to="/">Portfolio</Link>
				</li>
				<li className="hover:scale-105 ">
					<Link to="/">Pages</Link>
				</li>
			</ul>
			<div className="navbar-mail flex items-center justify-center gap-1 hover:scale-105  transition-all">
				<CiMail className="text-2xl" />
				<Link to="/">andreibarut@gmail.com</Link>
			</div>
		</nav>
	);
};

export default Navbar;
