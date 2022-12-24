
const Banner = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10">
        <div>
            <h1 className="text-7xl">Modern's Daily Blog</h1>
        <h2 className="mt-5 md:mt-0">Welcome to{" "} <span className="underline decoration-4 decoration-[#f7ab0a]"> Every Developer</span> {" "} favourite blog in the developer's World</h2>
        </div>
        <p className="mt-5 md:mt-2 text-gray-400 max-w-sm">
            New Hacking Material | Latest Techs | The Weekly Debugging & more
        </p>
    </div>
  )
}

export default Banner