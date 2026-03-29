export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-5 bg-gray-900">
      
      <h1 className="text-xl font-bold">Deepika</h1>

      <div className="space-x-6">
        <a href="#about" className="hover:text-gray-400">About</a>
        <a href="#projects" className="hover:text-gray-400">Projects</a>
        <a href="#contact" className="hover:text-gray-400">Contact</a>
      </div>

    </nav>
  );
}