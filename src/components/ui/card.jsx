import * as React from "react";
import PropTypes from "prop-types"; // Import PropTypes for validation
import { cn } from "@/lib/utils"; // Make sure the path to utils is correct

const Card = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className
    )}
    {...props}
  />
));
Card.displayName = "Card";

// Add PropTypes for validation
Card.propTypes = {
  className: PropTypes.string, // Validate that className is a string
  children: PropTypes.node,    // Validate that children are valid React nodes
};

// Define and export other components similarly
const CardHeader = ({ className, ...props }) => (
  <div className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
);
CardHeader.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

const CardTitle = ({ className, ...props }) => (
  <h3 className={cn("text-lg font-semibold leading-none tracking-tight", className)} {...props} />
);
CardTitle.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

const CardContent = ({ className, ...props }) => (
  <div className={cn("p-6 pt-0", className)} {...props} />
);
CardContent.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export { Card, CardHeader, CardTitle, CardContent };
