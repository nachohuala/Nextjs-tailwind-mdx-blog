"use client"
import PostCard from "@/components/PostCard";
import SearchBar from "@/components/SearchBar";
import { useState } from "react";



const SearchPage = ({params}) => {
    
    const posts = params.newProp

    // https://www.youtube.com/watch?v=ZoayCCDHFiI
    const [currentPage, setCurrentPage] = useState(0)
    const [search, setSearch] = useState("")


    const filteredPosts = () =>{
        if (search.length === 0){
            // Si no hay nada ingresado en el input de busqueda
            let postsSlice = posts.slice(currentPage,currentPage+6)
            return postsSlice.sort((a,b) => {return(a.id - b.id)}) 
        }else{
        // Si hay algo ingresado en el input de busqueda
            let filtered = posts.filter((post) => post.description.includes(search))
            let filteredSlice = filtered.slice(currentPage,currentPage+6)
        return filteredSlice.sort((a,b) => {return(a.id - b.id)}) }
    }

    const nextPage = () => {
        setCurrentPage(currentPage+6)
    }

    const prevPage = () => {
        if(currentPage>0)
            setCurrentPage(currentPage-6)
    }

    const onSearchChange = ({target}) => {
        setCurrentPage(0)
        setSearch(target.value)
    }

    return (
        <div className="flex flex-col mt-10 justify-center items-center mx-auto">
            <SearchBar onSearchChange={onSearchChange} search={search}/>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-12 px-12 py-16 w-full">
                {/* {filteredPosts().map((post)=>{return(<PostCard description={post.description}/>)})} */}
                {filteredPosts().map((post)=>{return(<PostCard 
                                                            title ={post.title}
                                                            description={post.description}
                                                            author={post.author}
                                                            bannerURL={post.bannerURL}
                                                            slug={post.slug}
                                                            tags={post.tags}
                                                            date={post.date}
                                                            key={post.id}
                                                            />)})}
            </div> 
        </div>
    );
}

export default SearchPage;