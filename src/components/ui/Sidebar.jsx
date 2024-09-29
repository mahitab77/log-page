import { cn } from "@/lib/utils"; // Ensure the correct path to utils
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@radix-ui/react-navigation-menu";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-800 p-6">
      <NavigationMenu>
        <NavigationMenuList className="flex flex-col space-y-4">
          <NavigationMenuItem>
            <NavigationMenuLink
              className={cn(
                "block py-2 px-4 text-white rounded-md hover:bg-gray-700 transition-colors"
              )}
              href="#"
            >
              Home
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              className={cn(
                "block py-2 px-4 text-white rounded-md hover:bg-gray-700 transition-colors"
              )}
              href="#"
            >
              Logging
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              className={cn(
                "block py-2 px-4 text-white rounded-md hover:bg-gray-700 transition-colors"
              )}
              href="#"
            >
              Trainers and Users
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              className={cn(
                "block py-2 px-4 text-white rounded-md hover:bg-gray-700 transition-colors"
              )}
              href="#"
            >
              Settings
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export { Sidebar };
