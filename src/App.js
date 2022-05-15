import React from "react";

// layout
import Layout from "./layout";

// page
import Home from "./pages/home";

export default function App() {
	return (
		<div>
			<Layout>
				<Home />
			</Layout>
		</div>
	);
}
