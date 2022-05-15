import React from "react";

export default function Card({ children, cardClass, ...props }) {
	return (
		<div className={cardClass} {...props}>
			{children}
		</div>
	);
}
