import "./MainBlock.scss";
import { Outlet, NavLink } from "react-router-dom";

function MainBlock() {
	return (
		<>
			<div className="wrapper">
				<NavLink to='/'>
					<h1>React Router</h1>
				</NavLink>
				<div className="outlet">
					<Outlet></Outlet>
				</div>
			</div>
		</>
	);
}
export default MainBlock;
