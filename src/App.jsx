import { useState } from 'react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            {/* Logo and primary nav */}
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <h1 className="text-xl font-bold text-gray-800">Your Logo</h1>
              </div>
              <div className="hidden md:flex items-center space-x-8 ml-10">
                <a href="#" className="text-gray-600 hover:text-gray-900">Home</a>
                <a href="#" className="text-gray-600 hover:text-gray-900">About</a>
                <a href="#" className="text-gray-600 hover:text-gray-900">Services</a>
                <a href="#" className="text-gray-600 hover:text-gray-900">Contact</a>
              </div>
            </div>

            {/* Mobile menu button - using text symbol instead of icon */}
            <div className="md:hidden flex items-center">
              <button
                className="text-gray-600 hover:text-gray-900 text-2xl font-bold px-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? '×' : '☰'}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
              <a href="#" className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50">Home</a>
              <a href="#" className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50">About</a>
              <a href="#" className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50">Services</a>
              <a href="#" className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              Welcome to Our Website
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi amet corporis nostrum consectetur ullam.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
                >
                  Get Started
                </a>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;