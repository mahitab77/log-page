import * as React from "react";
import PropTypes from "prop-types";
import { cn } from "@/lib/utils";

// File Upload Component
const FileUpload = React.forwardRef(({ className, name, onChange, ...props }, ref) => {
  return (
    <input
      type="file" // File input type
      name={name} // Name attribute for form submission
      onChange={onChange} // Callback for handling file selection
      className={cn(
        "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref} // Forward the ref
      {...props} // Spread any other props passed to the component
    />
  );
});

FileUpload.displayName = "FileUpload";

// Define prop types for validation
FileUpload.propTypes = {
  className: PropTypes.string, // ClassName for custom styling
  name: PropTypes.string.isRequired, // Name for the file input field
  onChange: PropTypes.func.isRequired, // onChange handler function
  ref: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({ current: PropTypes.any })]), // Ref (function or object)
};

export { FileUpload };
