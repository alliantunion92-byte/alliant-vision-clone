import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  const footerSections = [
    {
      title: "Bank",
      links: [
        "High-Rate Savings",
        "High-Rate Checking",
        "Certificates",
        "Money Market",
        "Youth Account",
        "Online Banking",
        "Mobile Banking",
      ],
    },
    {
      title: "Borrow",
      links: [
        "Home Equity Line of Credit",
        "Auto Loans", 
        "Personal Loans",
        "Credit Cards",
        "Mortgages",
      ],
    },
    {
      title: "Invest",
      links: [
        "Investment Services",
        "Retirement Planning", 
        "Financial Planning",
      ],
    },
    {
      title: "Protect",
      links: [
        "Insurance",
        "Identity Protection",
        "Security",
      ],
    },
    {
      title: "About",
      links: [
        "About Alliant",
        "Careers",
        "Contact Us",
        "Locations",
        "Rates",
        "News & Events",
      ],
    },
  ];

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Logo Section */}
          <div className="lg:col-span-1">
            <img src="/logo.png" alt="Alliant Credit Union" className="h-8 mb-6" />
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-alliant-blue transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-alliant-blue transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-alliant-blue transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-alliant-blue transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-gray-900 mb-4 text-base">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-gray-600 hover:text-alliant-blue transition-colors leading-relaxed"
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
        <div className="border-t border-gray-200 mt-16 pt-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900">Contact Us</h4>
              <div className="text-sm text-gray-600 space-y-2">
                <p>1-800-328-1935</p>
                <p>Monday - Friday: 7:00 AM - 9:00 PM CT</p>
                <p>Saturday: 8:00 AM - 5:00 PM CT</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900">Important Information</h4>
              <div className="text-xs text-gray-500 space-y-2">
                <p>Federally insured by NCUA. Equal Housing Opportunity.</p>
                <p>Alliant Credit Union is an Equal Opportunity Lender.</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900">Quick Links</h4>
              <div className="flex flex-wrap gap-4 text-sm">
                <a href="#" className="text-gray-600 hover:text-alliant-blue transition-colors">Privacy Policy</a>
                <a href="#" className="text-gray-600 hover:text-alliant-blue transition-colors">Terms of Service</a>
                <a href="#" className="text-gray-600 hover:text-alliant-blue transition-colors">Accessibility</a>
                <a href="#" className="text-gray-600 hover:text-alliant-blue transition-colors">Site Map</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-200 pt-6">
            <p className="text-center text-sm text-gray-500">© 2024 Alliant Credit Union. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;