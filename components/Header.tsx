"use client"
import { MapPin, X, Menu } from 'lucide-react';
import React, { useState } from 'react';
import { Button } from './ui/button';
import { useRouter, usePathname } from 'next/navigation';
import Image from 'next/image';
export default function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId)
        if (element) {
            // Use scrollTo with coordinates for better reliability
            window.scrollTo({
                top: element.offsetTop - 100, // Adjust for header height
                behavior: 'smooth'
            })
        }
        setIsMenuOpen(false)
    }

    const router = useRouter()
    const pathname = usePathname()
    const isTowingPage = pathname.includes("towing")

    const pathChange = async (id: string) => {
        if (isTowingPage) {
            await router.push("/")
            // Wait for route change to complete before scrolling
            setTimeout(() => scrollToSection(id), 50)
        } else {
            scrollToSection(id)
        }
    }

  return (
     <div className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
              <Image src="/logo.png" alt="Richo Parking" width={32} height={32} />
            </div>
            <span className="text-xl font-bold">Richo Parking</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => pathChange("home")}
              className="text-gray-600 hover:text-black transition-colors cursor-pointer"
            >
              Home
            </button>
            <button
              onClick={() => pathChange("about")}
              className="text-gray-600 hover:text-black transition-colors cursor-pointer"
            >
              About
            </button>
            <button
              onClick={() => pathChange("map")}
              className="text-gray-600 hover:text-black transition-colors cursor-pointer"
            >
              Find Parking
            </button>
            <Button
              onClick={() => router.push('/towing')}
             className="bg-black text-white hover:bg-gray-800">Towing</Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <button
                onClick={() => pathChange("home")}
                className="text-left text-gray-600 hover:text-black transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => pathChange("about")}
                className="text-left text-gray-600 hover:text-black transition-colors"
              >
                About
              </button>
              <button
                onClick={() => pathChange("map")}
                className="text-left text-gray-600 hover:text-black transition-colors"
              >
                Find Parking
              </button>
              <button
                onClick={() => router.push("/towing")}
                className="text-left text-gray-600 hover:text-black transition-colors"
              >
                Towing
              </button>
              <Button className="bg-black text-white hover:bg-gray-800 w-fit">Get Started</Button>
            </nav>
          </div>
        )}
    </div>
  )
}