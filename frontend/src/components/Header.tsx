export const Header = () => {
  return (
    <header className="fixed w-full h-24 flex justify-between items-center px-16 bg-gray-500 text-white">
      <h1 className="font-black text-2xl">MUSE PORT</h1>
      <div>
        <nav>
          <ul className="flex space-x-4">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
