import React from 'react';

function App() {
  return (
    <div>
      {/* Navbar */}
      <nav className="bg-blue-500 p-4">
        <div className="flex justify-between items-center">
          <div className="text-white text-2xl font-bold">MySite</div>
          <div>
            <ul className="flex space-x-6">
              <li><a href="#" className="text-white hover:text-gray-300">Home</a></li>
              <li><a href="#" className="text-white hover:text-gray-300">About</a></li>
              <li><a href="#" className="text-white hover:text-gray-300">Services</a></li>
              <li><a href="#" className="text-white hover:text-gray-300">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Welcome Section */}
      <section className="text-center p-20 bg-gray-100">
        <h1 className="text-4xl font-semibold text-gray-800">Welcome to MySite!</h1>
        <p className="mt-4 text-xl text-gray-600">This is a simple homepage built with React and Tailwind CSS.</p>
        <button className="mt-8 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          Get Started
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-blue-500 text-white text-center p-4 mt-20">
        <p>&copy; 2024 MySite. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
