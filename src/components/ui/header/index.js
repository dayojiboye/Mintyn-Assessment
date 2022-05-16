import React from "react";
import styles from "./styles.module.scss";
import Nav from "../nav";
import { Logo } from "../../../assets/svg";

export default function Header({ open, setOpen, ...props }) {
	return (
		<div className={styles.header}>
			<div className={styles.logo}>
				<Logo />
			</div>

			<Nav />

			<div className={styles.hamburgerBtn}>
				<button
					type="button"
					aria-label="navigation button"
					onClick={() => {
						setOpen?.(!open);

						document.documentElement.classList.toggle("_fixed");
						document.body.classList.toggle("_fixed");
					}}
					className={`hamburger hamburger--vortex ${open ? "is-active" : ""}`}
				>
					<span className="hamburger-box">
						<span className="hamburger-inner"></span>
					</span>
				</button>
			</div>
		</div>
	);
}
