import React from "react";
import styles from "./styles.module.scss";
import Card from "../ui/card";
import { Stats } from "../../assets/svg";

export default function Transactions({ ...props }) {
	return (
		<div className={styles.transactions}>
			{/* Daily Transaction */}
			<Card cardClass={styles.card}>
				<div className={styles.cardContent}>
					<div className={styles.text}>
						<span>Daily Transaction Volume</span>
						<span>2,342</span>
					</div>
					<div>
						<Stats />
					</div>
				</div>
			</Card>
			<Card cardClass={styles.card}>
				<div className={styles.cardContent}>
					<div className={styles.text}>
						<span>Daily Transaction Value</span>
						<span>&#8358; 4,000,000</span>
					</div>
					<div>
						<Stats />
					</div>
				</div>
			</Card>
			{/* Total Transaction */}
			<Card cardClass={styles.card}>
				<div className={styles.cardContent}>
					<div className={styles.text}>
						<span>Total Transaction Volume</span>
						<span>452,000</span>
					</div>
					<div>
						<Stats />
					</div>
				</div>
			</Card>
			<Card cardClass={styles.card}>
				<div className={styles.cardContent}>
					<div className={styles.text}>
						<span>Total Transaction Value</span>
						<span>&#8358; 4,000,000</span>
					</div>
					<div>
						<Stats />
					</div>
				</div>
			</Card>
		</div>
	);
}
