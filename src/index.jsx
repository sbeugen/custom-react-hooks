import React from "react";
import ReactDOM from "react-dom";
import { Formik } from "formik";
import * as Yup from "yup";

import "./styles.css";
import CustomSelect from "./custom-select";

const App = () => {
	return (
		<div id="App">
			<Formik
				initialValues={{ favoriteHook: "" }}
				validationSchema={Yup.object().shape({
					favoriteHook: Yup.string().required("Please select your favorite react hook")
				})}
				render={props => {
					return (
						<form onSubmit={props.handleSubmit}>
							<CustomSelect
								value={props.values.favoriteHook}
								name="favoriteHook"
								placeholder="Select your favorite hook *"
								onChange={props.handleChange}
								errorMessage={props.errors.favoriteHook}
								options={[
									{ value: "state", label: "useState" },
									{ value: "effect", label: "useEffect" },
									{ value: "ref", label: "useRef" }
								]}
							/>
							<button type="submit">Submit</button>
						</form>
					);
				}}
			/>
		</div>
	);
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
