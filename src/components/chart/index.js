import React from "react";
import styles from "./styles.module.scss";
import ChartBox from "./chartBox";
import OrdersAndPayments from "./ordersAndPayments";

export default function Chart() {
	return (
		<div className={styles.chart}>
			<ChartBox />
			<OrdersAndPayments />
		</div>
	);
}
