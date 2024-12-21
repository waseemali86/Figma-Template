function Header(){
    return (
      <nav className="w-full h-14 bg-slate-50 cursor-pointer flex justify-between px-4 md:my-1 md:flex md:justify-between items-center">
        <div>
            <h1>GOGE <span className="text-orange-400">AFRICA</span></h1>
        </div>
        <ul className="hidden md:flex md:gap-12 md:text-orange-400">
            <li>
                Home
            </li>
            <li>
                Cources
            </li>
            <li>
                Blog
            </li>
            <li>
                About us
            </li>
            <li>
                Contact us
            </li>
        </ul>
        <div className="hidden md:flex">
            <button className="md:bg-orange-500 md:rounded-full md:px-5 md:py-2 md:text-sm md:text-white md:mr-2">Be A Contributor </button>
            <button className="md:bg-orange-500 md:rounded-full md:px-12 md:py-2 md:text-sm md:text-white ">Log in</button>
        </div>
        <div className="md:hidden">
                <a className="text-4xl text-orange-500" href="#">&#8801;</a>
        </div>
      </nav>
    );
  };
  export default Header 