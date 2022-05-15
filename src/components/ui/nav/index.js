import React from "react";
import styles from "./styles.module.scss";
import Input from "../input";
import { Bell } from "../../../assets/svg";
import ProfileImage from "../../../assets/images/profile_image.png";
import SearchIcon from "../../../assets/icons/search.png";

export default function Nav({ ...props }) {
	return (
		<nav className={styles.nav}>
			<div className={styles.searchBox}>
				<label htmlFor="search">
					<img src={SearchIcon} alt="" />
				</label>
				<Input
					type="text"
					name="search"
					id="search"
					placeholder="Search..."
					autoComplete="off"
				/>
			</div>
			<ul className={styles.navItems}>
				<li>
					<a href="/">Support</a>
				</li>
				<li>
					<a href="/">FAQ</a>
				</li>
				<li>
					<button className={styles.notificationBtn}>
						<Bell />
						<span>8</span>
					</button>
				</li>
				<li>
					<div className={styles.profile}>
						<div className={styles.profileName}>
							<small>Hello</small>
							<span>Oluwaleke Ojo</span>
						</div>
						<div className={styles.avatar}>
							<img src={ProfileImage} alt="avatar" />
						</div>
					</div>
				</li>
			</ul>
		</nav>
	);
}
