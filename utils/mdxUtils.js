import path from "path";
import fs from "fs";

export const postsPath = path.join(process.cwd(), "app", "posts")

export const postsFileName = fs.readdirSync(postsPath).filter((filename) => /\.mdx?$/.test(filename));