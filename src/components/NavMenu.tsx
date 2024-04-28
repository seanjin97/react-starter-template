import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { Link } from '@tanstack/react-router';

export function NavMenu() {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <Link to="/" className="[&.active]:font-bold">
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>Home</NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link to={'/api-data'} className="[&.active]:font-bold">
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>Data</NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link to={'/form'} className="[&.active]:font-bold">
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>Form</NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link to={'/global-state/path1'} className="[&.active]:font-bold">
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>Global Demo Path 1</NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link to={'/global-state/path2'} className="[&.active]:font-bold">
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>Global Demo Path 2</NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
}
