"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Clock, Shield, Smartphone, Menu, X } from "lucide-react"
import Image from "next/image"
import  ModelViewer  from "@/components/ui/mode"
import Header from "@/components/Header"
import { Hero } from "@/components/Hero"
import { Map } from "@/components/Map"
import { Footer } from "@/components/Footer"

export default function ParkingApp() {
  
  return (
    <div className="min-h-screen bg-white text-black">
      <Header />
      <Hero />
      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Eagle Parking?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're revolutionizing urban parking with smart technology that saves you time, money, and stress.
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Real-time Availability</h3>
                <p className="text-gray-600">See available parking spots in real-time and reserve them instantly.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Save Time</h3>
                <p className="text-gray-600">No more circling around looking for parking. Get there faster.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Secure Payment</h3>
                <p className="text-gray-600">Safe and secure payment processing with multiple payment options.</p>
              </CardContent>
            </Card>

            {/* <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                  <Smartphone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Mobile First</h3>
                <p className="text-gray-600">Designed for mobile with an intuitive and user-friendly interface.</p>
              </CardContent>
            </Card> */}
          </div>

          {/* <div className="mt-20 grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold">Smart Parking for Smart Cities</h3>
              <p className="text-lg text-gray-600">
                Eagle Parking is more than just a parking app. We're building the infrastructure for smarter, more efficient
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
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Smart city parking illustration"
                width={500}
                height={400}
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div> */}
        </div>
      </section>
      <Map />
      <Footer />
    </div>
  )
}
