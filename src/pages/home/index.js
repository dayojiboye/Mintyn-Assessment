import React from "react";
import Transactions from "../../components/transactions";
import styles from "./styles.module.scss";
import Chart from "../../components/chart";

export default function Home() {
	return (
		<div className={styles.home}>
			<Transactions />
			<Chart />
		</div>
	);
}
