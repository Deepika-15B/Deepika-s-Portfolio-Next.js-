export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 backdrop-blur-lg bg-white/10 border-b border-white/20">
      
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-white tracking-wide">
          Deepika
        </h1>

        {/* Links */}
        <div className="hidden md:flex space-x-8 text-white font-medium">
          <a href="#" className="hover:text-purple-300">Home</a>
          <a href="#about" className="hover:text-purple-300">About</a>
          <a href="#education" className="hover:text-purple-300">Education</a>
          <a href="#skills" className="hover:text-purple-300">Skills</a>
          <a href="#projects" className="hover:text-purple-300">Projects</a>
          <a href="#contact" className="hover:text-purple-300">Contact</a>
        </div>

      </div>
    </nav>
  );
}