import React from "react";
import styles from "./styles.module.scss";
import classnames from "classnames/bind";

// imports
import SideBar from "../components/ui/sideBar";
import Header from "../components/ui/header";

export default function Layout({ children }) {
	const [open, setOpen] = React.useState(false);
	const cx = classnames.bind(styles);

	const onDismissSidebar = () => {
		setOpen(false);
		document.documentElement.classList.remove("_fixed");
		document.body.classList.remove("_fixed");
	};

	return (
		<div className={styles.layout}>
			<div
				className={cx(styles.backdrop, open ? styles.show : "")}
				onClick={() => onDismissSidebar()}
			/>
			<Header open={open} setOpen={setOpen} />
			<SideBar isOpen={open} />
			<main className={styles.main}>{children}</main>
		</div>
	);
}
