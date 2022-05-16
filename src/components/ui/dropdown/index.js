import React from "react";
import Button from "../button";

export default function Dropdown({
	containerStyle,
	buttonStyle,
	btnText,
	onClick,
	innerWrapperStyle,
	children,
	...props
}) {
	return (
		<div className={containerStyle} {...props} onClick={(e) => e.stopPropagation()}>
			<Button
				buttonClass={buttonStyle}
				onClick={(e) => {
					e.stopPropagation();
					onClick?.();
				}}
			>
				{btnText}
			</Button>
			<div className={innerWrapperStyle}>{children}</div>
		</div>
	);
}
