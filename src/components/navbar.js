const Navbar = () => {
  return (
    <main className="flex flex-row mt-5 space-x-3 justify-center">
      <nav>
        <a href="/" className="hover:opacity-50">
          recuppa
        </a>
      </nav>
      <nav>
        <a href="team" className="hover:opacity-50">
          Meet the Team
        </a>
      </nav>
      <nav>
        <a href="recognition" className="hover:opacity-50">
          Recognition
        </a>
      </nav>
      <nav>
        <a href="contact" className="hover:opacity-50">
          Contact
        </a>
      </nav>
    </main>
  );
};

export default Navbar;
