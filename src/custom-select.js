/* global $ */
import React, { useEffect, useRef, useCallback } from "react";

const CustomSelect = ({ value, name, placeholder, onChange, options, errorMessage }) => {
	const elementRef = useRef(null);

	const showPopover = useCallback(() => {
		if (errorMessage) {
			$(elementRef.current)
				.popover({
					content: errorMessage,
					template:
						'<div class="popover" role="tooltip"><div class="arrow"></div><div class="popover-body"></div></div>'
				})
				.popover("show");
		}
	}, [errorMessage]);

	const hidePopover = useCallback(() => {
		$(elementRef.current).popover("hide");
	}, []);

	useEffect(() => {
		const element = elementRef.current;
		if (element) {
			element.onfocus = showPopover;
			element.onblur = hidePopover;
		}
		if (!errorMessage) {
			hidePopover();
		}
	}, [errorMessage, showPopover, hidePopover]);

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

const useErrorPopover = errorMessage => {
	const elementRef = useRef(null);

	const showPopover = useCallback(() => {
		if (errorMessage) {
			$(elementRef.current)
				.popover({
					content: errorMessage,
					template:
						'<div class="popover" role="tooltip"><div class="arrow"></div><div class="popover-body"></div></div>'
				})
				.popover("show");
		}
	}, [errorMessage]);

	const hidePopover = useCallback(() => {
		$(elementRef.current).popover("hide");
	}, []);

	useEffect(() => {
		const element = elementRef.current;
		if (element) {
			element.onfocus = showPopover;
			element.onblur = hidePopover;
		}
		if (!errorMessage) {
			hidePopover();
		}
	}, [errorMessage, showPopover, hidePopover]);

	return elementRef;
};

export default CustomSelect;
