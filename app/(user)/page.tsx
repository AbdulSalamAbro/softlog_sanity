import { previewData } from "next/headers";
import { groq } from "next-sanity";
import { client } from "../../lib/sanity.client";
import PreviewSuspense from "../components/PreviewSuspense";
import PreviewBlogList from "../components/PreviewBlogList";
import BlogList from "../components/BlogList";

const query = groq`
  *[_type=='post'] {
    ...,
    author->,
    categories[]->
  } | order(_createAt desc)
`;

export const revalidate = 60; // revalidate this page every 60 seconds

export default async function HomePage () {
  if (previewData()) {
    return (<PreviewSuspense
      fallback={(
        <div role="status">
          <p className="text-center text-lg animate-pulse text-black"> Loading preview data...</p>
        </div>
      )}>
        <PreviewBlogList query={query}/>
    </PreviewSuspense>)
  }

const posts = await client.fetch(query);
console.log(posts)
  return (
    <BlogList posts={posts} />
  )
}