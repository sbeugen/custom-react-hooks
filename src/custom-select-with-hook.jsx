import React from "react";
import useErrorPopover from "./use-error-popover";

const CustomSelectWithHook = ({ value, name, placeholder, onChange, options, errorMessage }) => {
	const elementRef = useErrorPopover(errorMessage);

	return (
		<select
			style={{ borderBottom: `1px solid ${errorMessage ? "red" : "blue"}` }}
			name={name}
			value={value}
			onChange={onChange}
			ref={elementRef}
		>
			<option value="" label={placeholder} disabled defaultValue hidden />
			{options.map((option, index) => (
				<option value={option.value} label={option.label} key={index} />
			))}
		</select>
	);
};

export default CustomSelectWithHook;
