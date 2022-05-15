import React from "react";
import styles from "./styles.module.scss";
import Button from "../../../components/ui/button";
import { items } from "../../../components/ui/menuItems";
import classnames from "classnames/bind";

export default function SideBar({ isOpen, ...props }) {
	const cx = classnames.bind(styles);

	return (
		<div className={cx(styles.sidebar, isOpen ? styles.show : "")}>
			<div className={styles.generateInvoice}>
				<Button buttonClass={styles.invoiceBtn}>GENERATE INVOICE</Button>
			</div>

			<nav className={styles.menu}>
				<ul className={styles.menuItems}>
					{items.map((item) => {
						return (
							<li key={item.heading} className={styles.menuItem}>
								<div className={styles.itemHeading}>{item.heading}</div>
								{item.subItems.map((subItem) => {
									return (
										<a
											href="/"
											key={subItem.text}
											className={cx(
												styles.subItem,
												item.active ? styles.active : ""
											)}
										>
											{subItem.icon}
											<span>{subItem.text}</span>
										</a>
									);
								})}
							</li>
						);
					})}
				</ul>
			</nav>
		</div>
	);
}
