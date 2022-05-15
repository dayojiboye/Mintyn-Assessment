import React from "react";

export default function Button({ buttonClass, clicked, children, ...props }) {
	return (
		<button className={buttonClass} onClick={clicked} {...props}>
			{children}
		</button>
	);
}
