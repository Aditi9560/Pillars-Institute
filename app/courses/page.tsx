import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Heart, Calculator, DollarSign } from "lucide-react";

export default function CoursesPage() {
  const courseStreams = [
    {
      title: "Foundation Courses",
      icon: BookOpen,
      description: "Building strong fundamentals for future success",
      color: "primary",
      courses: [
        {
          name: "8th/9th/10th CBSE",
          description: "Complete board preparation with conceptual clarity",
        },
        {
          name: "ICSE Foundation",
          description: "ICSE curriculum with focused approach",
        },
        {
          name: "Olympiad Preparation",
          description: "NSO, NCO, IMO, and other Olympiads",
        },
        { name: "NTSE", description: "National Talent Search Examination" },
        { name: "KVPY", description: "Kishore Vaigyanik Protsahan Yojana" },
        {
          name: "All Competitive Exams",
          description: "Comprehensive competitive exam preparation",
        },
      ],
    },
    {
      title: "Medical Stream",
      icon: Heart,
      description: "Specialized coaching for medical aspirants",
      color: "accent",
      courses: [
        {
          name: "Pre-Medical (NEET-UG)",
          description: "Complete NEET preparation with mock tests",
        },
        {
          name: "CBSE/ICSE Medical",
          description: "Board + competitive exam preparation",
        },
        {
          name: "State Boards",
          description: "State board medical stream preparation",
        },
        {
          name: "B.Sc Nursing",
          description: "Nursing entrance exam preparation",
        },
        {
          name: "CUET Medical",
          description: "Common University Entrance Test",
        },
        {
          name: "PUCET/B.Sc Agriculture",
          description: "Punjab University entrance tests",
        },
      ],
    },
    {
      title: "Non-Medical Stream",
      icon: Calculator,
      description: "Engineering and technical education pathway",
      color: "secondary",
      courses: [
        {
          name: "JEE Main + Advanced",
          description: "Complete IIT-JEE preparation program",
        },
        {
          name: "Mathematics",
          description: "Advanced mathematics for competitive exams",
        },
        { name: "NDA", description: "National Defence Academy preparation" },
        { name: "BITSAT", description: "BITS Pilani entrance examination" },
        { name: "CUET/PUCET", description: "University entrance tests" },
        {
          name: "IISER/VITSAT/NATA",
          description: "Specialized entrance examinations",
        },
      ],
    },
    {
      title: "Commerce Stream",
      icon: DollarSign,
      description: "Business and commerce education excellence",
      color: "primary",
      courses: [
        {
          name: "11th/12th Commerce",
          description: "Complete commerce board preparation",
        },
        {
          name: "CA Foundation",
          description: "Chartered Accountancy foundation course",
        },
        {
          name: "BBA Entrance",
          description: "Bachelor of Business Administration",
        },
        {
          name: "Economics",
          description: "Advanced economics for competitive exams",
        },
        {
          name: "Business Studies",
          description: "Comprehensive business studies program",
        },
        { name: "Accountancy", description: "Advanced accountancy concepts" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 to-blue-600/10"></div>
        <div className="container relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-block px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-full text-indigo-600 dark:text-indigo-400 text-sm font-medium mb-6">
              📚 Our Programs
            </div>
            <h1
              className="text-responsive-xl font-bold mb-6 text-gray-900 dark:text-white"
              data-testid="text-courses-title"
            >
              Our Courses
            </h1>
            <p
              className="text-responsive-md text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
              data-testid="text-courses-description"
            >
              Comprehensive coaching programs designed to excel in competitive
              exams and board examinations. Choose your path to success.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-16 sm:pb-20 lg:pb-24">
        <div className="container">
          <div className="space-y-8 sm:space-y-12">
            {courseStreams.map((stream, streamIndex) => (
              <Card
                key={stream.title}
                className="group shadow-xl border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1"
                data-testid={`card-stream-${streamIndex}`}
              >
                <CardContent className="card-responsive">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center mb-6 sm:mb-8">
                    <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-4 sm:p-5 rounded-2xl mr-4 sm:mr-6 mb-4 sm:mb-0 group-hover:scale-110 transition-transform duration-300">
                      <stream.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h2
                        className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300"
                        data-testid={`text-stream-title-${streamIndex}`}
                      >
                        {stream.title}
                      </h2>
                      <p
                        className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed"
                        data-testid={`text-stream-description-${streamIndex}`}
                      >
                        {stream.description}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {stream.courses.map((course, courseIndex) => (
                      <div
                        key={course.name}
                        className="group/course bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 p-4 sm:p-6 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 border border-gray-200 dark:border-gray-600"
                        data-testid={`card-course-${streamIndex}-${courseIndex}`}
                      >
                        <div className="flex items-start space-x-3">
                          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover/course:scale-110 transition-transform duration-300">
                            <span className="text-white text-sm font-bold">
                              {courseIndex + 1}
                            </span>
                          </div>
                          <div className="flex-1">
                            <h3
                              className="font-bold mb-2 text-sm sm:text-base text-gray-900 dark:text-white group-hover/course:text-blue-600 dark:group-hover/course:text-blue-400 transition-colors duration-300"
                              data-testid={`text-course-name-${streamIndex}-${courseIndex}`}
                            >
                              {course.name}
                            </h3>
                            <p
                              className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed"
                              data-testid={`text-course-description-${streamIndex}-${courseIndex}`}
                            >
                              {course.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
