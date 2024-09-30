import * as React from "react";
import PropTypes from "prop-types";
import { cn } from "@/lib/utils";

// Time Input Component
const TimeInput = React.forwardRef(({ className, name, value, onChange, ...props }, ref) => {
  return (
    <input
      type="time" // Time input type
      name={name} // Name attribute for form submission
      value={value} // Controlled value for the time input
      onChange={onChange} // Callback for handling value changes
      className={cn(
        "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref} // Forward the ref
      {...props} // Spread any other props passed to the component
    />
  );
});

TimeInput.displayName = "TimeInput";

// Define prop types for validation
TimeInput.propTypes = {
  className: PropTypes.string, // ClassName for custom styling
  name: PropTypes.string.isRequired, // Name for the time input field
  value: PropTypes.string.isRequired, // Time value (in the form of 'HH:MM')
  onChange: PropTypes.func.isRequired, // onChange handler function
  ref: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({ current: PropTypes.any })]), // Ref (function or object)
};

export { TimeInput };
