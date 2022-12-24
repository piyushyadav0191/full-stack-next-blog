import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid"
import Link from "next/link"

export const StudioNavbar = (props: any) => {
  return (
    <div>
      <div className="flex items-center justify-between p-5">
        <Link href="/" className="text-[#f7ab0a] flex items-center" >
          <ArrowUturnLeftIcon className="h-6 w-6 text-[#f7ab0a] mr-2" />
          Go to Modern Blog
        </Link>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  )
}
