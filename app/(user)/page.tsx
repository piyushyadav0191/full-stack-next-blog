import { previewData } from "next/headers"
import { groq } from "next-sanity"
import { client } from "../../lib/sanity.client"
import PreviewBlogList from "../../components/PreviewBlogList"
import BlogList from "../../components/BlogList"
import PreviewSuspense from "../../components/PreviewSuspense";


const query = groq`
*[_type=='post']{
    ...,
    author->,
    categories[]->
} | order(_createdAt desc)
`

export default async function HomePage() {

    if(previewData()){
        return (
            <PreviewSuspense fallback={
                <div role="status">
                    <p className="text-center text-lg animate-pulse text-[#f7ab0a]">loading preview data...</p>
                </div>
            }>
                <PreviewBlogList query={query} />
            </PreviewSuspense>
        )
    }

    const posts = await client.fetch(query)

    
    return (
        <BlogList posts={posts} />
    )
}