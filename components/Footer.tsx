import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

export function Footer() {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Courses", href: "/courses" },
    { name: "Contact", href: "/contact" },
  ];

  const popularCourses = [
    "NEET-UG",
    "JEE Main + Advanced",
    "Foundation Courses",
    "Commerce",
  ];

  const socialLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      href: "#",
      color: "hover:text-blue-600",
    },
    { name: "Twitter", icon: Twitter, href: "#", color: "hover:text-blue-400" },
    {
      name: "Instagram",
      icon: Instagram,
      href: "#",
      color: "hover:text-pink-600",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "#",
      color: "hover:text-blue-700",
    },
  ];

  const contactInfo = [
    {
      icon: MapPin,
      text: "The PILLARS , Sco 392 , 2nd floor, Above Cooperative Bank, Sector 37- D, Chandigarh- 160036"
    },
    { icon: Phone, text: "6280091236" },
    { icon: Mail, text: "thepillars126@gmail.com" },
    { icon: Clock, text: "Mon - Sat: 9:00 AM - 7:00 PM , Sunday: 10:00 AM - 4:00 PM" },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container py-16 sm:py-20 lg:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-4 mb-6">
                <div className="h-16 w-16 rounded-2xl overflow-hidden border-3 border-gradient-to-r from-blue-400 to-indigo-500 shadow-xl">
                  <img
                    src="/image_1758300068483.png"
                    alt="THE PILLARS Logo"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                    THE PILLARS
                  </h3>
                  <p className="text-blue-200 text-sm font-medium">
                    Excellence in Education
                  </p>
                </div>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed text-base lg:text-lg">
                Empowering students for over 10 years with quality education and
                comprehensive coaching for competitive exams. Building futures,
                one student at a time.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 mb-8">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    <info.icon className="h-5 w-5 text-blue-400 flex-shrink-0" />
                    <span className="text-sm lg:text-base">{info.text}</span>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className={`group p-3 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 hover:scale-110 ${social.color}`}
                    data-testid={`link-social-${social.name.toLowerCase()}`}
                  >
                    <social.icon className="h-5 w-5" />
                    <span className="sr-only">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-bold mb-6 text-white">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group flex items-center text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2"
                      data-testid={`link-footer-${link.name
                        .toLowerCase()
                        .replace(" ", "-")}`}
                    >
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 group-hover:bg-white transition-colors duration-300"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Popular Courses */}
            <div>
              <h4 className="text-xl font-bold mb-6 text-white">
                Popular Courses
              </h4>
              <ul className="space-y-3">
                {popularCourses.map((course) => (
                  <li key={course}>
                    <a
                      href="#"
                      className="group flex items-center text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2"
                      data-testid={`link-course-${course
                        .toLowerCase()
                        .replace(/[^a-z0-9]/g, "-")}`}
                    >
                      <span className="w-2 h-2 bg-indigo-400 rounded-full mr-3 group-hover:bg-white transition-colors duration-300"></span>
                      {course}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 bg-black/20 backdrop-blur-sm">
          <div className="container py-6">
            <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
              <p className="text-gray-300 text-sm lg:text-base">
                © {new Date().getFullYear()} THE PILLARS. All rights reserved.
              </p>
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
