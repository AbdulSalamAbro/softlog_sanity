import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

function Header() {
  return (
    <header className="sticky top-0 backdrop-blur-md bg-white/90 z-50 border-b border-gray-300">
        <div className="flex justify-between px-10 mx-auto mx-aut py-4 items-center">
           <div className="flex space-x-10"> 
              <Link href="/"><h1 className="text-3xl font-semibold">Softlog</h1></Link>
              <ul className="flex space-x-2 font-semibold leading-6 justify-self-start">
                <li><a className="block antialiased px-5 py-3 text-base rounded-full hover:bg-gray-200/70 ease-out duration-300" href="">Software categories</a></li>
                <li><a className="block antialiased px-5 py-3 text-base rounded-full hover:bg-gray-200/70 ease-out duration-300" href="">Blog</a></li>
              </ul>
            </div>
            <Button>Write a review</Button>
        </div>

        <div>

        </div>
    </header>
  )
}

export default Header