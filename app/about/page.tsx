import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function AboutPage() {
  const facultyProfiles = [
    {
      name: "Sejal",
      role: "Biology Faculty",
      introduction: "Hi, I'm Sejal, your Biology Faculty.",
      qualifications: [
        "🎓 Master's in Biotechnology from Punjab University",
        "🎓 Bachelor's in Life Sciences from Delhi University",
        "🏆 Rank 3 in PUCET",
        "🏅 CSIR NET Life Sciences and GATE XL Qualified",
      ],
      avatar: "/image_1758300082194.png",
      color: "from-green-500 to-emerald-600",
    },
    {
      name: "Dolar",
      role: "Chemistry Faculty",
      introduction: "Hi, I am Dolar, your guide for Chemistry.",
      qualifications: [
        "🎓 Master's in Chemistry (Honors) from Panjab University",
        "🎓 Bachelor's in Life Sciences from Delhi University",
        "🏅 GATE Qualified",
        "🏆 AIR 11 in GAT-B",
        "🏆 AIR 12 in PUCET Chemistry",
      ],
      avatar: "/image_1758300095199.png",
      color: "from-blue-500 to-cyan-600",
    },
    {
      name: "Narinder Kumar",
      role: "Physics Faculty",
      introduction: "Hi, I am Narinder, your guide for Physics.",
      qualifications: [
        "🎓 Master's in Physics",
        "🎓 Teaching Physics for 6 years",
      ],
      avatar: "/narinder.png",
      color: "from-purple-500 to-violet-600",
    },
    {
      name: "Priti",
      role: "Counsellor, Guide & Motivator",
      introduction: "Hi, I am Priti, your counsellor and guide.",
      qualifications: ["🎓 B.Tech in IT", "🎓 Counsellor for 12 years"],
      avatar: "/priti.png",
      color: "from-pink-500 to-rose-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10"></div>
        <div className="container relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400 text-sm font-medium mb-6">
              🎓 About Us
            </div>
            <h1
              className="text-responsive-xl font-bold mb-6 text-gray-900 dark:text-white"
              data-testid="text-about-title"
            >
              About THE PILLARS
            </h1>
            <p
              className="text-responsive-md text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
              data-testid="text-about-subtitle"
            >
              Inspiring curiosity, nurturing talent, and shaping futures for
              over a decade. Building the foundation for tomorrow's leaders.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-16 sm:pb-20 lg:pb-24">
        <div className="container">
          {/* Main About Content */}
          <Card
            className="mb-8 sm:mb-12 shadow-xl border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm"
            data-testid="card-about-content"
          >
            <CardContent className="card-responsive">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏛️</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Our Story
                </h2>
              </div>

              <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300">
                <p
                  className="text-base sm:text-lg leading-relaxed mb-6"
                  data-testid="text-about-paragraph-1"
                >
                  At{" "}
                  <span className="font-bold text-blue-600 dark:text-blue-400">
                    THE PILLARS
                  </span>
                  , we believe education is more than just learning—it's about
                  inspiring curiosity, nurturing talent, and shaping futures.
                  For 10 years, we have been committed to providing students
                  with an enriching academic experience in a supportive
                  environment where every learner can thrive.
                </p>
                <p
                  className="text-base sm:text-lg leading-relaxed mb-6"
                  data-testid="text-about-paragraph-2"
                >
                  Our institution offers a blend of academic excellence, modern
                  teaching methodologies, and holistic development, ensuring
                  that students are prepared not only for their careers but also
                  for life. With a dedicated team of educators, innovative
                  programs, and a focus on values, we strive to empower our
                  students to become confident, responsible, and future-ready
                  leaders.
                </p>
                <p
                  className="text-base sm:text-lg leading-relaxed"
                  data-testid="text-about-paragraph-3"
                >
                  Whether you are a parent seeking the right place for your
                  child's growth, a student eager to explore opportunities, or a
                  partner in education, we welcome you to be part of our vibrant
                  learning community.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Faculty Profiles */}
          <div className="mb-8 sm:mb-12">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-block px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-full text-indigo-600 dark:text-indigo-400 text-sm font-medium mb-6">
                👨‍🏫 Our Faculty
              </div>
              <h2
                className="text-responsive-lg font-bold mb-6 text-gray-900 dark:text-white"
                data-testid="text-faculty-title"
              >
                Meet Our Expert Faculty
              </h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
                Our dedicated team of experienced educators brings years of
                expertise and passion to help students achieve their academic
                goals.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {facultyProfiles.map((faculty, index) => (
                <Card
                  key={faculty.name}
                  className="group shadow-xl border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                  data-testid={`card-faculty-${index}`}
                >
                  <CardContent className="card-responsive">
                    <div className="text-center">
                      {/* Faculty Image */}
                      <div className="relative mb-6">
                        <div
                          className={`w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-4 border-gradient-to-r ${faculty.color} shadow-lg mx-auto group-hover:scale-110 transition-transform duration-300`}
                        >
                          <Image
                            src={faculty.avatar}
                            alt={`${faculty.name} - ${faculty.role}`}
                            width={112}
                            height={112}
                            className="w-full h-full object-cover"
                            data-testid={`img-faculty-${index}`}
                          />
                        </div>
                        {/* Decorative Ring */}
                        <div
                          className={`absolute -inset-2 rounded-full border-2 border-gradient-to-r ${faculty.color} opacity-20 group-hover:opacity-40 transition-opacity duration-300`}
                        ></div>
                      </div>

                      {/* Faculty Info */}
                      <h3
                        className="text-xl sm:text-2xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300"
                        data-testid={`text-faculty-name-${index}`}
                      >
                        {faculty.name}
                      </h3>

                      <Badge
                        variant="secondary"
                        className={`mb-4 text-sm font-semibold bg-gradient-to-r ${faculty.color} text-white border-0`}
                        data-testid={`badge-faculty-role-${index}`}
                      >
                        {faculty.role}
                      </Badge>

                      <p
                        className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-6 leading-relaxed"
                        data-testid={`text-faculty-intro-${index}`}
                      >
                        {faculty.introduction}
                      </p>

                      {/* Qualifications */}
                      <div className="space-y-2 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                        {faculty.qualifications.map((qualification, qIndex) => (
                          <div
                            key={qIndex}
                            className="flex items-start space-x-2 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300"
                            data-testid={`text-faculty-qualification-${index}-${qIndex}`}
                          >
                            <span className="text-blue-500 mt-0.5">•</span>
                            <span>{qualification}</span>
                          </div>
                        ))}
                      </div>

                      {/* Hover Effect Line */}
                      <div
                        className={`mt-6 h-1 w-0 bg-gradient-to-r ${faculty.color} mx-auto group-hover:w-16 transition-all duration-500 rounded-full`}
                      ></div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Vision & Mission */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <Card
              data-testid="card-vision"
              className="shadow-xl border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-500"
            >
              <CardContent className="card-responsive">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">👁️</span>
                  </div>
                  <h3
                    className="text-xl sm:text-2xl font-bold mb-4 text-gray-900 dark:text-white"
                    data-testid="text-vision-title"
                  >
                    Our Vision
                  </h3>
                </div>
                <p
                  className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed text-center"
                  data-testid="text-vision-content"
                >
                  To become the most trusted educational partner, empowering
                  students to achieve their academic dreams and build successful
                  careers in their chosen fields.
                </p>
              </CardContent>
            </Card>

            <Card
              data-testid="card-mission"
              className="shadow-xl border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-500"
            >
              <CardContent className="card-responsive">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h3
                    className="text-xl sm:text-2xl font-bold mb-4 text-gray-900 dark:text-white"
                    data-testid="text-mission-title"
                  >
                    Our Mission
                  </h3>
                </div>
                <p
                  className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed text-center"
                  data-testid="text-mission-content"
                >
                  To provide quality education through innovative teaching
                  methods, personalized attention, and comprehensive support
                  that ensures every student reaches their full potential.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
