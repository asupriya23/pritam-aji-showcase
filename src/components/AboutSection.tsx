import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const AboutSection = () => {
  return (
    <section id="our-company" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            About Pritam Ajit & Company
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Established with a vision to deliver financial excellence,{" "}
              <strong>Pritam Aji & Company</strong>
              has been serving clients across various industries with dedication
              and expertise. Our firm combines traditional accounting wisdom
              with modern technological solutions.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              We believe in building long-term relationships with our clients by
              providing personalized services and strategic financial guidance
              that drives business growth and ensures compliance.
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                25+ Years Experience
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                500+ Satisfied Clients
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                Multi-City Presence
              </Badge>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <Card className="bg-gradient-card shadow-card border-0">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">
                  Clients Served
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-card border-0">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">25+</div>
                <div className="text-sm text-muted-foreground">
                  Years Experience
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-card border-0">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Expert CAs</div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-card border-0">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">3</div>
                <div className="text-sm text-muted-foreground">
                  Office Locations
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
