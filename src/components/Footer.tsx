import { Facebook, Twitter, Instagram, Youtube, Linkedin  } from "lucide-react";

const Footer = () => {
  const footerSections = [
  {
    title: 'About',
    links: ['Newsroom', 'ATMs', 'Careers', 'Security', 'CRA Public File'],
  },
  {
    title: 'Help & Support',
    links: ['Help Center', 'Contact Us', 'Get CoBrowsing code', 'The Money Mentor Blog', 'Forms', 'Make a Payment'],
  },
];

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Logo and Contact Info */}
          <div className="lg:col-span-2 space-y-3">
            <img src="/logo.png" alt="Alliant Credit Union" className="h-8 mb-4" />
            <p><strong>Member care center:</strong> <a href="tel:8003281935" className="text-blue-600 hover:underline">800-328-1935</a></p>
            <p><strong>Corporate offices:</strong><br />
              <em>(Not open to the public. No branches or ATMs.)</em><br />
              11545 W. Touhy Ave., Chicago, IL 60666
            </p>
            <p><strong>Routing #</strong> <span className="font-semibold">271081528</span></p>
          </div>

          {/* About & Help Sections */}
          {footerSections.map((section) => (
            <div key={section.title} className="lg:col-span-1">
              <h3 className="font-semibold text-gray-900 mb-4">{section.title}</h3>
              <ul className="space-y-2 underline text-blue-600">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-blue-600 transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Social & CTA Button */}
          <div className="lg:col-span-1 flex flex-col items-start lg:items-end space-y-4">
            <div className="flex space-x-3">
              <a href="#" className="text-gray-600 hover:text-blue-600"><Facebook size={18} /></a>
              <a href="#" className="text-gray-600 hover:text-pink-500"><Instagram size={18} /></a>
              <a href="#" className="text-gray-600 hover:text-sky-500"><Twitter size={18} /></a>
              <a href="#" className="text-gray-600 hover:text-blue-700"><Linkedin size={18} /></a>
              <a href="#" className="text-gray-600 hover:text-red-600"><Youtube size={18} /></a>
            </div>
            <button className="bg-green-600 text-white px-4 py-2 rounded-full text-sm hover:bg-green-700 transition">
              Become a Member
            </button>
          </div>
        </div>
      </div>   

        {/* Bottom Section */}
          <div style={{ backgroundColor: '#e9eff2',color: '#747678' }} className="border-t border-gray-200 pt-5 bg-gray-200 text-sm text-gray-500">
            <div className="max-w-screen-xl mx-auto px-4">

              {/* Menú superior de enlaces */}
              <ul className="flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-2 mb-6 text-blue-600 underline">
                <li><a href="/disclosures">Disclosures</a></li>
                <li><a href="/disclosures#social-media-disclosures">Social Media Disclosures</a></li>
                <li><a href="/disclosures#third-party">Third Party Disclosure</a></li>
                <li><a href="/privacy">Privacy</a></li>
                <li><a href="/terms">Terms</a></li>
                <li><a href="/sitemap">Site Map</a></li>
                <li><a href="/accessibility">Accessibility</a></li>
              </ul>

              {/* Contenido dividido en texto y logos */}
              <div className="text-xs grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                
                {/* Texto legal */}
                <div className="lg:col-span-2 space-y-4">
                  <p>All loans subject to approval.</p>

                  <p>
                    84. As described in the <a href="#" className="underline text-blue-600">Alliant Cashback Visa Signature Card Program Terms & Conditions</a>, certain categories of purchases do not qualify to earn cash back. See the <a href="#" className="underline text-blue-600">Alliant Cashback Visa Signature Card Disclosure</a> for additional details.
                  </p>

                  <p>
                    71. APY = Annual Percentage Yield. Comparison based on Alliant Credit Union 3.10% APY as of the 7/25/2025 dividend declaration date vs. the bank national average savings rate of 0.22% APY as of 9/1/2025 sourced from National Association of Federal Credit Unions...
                  </p>

                  <p>
                    19. Your first box of standard checks is free. Other check designs are available for an extra charge. Alliant checking charges no monthly maintenance or service fees. Please refer to the Alliant <a href="#" className="underline text-blue-600">Fee Schedule</a> for a list of fees.
                  </p>
                  <p>
                    Overdraft protection is optional. You must opt in to benefit from this free service and you can unenroll at any time. Alliant's overdraft protection program honors your overdrafts on your checking account when you don’t have enough money in your Alliant checking account to cover a transaction, provided you have enough money in your Alliant Savings or Supplemental Savings Account. To do so, we automatically transfer funds from your Alliant Savings or Supplemental Savings Account to your Alliant checking account to cover your overdrafts. Overdraft protection does not cover ATM transactions.
                  </p>
                  <p>
                    Courtesy Pay is a discretionary "courtesy" overdraft service. There is no fee to enroll in or use the Courtesy Pay service and you can unenroll at any time. To be eligible for Courtesy Pay, members must be in good standing and have an Alliant checking account that has been open for at least six months. Other eligibility factors are risk-based and determined by Alliant using internal and confidential information, including your account history. To qualify to use Courtesy Pay, eligible members must have qualifying deposits totaling at least $600 into their Alliant checking account in the previous 30 days. Standard Courtesy Pay may pay checks and ACH electronic items that would not have cleared otherwise due to insufficient funds, up to an approved limit. The full amount of the overdraft balance will be due immediately but in no event more than 30 days from the date of the occurrence at which time Courtesy Pay privileges will be suspended and possibly terminated. If you opt in for extended coverage, Courtesy Pay may also cover everyday debit transactions on your Alliant Visa debit card that would not have cleared otherwise due to insufficient funds, up to an approved limit. See the Alliant Account Agreement and Disclosures and the Courtesy Pay Disclosure for details and the Fee Schedule for a list of fees. Courtesy Pay does not cover ATM transactions. We may not pay an overdraft if you do not meet eligibility standards.
                  </p>
                  <p>
                    Alliant will rebate ATM fees up to $20 per month per membership account when you use your Alliant checking account Visa debit card to make a deposit, withdrawal, transfer or balance inquiry. The rebate does not apply to cash advances from Alliant Visa credit cards through ATMs nor to the Alliant Savings ATM Card and Visa International Service Assessment (ISA) fee, referenced as the foreign transaction fee on account statements. Not all ATMs accept deposits.
                  </p>
                  <p>
                    Limitations apply. Mobile check deposit requires a camera-enabled mobile device. Data and text charges may apply. Check with your mobile service provider.
                  </p>
                  <p>
                    APY=Annual Percentage Yield. Alliant High-Rate Checking Dividends are paid on the last day of each month to checking accountholders who have opted out of receiving paper statements (receive eStatements only) and have a recurring monthly electronic deposit to their Alliant checking account each month (e.g., a direct deposit, payroll deposit, ATM deposit, mobile check deposit or transfer from another financial institution). Otherwise, Alliant checking accounts do not earn a dividend. The 7/31/2025 High Rate Checking dividend provides an Annual Percentage Yield (APY) of 0.25% APY. The APY is accurate as of the 7/25/2025 dividend declaration date. Checking dividend may change after account is opened and is subject to change at any time. There is no minimum balance requirement to earn a dividend. Account is subject to approval. We may not open checking for you if you do not meet Alliant criteria.
                  </p>
                  <p>
                    63. The savings dividend provides an Annual Percentage Yield (APY) of 3.10%. The APY is accurate as of the 7/25/2025 dividend declaration date. Dividends are paid on the last day of the month to accountholders who have maintained an average daily balance of $100 or more. Savings dividend may change after account is opened and is subject to change at any time. Dividend applies to Savings, Supplemental Savings, Emergency Savings, Kids Savings Accounts, UTMA Custodial Accounts, Trust Accounts and IRA. Fees may reduce earnings on the account.
                  </p>


                  {/* Puedes seguir agregando más párrafos aquí si necesitas... */}
                </div>

                {/* Logos a la derecha */}
                <div className="flex justify-center lg:justify-end gap-6">
                  <img
                    src="/EHO-logo.png"
                    alt="Equal Housing Opportunity"
                    className="h-20 w-auto object-contain"
                  />
                  <img
                    src="/NCUA.png"
                    alt="NCUA"
                    className="h-20 w-auto object-contain"
                  />
                </div>
              </div>

              {/* Copyright */}
              <div className="mt-8 flex justify-start text-gray-600">
                © 2025 Alliant Credit Union
              </div>
            </div>
          </div>
    </footer>
  );
};

export default Footer;