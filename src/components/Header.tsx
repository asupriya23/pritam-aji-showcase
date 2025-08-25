import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Phone, MapPin } from "lucide-react";

const handleScroll = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};
const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="bg-primary text-primary-foreground">
      {/* Top Contact Bar */}
      <div className="bg-ca-teal-dark py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Mumbai | Delhi | Bangalore</span>
            </div>
          </div>
          <div className="flex gap-4">
            <Button
              variant="outline"
              size="sm"
              className="border-white/20 text-white hover:bg-white/10"
            >
              Client Login
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="border-white/20 text-white hover:bg-white/10"
            >
              Payment Portal
            </Button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="bg-white text-primary p-2 rounded-lg mr-3">
              <span className="font-bold text-xl">P.A.</span>
            </div>
            <div>
              <h1 className="text-xl font-bold">Pritam Ajit & Company</h1>
              <p className="text-sm opacity-90">Chartered Accountants</p>
            </div>
          </div>

          {/* Navigation Menu */}
          <nav className="flex items-center space-x-1">
            <Button variant="ghost" className="text-white hover:bg-white/10">
              HOME
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="text-white hover:bg-white/10"
                >
                  ABOUT US <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-white shadow-lg">
                {/* Changed from <a> tag with href to onSelect */}
                <DropdownMenuItem
                  className="hover:bg-primary/10"
                  onSelect={() => handleScroll("our-company")}
                >
                  Our Company
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="hover:bg-primary/10"
                  onSelect={() => handleScroll("purpose-vision-mission")}
                >
                  Purpose, Vision & Mission
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="hover:bg-primary/10"
                  onSelect={() => handleScroll("our-team")}
                >
                  Our Team
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="hover:bg-primary/10"
                  onSelect={() => handleScroll("milestones")}
                >
                  Milestones
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="hover:bg-primary/10"
                  onSelect={() => handleScroll("affiliations")}
                >
                  Affiliations
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="text-white hover:bg-white/10"
                >
                  SERVICES <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-64 bg-white shadow-lg">
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger className="hover:bg-primary/10">
                    Audit & Assurance
                  </DropdownMenuSubTrigger>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem>Statutory Audit</DropdownMenuItem>
                    <DropdownMenuItem>Internal Audit</DropdownMenuItem>
                    <DropdownMenuItem>Stock Audit</DropdownMenuItem>
                    <DropdownMenuItem>Tax Audit</DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuSub>

                <DropdownMenuSub>
                  <DropdownMenuSubTrigger className="hover:bg-primary/10">
                    Taxation Services
                  </DropdownMenuSubTrigger>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem>Income Tax</DropdownMenuItem>
                    <DropdownMenuItem>GST Services</DropdownMenuItem>
                    <DropdownMenuItem>TDS/TCS</DropdownMenuItem>
                    <DropdownMenuItem>International Taxation</DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuSub>

                <DropdownMenuSub>
                  <DropdownMenuSubTrigger className="hover:bg-primary/10">
                    Corporate Services
                  </DropdownMenuSubTrigger>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem>Company Registration</DropdownMenuItem>
                    <DropdownMenuItem>LLP Formation</DropdownMenuItem>
                    <DropdownMenuItem>
                      Partnership Registration
                    </DropdownMenuItem>
                    <DropdownMenuItem>ROC Compliance</DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuSub>

                <DropdownMenuSeparator />

                <DropdownMenuItem className="hover:bg-primary/10">
                  Accounting & Bookkeeping
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-primary/10">
                  Financial Planning
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-primary/10">
                  Business Valuation
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="text-white hover:bg-white/10"
                >
                  INDUSTRIES <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-white shadow-lg">
                <DropdownMenuItem className="hover:bg-primary/10">
                  Manufacturing
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-primary/10">
                  Information Technology
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-primary/10">
                  Real Estate
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-primary/10">
                  Healthcare
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-primary/10">
                  Retail & E-commerce
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-primary/10">
                  Financial Services
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-primary/10">
                  Education
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="text-white hover:bg-white/10"
                >
                  RESOURCES <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-white shadow-lg">
                <DropdownMenuItem className="hover:bg-primary/10">
                  News & Updates
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-primary/10">
                  Tax Calculator
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-primary/10">
                  Downloads
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-primary/10">
                  FAQ
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-primary/10">
                  Client Testimonials
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="ghost" className="text-white hover:bg-white/10">
              CAREER
            </Button>

            <Button variant="ghost" className="text-white hover:bg-white/10">
              CONTACT US
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
