"use client"
import SearchBar from "@/components/SearchBar";

const SearchPage = (props) => {
    console.log("props en page",props)
    // https://www.youtube.com/watch?v=ZoayCCDHFiI
    return (
        <div className="flex mt-10 justify-center items-center space-x-10">
            <SearchBar/>
            <div className="mt-12 text-white text-lg">{JSON.stringify(props.params.newProp,null,2)}</div> 
        </div>
    );
}

export default SearchPage;