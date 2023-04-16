import avatar from "../public/webImages/avatar.png"
import {postsPath} from "../utils/mdxUtils"
import Image from 'next/image'
import Link from 'next/link'

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
  //console.log(getPostMetadata());
  return (

    <div className="flex flex-col items-center justify-center">
    {/* HERO */}
    <main className="mt-16 lg:mt-48 px-2">
      {/* CONTAINER */}
      <div className="flex flex-col lg:grid lg:grid-cols-2 xl:items-center h-full justify-center">
        {/* SM  IMAGE */}
        <div className='flex lg:hidden lg:col-span-1 h-3/4 items-center mt-6 mx-auto'>
          <Image className="w-[250px] sm:w-96 lg:w-[600px]" src={avatar} alt="avatar" />
        </div>
        {/* INFO */}
        <div className='flex lg:col-span-1  lg:text-3xl lg:ml-10'>
          <div className='flex flex-col gap-12 h-full mx-auto items-center justify-center'>
            <h1 className='text-white text-6xl lg:text-8xl font-bebas font-bold rounded-2xl '>&#128075; DATA ANALYST </h1>
            <p className='text-[#97AFDC] text-md md:text-base xl:text-xl 2xl:text-2xl text-center lg:text-start lg:ml-20'>Soy Ignacio Huala y quiero ayudarte a tomar decisiones <b><u>impulsadas por datos</u></b>. Chile📍</p>
            {/* BUTTONS SECIONT*/}
            <div className="flex flex-col">
                        {/* GLOWING BUTTON*/}
            <div className='flex flex-col gap-6 items-center  mx-auto mt-4 md:flex-row lg:gap-20 '>
              <div className="grid gap-8  justify-center">
                <div className="relative">
                  <div className="absolute inset-2 bg-pink-500 rounded-xl blur-xl"></div>
                  <button className="relative px-7 py-4 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-500">
                    <span className="flex items-center space-x-5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 -rotate-45 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                      </svg>
                      <span className="pr-6 text-gray-100 text-xs sm:text-sm md:text-base xl:text-xl">Revisa mis proyectos</span>
                    </span>
                  </button>
                </div>
              </div>
            </div>
            </div>
            {/* GLOWING TECH STACK*/}

          </div>

        </div>
        {/* LG IMAGE */}
        <div className='hidden lg:grid col-span-1 h-3/4 items-center mt-6 mx-auto'>
          <Image className="w-96 lg:w-[600px]" src={avatar} alt="avatar" />
        </div>
      </div>
    {/* TECH STACKS */}
    <div className="flex flex-row items-center justify-center w-full space-x-8 mt-10" >
              <span className="text-[#97AFDC] text-xl mt-2">TECH STACK</span>
            <Link href="#"   className="h-6 w-6 mt-2">  
            <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    fill="white"
    viewBox="0 0 24 24">
    <path
      d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
            </Link>
            <Link href="#" className="h-6 w-6 mt-2">  
            <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    fill="white"
    viewBox="0 0 24 24">
    <path
      d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
            </svg>
            </Link>
            <Link href="#" className="h-6 w-6 mt-2">  
            <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="white"
    viewBox="0 0 24 24">
    <path
      d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>

            </Link>
    </div>
    {/* ABOUT ME */}
    <section className="bg-white dark:bg-gray-900 mt-16" >
        <div className="container px-6 py-10 mx-auto">
            <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">From the blog</h1>

            <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">


                <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
                    <p className="text-sm text-blue-500 uppercase">category</p>

                    <Link href="#" className="block mt-4 text-2xl font-semibold text-gray-800 hover:underline dark:text-white md:text-3xl">
                        All the features you want to know
                    </Link>

                    <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veritatis sint autem nesciunt,
                        laudantium quia tempore delect
                    </p>

                    <Link href="#" className="inline-block mt-2 text-blue-500 underline hover:text-blue-400">Read more</Link>

                    <div className="flex items-center mt-6">


                        <div className="mx-4">
                            <h1 className="text-sm text-gray-700 dark:text-gray-200">Amelia. Anderson</h1>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Lead Developer</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    </main>

  </div>
  )
}
