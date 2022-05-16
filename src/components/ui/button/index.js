import React from "react";

export default function Button({ buttonClass, onClick, children, ...props }) {
	return (
		<button className={buttonClass} onClick={(e) => onClick?.(e)} {...props}>
			{children}
		</button>
	);
}
