import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Zap } from "lucide-react";

const VisionMissionSection = () => {
  return (
    <section id="purpose-vision-mission" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Our Purpose, Vision & Mission
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Instituting Incremental Model of Process development driven by
            Advisory oriented Chartered accountants to deliver best quality
            services which accelerates Client's business growth through state of
            art accounting Technologies
          </p>
        </div>

        {/* IMPACT Letters */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-2 text-6xl font-bold">
            <span className="text-ca-teal">I</span>
            <span className="text-ca-green">M</span>
            <span className="text-ca-orange">P</span>
            <span className="text-ca-purple">A</span>
            <span className="text-ca-blue">C</span>
            <span className="text-ca-teal-dark">T</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Purpose Card */}
          <Card className="bg-ca-blue text-white shadow-elegant border-0 hover:transform hover:scale-105 transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Purpose</h3>
              <p className="text-white/90 leading-relaxed">
                To build wealth with integrity and innovation, helping our
                clients achieve financial success through expert guidance and
                reliable accounting solutions.
              </p>
            </CardContent>
          </Card>

          {/* Vision Card */}
          <Card className="bg-ca-blue text-white shadow-elegant border-0 hover:transform hover:scale-105 transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Vision</h3>
              <p className="text-white/90 leading-relaxed">
                To be the leading, most organized, and trusted chartered
                accounting firm, setting new standards in financial excellence
                and client satisfaction.
              </p>
            </CardContent>
          </Card>

          {/* Mission Card */}
          <Card className="bg-ca-teal text-white shadow-elegant border-0 hover:transform hover:scale-105 transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Mission</h3>
              <p className="text-white/90 leading-relaxed">
                Delivering impactful solutions through innovative accounting
                practices, ensuring compliance, and fostering business growth
                for all our valued clients.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;
