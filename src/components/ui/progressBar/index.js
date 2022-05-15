import React from "react";

export default function ProgressBar({ containerStyle, children, ...props }) {
	return (
		<div className={containerStyle} {...props}>
			{children}
		</div>
	);
}
