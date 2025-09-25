import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Menu } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Bank", href: "#" },
    { label: "Borrow", href: "#" },
    { label: "Invest", href: "#" },
    { label: "Protect", href: "#" },
    { label: "About", href: "#" },
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
            <div className="w-8 h-8 bg-alliant-blue rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-alliant-green rounded-full opacity-80"></div>
            </div>
            <span className="text-2xl font-bold text-alliant-blue">ALLIANT</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground hover:text-alliant-blue transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>

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
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-foreground hover:text-alliant-blue transition-colors font-medium"
                >
                  {item.label}
                </a>
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