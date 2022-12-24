import Image from "next/image"
import Link from "next/link"

const Header = () => {
  return (
    <header className="flex item-center justify-between space-x-2 font-bold px-10 py-5">
        <div className="flex item-center space-x-2">
            <Link href="/">
            <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOHNnSrP3CX15BIsUNt7h_07bbwdozAnTNkQ&usqp=CAU" className="rounded-full" width={50} height={50} alt="logo" />
            </Link>
            <h1 className="py-5">My Modern Blog</h1>
        </div>
        <div>
            <Link href="/" className="px-2 py-3 text-sm md:text-base bg-gray-900 text-[#f7ab0a] flex items-center rounded-full text-center">
            Sign up to my Newsletter
            </Link>
        </div>
    </header>
  )
}

export default Header