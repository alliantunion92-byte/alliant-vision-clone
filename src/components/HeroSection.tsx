import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-woman-mobile.jpg";

const HeroSection = () => {
  return (
    <section className="relative bg-hero-gradient overflow-hidden">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="text-white space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
              Borrow only what you need with a{" "}
              <span className="text-white">HELOC</span>
            </h1>
            <p className="text-lg opacity-90 max-w-md">
              Get the flexibility you need with a Home Equity Line of Credit. 
              Access funds when you need them with competitive rates.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-alliant-green hover:bg-white/90 font-semibold px-8 py-3"
            >
              Learn more
            </Button>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-alliant-light-blue/20 to-alliant-light-green/20 rounded-full blur-3xl"></div>
            <img
              src={heroImage}
              alt="Woman using mobile banking app"
              className="relative z-10 w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
    </section>
  );
};

export default HeroSection;