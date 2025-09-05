import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
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

const handleClick = (id) => {
  const element = document.getElementById(id);

  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  } else {
    console.warn(`Element with ID "${id}" not found.`);
  }
};
console.log("nkil");
const Header = () => {
  // We will use this state to control which dropdown is open

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

          <div className="flex gap-4"></div>
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
            <Button
              variant="ghost"
              className="text-white hover:bg-white/10"
              asChild
            >
              <Link to="/">HOME</Link>
            </Button>

            <DropdownMenu
              open={activeDropdown === "about-us"}
              onOpenChange={(isOpen) =>
                setActiveDropdown(isOpen ? "about-us" : null)
              }
            >
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="text-white hover:bg-white/10"
                >
                  ABOUT US <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent className="w-56 bg-white shadow-lg">
                <DropdownMenuItem
                  className="hover:bg-primary/10"
                  onSelect={(e) => {
                    e.preventDefault();
                    handleClick("our-company");
                    setTimeout(() => setActiveDropdown(null), 600);
                  }}
                >
                  Our Company
                </DropdownMenuItem>

                <DropdownMenuItem
                  className="hover:bg-primary/10"
                  onSelect={(e) => {
                    e.preventDefault();
                    handleClick("purpose-vision-mission");
                    setTimeout(() => setActiveDropdown(null), 600);
                  }}
                >
                  Purpose, Vision & Mission
                </DropdownMenuItem>

                <DropdownMenuItem
                  className="hover:bg-primary/10"
                  onSelect={(e) => {
                    e.preventDefault();
                    handleClick("our-team");
                    setTimeout(() => setActiveDropdown(null), 600);
                  }}
                >
                  Our Team
                </DropdownMenuItem>

                <DropdownMenuItem
                  className="hover:bg-primary/10"
                  onSelect={() => {
                    // The 'e' is no longer needed
                    handleClick("our-services"); // <-- FIXED: Use the new lowercase ID.
                    setTimeout(() => setActiveDropdown(null), 600);
                  }}
                >
                  Our Services
                </DropdownMenuItem>

                <DropdownMenuItem
                  className="hover:bg-primary/10"
                  onSelect={(e) => {
                    e.preventDefault();
                    handleClick("affiliations");
                    setTimeout(() => setActiveDropdown(null), 600);
                  }}
                >
                  Affiliations
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu
              open={activeDropdown === "market-entry"}
              onOpenChange={(isOpen) =>
                setActiveDropdown(isOpen ? "market-entry" : null)
              }
            >
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="text-white hover:bg-white/10"
                >
                  INDIA MARKET ENTRY <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent className="w-64 bg-white shadow-lg">
                {/* 👇 THIS IS THE UPDATED ITEM 👇 */}
                <DropdownMenuItem className="hover:bg-primary/10 p-0" asChild>
                  <Link
                    to="/india-entry-strategy"
                    className="px-2 py-1.5 w-full"
                  >
                    India Entry Strategy
                  </Link>
                </DropdownMenuItem>

                {/* You can do the same for the other items when you create their pages */}
                <DropdownMenuItem className="hover:bg-primary/10 p-0" asChild>
                  <Link
                    to="/wholly-owned-subsidiary"
                    className="px-2 py-1.5 w-full"
                  >
                    Wholly Owned Subsidiary (WOS)
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="p-0" asChild>
                  <Link to="/branch-office" className="px-2 py-1.5 w-full">
                    Branch Office (BO)
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger>
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
                    <DropdownMenuItem className="p-0" asChild>
                      <Link
                        to="/statutory-audit"
                        className="px-2 py-1.5 w-full"
                      >
                        Statutory Audit
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="p-0" asChild>
                      <Link to="/internal-audit" className="px-2 py-1-5 w-full">
                        Internal Audit
                      </Link>
                    </DropdownMenuItem>

                    <DropdownMenuItem className="p-0" asChild>
                      <Link
                        to="/ind-as-advisory"
                        className="px-2 py-1.5 w-full"
                      >
                        IND AS Advisory
                      </Link>
                    </DropdownMenuItem>

                    <DropdownMenuItem className="p-0" asChild>
                      <Link
                        to="/public-sector-audit"
                        className="px-2 py-1.5 w-full"
                      >
                        Public Sector Audit
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="p-0" asChild>
                      <Link
                        to="/company-secretarial-services"
                        className="px-2 py-1.5 w-full"
                      >
                        Company Secretarial Services
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuSub>

                <DropdownMenuSub>
                  <DropdownMenuSubTrigger className="hover:bg-primary/10">
                    Taxation Services
                  </DropdownMenuSubTrigger>

                  <DropdownMenuSubContent>
                    <DropdownMenuItem className="p-0" asChild>
                      <Link to="/tax-audit" className="px-2 py-1-5 w-full">
                        Tax Audit
                      </Link>
                    </DropdownMenuItem>

                    <DropdownMenuItem className="p-0" asChild>
                      <Link
                        to="/income-tax-advisory"
                        className="px-2 py-1-5 w-full"
                      >
                        Income Tax Advisory
                      </Link>
                    </DropdownMenuItem>

                    <DropdownMenuItem className="p-0" asChild>
                      <Link to="/easy-it-filing" className="px-2 py-1-5 w-full">
                        Easy IT Filing
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuSub>

                <DropdownMenuSub>
                  <DropdownMenuSubTrigger className="hover:bg-primary/10">
                    Transfer Pricing
                  </DropdownMenuSubTrigger>

                  <DropdownMenuSubContent>
                    <DropdownMenuItem className="p-0" asChild>
                      <Link
                        to="/international-taxation"
                        className="px-2 py-1-5 w-full"
                      >
                        International Taxation
                      </Link>
                    </DropdownMenuItem>

                    <DropdownMenuItem className="p-0" asChild>
                      <Link
                        to="/transfer-pricing"
                        className="px-2 py-1.5 w-full"
                      >
                        Transfer Pricing
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuSub>

                <DropdownMenuSub>
                  <DropdownMenuSubTrigger className="hover:bg-primary/10">
                    GST
                  </DropdownMenuSubTrigger>

                  <DropdownMenuSubContent>
                    <DropdownMenuItem className="p-0" asChild>
                      <Link
                        to="/gst-registration"
                        className="px-2 py-1.5 w-full"
                      >
                        GST Registration
                      </Link>
                    </DropdownMenuItem>

                    <DropdownMenuItem className="p-0" asChild>
                      <Link to="/gst-audit" className="px-2 py-1-5 w-full">
                        GST Audit
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuSub>

                <DropdownMenuSub>
                  <DropdownMenuSubTrigger className="hover:bg-primary/10">
                    Outsourcing
                  </DropdownMenuSubTrigger>

                  <DropdownMenuSubContent>
                    <DropdownMenuItem>Accounting Outsourcing </DropdownMenuItem>

                    <DropdownMenuItem>SEZ Services</DropdownMenuItem>
                    <DropdownMenuItem>Payroll Services</DropdownMenuItem>
                    <DropdownMenuItem>
                      SPTI & Non-SPTI Services
                    </DropdownMenuItem>
                    <DropdownMenuItem>Due Diligence </DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuSub>

                <DropdownMenuSub>
                  <DropdownMenuSubTrigger className="hover:bg-primary/10">
                    Business Advisory
                  </DropdownMenuSubTrigger>

                  <DropdownMenuSubContent>
                    <DropdownMenuItem>Business Valuation</DropdownMenuItem>

                    <DropdownMenuItem>Captial Gain Advisory</DropdownMenuItem>
                    <DropdownMenuItem>RERA Consultants</DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuSub>

                <DropdownMenuSub>
                  <DropdownMenuSubTrigger className="hover:bg-primary/10">
                    Management Consulting
                  </DropdownMenuSubTrigger>

                  <DropdownMenuSubContent>
                    <DropdownMenuItem>Joint Development</DropdownMenuItem>

                    <DropdownMenuItem>Labour Law Consultancy</DropdownMenuItem>
                    <DropdownMenuItem>Energy Sector Services</DropdownMenuItem>
                    <DropdownMenuItem>
                      Fixed Asset Verification
                    </DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuSub>

                <DropdownMenuSub>
                  <DropdownMenuSubTrigger className="hover:bg-primary/10">
                    Startup Services
                  </DropdownMenuSubTrigger>

                  <DropdownMenuSubContent>
                    <DropdownMenuItem>Startup Registration</DropdownMenuItem>

                    <DropdownMenuItem>Buisness Set Up</DropdownMenuItem>
                    <DropdownMenuItem>Startup Funding</DropdownMenuItem>
                    <DropdownMenuItem>Partnership</DropdownMenuItem>
                    <DropdownMenuItem>
                      Limited Liability Partnership
                    </DropdownMenuItem>

                    <DropdownMenuItem>Trust</DropdownMenuItem>

                    <DropdownMenuItem>Society</DropdownMenuItem>
                    <DropdownMenuItem>Private Limited Company</DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuSub>
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
