import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import PropTypes from 'prop-types';
import { cn } from "@/lib/utils";
import { buttonVariants } from "./buttonVariants"; // Import the variants from the new file

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  );
});

// Add PropTypes validation
Button.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'destructive', 'outline', 'secondary', 'ghost', 'link']),
  size: PropTypes.oneOf(['default', 'sm', 'lg', 'icon']),
  asChild: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

Button.displayName = "Button";

export { Button };
