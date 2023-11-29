import BlogListItem from "./BlogListItem";

function RelatedArticles() {
  return (
    <div>
        <h2 className="text-lg font-semibold">Related articles</h2>
        <div className="py-6 space-y-3">
            <BlogListItem/>
            <BlogListItem/>
            <BlogListItem/>
        </div>
    </div>
  )
}

export default RelatedArticles