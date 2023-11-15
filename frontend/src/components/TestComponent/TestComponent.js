import "./TestComponent.css"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react";
import axios from "axios";
import { Formik, Form, Field } from 'formik';

export default function TestComponent() {
	const [runningTime, setRunningTime] = useState(0);

	useEffect(() => {
		axios.get("http://localhost:5000/api/health").then((res) => {
			setRunningTime(res.data.uptime);
		});
	}, []);

	return (
		<div className="screen">
			<div className="button-wrapper">
				<Link to="/" className="home-button">Home</Link>
			</div>
			<div className="mother-div">
				<div className="child-div">
					Server has been running for {runningTime.toFixed(0)} seconds.
				</div>
				<Formik
					initialValues={{
						username: '',
						email: '',
						password: ''
					}}
					onSubmit={async (values) => {
						axios.post("http://localhost:5000/api/user", values).then((res) => {
							alert(JSON.stringify(res.data));
						});
					}}
				>
					<Form className="child-div">
						<label htmlFor="username">Username</label>
						<Field id="username" name="username" placeholder="Jane Doe" />

						<label htmlFor="email">Email</label>
						<Field
							id="email"
							name="email"
							placeholder="jane@acme.com"
							type="email"
						/>

						<label htmlFor="password">Password</label>
						<Field id="password" name="password" type="password" />

						<button type="submit">Submit</button>
					</Form>
				</Formik>
			</div>
		</div>
	)
}