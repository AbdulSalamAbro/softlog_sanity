import Image from "next/image";
import urlFor from "@/lib/urlFor";
import ClientSideRoute from "./ClientSideRoute";

type Props = {
    posts: Post[];
};

function BlogListItem() {
  return (
    <div className="flex items-center border border-gray-300 hover:border-gray-400/80 hover:bg-gray-100/40 cursor-pointer ease-out duration-300">
        <div className="m-6 space-y-2">
             {/* Title */}
            <h2 className="text-lg font-semibold line-clamp-2">Top 10 Best CRM Software Tools In 2023 (Latest Rankings)</h2>
            {/* Date & Category*/}
            <div className="flex space-x-2 text-sm">
                <p className="font-semibold">Category name</p>
                <p>•</p>
                <p className="text-gray-500">February 20, 2023</p>
            </div>          
        </div>

        <div className="flex-none w-[132px] h-[132px] my-2 mr-2 bg-gray-100">
           
        </div>
    </div>
  )
}

export default BlogListItem