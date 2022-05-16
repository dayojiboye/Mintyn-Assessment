import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import Table from "./table";
import Dropdown from "../ui/dropdown";
import Input from "../ui/input";
import Button from "../ui/button";
import SearchIcon from "../../assets/icons/search.png";
import classnames from "classnames/bind";

export default function Payments() {
	const cx = classnames.bind(styles);
	const [dropdownOpen, setDropdownOpen] = useState(true);

	const handleDropdown = () => {
		setDropdownOpen(!dropdownOpen);
	};

	useEffect(() => {
		const dismissDropdown = () => {
			setDropdownOpen(false);
		};

		document.body.addEventListener("click", dismissDropdown);

		return () => {
			document.body.removeEventListener("click", dismissDropdown);
		};
	}, []);

	return (
		<div className={styles.payments}>
			<h2>Payments</h2>
			<div className={styles.topPagination}>
				<span className={styles.paymentCountHeader}>Showing</span>
				<Dropdown containerStyle={styles.dropdown} btnText="20" />
				<span className={styles.paymentCount}>out of 500 payments</span>
				<div className={styles.search}>
					<label htmlFor="payments-search">
						<img src={SearchIcon} alt="" />
					</label>
					<Input
						type="text"
						name="search"
						id="payments-search"
						placeholder="Search payments"
						autoComplete="off"
					/>
				</div>
				<span className={styles.paymentDropdownHeader}>Show</span>
				<Dropdown
					containerStyle={styles.paymentsDropdown}
					btnText="All"
					onClick={() => handleDropdown()}
				>
					<ul className={cx(styles.dropdownMenu, dropdownOpen ? styles.show : "")}>
						<li>
							<Button buttonClass={styles.menuItemBtn}>All</Button>
						</li>
						<li className={styles.active}>
							<Button buttonClass={styles.menuItemBtn}>Reconcilled</Button>
						</li>
						<li>
							<Button buttonClass={styles.menuItemBtn}>Un-reconcilled</Button>
						</li>
						<li>
							<Button buttonClass={styles.menuItemBtn}>Settled</Button>
						</li>
						<li>
							<Button buttonClass={styles.menuItemBtn}>Unsettled</Button>
						</li>
					</ul>
				</Dropdown>
			</div>
			<Table />
			<div className={styles.bottomPagination}>
				<span>Showing 1 to 10 of 500 entries</span>
				<div className={styles.buttonGroup}>
					<Button buttonClass={styles.paginationNav}>Previous</Button>
					<Button buttonClass={cx(styles.paginationNumber, styles.active)}>1</Button>
					<Button buttonClass={styles.paginationNumber}>2</Button>
					<Button buttonClass={styles.paginationNav}>Next</Button>
				</div>
			</div>
		</div>
	);
}
