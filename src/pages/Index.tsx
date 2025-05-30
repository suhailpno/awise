
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Users, Target, Award, Mail, Phone, Linkedin, Star, Quote, Globe, Heart, TrendingUp, BookOpen, Calendar, User } from "lucide-react";
import { useState, useEffect } from "react";

const Index = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white overflow-x-hidden font-sans">
      {/* Enhanced Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-2xl shadow-slate-900/10 border-b border-slate-200/50' 
          : 'bg-white/80 backdrop-blur-xl border-b border-slate-200/30'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-4 group cursor-pointer">
              <div className="relative">
                <img 
                  src="https://i.postimg.cc/1R6VW285/Made-with-ins-Mind-Whats-App-Image-2025-05-30-at-4-37-49-PM-removebg-preview.png" 
                  alt="Academia Wise" 
                  className="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">Academia Wise</span>
            </div>
            
            <div className="hidden lg:flex space-x-8">
              {[
                { name: 'Home', id: 'home' },
                { name: 'About', id: 'about' },
                { name: 'Services', id: 'services' },
                { name: 'Insights', id: 'insights' },
                { name: 'Leadership Team', id: 'leadership' },
                { name: 'Contact', id: 'contact' }
              ].map((item) => (
                <button 
                  key={item.id}
                  onClick={() => scrollToSection(item.id)} 
                  className="relative text-slate-700 hover:text-slate-900 transition-all duration-300 font-medium px-4 py-2 rounded-lg hover:bg-slate-50 group"
                >
                  {item.name}
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </button>
              ))}
            </div>

            <Button 
              onClick={() => scrollToSection('contact')}
              className="hidden md:flex bg-gradient-to-r from-slate-900 to-slate-800 hover:from-slate-800 hover:to-slate-700 text-white px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Let's Talk
            </Button>
          </div>
        </div>
      </nav>

      {/* Premium Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-900/20 via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.1)_50%,transparent_75%,transparent_100%)] animate-pulse"></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-amber-400 rounded-full animate-ping opacity-75"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-blue-400 rounded-full animate-ping opacity-50" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping opacity-60" style={{ animationDelay: '2s' }}></div>
        
        <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
          <div className="space-y-12 animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight tracking-tight">
              Where Vision{" "}
              <span className="font-serif italic bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent">
                Meets
              </span>{" "}
              Leadership
            </h1>
            
            <p className="text-2xl md:text-3xl text-slate-200 mb-12 font-light tracking-wide leading-relaxed">
              At Academia Wise, we help you build the future—
              <span className="text-amber-400 font-medium"> one executive at a time</span>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                onClick={() => scrollToSection('services')}
                className="group bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-900 px-12 py-6 text-xl font-semibold rounded-full transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-amber-500/25 border-0"
              >
                Find Leaders 
                <ArrowRight className="ml-3 h-6 w-6 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              
              <Button 
                onClick={() => scrollToSection('contact')}
                variant="outline"
                className="group border-2 border-white/30 text-white hover:bg-white hover:text-slate-900 px-12 py-6 text-xl font-semibold rounded-full transition-all duration-500 transform hover:scale-110 bg-transparent"
              >
                Talk to Our Experts
                <ArrowRight className="ml-3 h-6 w-6 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Enhanced About Us */}
      <section id="about" className="py-32 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-6 tracking-tight">
              Executive Search with{" "}
              <span className="font-serif italic text-amber-600">Insight, Integrity, and Impact</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto mb-12 rounded-full"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-20 items-center mb-20">
            <div className="space-y-8">
              <div className="space-y-6 text-xl text-slate-700 leading-relaxed">
                <p className="text-2xl font-light text-slate-800 mb-8">
                  In a world where leadership determines success, Academia Wise delivers transformative talent solutions.
                </p>
                <p>
                  We partner with global companies to identify, assess, and place executive talent that drives real business impact.
                </p>
                <p>
                  With a human-first approach and a trusted international network, we go beyond the résumé to understand character, vision, and alignment.
                </p>
              </div>
            </div>
            
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-blue-500/20 rounded-3xl blur-3xl group-hover:blur-2xl transition-all duration-500"></div>
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop" 
                alt="Executive leadership meeting" 
                className="relative rounded-3xl shadow-2xl group-hover:shadow-3xl transition-all duration-500 transform group-hover:-translate-y-2"
              />
            </div>
          </div>

          {/* Animated Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Executive Placements", sublabel: "Successful C-suite hires" },
              { number: "25", label: "Industries Served", sublabel: "Across global markets" },
              { number: "98%", label: "Success Rate", sublabel: "Within 90 days" },
              { number: "15+", label: "Years Experience", sublabel: "In executive search" }
            ].map((stat, index) => (
              <div key={index} className="text-center group cursor-pointer">
                <div className="text-4xl md:text-5xl font-bold text-amber-600 group-hover:scale-110 transition-transform duration-300 mb-4">
                  {stat.number}
                </div>
                <div className="text-slate-900 font-semibold mb-2 text-lg">{stat.label}</div>
                <div className="text-slate-600 text-sm leading-relaxed">{stat.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Services */}
      <section id="services" className="py-32 bg-gradient-to-b from-slate-50 to-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-6 tracking-tight">
              Tailored Services for{" "}
              <span className="font-serif italic text-amber-600">Leadership Excellence</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto mb-8 rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Executive Search",
                description: "Precision hiring for C-level and VP roles. We identify visionary leaders who align with your strategic objectives and company culture.",
                color: "from-blue-500 to-blue-600"
              },
              {
                icon: Target,
                title: "Leadership Advisory",
                description: "Board structuring, succession planning & market intelligence. Strategic guidance for building resilient leadership teams.",
                color: "from-amber-500 to-amber-600"
              },
              {
                icon: Award,
                title: "Talent Mapping & Benchmarking",
                description: "Data-backed insights to futureproof your team. Comprehensive market analysis and competitive talent intelligence.",
                color: "from-emerald-500 to-emerald-600"
              }
            ].map((service, index) => (
              <Card key={index} className="group bg-white/70 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 border-0 rounded-3xl overflow-hidden transform hover:-translate-y-4">
                <CardContent className="p-12 text-center relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className={`relative w-24 h-24 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                    <service.icon className="h-12 w-12 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-slate-900 mb-6 group-hover:text-amber-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-600 leading-relaxed text-lg group-hover:text-slate-700 transition-colors duration-300">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-900/10 via-transparent to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Why Choose Academia Wise
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto mb-8 rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: Globe,
                title: "Global Network",
                description: "Access to undiscovered, high-impact talent worldwide through our extensive international partnerships.",
                color: "from-blue-500 to-blue-600"
              },
              {
                icon: Heart,
                title: "Value Alignment",
                description: "We deliver people who reflect your company's ethos and long-term vision for sustainable growth.",
                color: "from-amber-500 to-amber-600"
              },
              {
                icon: TrendingUp,
                title: "Beyond Recruitment",
                description: "Long-term leadership growth partnerships, not just placements. We invest in your success.",
                color: "from-emerald-500 to-emerald-600"
              }
            ].map((feature, index) => (
              <div key={index} className="text-center group">
                <div className={`w-20 h-20 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <feature.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-amber-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-slate-300 leading-relaxed text-lg group-hover:text-slate-200 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section id="insights" className="py-32 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-6 tracking-tight">
              Thought Leadership on the{" "}
              <span className="font-serif italic text-amber-600">Future of Work</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto mb-8 rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "The Cost of a Bad C-Suite Hire",
                excerpt: "Understanding the financial and cultural impact of executive mis-hires and how to avoid them.",
                readTime: "8 min read",
                category: "Executive Strategy"
              },
              {
                title: "Hiring for Vision in 2025",
                excerpt: "What forward-thinking companies look for in their next generation of leaders.",
                readTime: "6 min read",
                category: "Future Trends"
              },
              {
                title: "Building Diverse Leadership Teams",
                excerpt: "The competitive advantage of inclusive executive teams in global markets.",
                readTime: "10 min read",
                category: "Diversity & Inclusion"
              }
            ].map((article, index) => (
              <Card key={index} className="group bg-white shadow-xl hover:shadow-2xl transition-all duration-500 border-0 rounded-3xl overflow-hidden transform hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-amber-600 text-sm font-semibold">{article.category}</span>
                    <span className="text-slate-500 text-sm">{article.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-amber-600 transition-colors duration-300">
                    {article.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    {article.excerpt}
                  </p>
                  <button className="text-amber-600 font-semibold hover:text-amber-700 transition-colors duration-300 flex items-center group">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Button className="bg-gradient-to-r from-slate-900 to-slate-800 hover:from-slate-800 hover:to-slate-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Explore All Insights
            </Button>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section id="leadership" className="py-32 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-6 tracking-tight">
              Meet Our{" "}
              <span className="font-serif italic text-amber-600">Leadership Team</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Our team combines decades of executive search experience with deep industry knowledge.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Mitchell",
                role: "Managing Partner & CEO",
                bio: "20+ years in executive search with expertise in C-suite placements across Fortune 500 companies.",
                image: "https://images.unsplash.com/photo-1494790108755-2616b612b602?w=400&h=400&fit=crop&crop=face"
              },
              {
                name: "David Chen",
                role: "Partner, Technology & Innovation",
                bio: "Former tech executive turned search consultant specializing in digital transformation leaders.",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
              },
              {
                name: "Elena Rodriguez",
                role: "Partner, Global Markets",
                bio: "International business leader with extensive network across emerging markets and multinational corporations.",
                image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face"
              }
            ].map((member, index) => (
              <Card key={index} className="group bg-white shadow-xl hover:shadow-2xl transition-all duration-500 border-0 rounded-3xl overflow-hidden transform hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  <div className="relative mx-auto mb-6 w-32 h-32 overflow-hidden rounded-2xl">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{member.name}</h3>
                  <p className="text-amber-600 font-semibold mb-4">{member.role}</p>
                  <p className="text-slate-600 leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Testimonials */}
      <section className="py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-amber-900/10 via-transparent to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Trusted by Global Leaders
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto mb-8 rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                quote: "Academia Wise brought a level of insight and precision we've never seen in any search partner. They understood our business better than we did.",
                author: "Michael Thompson",
                position: "Chief People Officer, Fintech Unicorn",
                company: "TechFlow Systems"
              },
              {
                quote: "The caliber of candidates and the strategic approach to our executive search was exceptional. They delivered exactly what we needed when we needed it.",
                author: "Dr. Amanda Foster",
                position: "Board Chair & Former CEO",
                company: "Global Healthcare Innovations"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="group bg-white/10 backdrop-blur-sm border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500 rounded-3xl transform hover:-translate-y-2">
                <CardContent className="p-10 relative">
                  <div className="absolute top-6 right-6 text-amber-400/30 group-hover:text-amber-400/50 transition-colors duration-300">
                    <Quote className="h-16 w-16" />
                  </div>
                  
                  <div className="flex mb-8">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-6 w-6 text-amber-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-white mb-8 italic leading-relaxed text-xl group-hover:text-slate-100 transition-colors duration-300">
                    "{testimonial.quote}"
                  </p>
                  
                  <div>
                    <div className="font-bold text-white text-xl mb-1">{testimonial.author}</div>
                    <div className="text-amber-400 text-lg mb-1">{testimonial.position}</div>
                    <div className="text-slate-300 text-sm">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Contact Section */}
      <section id="contact" className="py-32 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-6 tracking-tight">
              Let's Build Your{" "}
              <span className="font-serif italic text-amber-600">Leadership Together</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Ready to transform your organization with exceptional leadership talent? Let's start the conversation.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-12">
              <h3 className="text-3xl font-bold text-slate-900 mb-8">Get in Touch</h3>
              
              <div className="space-y-8">
                {[
                  { icon: Mail, label: "Email", value: "contact@academiawise.com", color: "from-blue-500 to-blue-600" },
                  { icon: Phone, label: "Phone", value: "+1 (555) 123-4567", color: "from-emerald-500 to-emerald-600" },
                  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/company/academia-wise", color: "from-amber-500 to-amber-600" }
                ].map((contact, index) => (
                  <div key={index} className="flex items-center space-x-6 group">
                    <div className={`w-16 h-16 bg-gradient-to-r ${contact.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <contact.icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <div className="text-slate-900 font-semibold text-lg">{contact.label}</div>
                      <div className="text-slate-600 text-lg hover:text-slate-900 transition-colors duration-300 cursor-pointer">
                        {contact.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-slate-50 rounded-3xl p-10 border border-slate-200 shadow-xl">
              <h3 className="text-3xl font-bold text-slate-900 mb-8">Start a Conversation</h3>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Input 
                    placeholder="First Name" 
                    className="bg-white border-slate-300 text-slate-900 placeholder:text-slate-500 rounded-xl h-14 text-lg focus:border-amber-500 focus:ring-amber-500 transition-all duration-300"
                  />
                  <Input 
                    placeholder="Last Name" 
                    className="bg-white border-slate-300 text-slate-900 placeholder:text-slate-500 rounded-xl h-14 text-lg focus:border-amber-500 focus:ring-amber-500 transition-all duration-300"
                  />
                </div>
                <Input 
                  type="email" 
                  placeholder="Email Address" 
                  className="bg-white border-slate-300 text-slate-900 placeholder:text-slate-500 rounded-xl h-14 text-lg focus:border-amber-500 focus:ring-amber-500 transition-all duration-300"
                />
                <Input 
                  placeholder="Company" 
                  className="bg-white border-slate-300 text-slate-900 placeholder:text-slate-500 rounded-xl h-14 text-lg focus:border-amber-500 focus:ring-amber-500 transition-all duration-300"
                />
                <Input 
                  placeholder="Your Role" 
                  className="bg-white border-slate-300 text-slate-900 placeholder:text-slate-500 rounded-xl h-14 text-lg focus:border-amber-500 focus:ring-amber-500 transition-all duration-300"
                />
                <Textarea 
                  placeholder="Tell us about your leadership hiring needs..." 
                  rows={6}
                  className="bg-white border-slate-300 text-slate-900 placeholder:text-slate-500 rounded-xl text-lg resize-none focus:border-amber-500 focus:ring-amber-500 transition-all duration-300"
                />
                <Button className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-900 font-bold py-4 text-lg rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-amber-500/25 group">
                  Send Message 
                  <ArrowRight className="ml-3 h-6 w-6 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Footer */}
      <footer className="bg-black py-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
            <div className="flex items-center space-x-4 group">
              <img 
                src="https://i.postimg.cc/1R6VW285/Made-with-ins-Mind-Whats-App-Image-2025-05-30-at-4-37-49-PM-removebg-preview.png" 
                alt="Academia Wise" 
                className="h-10 w-auto transition-transform duration-300 group-hover:scale-105"
              />
              <span className="text-xl font-bold text-white">Academia Wise</span>
            </div>
            
            <div className="flex space-x-8">
              {[
                { name: 'About', id: 'about' },
                { name: 'Services', id: 'services' },
                { name: 'Insights', id: 'insights' },
                { name: 'Contact', id: 'contact' }
              ].map((item) => (
                <button 
                  key={item.id}
                  onClick={() => scrollToSection(item.id)} 
                  className="text-slate-400 hover:text-white transition-colors duration-300 font-medium relative group"
                >
                  {item.name}
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </button>
              ))}
            </div>
            
            <div className="text-slate-400 text-sm">
              © 2024 Academia Wise. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
