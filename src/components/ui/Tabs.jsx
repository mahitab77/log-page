import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import PropTypes from 'prop-types';  // Import PropTypes for validation
import { cn } from "@/lib/utils";    // Ensure the correct path

const Tabs = TabsPrimitive.Root;

// TabsList component
const TabsList = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",
      className
    )}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

// Add PropTypes for TabsList
TabsList.propTypes = {
  className: PropTypes.string, // className should be a string
};

// TabsTrigger component
const TabsTrigger = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",
      className
    )}
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

// Add PropTypes for TabsTrigger
TabsTrigger.propTypes = {
  className: PropTypes.string, // className should be a string
};

// TabsContent component
const TabsContent = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    )}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

// Add PropTypes for TabsContent
TabsContent.propTypes = {
  className: PropTypes.string, // className should be a string
};

export { Tabs, TabsList, TabsTrigger, TabsContent };
