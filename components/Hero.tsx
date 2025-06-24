"use client"

import React, { useEffect, useState } from 'react'
export const Hero = () => {
     const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])
    return (
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
                  🚗 Smart Parking Solution
                </div>
                <h1
                  className={`text-5xl lg:text-6xl font-bold leading-tight transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                >
                  Find & Reserve
                  <br />
                  <span className="text-gray-600">Parking Spots</span>
                  <br />
                  Instantly
                </h1>
                <p
                  className={`text-xl text-gray-600 max-w-lg transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                >
                  With Eagle Parking, you can reserve hourly and monthly parking for our locations with no added hassle or frustration!
                </p>
              </div>

             

              <div
                className={`grid grid-cols-3 gap-8 pt-8 transition-all duration-1000 delay-900 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              >
                <div className="text-center">
                  <div className="text-3xl font-bold">3+</div>
                  <div className="text-gray-600 text-sm">Active locations</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">100+</div>
                  <div className="text-gray-600 text-sm">Parking Spots</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">3+</div>
                  <div className="text-gray-600 text-sm">Cities</div>
                </div>
              </div>
            </div>

            {/* Placeholder for 3D Asset */}
            <div
              className={`relative transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
            >
              <div className="relative w-full h-[600px] bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center">
                
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}