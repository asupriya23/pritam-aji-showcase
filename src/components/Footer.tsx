import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  Youtube
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-ca-navy text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center">
              <div className="bg-primary text-white p-2 rounded-lg mr-3">
                <span className="font-bold text-xl">P.A.</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Pritam Aji & Company</h3>
                <p className="text-sm opacity-90">Chartered Accountants</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Pritam Aji & Co is a leading CA firm providing comprehensive accounting and 
              business advisory services. We offer reliable chartered accountants who deliver 
              excellence with integrity across various industries.
            </p>
            <div className="flex space-x-4">
              <Button size="sm" variant="outline" className="border-white/20 text-white hover:bg-white/10 p-2">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="outline" className="border-white/20 text-white hover:bg-white/10 p-2">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="outline" className="border-white/20 text-white hover:bg-white/10 p-2">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="outline" className="border-white/20 text-white hover:bg-white/10 p-2">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="outline" className="border-white/20 text-white hover:bg-white/10 p-2">
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Our Branches */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-primary">OUR BRANCHES</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                <span className="text-gray-300">Mumbai Office</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                <span className="text-gray-300">Delhi Office</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                <span className="text-gray-300">Bangalore Office</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                <span className="text-gray-300">Pune Office</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                <span className="text-gray-300">Hyderabad Office</span>
              </div>
            </div>
          </div>

          {/* Contact Us */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-primary">CONTACT US</h4>
            <div className="space-y-4">
              <div>
                <p className="text-white font-medium">Pritam Aji</p>
                <p className="text-gray-300 text-sm">Managing Partner</p>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-gray-300">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-gray-300">+91 87654 32109</span>
              </div>
              <div className="flex items-start space-x-2">
                <Mail className="h-4 w-4 text-primary mt-1" />
                <span className="text-gray-300">info@pritamajiandco.com</span>
              </div>
            </div>
          </div>

          {/* Head Office */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-primary">HEAD OFFICE</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>No. 45, Business Center, 3rd Floor,</p>
                  <p>Above HDFC Bank, MG Road,</p>
                  <p>Mumbai - 400001, Maharashtra</p>
                </div>
              </div>
              <Button className="bg-primary hover:bg-primary/90 text-white">
                Get Directions
              </Button>
            </div>

            {/* Quick Services */}
            <div className="space-y-3">
              <h5 className="font-medium text-white">Quick Services:</h5>
              <div className="flex flex-wrap gap-2">
                <Button variant="outline" size="sm" className="border-white/20 text-white hover:bg-white/10 text-xs">
                  GST Filing
                </Button>
                <Button variant="outline" size="sm" className="border-white/20 text-white hover:bg-white/10 text-xs">
                  ITR Filing
                </Button>
                <Button variant="outline" size="sm" className="border-white/20 text-white hover:bg-white/10 text-xs">
                  Company Registration
                </Button>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-white/20" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-400 text-sm">
            © 2024 Pritam Aji & Company. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Disclaimer
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;