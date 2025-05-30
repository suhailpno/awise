
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Users, Target, Award, Mail, Phone, Linkedin, Star, Quote } from "lucide-react";

const Index = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-xl z-50 border-b border-slate-200/50 shadow-lg shadow-slate-900/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-4 group">
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
            <div className="hidden md:flex space-x-8">
              {[
                { name: 'About', id: 'about' },
                { name: 'Services', id: 'services' },
                { name: 'Why Choose Us', id: 'why-choose' },
                { name: 'Contact', id: 'contact' }
              ].map((item) => (
                <button 
                  key={item.id}
                  onClick={() => scrollToSection(item.id)} 
                  className="relative text-slate-700 hover:text-slate-900 transition-all duration-300 font-medium px-3 py-2 rounded-lg hover:bg-slate-100/50 group"
                >
                  {item.name}
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-900/20 via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.1)_50%,transparent_75%,transparent_100%)] animate-pulse"></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-amber-400 rounded-full animate-ping opacity-75"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-blue-400 rounded-full animate-ping opacity-50" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping opacity-60" style={{ animationDelay: '2s' }}></div>
        
        <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight tracking-tight">
              Academia{" "}
              <span className="bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent animate-pulse">
                Wise
              </span>
            </h1>
            
            <p className="text-2xl md:text-4xl text-slate-200 mb-8 font-light tracking-wide">
              Empowering growth through{" "}
              <span className="text-amber-400 font-medium">executive talent</span>.
            </p>
            
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-slate-300 mb-12 leading-relaxed font-light">
                At Academia Wise, we specialize in executive search—connecting companies with the right professionals to drive{" "}
                <span className="text-white font-medium">growth and success</span>.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                onClick={() => scrollToSection('contact')}
                className="group bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-900 px-10 py-6 text-xl font-semibold rounded-full transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-amber-500/25 border-0"
              >
                Let's Talk 
                <ArrowRight className="ml-3 h-6 w-6 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              
              <button 
                onClick={() => scrollToSection('about')}
                className="group text-white hover:text-amber-400 transition-all duration-300 font-medium text-lg border-b border-transparent hover:border-amber-400 pb-1"
              >
                Learn More
                <div className="w-0 group-hover:w-full h-0.5 bg-amber-400 transition-all duration-300 mt-1"></div>
              </button>
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

      {/* About Us */}
      <section id="about" className="py-32 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-100 opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <div className="inline-block">
              <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-6 tracking-tight">
                About Academia Wise
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto mb-8 rounded-full"></div>
            </div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <div className="group">
                <h3 className="text-3xl font-bold text-slate-900 mb-8 group-hover:text-amber-600 transition-colors duration-300">Our Mission</h3>
                <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
                  <p className="hover:text-slate-900 transition-colors duration-300">
                    In today's rapidly evolving world, great talent is more competitive and harder to find than ever. Academia Wise steps in where internal recruitment efforts reach their limits.
                  </p>
                  <p className="hover:text-slate-900 transition-colors duration-300">
                    We use targeted outreach strategies and a trusted network of partners to uncover high-caliber candidates others might miss.
                  </p>
                  <p className="hover:text-slate-900 transition-colors duration-300">
                    We go beyond traditional recruitment by focusing on long-term alignment with a client's vision, values, and goals.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-8 pt-8">
                {[
                  { number: "500+", label: "Placements" },
                  { number: "95%", label: "Success Rate" },
                  { number: "15+", label: "Years Experience" }
                ].map((stat, index) => (
                  <div key={index} className="text-center group cursor-pointer">
                    <div className="text-3xl font-bold text-amber-600 group-hover:scale-110 transition-transform duration-300">
                      {stat.number}
                    </div>
                    <div className="text-slate-600 font-medium mt-2">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-blue-500/20 rounded-3xl blur-3xl group-hover:blur-2xl transition-all duration-500"></div>
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop" 
                alt="Executive team meeting" 
                className="relative rounded-3xl shadow-2xl group-hover:shadow-3xl transition-all duration-500 transform group-hover:-translate-y-2"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-32 bg-gradient-to-b from-slate-50 to-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-6 tracking-tight">
              Our Services
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Comprehensive executive search solutions tailored to your organization's unique needs and strategic objectives.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Executive Search",
                description: "Strategic identification and recruitment of C-suite executives, senior leaders, and board members who align with your company's vision and culture.",
                color: "from-blue-500 to-blue-600"
              },
              {
                icon: Target,
                title: "Talent Advisory",
                description: "Strategic consulting on organizational structure, compensation benchmarking, and succession planning to optimize your leadership team.",
                color: "from-amber-500 to-amber-600"
              },
              {
                icon: Award,
                title: "Leadership Hiring",
                description: "Specialized recruitment for director-level and VP positions, ensuring seamless integration with your existing leadership structure.",
                color: "from-emerald-500 to-emerald-600"
              }
            ].map((service, index) => (
              <Card key={index} className="group bg-white/70 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 border-0 rounded-3xl overflow-hidden transform hover:-translate-y-4">
                <CardContent className="p-10 text-center relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className={`relative w-20 h-20 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                    <service.icon className="h-10 w-10 text-white" />
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
      <section id="why-choose" className="py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-900/10 via-transparent to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Why Choose Academia Wise
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto mb-8 rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {[
              { value: "95%", label: "Success Rate", sublabel: "Successful placements within 90 days" },
              { value: "500+", label: "Executive Placements", sublabel: "Across various industries" },
              { value: "15+", label: "Years Experience", sublabel: "In executive recruitment" },
              { value: "100%", label: "Confidential", sublabel: "Discrete search process" }
            ].map((stat, index) => (
              <div key={index} className="text-center group cursor-pointer">
                <div className="text-5xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-white font-semibold mb-2 text-xl">{stat.label}</div>
                <div className="text-slate-300 text-sm leading-relaxed">{stat.sublabel}</div>
              </div>
            ))}
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Targeted Outreach",
                description: "We use advanced research and networking to identify passive candidates who aren't actively seeking new opportunities."
              },
              {
                title: "Cultural Alignment",
                description: "Beyond skills and experience, we ensure candidates align with your company's culture and long-term vision."
              },
              {
                title: "Strategic Partnership",
                description: "We become an extension of your team, providing ongoing support throughout the recruitment and onboarding process."
              }
            ].map((feature, index) => (
              <div key={index} className="text-center group">
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

      {/* Testimonials */}
      <section className="py-32 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-6 tracking-tight">
              Client Testimonials
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto mb-8 rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "Academia Wise found us the perfect CEO who transformed our company culture and drove unprecedented growth. Their understanding of our needs was exceptional.",
                author: "Sarah Johnson",
                position: "Board Chair, TechCorp"
              },
              {
                quote: "The quality of candidates presented by Academia Wise was outstanding. They saved us months of searching and delivered exactly what we needed.",
                author: "Michael Chen",
                position: "HR Director, InnovateLabs"
              },
              {
                quote: "Their strategic approach to executive search is unmatched. Academia Wise doesn't just fill positions—they build leadership teams that drive success.",
                author: "Emma Rodriguez",
                position: "Founder, GrowthPartners"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="group bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 rounded-3xl transform hover:-translate-y-2">
                <CardContent className="p-10 relative">
                  <div className="absolute top-6 right-6 text-amber-400/20 group-hover:text-amber-400/40 transition-colors duration-300">
                    <Quote className="h-12 w-12" />
                  </div>
                  
                  <div className="flex mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-amber-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-slate-700 mb-8 italic leading-relaxed text-lg group-hover:text-slate-800 transition-colors duration-300">
                    "{testimonial.quote}"
                  </p>
                  
                  <div>
                    <div className="font-bold text-slate-900 text-lg">{testimonial.author}</div>
                    <div className="text-slate-500 text-sm mt-1">{testimonial.position}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-amber-900/10 via-transparent to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Let's Find Your Next Leader
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Ready to transform your organization with exceptional leadership talent? Get in touch with our team today.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-12">
              <h3 className="text-3xl font-bold text-white mb-8">Contact Information</h3>
              
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
                      <div className="text-white font-semibold text-lg">{contact.label}</div>
                      <div className="text-slate-300 text-lg hover:text-white transition-colors duration-300 cursor-pointer">
                        {contact.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-10 border border-white/10">
              <h3 className="text-3xl font-bold text-white mb-8">Send us a Message</h3>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Input 
                    placeholder="First Name" 
                    className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 rounded-xl h-14 text-lg focus:bg-white/20 transition-all duration-300"
                  />
                  <Input 
                    placeholder="Last Name" 
                    className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 rounded-xl h-14 text-lg focus:bg-white/20 transition-all duration-300"
                  />
                </div>
                <Input 
                  type="email" 
                  placeholder="Email Address" 
                  className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 rounded-xl h-14 text-lg focus:bg-white/20 transition-all duration-300"
                />
                <Input 
                  placeholder="Company" 
                  className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 rounded-xl h-14 text-lg focus:bg-white/20 transition-all duration-300"
                />
                <Textarea 
                  placeholder="Tell us about your hiring needs..." 
                  rows={6}
                  className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 rounded-xl text-lg resize-none focus:bg-white/20 transition-all duration-300"
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

      {/* Footer */}
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
