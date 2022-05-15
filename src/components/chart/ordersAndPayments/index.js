import React from "react";
import Card from "../../ui/card";
import ProgressBar from "../../ui/progressBar";
import styles from "./styles.module.scss";

export default function OrdersAndPayments() {
	return (
		<div className={styles.container}>
			<Card cardClass={styles.card}>
				<span className={styles.cardHeader}>Orders</span>
				<ProgressBar containerStyle={styles.progressBar}>
					<span></span>
				</ProgressBar>
				<ul className={styles.progressStats}>
					<li>
						Pending Orders: <span className={styles.pending}>20</span>
					</li>
					<li>
						Reconcilled Orders: <span className={styles.reconcilled}>80</span>
					</li>
					<li>
						Total Orders: <span className={styles.total}>100</span>
					</li>
				</ul>
			</Card>

			<Card cardClass={styles.card}>
				<span className={styles.cardHeader}>Payments</span>
				<ProgressBar containerStyle={styles.progressBar}>
					<span></span>
				</ProgressBar>
				<ul className={styles.progressStats}>
					<li>
						Un-reconcilled Payments: <span className={styles.pending}>20</span>
					</li>
					<li>
						Reconcilled Payments: <span className={styles.reconcilled}>80</span>
					</li>
					<li>
						Total Payments: <span className={styles.total}>100</span>
					</li>
				</ul>
			</Card>
		</div>
	);
}
