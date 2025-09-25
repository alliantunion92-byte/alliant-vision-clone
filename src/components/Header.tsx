import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Menu } from "lucide-react";
import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { cn } from "@/lib/utils";

// Custom NavigationMenuTrigger without arrow
const CustomNavigationMenuTrigger = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Trigger
    ref={ref}
    className={cn(
      "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
      className
    )}
    {...props}
  >
    {children}
  </NavigationMenuPrimitive.Trigger>
));
CustomNavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    {
      label: "Bank",
      href: "#",
      subItems: [
        { label: "High-Rate Savings", href: "#", description: "Earn 14x the bank national average" },
        { label: "High-Rate Checking", href: "#", description: "No ATM fees, no overdraft fees" },
        { label: "Certificates", href: "#", description: "Competitive rates on CDs" },
        { label: "Online Banking", href: "#", description: "Bank anywhere, anytime" },
        { label: "Mobile Banking", href: "#", description: "Full-featured mobile app" },
      ]
    },
    {
      label: "Borrow",
      href: "#",
      subItems: [
        { label: "Home Equity Line of Credit", href: "#", description: "Borrow only what you need" },
        { label: "Auto Loans", href: "#", description: "Great rates on new & used cars" },
        { label: "Personal Loans", href: "#", description: "Fixed rates, no collateral required" },
        { label: "Credit Cards", href: "#", description: "No annual fee, great rewards" },
        { label: "Mortgages", href: "#", description: "Competitive home loan rates" },
      ]
    },
    {
      label: "Invest",
      href: "#",
      subItems: [
        { label: "Investment Services", href: "#", description: "Professional investment guidance" },
        { label: "Retirement Planning", href: "#", description: "IRAs and retirement accounts" },
        { label: "Financial Planning", href: "#", description: "Personalized financial advice" },
      ]
    },
    {
      label: "Protect",
      href: "#",
      subItems: [
        { label: "Insurance", href: "#", description: "Auto, home, and life insurance" },
        { label: "Identity Protection", href: "#", description: "Comprehensive identity monitoring" },
        { label: "Security", href: "#", description: "Fraud prevention and account security" },
      ]
    },
    {
      label: "About",
      href: "#",
      subItems: [
        { label: "About Alliant", href: "#", description: "Our mission and values" },
        { label: "Careers", href: "#", description: "Join our team" },
        { label: "Contact Us", href: "#", description: "Get in touch" },
        { label: "Locations", href: "#", description: "Find ATMs and branches" },
      ]
    },
  ];

  const topNavItems = [
    { label: "New Member Info", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Rates", href: "#" },
    { label: "ATMs", href: "#" },
    { label: "Help", href: "#" },
  ];

  return (
    <header className="w-full bg-background border-b">
      {/* Top Navigation */}
      <div className="hidden md:block bg-muted/30 py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex space-x-6">
              {topNavItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search"
                  className="pl-10 w-48 h-8 text-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src="/logo.png" alt="Alliant Credit Union" className="h-12" />
          </div>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              {menuItems.map((item) => (
                <NavigationMenuItem key={item.label}>
                  <CustomNavigationMenuTrigger className="text-foreground hover:text-alliant-blue font-medium bg-transparent border-none shadow-none data-[state=open]:bg-transparent data-[active]:bg-transparent">
                    {item.label}
                  </CustomNavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[300px] gap-1 p-6 bg-white border border-gray-200 shadow-lg rounded-lg">
                      {item.subItems.map((subItem) => (
                        <NavigationMenuLink
                          key={subItem.label}
                          href={subItem.href}
                          className="block select-none space-y-1 rounded-none p-2 leading-none no-underline outline-none transition-colors hover:text-alliant-blue focus:text-alliant-blue"
                        >
                          <div className="text-sm font-medium leading-none text-gray-800">{subItem.label}</div>
                          <p className="line-clamp-2 text-xs leading-snug text-gray-600">
                            {subItem.description}
                          </p>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <Button variant="secondary" className="hidden md:inline-flex">
              Become a Member
            </Button>
            <Button variant="outline" className="hidden md:inline-flex">
              Log In
            </Button>
            
            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t pt-4">
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <div key={item.label} className="space-y-2">
                  <div className="text-foreground font-medium text-lg">{item.label}</div>
                  <div className="pl-4 space-y-2">
                    {item.subItems.map((subItem) => (
                      <a
                        key={subItem.label}
                        href={subItem.href}
                        className="block text-sm text-muted-foreground hover:text-alliant-blue transition-colors"
                      >
                        {subItem.label}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
              <div className="flex flex-col space-y-2 pt-4 border-t">
                <Button variant="secondary" className="w-full">
                  Become a Member
                </Button>
                <Button variant="outline" className="w-full">
                  Log In
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;