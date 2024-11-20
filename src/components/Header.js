function Header({ title }) {
    return (
      <header className="bg-primary p-4">
        <div className="container mx-auto">
          <h1 className="text-white text-2xl font-bold">{title}</h1>
        </div>
      </header>
    );
  }
  
  export default Header;