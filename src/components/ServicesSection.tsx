import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Calculator,
  FileText,
  Building,
  TrendingUp,
  Shield,
  Briefcase,
  PieChart,
  Users,
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Calculator,
      title: "Audit & Assurance",
      description:
        "Comprehensive audit services including statutory, internal, stock, and tax audits.",
      features: [
        "Statutory Audit",
        "Internal Audit",
        " IND AS",
        "Public Sector Audit",
        "Company Secretrial Services",
      ],
    },
    {
      icon: FileText,
      title: "Taxation Services",
      description:
        "Complete tax solutions for individuals and businesses across all tax categories.",
      features: [
        "Tax Consulting Services",
        "Tax Audit",
        "Income Tax Advisory",
        "NRI Taxation",
        "Easy IT Filing",
      ],
    },
    {
      icon: Building,
      title: "Transfer Pricing",
      description:
        "End-to-end corporate compliance and registration services for all business types.",
      features: ["International Taxation ", "Transfer Pricing"],
    },
    {
      icon: TrendingUp,
      title: "GST",
      description:
        "Strategic financial advisory services to optimize your business performance.",
      features: ["GST Registration", "GST Audit", "GST Services"],
    },
    {
      icon: Shield,
      title: "Outsourcing",
      description:
        "Ensure regulatory compliance across all business operations and requirements.",
      features: [
        " Accounting Outsourcing",
        "SEZ Services",
        "Payroll Services",
        "SPTI & Non-SPTI Services",
        "Due Diligence",
      ],
    },
    {
      icon: Briefcase,
      title: "Business Advisory",
      description:
        "Strategic business consulting to drive growth and operational efficiency.",
      features: [
        "Business Valuation",
        "Captial Gain Advisory",
        "RERA Consultants",
      ],
    },
    {
      icon: PieChart,
      title: "Management Consulting",
      description:
        "Comprehensive accounting solutions using modern technology and best practices.",
      features: [
        "Joint Development",
        "Labour Law Consultancy",
        "Energy Sector Services",
        "Fixed Asset Verification",
      ],
    },
    {
      icon: Users,
      title: "Startup Services",
      description:
        "Specialized services for startups and emerging businesses to accelerate growth.",
      features: [
        "Startup Registration",
        "Buisness Set Up",
        "Startup Funding",
        "Partnership",
        "Limited Liability Partnership",
        "Trust",
        "Society",
        "Private Limited Company",
      ],
    },
  ];

  return (
    // In ServicesSection.jsx
    <section id="our-services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Our Comprehensive Services
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We offer a complete range of chartered accounting services designed
            to meet all your financial and business requirements under one roof.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-elegant hover:transform hover:scale-105 transition-all duration-300 border-0 bg-gradient-card"
              >
                <CardHeader className="text-center pb-4">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <IconComponent className="h-8 w-8 text-primary group-hover:text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1 mb-6">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center justify-center"
                      >
                        <span className="w-1 h-1 bg-primary rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="outline"
                    size="sm"
                    className="group-hover:bg-primary group-hover:text-white transition-all duration-300"
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
