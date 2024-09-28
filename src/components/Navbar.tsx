import Link from "next/link"
import { Icons } from "./Icons"
import NavItems from "./NavItems"

const Navbar = () => {
    return(
        <div className="bg-white sticky x-50 top-0 inset-x-0 h-16">
            <header className="realtive bg-white">
            <div className="maxWidthWrapper mx-auto w-full max-w-screen-xl px-2.5 md:px-20">
                <div className="border-b border-gray-200 ">
                    <div className="flex h-16 items-center">
                        {/* Mobile Navbar */}
                        <div className="ml-4 flex lg:ml-0">
                            <Link href="/">
                            <Icons.logo className="h-10 w-10"/>
                            </Link>
                        </div>
                        <div className="hidden z-50 lg:ml-8 lg:block lg:self-stretch">
                            <NavItems/>
                        </div>
                    </div>
                </div>
            </div>
            </header>
        </div>
    )
}

export default Navbar