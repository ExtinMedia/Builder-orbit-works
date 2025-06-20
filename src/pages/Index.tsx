import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  TrendingUp,
  Search,
  Lightbulb,
  Brain,
  Globe,
  Megaphone,
  Users,
  PenTool,
  Monitor,
  Target,
  Star,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  CheckCircle,
  BarChart3,
  Zap,
  Award,
} from "lucide-react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      {/* SEO Meta Tags */}
      <div className="hidden">
        <title>Best Digital Marketing Agency in Hyderabad – Extin Media</title>
        <meta
          name="description"
          content="Looking for ROI-driven digital marketing in Hyderabad? Extin Media offers expert SEO, Ads, and content strategies that deliver results."
        />
        <meta
          name="keywords"
          content="digital marketing company Hyderabad, SEO experts Hyderabad, PPC agency Hyderabad, social media marketing Hyderabad"
        />
      </div>

      <div className="min-h-screen bg-white">
        {/* SECTION 1: Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 min-h-screen flex items-center overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-6 bg-brand-100 text-brand-800 hover:bg-brand-200 border-brand-200">
                🏆 #1 Rated Digital Marketing Agency in Hyderabad
              </Badge>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-display text-gray-900 mb-6 leading-tight">
                Hyderabad's{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-purple-600">
                  #1
                </span>{" "}
                Digital Marketing Agency –{" "}
                <span className="text-brand-600">Extin Media</span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Grow faster with SEO, Ads, and Creative Content that Converts.
                <span className="font-semibold text-brand-700">
                  {" "}
                  Get 350% ROI in 90 days
                </span>{" "}
                or we work for free.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button
                  size="lg"
                  className="bg-brand-600 hover:bg-brand-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Zap className="mr-2 h-5 w-5" />
                  Get Free Audit
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-brand-600 text-brand-600 hover:bg-brand-50 px-8 py-4 text-lg font-semibold rounded-xl"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Book Strategy Call
                </Button>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold">4.9/5 Rating</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-brand-600" />
                  <span className="font-semibold">200+ Happy Clients</span>
                </div>
                <div className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-green-500" />
                  <span className="font-semibold">350% Avg ROI</span>
                </div>
              </div>
            </div>
          </div>

          {/* Animated Background Elements */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-brand-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
        </section>

        {/* SECTION 2: Why Choose Extin Media */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold font-display text-gray-900 mb-6">
                Why Choose <span className="text-brand-600">Extin Media</span>?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We don't just run campaigns – we build digital empires that
                dominate your market and deliver measurable results.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <TrendingUp className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    🚀 Proven ROI Campaigns
                  </h3>
                  <p className="text-gray-600">
                    Average 350% ROI within 90 days. Our data-driven strategies
                    turn every rupee into profit.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Search className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    📈 SEO That Gets You Ranked
                  </h3>
                  <p className="text-gray-600">
                    #1 Google rankings in 6 months. We dominate search results
                    with white-hat SEO techniques.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Lightbulb className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    💡 Creatives That Click
                  </h3>
                  <p className="text-gray-600">
                    Viral content & ads that convert. Our creative team builds
                    brands that people remember and buy from.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Brain className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    🧠 10+ Years Expert Strategy
                  </h3>
                  <p className="text-gray-600">
                    Decade of experience across industries. We know what works
                    and what doesn't in digital marketing.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* SECTION 3: Services We Offer */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold font-display text-gray-900 mb-6">
                Services That{" "}
                <span className="text-brand-600">Deliver Results</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Full-stack digital marketing solutions designed to scale your
                business and maximize your online presence.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg bg-white hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                    <Search className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    SEO Services
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Dominate Google search results with our proven SEO
                    strategies. Get organic traffic that converts.
                  </p>
                  <Button
                    variant="outline"
                    className="group-hover:bg-brand-600 group-hover:text-white transition-colors"
                  >
                    Explore More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg bg-white hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-6">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Google Ads & PPC
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Instant results with optimized ad campaigns. Maximum ROI
                    with minimal ad spend.
                  </p>
                  <Button
                    variant="outline"
                    className="group-hover:bg-brand-600 group-hover:text-white transition-colors"
                  >
                    Explore More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg bg-white hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Social Media Marketing
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Build engaged communities and viral content across all
                    social platforms.
                  </p>
                  <Button
                    variant="outline"
                    className="group-hover:bg-brand-600 group-hover:text-white transition-colors"
                  >
                    Explore More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg bg-white hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-6">
                    <PenTool className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Content Creation & Blogging
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Compelling content that educates, engages, and converts your
                    ideal customers.
                  </p>
                  <Button
                    variant="outline"
                    className="group-hover:bg-brand-600 group-hover:text-white transition-colors"
                  >
                    Explore More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg bg-white hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center mb-6">
                    <Monitor className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Web Design & Landing Pages
                  </h3>
                  <p className="text-gray-600 mb-6">
                    High-converting websites and landing pages that turn
                    visitors into customers.
                  </p>
                  <Button
                    variant="outline"
                    className="group-hover:bg-brand-600 group-hover:text-white transition-colors"
                  >
                    Explore More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg bg-white hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center mb-6">
                    <Megaphone className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Lead Generation Campaigns
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Fill your sales pipeline with qualified leads ready to buy
                    your products or services.
                  </p>
                  <Button
                    variant="outline"
                    className="group-hover:bg-brand-600 group-hover:text-white transition-colors"
                  >
                    Explore More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* SECTION 4: Results & Client Wins */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold font-display text-gray-900 mb-6">
                Real Results for{" "}
                <span className="text-brand-600">Real Businesses</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Don't just take our word for it. See the incredible
                transformations we've delivered for businesses just like yours.
              </p>
            </div>

            {/* Stats */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="text-center p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl">
                <div className="text-4xl md:text-6xl font-bold text-green-600 mb-2">
                  350%
                </div>
                <div className="text-lg font-semibold text-gray-700">
                  Average ROI
                </div>
                <div className="text-gray-600">Across all campaigns</div>
              </div>
              <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl">
                <div className="text-4xl md:text-6xl font-bold text-blue-600 mb-2">
                  10X
                </div>
                <div className="text-lg font-semibold text-gray-700">
                  Traffic Growth
                </div>
                <div className="text-gray-600">Organic search results</div>
              </div>
              <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl">
                <div className="text-4xl md:text-6xl font-bold text-purple-600 mb-2">
                  #1
                </div>
                <div className="text-lg font-semibold text-gray-700">
                  Google Rankings
                </div>
                <div className="text-gray-600">For target keywords</div>
              </div>
            </div>

            {/* Testimonials */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic">
                    "Extin Media transformed our online presence completely. Our
                    sales increased by 400% in just 6 months!"
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center mr-4">
                      <span className="font-bold text-brand-600">RK</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">
                        Rajesh Kumar
                      </div>
                      <div className="text-gray-600 text-sm">
                        CEO, TechStart Solutions
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic">
                    "Best ROI we've ever seen from any marketing agency.
                    Professional, results-driven, and transparent."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center mr-4">
                      <span className="font-bold text-brand-600">PS</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">
                        Priya Sharma
                      </div>
                      <div className="text-gray-600 text-sm">
                        Founder, Fashion Hub
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic">
                    "From page 3 to #1 on Google in 4 months. Their SEO
                    expertise is unmatched in Hyderabad."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center mr-4">
                      <span className="font-bold text-brand-600">AM</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">
                        Arjun Mehta
                      </div>
                      <div className="text-gray-600 text-sm">
                        Director, Health Plus Clinic
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* SECTION 5: Local SEO Section */}
        <section className="py-20 bg-gradient-to-br from-brand-50 to-purple-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold font-display text-gray-900 mb-6">
                Trusted by{" "}
                <span className="text-brand-600">
                  Hyderabad's Leading Brands
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                As the top digital marketing company in Hyderabad, we serve
                businesses across all major areas with proven expertise and
                local market knowledge.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Areas We Serve in Hyderabad:
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    "Banjara Hills",
                    "Gachibowli",
                    "Madhapur",
                    "Jubilee Hills",
                    "Hitec City",
                    "Kondapur",
                    "Kukatpally",
                    "Secunderabad",
                  ].map((area) => (
                    <div
                      key={area}
                      className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm"
                    >
                      <MapPin className="h-5 w-5 text-brand-600" />
                      <span className="font-medium text-gray-700">{area}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-white rounded-xl shadow-lg">
                  <h4 className="text-lg font-bold text-gray-900 mb-3">
                    Why Choose Local SEO Experts?
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-600">
                        Deep understanding of Hyderabad market
                      </span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-600">
                        Local keyword optimization strategies
                      </span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-600">
                        Google My Business optimization
                      </span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-600">
                        Local citation building and management
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-white p-8 rounded-2xl shadow-xl">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Ready to Dominate Hyderabad's Digital Market?
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Get a free audit of your current digital presence and
                    discover untapped opportunities.
                  </p>
                  <Button
                    size="lg"
                    className="bg-brand-600 hover:bg-brand-700 text-white px-8 py-4 text-lg font-semibold rounded-xl w-full"
                  >
                    <Target className="mr-2 h-5 w-5" />
                    Get Your Free Hyderabad Market Analysis
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6: CTA Banner */}
        <section className="py-20 bg-gradient-to-r from-brand-600 to-purple-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-6">
                Let's 10X Your{" "}
                <span className="text-yellow-300">Online Growth</span> Today!
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Stop losing customers to competitors. Get a custom digital
                marketing strategy that actually works and delivers measurable
                results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white hover:bg-gray-100 text-brand-600 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Zap className="mr-2 h-5 w-5" />
                  Schedule Your Free Growth Session
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-brand-600 px-8 py-4 text-lg font-semibold rounded-xl"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now: +91-9876543210
                </Button>
              </div>

              <div className="mt-8 flex justify-center items-center gap-6 text-blue-100">
                <span className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  No Long-term Contracts
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  30-Day Money Back Guarantee
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  Free Strategy Session
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 7: Contact Form + Map */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold font-display text-gray-900 mb-6">
                Get In Touch With{" "}
                <span className="text-brand-600">Digital Experts</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Visit us or drop a message. We reply within 1 hour! Let's
                discuss how we can accelerate your business growth.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="border-0 shadow-xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Send Us a Message
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Input
                        type="text"
                        name="name"
                        placeholder="Your Full Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="h-12 text-lg"
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        name="email"
                        placeholder="Your Email Address"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="h-12 text-lg"
                      />
                    </div>
                    <div>
                      <Textarea
                        name="message"
                        placeholder="Tell us about your business and marketing goals..."
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        className="min-h-32 text-lg"
                      />
                    </div>
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-brand-600 hover:bg-brand-700 text-white py-4 text-lg font-semibold"
                    >
                      <Mail className="mr-2 h-5 w-5" />
                      Send Message & Get Free Consultation
                    </Button>
                  </form>

                  <div className="mt-8 pt-8 border-t border-gray-200">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center gap-3">
                        <Phone className="h-5 w-5 text-brand-600" />
                        <div>
                          <div className="font-semibold text-gray-900">
                            Call Us
                          </div>
                          <div className="text-gray-600">+91-9876543210</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail className="h-5 w-5 text-brand-600" />
                        <div>
                          <div className="font-semibold text-gray-900">
                            Email Us
                          </div>
                          <div className="text-gray-600">
                            hello@extinmedia.com
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Map & Office Info */}
              <div className="space-y-8">
                <Card className="border-0 shadow-xl">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">
                      Visit Our Office
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <MapPin className="h-6 w-6 text-brand-600 mt-1" />
                        <div>
                          <div className="font-semibold text-gray-900">
                            Extin Media Headquarters
                          </div>
                          <div className="text-gray-600">
                            Plot No. 123, Road No. 36,
                            <br />
                            Jubilee Hills, Hyderabad,
                            <br />
                            Telangana 500033, India
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <Phone className="h-5 w-5 text-brand-600" />
                        <div>
                          <div className="font-semibold text-gray-900">
                            Phone
                          </div>
                          <div className="text-gray-600">+91-9876543210</div>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <Mail className="h-5 w-5 text-brand-600" />
                        <div>
                          <div className="font-semibold text-gray-900">
                            Email
                          </div>
                          <div className="text-gray-600">
                            hello@extinmedia.com
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Embedded Map Placeholder */}
                <div className="bg-gray-200 rounded-xl h-64 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <MapPin className="h-12 w-12 mx-auto mb-2" />
                    <div className="font-semibold">Google Map</div>
                    <div className="text-sm">Jubilee Hills, Hyderabad</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 8: Footer */}
        <footer className="bg-gray-900 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 mb-12">
              <div className="col-span-2">
                <div className="text-2xl font-bold font-display text-brand-400 mb-4">
                  Extin Media
                </div>
                <p className="text-gray-300 mb-6 max-w-md">
                  Hyderabad's #1 Digital Marketing Agency. We help businesses
                  grow online with proven strategies and measurable results.
                </p>
                <div className="flex space-x-4">
                  <div className="w-10 h-10 bg-brand-600 rounded-lg flex items-center justify-center hover:bg-brand-500 transition-colors cursor-pointer">
                    <span className="text-white font-bold">Li</span>
                  </div>
                  <div className="w-10 h-10 bg-brand-600 rounded-lg flex items-center justify-center hover:bg-brand-500 transition-colors cursor-pointer">
                    <span className="text-white font-bold">Ig</span>
                  </div>
                  <div className="w-10 h-10 bg-brand-600 rounded-lg flex items-center justify-center hover:bg-brand-500 transition-colors cursor-pointer">
                    <span className="text-white font-bold">Yt</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-brand-400 transition-colors"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-brand-400 transition-colors"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-brand-400 transition-colors"
                    >
                      Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-brand-400 transition-colors"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Services</h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-brand-400 transition-colors"
                    >
                      SEO Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-brand-400 transition-colors"
                    >
                      Google Ads
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-brand-400 transition-colors"
                    >
                      Social Media
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-brand-400 transition-colors"
                    >
                      Web Design
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-800 pt-8 text-center">
              <p className="text-gray-400">
                © 2025 Extin Media. All rights reserved. | Best Digital
                Marketing Agency in Hyderabad
              </p>
            </div>
          </div>
        </footer>

        {/* Sticky CTA Button (Mobile) */}
        <div className="fixed bottom-4 left-4 right-4 z-50 md:hidden">
          <Button
            size="lg"
            className="w-full bg-brand-600 hover:bg-brand-700 text-white py-4 text-lg font-semibold rounded-xl shadow-2xl"
          >
            <Zap className="mr-2 h-5 w-5" />
            Get Free Marketing Audit
          </Button>
        </div>
      </div>
    </>
  );
};

export default Index;
