import { Button } from "@/components/ui/button";
import { ArrowRight, Calculator, TrendingUp, Shield } from "lucide-react";
import heroImage from "@/assets/hero-accounting.jpg";

const HeroSection = () => {
  // Function to handle smooth scrolling
  const handleScroll = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden">
      {/* Background Image & Gradient Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Professional accounting services"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-20 flex items-center min-h-screen">
        {/* ... (rest of the content remains the same) ... */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight animate-fade-in-up">
              Guiding Your Financial Ascent:
              <span className="block text-transparent bg-gradient-to-r from-white to-ca-teal-light bg-clip-text">
                Precision, Integrity & Growth.
              </span>
            </h1>
            <p className="text-xl text-white/90 leading-relaxed animate-fade-in-up animation-delay-300">
              At Pritam Ajit & Company, we transcend traditional accounting. We
              are your strategic allies, dedicated to navigating complex
              financial landscapes to unlock your business's full potential.
              From meticulous compliance to forward-thinking growth strategies,
              we ensure your financial foundation is not just stable, but a
              springboard for success.
            </p>
            {/* ... (Key Services Highlight Section remains the same) ... */}
            <div className="space-y-4 pt-4 animate-fade-in-up animation-delay-500">
              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-2 rounded-full">
                  <Shield className="h-6 w-6 text-ca-teal-light" />
                </div>
                <div>
                  <h3 className="font-semibold">Audit & Assurance</h3>
                  <p className="text-white/80">
                    Robust auditing services that build trust and ensure
                    compliance.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-2 rounded-full">
                  <Calculator className="h-6 w-6 text-ca-teal-light" />
                </div>
                <div>
                  <h3 className="font-semibold">Strategic Tax Planning</h3>
                  <p className="text-white/80">
                    Optimize your tax position while maintaining full regulatory
                    adherence.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-2 rounded-full">
                  <TrendingUp className="h-6 w-6 text-ca-teal-light" />
                </div>
                <div>
                  <h3 className="font-semibold">Business Growth Advisory</h3>
                  <p className="text-white/80">
                    Data-driven insights to fuel sustainable expansion and
                    profitability.
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6 animate-fade-in-up animation-delay-700">
              {/* 👇 UPDATED BUTTON 👇 */}
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-3 h-auto"
                onClick={() => handleScroll("our-services")}
              >
                Explore Our Services <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-3 h-auto"
              >
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
