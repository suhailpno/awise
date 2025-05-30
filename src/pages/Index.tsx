
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Users, Target, Award, Mail, Phone, Linkedin } from "lucide-react";

const Index = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <img 
                src="https://i.postimg.cc/1R6VW285/Made-with-ins-Mind-Whats-App-Image-2025-05-30-at-4-37-49-PM-removebg-preview.png" 
                alt="Academia Wise" 
                className="h-10 w-auto"
              />
              <span className="text-xl font-bold text-slate-900">Academia Wise</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('about')} className="text-slate-600 hover:text-slate-900 transition-colors">About</button>
              <button onClick={() => scrollToSection('services')} className="text-slate-600 hover:text-slate-900 transition-colors">Services</button>
              <button onClick={() => scrollToSection('why-choose')} className="text-slate-600 hover:text-slate-900 transition-colors">Why Choose Us</button>
              <button onClick={() => scrollToSection('contact')} className="text-slate-600 hover:text-slate-900 transition-colors">Contact</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Academia <span className="text-amber-400">Wise</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-200 mb-8 font-light">
            Empowering growth through executive talent.
          </p>
          <p className="text-lg text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            At Academia Wise, we specialize in executive search—connecting companies with the right professionals to drive growth and success.
          </p>
          <Button 
            onClick={() => scrollToSection('contact')}
            className="bg-amber-500 hover:bg-amber-600 text-slate-900 px-8 py-4 text-lg font-semibold rounded-none transition-all duration-300 transform hover:scale-105"
          >
            Let's Talk <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">About Academia Wise</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto mb-8"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-6">Our Mission</h3>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                In today's rapidly evolving world, great talent is more competitive and harder to find than ever. Academia Wise steps in where internal recruitment efforts reach their limits.
              </p>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                We use targeted outreach strategies and a trusted network of partners to uncover high-caliber candidates others might miss.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                We go beyond traditional recruitment by focusing on long-term alignment with a client's vision, values, and goals.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop" 
                alt="Executive team meeting" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Services</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto mb-8"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive executive search solutions tailored to your organization's unique needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border-0">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Executive Search</h3>
                <p className="text-slate-600 leading-relaxed">
                  Strategic identification and recruitment of C-suite executives, senior leaders, and board members who align with your company's vision and culture.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border-0">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Talent Advisory</h3>
                <p className="text-slate-600 leading-relaxed">
                  Strategic consulting on organizational structure, compensation benchmarking, and succession planning to optimize your leadership team.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border-0">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Leadership Hiring</h3>
                <p className="text-slate-600 leading-relaxed">
                  Specialized recruitment for director-level and VP positions, ensuring seamless integration with your existing leadership structure.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-choose" className="py-20 bg-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Why Choose Academia Wise</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto mb-8"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-400 mb-4">95%</div>
              <div className="text-white font-semibold mb-2">Success Rate</div>
              <div className="text-slate-300 text-sm">Successful placements within 90 days</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-400 mb-4">500+</div>
              <div className="text-white font-semibold mb-2">Executive Placements</div>
              <div className="text-slate-300 text-sm">Across various industries</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-400 mb-4">15+</div>
              <div className="text-white font-semibold mb-2">Years Experience</div>
              <div className="text-slate-300 text-sm">In executive recruitment</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-400 mb-4">100%</div>
              <div className="text-white font-semibold mb-2">Confidential</div>
              <div className="text-slate-300 text-sm">Discrete search process</div>
            </div>
          </div>
          
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-white mb-4">Targeted Outreach</h3>
              <p className="text-slate-300">
                We use advanced research and networking to identify passive candidates who aren't actively seeking new opportunities.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-white mb-4">Cultural Alignment</h3>
              <p className="text-slate-300">
                Beyond skills and experience, we ensure candidates align with your company's culture and long-term vision.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-white mb-4">Strategic Partnership</h3>
              <p className="text-slate-300">
                We become an extension of your team, providing ongoing support throughout the recruitment and onboarding process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Client Testimonials</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto mb-8"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-slate-50 border-0 shadow-lg">
              <CardContent className="p-8">
                <p className="text-slate-600 mb-6 italic leading-relaxed">
                  "Academia Wise found us the perfect CEO who transformed our company culture and drove unprecedented growth. Their understanding of our needs was exceptional."
                </p>
                <div className="font-semibold text-slate-900">Sarah Johnson</div>
                <div className="text-slate-500 text-sm">Board Chair, TechCorp</div>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-50 border-0 shadow-lg">
              <CardContent className="p-8">
                <p className="text-slate-600 mb-6 italic leading-relaxed">
                  "The quality of candidates presented by Academia Wise was outstanding. They saved us months of searching and delivered exactly what we needed."
                </p>
                <div className="font-semibold text-slate-900">Michael Chen</div>
                <div className="text-slate-500 text-sm">HR Director, InnovateLabs</div>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-50 border-0 shadow-lg">
              <CardContent className="p-8">
                <p className="text-slate-600 mb-6 italic leading-relaxed">
                  "Their strategic approach to executive search is unmatched. Academia Wise doesn't just fill positions—they build leadership teams that drive success."
                </p>
                <div className="font-semibold text-slate-900">Emma Rodriguez</div>
                <div className="text-slate-500 text-sm">Founder, GrowthPartners</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Let's Find Your Next Leader</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto mb-8"></div>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Ready to transform your organization with exceptional leadership talent? Get in touch with our team today.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-8">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center">
                    <Mail className="h-6 w-6 text-slate-900" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Email</div>
                    <div className="text-slate-300">contact@academiawise.com</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center">
                    <Phone className="h-6 w-6 text-slate-900" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Phone</div>
                    <div className="text-slate-300">+1 (555) 123-4567</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center">
                    <Linkedin className="h-6 w-6 text-slate-900" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">LinkedIn</div>
                    <div className="text-slate-300">linkedin.com/company/academia-wise</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-white mb-8">Send us a Message</h3>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input 
                    placeholder="First Name" 
                    className="bg-white/10 border-white/20 text-white placeholder:text-slate-400"
                  />
                  <Input 
                    placeholder="Last Name" 
                    className="bg-white/10 border-white/20 text-white placeholder:text-slate-400"
                  />
                </div>
                <Input 
                  type="email" 
                  placeholder="Email Address" 
                  className="bg-white/10 border-white/20 text-white placeholder:text-slate-400"
                />
                <Input 
                  placeholder="Company" 
                  className="bg-white/10 border-white/20 text-white placeholder:text-slate-400"
                />
                <Textarea 
                  placeholder="Tell us about your hiring needs..." 
                  rows={4}
                  className="bg-white/10 border-white/20 text-white placeholder:text-slate-400"
                />
                <Button className="w-full bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold py-3">
                  Send Message <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <img 
                src="https://i.postimg.cc/1R6VW285/Made-with-ins-Mind-Whats-App-Image-2025-05-30-at-4-37-49-PM-removebg-preview.png" 
                alt="Academia Wise" 
                className="h-8 w-auto"
              />
              <span className="text-lg font-bold text-white">Academia Wise</span>
            </div>
            
            <div className="flex space-x-8 mb-4 md:mb-0">
              <button onClick={() => scrollToSection('about')} className="text-slate-400 hover:text-white transition-colors">About</button>
              <button onClick={() => scrollToSection('services')} className="text-slate-400 hover:text-white transition-colors">Services</button>
              <button onClick={() => scrollToSection('contact')} className="text-slate-400 hover:text-white transition-colors">Contact</button>
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
