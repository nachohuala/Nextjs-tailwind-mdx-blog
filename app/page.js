import Hello from "../posts/hello.mdx"
import {postsPath} from "../utils/mdxUtils"
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const getPostMetadata = () => {
  const files = fs.readdirSync(postsPath);
  const markdownPosts = files.filter((file)=>file.endsWith(".mdx"))
  // Obtener metadatos de cada archivo
  const post = markdownPosts.map((filename)=>{
    const fileContents = fs.readFileSync(path.join(postsPath,filename),"utf8")
    const matterResult = matter(fileContents)
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      slug: filename.replace(".mdx",""),
      tags: matterResult.data.tags,
      description: matterResult.data.description,
      author:matterResult.data.author,
    }
  })
  return post
}

export default function HomePage() {
  console.log(getPostMetadata());
  return (
    <section className="py-24">
      <div className="container py-4 px-4">
        <Hello/>
      </div>
    </section>
  )
}
