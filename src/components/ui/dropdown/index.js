import React from "react";
import Button from "../button";

export default function Dropdown({
	containerStyle,
	buttonStyle,
	btnText,
	clicked,
	innerWrapperStyle,
	children,
	...props
}) {
	return (
		<div className={containerStyle} {...props}>
			<Button buttonClass={buttonStyle} clicked={clicked}>
				{btnText}
			</Button>
			<div className={innerWrapperStyle}>{children}</div>
		</div>
	);
}
