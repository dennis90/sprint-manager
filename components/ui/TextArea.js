import { forwardRef } from "react";

const TextArea = forwardRef(
  ({ label, containerClassName = "", ...props }, ref) => {
    return (
      <div className={`flex flex-col ${containerClassName}`}>
        <label htmlFor={props.id}>{label}</label>
        <textarea
          {...props}
          ref={ref}
          className={`bg-gray-100 border border-gray-200 hover:border-gray-300 rounded py-1 px-2 w-1/2 ${props.className}`}
        />
      </div>
    );
  }
);

TextArea.displayName = "TextArea";

export default TextArea;
