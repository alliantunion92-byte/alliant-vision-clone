import { PiggyBank, Smartphone, Banknote, Shield, Car } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: PiggyBank,
      title: "Save More Money",
      description: "Our High-Rate Savings account pays you 14x the bank national average.",
      bgColor: "bg-blue-50",
      iconColor: "text-alliant-blue",
    },
    {
      icon: Smartphone,
      title: "Bank Online Stress Free",
      description: "Bank anywhere, anytime using online banking or our mobile banking app.",
      bgColor: "bg-green-50",
      iconColor: "text-alliant-green",
    },
    {
      icon: Banknote,
      title: "Check Out Our Checking",
      description: "ATM rebates = No ATM scavenger hunts! Plus, no overdraft fees.",
      bgColor: "bg-blue-50",
      iconColor: "text-alliant-blue",
    },
    {
      icon: Shield,
      title: "Fraud Prevention & Security",
      description: "Avance Personal is committed to protecting your account with the latest security measures.",
      bgColor: "bg-green-50",
      iconColor: "text-alliant-green",
    },
    {
      icon: Car,
      title: "Hold The Keys",
      description: "Get behind the wheel with great low rates on car loans and put yourself in the driver's seat.",
      bgColor: "bg-blue-50",
      iconColor: "text-alliant-blue",
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="text-center group cursor-pointer"
              >
                <div className={`w-20 h-20 ${service.bgColor} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className={`w-10 h-10 ${service.iconColor}`} />
                </div>
                <h3 className="text-lg font-semibold text-alliant-blue mb-2 group-hover:text-alliant-green transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;