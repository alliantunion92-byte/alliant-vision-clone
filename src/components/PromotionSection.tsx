import { Button } from "@/components/ui/button";

const PromotionSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-alliant-light-green to-alliant-light-blue">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-8 h-8 bg-alliant-blue rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-alliant-green rounded-full opacity-80"></div>
              </div>
              <span className="text-lg font-semibold text-alliant-blue">ALLIANT | SUZE ORMAN</span>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              The Ultimate Opportunity Savings Account
            </h2>
            
            <p className="text-muted-foreground mb-6">
              Alliant has partnered with Suze Orman to offer a high-rate savings account and bonus for new members.
            </p>
            
            <Button className="bg-alliant-blue hover:bg-alliant-blue/90 text-white">
              Learn More
            </Button>
          </div>

          {/* Right Content */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Track and reach your financial goals
            </h3>
            
            <p className="text-muted-foreground mb-6">
              Open up to 19 supplemental savings accounts to track specific savings goals while earning a high rate.
            </p>
            
            <Button variant="outline" className="border-alliant-blue text-alliant-blue hover:bg-alliant-blue hover:text-white">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromotionSection;