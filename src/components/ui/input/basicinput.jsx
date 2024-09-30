import * as React from "react";
import PropTypes from "prop-types";
import { cn } from "@/lib/utils";

// Basic Input Component
const BasicInput = React.forwardRef(({ className, type = "text", name, value, onChange, ...props }, ref) => {
  return (
    <input
      type={type} // The type of input (e.g., text, email, password)
      name={name} // Name attribute for form submission
      value={value} // Controlled value
      onChange={onChange} // Callback for handling value changes
      className={cn(
        "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref} // Forward the ref
      {...props} // Spread any other props passed to the component
    />
  );
});

BasicInput.displayName = "BasicInput";

// Define prop types for validation
BasicInput.propTypes = {
  className: PropTypes.string, // ClassName for custom styling
  type: PropTypes.string.isRequired, // Type (text, email, etc.)
  name: PropTypes.string.isRequired, // Name for form field
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), // Value for controlled input
  onChange: PropTypes.func.isRequired, // onChange handler function
  ref: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({ current: PropTypes.any })]), // Ref (function or object)
};

export { BasicInput };
