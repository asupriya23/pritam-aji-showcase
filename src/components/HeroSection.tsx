import { Button } from "@/components/ui/button";
import { ArrowRight, Calculator, TrendingUp, Shield } from "lucide-react";
import heroImage from "@/assets/hero-accounting.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Professional accounting services" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      </div>
      
      {/* Content */}
      <div className="relative container mx-auto px-4 py-20 flex items-center min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Your Trusted
              <span className="block text-transparent bg-gradient-to-r from-white to-ca-teal-light bg-clip-text">
                Financial Partners
              </span>
            </h1>
            
            <p className="text-xl text-white/90 leading-relaxed">
              Pritam Aji & Company delivers comprehensive chartered accounting services 
              with integrity, expertise, and innovation. We help businesses achieve 
              financial excellence through strategic guidance and reliable solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-3 h-auto"
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

          {/* Features Cards */}
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
              <div className="flex items-center gap-4">
                <div className="bg-white/20 p-3 rounded-lg">
                  <Calculator className="h-6 w-6 text-white" />
                </div>
                <div className="text-white">
                  <h3 className="text-lg font-semibold">Expert Audit Services</h3>
                  <p className="text-white/80">Comprehensive audit and assurance solutions</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
              <div className="flex items-center gap-4">
                <div className="bg-white/20 p-3 rounded-lg">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <div className="text-white">
                  <h3 className="text-lg font-semibold">Tax Optimization</h3>
                  <p className="text-white/80">Strategic tax planning and compliance</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
              <div className="flex items-center gap-4">
                <div className="bg-white/20 p-3 rounded-lg">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <div className="text-white">
                  <h3 className="text-lg font-semibold">Business Advisory</h3>
                  <p className="text-white/80">Financial consulting and business growth</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;