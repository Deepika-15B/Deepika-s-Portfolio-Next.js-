export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 backdrop-blur-md bg-gradient-to-r from-purple-100 via-blue-50 to-pink-50 shadow-md border-b border-gray-200">
      
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-purple-700 tracking-wide">
          Deepika
        </h1>

        {/* Links */}
        <div className="hidden md:flex space-x-10 text-gray-700 font-medium">

          <a href="#" className="relative hover:text-purple-600 transition duration-300">
            Home
          </a>

          <a href="#about" className="relative hover:text-purple-600 transition duration-300">
            About
          </a>

          <a href="#education" className="relative hover:text-purple-600 transition duration-300">
            Education
          </a>

          <a href="#skills" className="relative hover:text-purple-600 transition duration-300">
            Skills
          </a>

          <a href="#projects" className="relative hover:text-purple-600 transition duration-300">
            Projects
          </a>

          <a href="#contact" className="relative hover:text-purple-600 transition duration-300">
            Contact
          </a>

        </div>

      </div>
    </nav>
  );
}