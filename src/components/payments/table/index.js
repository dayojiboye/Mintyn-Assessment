import React from "react";
import styles from "./styles.module.scss";
import Button from "../../ui/button";
import classnames from "classnames/bind";

export default function Table() {
	const cx = classnames.bind(styles);

	return (
		<div className={styles.container}>
			<table className={styles.table}>
				<thead>
					<tr>
						<th>Item Type</th>
						<th>Price</th>
						<th>Transaction No</th>
						<th colSpan="3">Time</th>
					</tr>
				</thead>

				<tbody>
					<tr>
						<td>
							<div className={styles.itemType}>
								<div className={styles.avatar}>VW</div>
								<span>Apple Mac Book 15" 250 SSD 12GB</span>
							</div>
						</td>
						<td>$73430</td>
						<td>1234567890</td>
						<td>12:30</td>
						<td>
							<div className={styles.statusContainer}>
								<Button buttonClass={cx(styles.statusBtn, styles.reconcilled)}>
									<ion-icon name="ellipse"></ion-icon> Reconcilled
								</Button>
							</div>
						</td>
						<td>
							<div className={styles.dropdownContainer}>
								<Button buttonClass={styles.dropButton}>
									<ion-icon name="chevron-down-outline"></ion-icon>
								</Button>
							</div>
						</td>
					</tr>

					<tr>
						<td>
							<div className={styles.itemType}>
								<div className={styles.avatar}>VW</div>
								<span>Apple Mac Book 15" 250 SSD 12GB</span>
							</div>
						</td>
						<td>$73430</td>
						<td>1234567890</td>
						<td>12:30</td>
						<td>
							<div className={styles.statusContainer}>
								<Button buttonClass={cx(styles.statusBtn, styles.pending)}>
									<ion-icon name="ellipse"></ion-icon> Pending
								</Button>
							</div>
						</td>
						<td>
							<div className={styles.dropdownContainer}>
								<Button buttonClass={styles.dropButton}>
									<ion-icon name="chevron-down-outline"></ion-icon>
								</Button>
							</div>
						</td>
					</tr>

					<tr>
						<td>
							<div className={styles.itemType}>
								<div className={styles.avatar}>VW</div>
								<span>Apple Mac Book 15" 250 SSD 12GB</span>
							</div>
						</td>
						<td>$73430</td>
						<td>1234567890</td>
						<td>12:30</td>
						<td>
							<div className={styles.statusContainer}>
								<Button buttonClass={cx(styles.statusBtn, styles.reconcilled)}>
									<ion-icon name="ellipse"></ion-icon> Reconcilled
								</Button>
							</div>
						</td>
						<td>
							<div className={styles.dropdownContainer}>
								<Button buttonClass={styles.dropButton}>
									<ion-icon name="chevron-down-outline"></ion-icon>
								</Button>
							</div>
						</td>
					</tr>

					<tr>
						<td>
							<div className={styles.itemType}>
								<div className={styles.avatar}>VW</div>
								<span>Apple Mac Book 15" 250 SSD 12GB</span>
							</div>
						</td>
						<td>$73430</td>
						<td>1234567890</td>
						<td>12:30</td>
						<td>
							<div className={styles.statusContainer}>
								<Button buttonClass={cx(styles.statusBtn, styles.reconcilled)}>
									<ion-icon name="ellipse"></ion-icon> Reconcilled
								</Button>
							</div>
						</td>
						<td>
							<div className={styles.dropdownContainer}>
								<Button buttonClass={styles.dropButton}>
									<ion-icon name="chevron-down-outline"></ion-icon>
								</Button>
							</div>
						</td>
					</tr>

					<tr>
						<td>
							<div className={styles.itemType}>
								<div className={styles.avatar}>VW</div>
								<span>Apple Mac Book 15" 250 SSD 12GB</span>
							</div>
						</td>
						<td>$73430</td>
						<td>1234567890</td>
						<td>12:30</td>
						<td>
							<div className={styles.statusContainer}>
								<Button buttonClass={cx(styles.statusBtn, styles.pending)}>
									<ion-icon name="ellipse"></ion-icon> Pending
								</Button>
							</div>
						</td>
						<td>
							<div className={styles.dropdownContainer}>
								<Button buttonClass={styles.dropButton}>
									<ion-icon name="chevron-down-outline"></ion-icon>
								</Button>
							</div>
						</td>
					</tr>

					<tr>
						<td>
							<div className={styles.itemType}>
								<div className={styles.avatar}>VW</div>
								<span>Apple Mac Book 15" 250 SSD 12GB</span>
							</div>
						</td>
						<td>$73430</td>
						<td>1234567890</td>
						<td>12:30</td>
						<td>
							<div className={styles.statusContainer}>
								<Button buttonClass={cx(styles.statusBtn)}>
									<ion-icon name="ellipse"></ion-icon> Un-reconcilled
								</Button>
							</div>
						</td>
						<td>
							<div className={styles.dropdownContainer}>
								<Button buttonClass={styles.dropButton}>
									<ion-icon name="chevron-down-outline"></ion-icon>
								</Button>
							</div>
						</td>
					</tr>

					<tr>
						<td>
							<div className={styles.itemType}>
								<div className={styles.avatar}>VW</div>
								<span>Apple Mac Book 15" 250 SSD 12GB</span>
							</div>
						</td>
						<td>$73430</td>
						<td>1234567890</td>
						<td>12:30</td>
						<td>
							<div className={styles.statusContainer}>
								<Button buttonClass={cx(styles.statusBtn, styles.reconcilled)}>
									<ion-icon name="ellipse"></ion-icon> Reconcilled
								</Button>
							</div>
						</td>
						<td>
							<div className={styles.dropdownContainer}>
								<Button buttonClass={styles.dropButton}>
									<ion-icon name="chevron-down-outline"></ion-icon>
								</Button>
							</div>
						</td>
					</tr>

					<tr>
						<td>
							<div className={styles.itemType}>
								<div className={styles.avatar}>VW</div>
								<span>Apple Mac Book 15" 250 SSD 12GB</span>
							</div>
						</td>
						<td>$73430</td>
						<td>1234567890</td>
						<td>12:30</td>
						<td>
							<div className={styles.statusContainer}>
								<Button buttonClass={cx(styles.statusBtn)}>
									<ion-icon name="ellipse"></ion-icon> Un-reconcilled
								</Button>
							</div>
						</td>
						<td>
							<div className={styles.dropdownContainer}>
								<Button buttonClass={styles.dropButton}>
									<ion-icon name="chevron-down-outline"></ion-icon>
								</Button>
							</div>
						</td>
					</tr>

					<tr>
						<td>
							<div className={styles.itemType}>
								<div className={styles.avatar}>VW</div>
								<span>Apple Mac Book 15" 250 SSD 12GB</span>
							</div>
						</td>
						<td>$73430</td>
						<td>1234567890</td>
						<td>12:30</td>
						<td>
							<div className={styles.statusContainer}>
								<Button buttonClass={cx(styles.statusBtn, styles.pending)}>
									<ion-icon name="ellipse"></ion-icon> Pending
								</Button>
							</div>
						</td>
						<td>
							<div className={styles.dropdownContainer}>
								<Button buttonClass={styles.dropButton}>
									<ion-icon name="chevron-down-outline"></ion-icon>
								</Button>
							</div>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}
