import React from 'react';
import { 
  Bus, 
  Map, 
  Navigation2, 
  Calculator, 
  MapPin, 
  ChevronDown,
  Facebook,
  Twitter,
  Instagram,
  PlayCircle,
  Apple
} from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center py-20 px-4"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1588258147591-13d6e0d8b1d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
        }}
      >
        <div className="container mx-auto text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Navigate Lagos with Ease – Find the Fastest & Cheapest Routes!
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Get accurate bus fares, real-time traffic updates, and the best travel routes across Lagos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="flex items-center justify-center gap-2 bg-[#34D399] text-white px-8 py-3 rounded-full hover:bg-[#059669] transition-colors">
              <PlayCircle size={24} />
              Download on Google Play
            </button>
            <button className="flex items-center justify-center gap-2 bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors">
              <Apple size={24} />
              Download on App Store
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">About GidiApp</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg mb-6">
                GidiApp is your ultimate transport companion in Lagos, designed to make your daily commute smoother and more predictable. We combine real-time data with local transport knowledge to provide you with the most reliable navigation experience.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <span className="text-[#34D399]">✓</span>
                  Real-time fare updates across all routes
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[#34D399]">✓</span>
                  Accurate traffic predictions
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[#34D399]">✓</span>
                  Offline access to essential features
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <Bus className="w-12 h-12 mx-auto mb-4 text-[#34D399]" />
                <h3 className="font-semibold">Route Planning</h3>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <Map className="w-12 h-12 mx-auto mb-4 text-[#34D399]" />
                <h3 className="font-semibold">Live Maps</h3>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <Calculator className="w-12 h-12 mx-auto mb-4 text-[#34D399]" />
                <h3 className="font-semibold">Fare Calculator</h3>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <Navigation2 className="w-12 h-12 mx-auto mb-4 text-[#34D399]" />
                <h3 className="font-semibold">Navigation</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <Bus className="w-12 h-12 mb-4 text-[#34D399]" />
              <h3 className="text-xl font-semibold mb-3">Accurate Bus Fares</h3>
              <p>Get real-time fare estimates for all routes across Lagos.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <Map className="w-12 h-12 mb-4 text-[#34D399]" />
              <h3 className="text-xl font-semibold mb-3">Google Maps Integration</h3>
              <p>Find the best routes with integrated Google Maps navigation.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <Navigation2 className="w-12 h-12 mb-4 text-[#34D399]" />
              <h3 className="text-xl font-semibold mb-3">Live Traffic Updates</h3>
              <p>Stay informed about traffic conditions in real-time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#34D399] rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Enter Destination</h3>
              <p>Input where you want to go</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#34D399] rounded-full flex items-center justify-center mx-auto mb-4">
                <Map className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">View Routes</h3>
              <p>See available routes and fares</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#34D399] rounded-full flex items-center justify-center mx-auto mb-4">
                <Navigation2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Start Navigation</h3>
              <p>Follow turn-by-turn directions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Users Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
                  alt="User"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold">John Doe</h4>
                  <p className="text-gray-600">Daily Commuter</p>
                </div>
              </div>
              <p className="text-gray-700">
                "GidiApp has completely transformed my daily commute. I save time and money knowing the best routes and fares beforehand."
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
                  alt="User"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold">Jane Smith</h4>
                  <p className="text-gray-600">Business Owner</p>
                </div>
              </div>
              <p className="text-gray-700">
                "The real-time traffic updates have been a game-changer for my business deliveries. Highly recommended!"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            <details className="bg-white rounded-lg p-6 shadow-md">
              <summary className="flex items-center justify-between cursor-pointer">
                <span className="font-semibold">How accurate are the fare estimates?</span>
                <ChevronDown className="w-5 h-5" />
              </summary>
              <p className="mt-4 text-gray-600">
                Our fare estimates are updated in real-time based on current transport rates and are typically accurate within 5-10% of the actual fare.
              </p>
            </details>
            <details className="bg-white rounded-lg p-6 shadow-md">
              <summary className="flex items-center justify-between cursor-pointer">
                <span className="font-semibold">Does the app work offline?</span>
                <ChevronDown className="w-5 h-5" />
              </summary>
              <p className="mt-4 text-gray-600">
                Yes, basic features like saved routes and last known fares are available offline. However, real-time updates require an internet connection.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-[#34D399] text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Join thousands of Lagosians using GidiApp today!
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="flex items-center justify-center gap-2 bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors">
              <PlayCircle size={24} />
              Download on Google Play
            </button>
            <button className="flex items-center justify-center gap-2 bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors">
              <Apple size={24} />
              Download on App Store
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">GidiApp</h3>
              <p className="mb-4">Your trusted Lagos transport companion</p>
              <p>Email: support@gidiapp.com</p>
            </div>
            <div className="flex justify-start md:justify-end items-start gap-4">
              <a href="#" className="hover:text-[#34D399] transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:text-[#34D399] transition-colors">
                <Twitter size={24} />
              </a>
              <a href="#" className="hover:text-[#34D399] transition-colors">
                <Instagram size={24} />
              </a>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p>&copy; {new Date().getFullYear()} GidiApp. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;