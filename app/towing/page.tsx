"use client"

import { useState, useEffect } from "react"
import Header from "@/components/Header"
import { Map } from "@/components/Map"
import { Footer } from "@/components/Footer"
import Image from "next/image"

export default function Towing() {

  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])
  
  return (
    <div className="min-h-screen bg-white text-black">
      <Header />
      <section id="home" className="pt-20 pb-16 min-h-screen flex items-center">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div
              className={`space-y-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <div className="space-y-4">
                <div
                  className={`inline-block bg-gray-100 px-4 py-2 rounded-full text-sm font-medium transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                >
                   Easy Towing Solution
                </div>
                <h1
                  className={`text-5xl lg:text-6xl font-bold leading-tight transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                >
                  Call us for all
                  <br />
                  <span className="text-gray-600">Your Towing</span>
                  <br />
                  Needs
                </h1>
                <p
                  className={`text-xl text-gray-600 max-w-lg transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                >
                  With Eagle Parking, you can reserve hourly and monthly parking for our locations with no added hassle or frustration!
                </p>
              </div>

            </div>

            {/* Placeholder for 3D Asset */}
            <div
              className={`relative transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
            >
              <div className="relative w-full h-[400px] bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center">
                <Image src="/towing.jpg" alt="Tow Truck" width={700} height={700} className="rounded-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Map />
      <Footer />
    </div>
  )
}
