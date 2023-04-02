import { postsPath } from "../../../utils/mdxUtils"
import fs from "fs";
import path from "path"
import matter from "gray-matter"
import Markdown from "markdown-to-jsx";



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

        <div>
            <Markdown>
            {content}
            </Markdown>
        </div>
    );
}

export default PostPage;