import React from "react";

function About() {
	return (
		<div className="handwritten">
			<h1 className="m-4">About us</h1>
			<h2 className="mx-5 text-start ">
				This project was created by Soo, Eric and John. We are a band of 3
				wannabe web developers taking part in edX's 16 week front end coding
				bootcamp. We were inspired by our mutual passion for food, and wanted to
				create an easy way for a home cook to find and compile recipes.
			</h2>

			<div className="container">
				<div className="row">
					<div className="col card text-center">
						<h3>Soo</h3>
						<p>Hi! I'm Soo</p>
					</div>
					<div className="col card text-center">
						<h3>Eric</h3>
						<p>Hi! I'm Eric</p>
					</div>
					<div className="col card text-center">
						<h3>John</h3>
						<p>Hi! I'm John</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
