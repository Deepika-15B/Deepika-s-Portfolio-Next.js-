export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 backdrop-blur-md bg-gradient-to-r from-purple-50 via-white to-blue-50 shadow-sm border-b border-gray-200">
      
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-purple-600 tracking-wide">
          Deepika
        </h1>

        {/* Links */}
        <div className="hidden md:flex space-x-8 text-gray-700 font-medium">

          <a href="#" className="hover:text-purple-600 transition">
            Home
          </a>

          <a href="#about" className="hover:text-purple-600 transition">
            About
          </a>

          <a href="#education" className="hover:text-purple-600 transition">
            Education
          </a>

          <a href="#skills" className="hover:text-purple-600 transition">
            Skills
          </a>

          <a href="#projects" className="hover:text-purple-600 transition">
            Projects
          </a>

          <a href="#contact" className="hover:text-purple-600 transition">
            Contact
          </a>

        </div>

      </div>
    </nav>
  );
}