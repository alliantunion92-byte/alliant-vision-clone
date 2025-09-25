import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  const footerSections = [
    {
      title: "Bank",
      links: [
        "High-Rate Savings",
        "Checking Account",
        "Money Market",
        "CDs",
        "Youth Account",
      ],
    },
    {
      title: "Borrow",
      links: [
        "Auto Loans",
        "Home Loans",
        "Personal Loans",
        "Credit Cards",
        "HELOC",
      ],
    },
    {
      title: "Invest",
      links: [
        "IRAs",
        "Investment Services",
        "Financial Planning",
        "Retirement Planning",
      ],
    },
    {
      title: "About",
      links: [
        "Who We Are",
        "Careers",
        "Community",
        "News & Events",
        "Contact Us",
      ],
    },
  ];

  return (
    <footer className="bg-slate-50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-alliant-blue rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-alliant-green rounded-full opacity-80"></div>
              </div>
              <span className="text-2xl font-bold text-alliant-blue">ALLIANT</span>
            </div>
            <p className="text-sm text-muted-foreground mb-6">
              Better banking for everyone. Join the credit union that puts members first.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-alliant-blue transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-alliant-blue transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-alliant-blue transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-alliant-blue transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-foreground mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground hover:text-alliant-blue transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <div className="flex flex-wrap gap-6 mb-4 md:mb-0">
              <a href="#" className="hover:text-alliant-blue transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-alliant-blue transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-alliant-blue transition-colors">Accessibility</a>
              <a href="#" className="hover:text-alliant-blue transition-colors">Site Map</a>
            </div>
            <p>© 2024 Alliant Credit Union. All rights reserved.</p>
          </div>
          
          <div className="mt-4 text-xs text-muted-foreground">
            <p>
              Federally insured by NCUA. Equal Housing Opportunity. 
              Alliant Credit Union is an Equal Opportunity Lender.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;