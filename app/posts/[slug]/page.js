import { postsPath } from "../../../utils/mdxUtils"
import fs from "fs";
import path from "path"
import matter from "gray-matter"
import dynamic from "next/dynamic"

const MarkdownContent = dynamic(
    () => import('../../../components/MarkdownContent'),
    { ssr: false }
)

// getStaticProps en NextJS 13
const getPostContent =  async (slug) => {
    const filePath = `${path.join(postsPath,slug)}.mdx`
    const fileContent =  fs.readFileSync(filePath,"utf8")
    const contentRaw  = matter(fileContent).content
    const metadata = matter(fileContent).data
    return contentRaw
}   


const PostPage = async (props) => {
    const slug = props.params.slug
    const content = await getPostContent(slug)
    return (

        <div className="px-4">
            <title></title>
            <MarkdownContent>
            {content}
            </MarkdownContent>
        </div>
    );
}

export default PostPage;