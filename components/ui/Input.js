import { forwardRef } from "react";

const Input = forwardRef(
  ({ label, containerClassName = "", ...props }, ref) => {
    return (
      <div className={`flex flex-col ${containerClassName}`}>
        <label htmlFor={props.id}>{label}</label>
        <input
          {...props}
          ref={ref}
          className={`bg-gray-100 border border-gray-200 hover:border-gray-300 rounded py-1 px-2 w-1/2 ${props.className}`}
        />
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
