import "./TestComponent.css"
import { Link } from "react-router-dom"

export default function TestComponent() {
	return (
		<div className="screen">
			<div className="button-wrapper">
				<Link to="/" className="home-button">Home</Link>
			</div>
			<div className="mother-div">
				<div className="child-div">
					Mama ta
				</div>
			</div>
		</div>
	)
}