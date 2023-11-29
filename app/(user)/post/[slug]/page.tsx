// import Accordion from "@/app/components/Accordion";
// import Button from "@/app/components/Button";
// import RelatedArticles from "@/app/components/RelatedArticles";

// import { client } from "@/lib/sanity.client";
// import urlFor from "@/lib/urlFor";
// import { groq } from "next-sanity";
// import  Image from "next/image";
// import { PortableText } from "@portabletext/react";
// import { RichtextComponents } from "@/app/components/RichtextComponents";

// type Props = {
//     params: {
//         slug: string;
//     };
// };

// export const revalidate = 60; // revalidate this page every 60 seconds

// export async function generateStaticParams() {
//     const query = groq`
//     *[_type=='post']
//     {
//         slug
//     }`;

//     const slugs: Post[] = await client.fetch(query);
//     const slugRoutes = slugs.map((slug) => slug.slug.current)

//     return slugRoutes.map(slug => ({
//         slug,
//     }));
// }

async function Post() {

//     const query = groq`
//     *[_type=='post' && slug.current == $slug][0]
//     {
//         ...,
//         author ->,
//         categories[]->
//     }
//     `;

//     const post: Post = await client.fetch(query, {slug});

    return (
        <article>
            <h1>www</h1>
                {/* <div className="grid grid-cols-12 gap-6 gap-y-6">
                    <section className="col-span-6 space-y-10">

                        <section className="space-y-4">
                            <h1 className="text-3xl font-semibold">{post.title}</h1>
                            <h2 className="text-xl text-gray-600">{post.description}</h2>
                        </section>

                        <div className="relative aspect-w-16 aspect-h-9 object-cover">
                                <Image
                                className="object-cover object-center mx-auto"
                                src={urlFor(post.mainImage).url()}
                                alt={post.author.name}
                                fill
                                />
                        </div>

                        <Accordion />

                        <PortableText value={post.body} components={RichtextComponents} />

                    </section>

                    <section className="grid col-span-2 justify-items-center border-r mr-4">
                        <div>
                            <div className="sticky top-32">
                                <Button>Share</Button>
                            </div>
                        </div>
                    </section>

                    <section className="col-start-9 col-span-5">
                        <div className="sticky top-32">
                            <RelatedArticles />
                        </div>
                    </section>`
                   
                </div> */}
        </article>
    );
    }
export default Post;