import * as React from "react";
import PropTypes from "prop-types";
import { cn } from "@/lib/utils";

const Checkbox = React.forwardRef(({ className, name, checked, onChange, label, ...props }, ref) => {
  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
        className={cn(
          "h-4 w-4 rounded border border-input bg-transparent checked:bg-primary shadow-sm",
          className
        )}
        ref={ref}
        {...props}
      />
      <label htmlFor={name} className="ml-2 text-sm text-muted-foreground">
        {label}
      </label>
    </div>
  );
});

Checkbox.displayName = "Checkbox";

Checkbox.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  ref: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({ current: PropTypes.any })]),
};

export { Checkbox };
