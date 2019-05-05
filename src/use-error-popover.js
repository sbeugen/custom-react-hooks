/* global $ */
import { useEffect, useRef, useCallback } from "react";

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

export default useErrorPopover;