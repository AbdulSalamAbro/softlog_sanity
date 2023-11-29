import Image from "next/image";
import urlFor from "@/lib/urlFor";
import ClientSideRoute from "./ClientSideRoute";

type Props = {
    posts: Post[];
};

function BlogList({posts}: Props) {
    return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 gap-y-6">
        {/* Post */}
        {posts.map((post) => (
            <ClientSideRoute key={post._id} route={`/post/${post.slug.current}`}>
                <div className="flex flex-col cursor-pointer border-solid border border-gray-300 hover:bg-gray-100/40 hover:border-gray-400/80 ease-out duration-300">
                    {/* Image */}
                    <div className="relative aspect-w-16 aspect-h-9 object-cover border-solid border-b border-gray-300">
                        <Image
                        className="object-cover object-left lg:object-center"
                        src={urlFor(post.mainImage).url()}
                        alt={post.author.name}
                        fill
                        />
                    </div>
                    {/* Content */}
                    <div className="space-y-4 p-6">
                        {/* Title & description */}
                        <div className="space-y-2">
                            <h2 className="text-xl font-semibold line-clamp-3">{post.title}</h2>
                            <h3 className="text-gray-600 line-clamp-2">{post.description}</h3>
                        </div>
                        {/* Date & Category*/}
                        <div className="flex space-x-2 text-sm">
                            {/* <p className="font-semibold">
                                {new Date(post?.publishedAt).toLocaleDateString
                                (
                                "en-US", {
                                day: "numeric",
                                month: "long",
                                year: "numeric",
                                })}
                            </p> */}
                            <p>•</p>
                            {post.categories.map(category => (
                                <div>
                                    <p className="text-gray-500">{category.title}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </ClientSideRoute>
        ))}
    </div>
    );
}

export default BlogList