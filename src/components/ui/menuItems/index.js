import React from "react";

import {
	Overview,
	AllPayments,
	ReconcilledPayments,
	UnReconcilledPayments,
	ManualSettlements,
	AllOrders,
	PendingOrders,
	ReconcilledOrders,
	MerchantProfile,
} from "../../../assets/svg";

export const items = [
	{
		heading: "Main",
		subItems: [
			{
				icon: <Overview />,
				text: "Overview",
			},
		],
		active: true,
	},
	{
		heading: "Payments",
		subItems: [
			{
				icon: <AllPayments />,
				text: "All Payments",
			},
			{
				icon: <ReconcilledPayments />,
				text: "Reconcilled Payments",
			},
			{
				icon: <UnReconcilledPayments />,
				text: "Un - Reconcilled Payments",
			},
			{
				icon: <ManualSettlements />,
				text: "Manual Settlement",
			},
		],
		active: false,
	},
	{
		heading: "Orders",
		subItems: [
			{
				icon: <AllOrders />,
				text: "All Orders",
			},
			{
				icon: <PendingOrders />,
				text: "Pending Orders",
			},
			{
				icon: <ReconcilledOrders />,
				text: "Reconcilled Orders",
			},
		],
		active: false,
	},
	{
		heading: "",
		subItems: [
			{
				icon: <MerchantProfile />,
				text: "Merchant Profile",
			},
		],
		active: false,
	},
];
