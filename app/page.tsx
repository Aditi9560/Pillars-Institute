import { CheckCircle, Zap, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function HomePage() {
  const features = [
    {
      icon: CheckCircle,
      title: "Expert Faculty",
      description:
        "Highly qualified teachers with proven track records in competitive exams.",
    },
    {
      icon: Zap,
      title: "Proven Results",
      description:
        "10 years of consistent results in NEET, JEE, and other competitive exams.",
    },
    {
      icon: BookOpen,
      title: "Comprehensive Curriculum",
      description:
        "Complete coverage of all subjects with regular assessments and doubt clearing.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/image_1758300056402.png"
            alt="THE PILLARS Education Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/70 to-blue-900/80"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen py-20">
            <div className="text-white fade-in">
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-blue-600/20 backdrop-blur-sm rounded-full text-blue-200 text-sm font-medium border border-blue-400/30">
                  🎓  Premium Coaching Classes Since 2014
                </span>
              </div>

              <h1
                className="text-responsive-xl font-bold mb-6 leading-tight"
                data-testid="text-hero-title"
              >
                Build Your Future with{" "}
                <span className="hero-text-shimmer">THE PILLARS</span>
              </h1>

              <p
                className="text-responsive-md mb-8 text-blue-100 leading-relaxed"
                data-testid="text-hero-description"
              >
                Premier coaching institute for Medical, Non-Medical, and
                Commerce streams. 10 years of educational excellence in shaping
                future leaders with proven results and expert faculty.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-yellow-400">
                    10+
                  </div>
                  <div className="text-sm text-blue-200">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-yellow-400">
                    1000+
                  </div>
                  <div className="text-sm text-blue-200">Students Success</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-yellow-400">
                    95%
                  </div>
                  <div className="text-sm text-blue-200">Success Rate</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                    data-testid="button-enroll-now"
                  >
                    🚀 Enroll Now
                  </Button>
                </Link>
                <Link href="/about">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4 rounded-lg font-semibold transform hover:scale-105 transition-all duration-300"
                    data-testid="button-learn-more"
                  >
                    📚 Learn More
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right side - Floating Cards */}
            <div className="relative fade-in">
              <div className="grid grid-cols-2 gap-4">
                {/* Card 1 */}
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 shadow-xl hover:scale-105 transition-all duration-300">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl">🎯</span>
                    </div>
                    <h3 className="text-white font-semibold text-sm mb-1">
                      NEET-UG
                    </h3>
                    <p className="text-blue-200 text-xs">Medical Excellence</p>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 shadow-xl hover:scale-105 transition-all duration-300">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl">⚡</span>
                    </div>
                    <h3 className="text-white font-semibold text-sm mb-1">
                      JEE Main
                    </h3>
                    <p className="text-blue-200 text-xs">Engineering Dreams</p>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 shadow-xl hover:scale-105 transition-all duration-300">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl">📊</span>
                    </div>
                    <h3 className="text-white font-semibold text-sm mb-1">
                      Commerce
                    </h3>
                    <p className="text-blue-200 text-xs">Business Success</p>
                  </div>
                </div>

                {/* Card 4 */}
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 shadow-xl hover:scale-105 transition-all duration-300">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl">🏆</span>
                    </div>
                    <h3 className="text-white font-semibold text-sm mb-1">
                      Foundation
                    </h3>
                    <p className="text-blue-200 text-xs">Strong Base</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding-sm bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400 text-sm font-medium mb-4">
              ✨ Why Choose Us
            </div>
            <h2
              className="text-responsive-lg font-bold mb-6 text-foreground"
              data-testid="text-why-choose-title"
            >
              Why Choose THE PILLARS?
            </h2>
            <p
              className="text-responsive-md text-muted-foreground max-w-3xl mx-auto leading-relaxed"
              data-testid="text-why-choose-description"
            >
              We provide comprehensive coaching across multiple streams with
              expert faculty and proven methodologies that deliver exceptional
              results.
            </p>
          </div>

          <div className="grid-responsive-3">
            {features.map((feature, index) => (
              <Card
                key={feature.title}
                className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white dark:bg-gray-800"
                data-testid={`card-feature-${index}`}
              >
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <CardContent className="card-responsive text-center relative z-10">
                  <div className="relative mb-6">
                    <div className="bg-gradient-to-br from-blue-500 to-indigo-600 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                    </div>
                    {/* Decorative Element */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                    <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-pink-400 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                  </div>

                  <h3
                    className="text-xl sm:text-2xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300"
                    data-testid={`text-feature-title-${index}`}
                  >
                    {feature.title}
                  </h3>

                  <p
                    className="text-gray-600 dark:text-gray-300 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300"
                    data-testid={`text-feature-description-${index}`}
                  >
                    {feature.description}
                  </p>

                  {/* Hover Effect Line */}
                  <div className="mt-6 h-1 w-0 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto group-hover:w-16 transition-all duration-500 rounded-full"></div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-12 sm:mt-16">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 sm:p-12 text-white">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                Ready to Start Your Journey?
              </h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Join thousands of successful students who have achieved their
                dreams with THE PILLARS.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  >
                    Get Started Today
                  </Button>
                </Link>
                <Link href="/courses">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-lg font-semibold transform hover:scale-105 transition-all duration-300"
                  >
                    View All Courses
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
