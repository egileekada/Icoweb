import Link from "next/link";
export default function NavBar() {
  return (
    <header>
      <nav className="container flex justify-around py-8 mx-auto bg-white ">
        <div className="flex items-center">
          <img src="/images/ICOWEB Logo 3 1.png" alt="Logo"></img>
        </div>
        <div className="items-center hidden space-x-8 lg:flex">
          <ul>
            <Link href="/">
              <a className="mx-10">Home</a>
            </Link>
            <Link href="/services">
              <a className="mx-10">Services</a>
            </Link>
            <Link href="/projects">
              <a className="mx-10">Projects</a>
            </Link>
            <Link href="/blog">
              <a className="mx-10">Blog</a>
            </Link>
          </ul>
        </div>

        <div className="flex space-x-2 justify-center">
          <button
            type="button"
            className="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Start a Project
          </button>
        </div>
      </nav>
    </header>
  );
}
