"use client"
import PostCard from "@/components/PostCard";
import SearchBar from "@/components/SearchBar";
import { useState } from "react";


const SearchPage = ({params}) => {
    const postsList = params.newProp
    // https://www.youtube.com/watch?v=ZoayCCDHFiI
    return (
        <div className="flex flex-col mt-10 justify-center items-center mx-auto">
            <SearchBar/>
            <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 mx-4 my-4 w-full">
                {postsList.map((post)=>{return(<PostCard/>)})}
            </div> 
        </div>
    );
}

export default SearchPage;