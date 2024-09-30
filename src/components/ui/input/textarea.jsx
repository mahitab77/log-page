import * as React from "react";
import PropTypes from "prop-types";
import { cn } from "@/lib/utils";

const Textarea = React.forwardRef(({ className, name, value, onChange, ...props }, ref) => {
  return (
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      className={cn(
        "flex w-full rounded-md border border-input bg-transparent p-3 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});

Textarea.displayName = "Textarea";

Textarea.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  ref: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({ current: PropTypes.any })]),
};

export { Textarea };
