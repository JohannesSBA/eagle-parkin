import React from 'react';

export const Map = () => {
    return (
        <section id="map" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Find Our locations Near You</h2>
            <p className="text-xl text-gray-600">
              Discover available parking spots in your area with our interactive map
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="h-[600px] relative">

              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3100.6082900674332!2d-77.0544001!3d39.0014354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7c8d79017a5d1%3A0xcb1ed6f4277713a0!2s8880%20Brookville%20Rd%2C%20Silver%20Spring%2C%20MD%2020910!5e0!3m2!1sen!2sus!4v1750804671879!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Parking locations map"></iframe>

              {/* Map Overlay Controls */}
              {/* <div className="absolute top-4 right-4 bg-white rounded-lg shadow-lg p-4 max-w-sm">
                <h3 className="font-semibold mb-2">Available Now</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center">
                      <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                      Street Parking
                    </span>
                    <span className="font-medium">$2/hr</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center">
                      <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                      Garage Parking
                    </span>
                    <span className="font-medium">$5/hr</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center">
                      <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                      Premium Spots
                    </span>
                    <span className="font-medium">$8/hr</span>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    )
}