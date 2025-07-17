"use client"

import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Clock, Shield, Navigation, CreditCard, Truck, Smartphone, DollarSign, Users, Globe, Phone, Mail, MessageCircle, CheckCircle, Star, Zap, Leaf } from "lucide-react"
import Header from "@/components/Header"
import { Hero } from "@/components/Hero"
import { Map } from "@/components/Map"
import { Footer } from "@/components/Footer"

export default function ParkingApp() {
  
  return (
    <div className="min-h-screen bg-white text-black">
      <Header />
      <Hero />
      
      {/* Key Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Key Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need for seamless parking experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Real-Time Availability</h3>
                <p className="text-gray-600 mb-4">Instantly view available parking spots in your area with live updates.</p>
                <ul className="text-sm text-gray-500 space-y-2 text-left">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Live updates minimize search time</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Reserve spots ahead of arrival</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                  <Navigation className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Time-Saving Navigation</h3>
                <p className="text-gray-600 mb-4">Integrated maps and GPS routing to direct you to the nearest open spot.</p>
                <ul className="text-sm text-gray-500 space-y-2 text-left">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Avoid traffic with smart routing</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Parking history saved</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                  <CreditCard className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Safe & Secure Payments</h3>
                <p className="text-gray-600 mb-4">Accepts all major credit cards, mobile money, and digital wallets.</p>
                <ul className="text-sm text-gray-500 space-y-2 text-left">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>PCI-compliant transactions</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Optional auto-payment</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                  <Truck className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">24/7 Towing Support</h3>
                <p className="text-gray-600 mb-4">Reliable towing services for unauthorized vehicles and emergencies.</p>
                <ul className="text-sm text-gray-500 space-y-2 text-left">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Fast dispatch service</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Transparent fees</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                  <Smartphone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Mobile-First Experience</h3>
                <p className="text-gray-600 mb-4">Fully optimized for mobile use with quick onboarding.</p>
                <ul className="text-sm text-gray-500 space-y-2 text-left">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Intuitive interface</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Multilingual support</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                  <DollarSign className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Affordable Pricing</h3>
                <p className="text-gray-600 mb-4">Competitive rates with discounts for recurring users.</p>
                <ul className="text-sm text-gray-500 space-y-2 text-left">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Competitive hourly rates</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>First-time user coupons</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Richo Parking Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Richo Parking?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We&apos;re revolutionizing urban parking with smart technology that saves you time, money, and stress.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Convenience</h3>
                <p className="text-gray-600">Find and book parking in seconds with our streamlined process.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Transparency</h3>
                <p className="text-gray-600">No hidden fees or unpredictable pricing - what you see is what you pay.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Coverage</h3>
                <p className="text-gray-600">Servicing urban areas with high parking demand across the city.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Safety</h3>
                <p className="text-gray-600">Well-lit, monitored lots with security personnel in many locations.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Towing Services Section */}
      <section id="towing" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Towing Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional towing and vehicle management services available 24/7
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Private Property Enforcement</h3>
                <p className="text-gray-600">Protect your lot from unauthorized vehicles with our enforcement services.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                  <Truck className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Abandoned Vehicle Removal</h3>
                <p className="text-gray-600">Clear clutter and eyesores from your space with professional removal.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Emergency Towing</h3>
                <p className="text-gray-600">Fast response for breakdowns or accidents with 24/7 availability.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Storage Services</h3>
                <p className="text-gray-600">Secure vehicle storage with fair daily rates for impounded vehicles.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Operational Highlights Section */}
      <section id="operations" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Operational Highlights</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to know about our services and support
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Coverage Map</h3>
                <p className="text-gray-600">Interactive map showing all areas covered by our parking services.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">24/7 Service</h3>
                <p className="text-gray-600">Round-the-clock availability for parking and towing services.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Customer Support</h3>
                <p className="text-gray-600">Hotline, live chat, and email support for all your needs.</p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Methods */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Phone Support</h3>
              <p className="text-gray-600">24/7 hotline available</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Email Support</h3>
              <p className="text-gray-600">Quick response within hours</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Live Chat</h3>
              <p className="text-gray-600">Instant messaging support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Environmental & Social Impact Section */}
      <section id="impact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Environmental & Social Impact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Making cities smarter and more sustainable through efficient parking solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold">Smart Parking for Smart Cities</h3>
              <p className="text-lg text-gray-600">
                Richo Parking is more than just a parking app. We&apos;re building the infrastructure for smarter, more efficient
                cities. Our platform connects drivers with available parking spaces, reduces traffic congestion, and
                helps create more sustainable urban environments.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                  <span>Reduce traffic congestion by up to 30%</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                  <span>Lower carbon emissions through efficient routing</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                  <span>Support local businesses with increased foot traffic</span>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Leaf className="w-6 h-6 text-green-600" />
                  </div>
                  <h4 className="font-semibold mb-2">Environmental</h4>
                  <p className="text-sm text-gray-600">Reduce emissions and congestion</p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="font-semibold mb-2">Social</h4>
                  <p className="text-sm text-gray-600">Support local communities</p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-6 h-6 text-purple-600" />
                  </div>
                  <h4 className="font-semibold mb-2">Efficiency</h4>
                  <p className="text-sm text-gray-600">Optimize urban mobility</p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-6 h-6 text-orange-600" />
                  </div>
                  <h4 className="font-semibold mb-2">Innovation</h4>
                  <p className="text-sm text-gray-600">Smart city technology</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Map />
      <Footer />
    </div>
  )
}
