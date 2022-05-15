import React from "react";
import styles from "./styles.module.scss";
import Card from "../../ui/card";
import Dropdown from "../../ui/dropdown";
import Button from "../../ui/button";
import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import { chartData } from "../../../utils/dataSource";

ReactFusioncharts.fcRoot(FusionCharts, Charts, FusionTheme);

export default function ChartBox() {
	return (
		<Card className={styles.chartBox}>
			<div className={styles.chartHeader}>
				<span className={styles.date}>Today: 5, Aug 2018</span>
				<div className={styles.datePicker}>
					<Dropdown
						containerStyle={styles.dropdown}
						buttonStyle={styles.dropdownBtn}
						btnText="1 Jan - 1 Jun"
					/>
					<div className={styles.navButtons}>
						<Button buttonClass={styles.navBtn}>
							<ion-icon name="chevron-back-outline"></ion-icon>
						</Button>
						<Button buttonClass={styles.navBtn}>
							<ion-icon name="chevron-forward-outline"></ion-icon>
						</Button>
					</div>
				</div>
			</div>
			<ReactFusioncharts
				type="area2d"
				width="100%"
				height="265"
				dataFormat="JSON"
				dataSource={chartData}
				className={styles.chartArea}
			/>
		</Card>
	);
}
