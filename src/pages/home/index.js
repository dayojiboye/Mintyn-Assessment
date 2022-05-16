import React from "react";
import Transactions from "../../components/transactions";
import styles from "./styles.module.scss";
import Chart from "../../components/chart";
import Payments from "../../components/payments";

export default function Home() {
	return (
		<div className={styles.home}>
			<Transactions />
			<Chart />
			<Payments />
		</div>
	);
}
