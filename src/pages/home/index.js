import React from "react";
import Transactions from "../../components/transactions";
import styles from "./styles.module.scss";

export default function Home() {
	return (
		<div className={styles.home}>
			<Transactions />
		</div>
	);
}
