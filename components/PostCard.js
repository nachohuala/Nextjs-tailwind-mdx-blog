import Link from "next/link";

const PostCard = ({title,date,slug,tags,description,author}) => {
    return (
        <div className="flex flex-col bg-gray-900 text-white border-gray-300 border rounded-xl py-2 text-center px-4 py-4">
        <Link href="#" className="space-y-4">
         {/* <!-- IMAGE -->  */}
        <div className="relative">
        <img src="https://dummyimage.com/1080x360/fff/aaa" className="rounded-xl hover:scale-110"></img>
            <h3 className="absolute text-sm top-5 right-5 bg-yellow-400 text-white py-1 px-2 rounded-xl">Top Right</h3>
                  <h3 className="absolute text-sm bottom-5 left-5 bg-yellow-400 text-white py-1 px-2 rounded-xl">Bottom Left</h3>
                  <h3 className="absolute text-sm bottom-5 right-5 bg-yellow-400 text-white py-1 px-2 rounded-xl">Bottom Right</h3>
                  <h3 className="absolute text-sm top-5 left-5 bg-yellow-400 text-white py-1 px-2 rounded-xl">Top Left</h3>
        </div>
       {/* <!-- TITLE -->  */}
        <h2 className="text-left text-indigo-400 text-bold font-semibold">Post Title →</h2>
        {/* <!-- SUBTITLE -->  */}
        <h3 className="text-2xl text-white font-bold text-left">HOLA</h3>
        {/* <!-- CONTENT -->  */}
        <p className="text-gray-300 text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus velit ex, vehicula nec nibh venenatis, semper mattis risus. Donec imperdiet ipsum eu libero posuere, ut tempus lectus interdum. Ut ornare quam et ipsum dignissim lacinia. Aenean eget sodales ligula, vel elementum sem.</p>
        {/* <!-- FINAL SECTION -->  */}
        <section className="flex flex-row items-center space-x-4 w-full py-2">
          <img src="https://images.generated.photos/8OAGobSgGzf4uK93LKdKefvnnrv4ODAV0CaWrSILXEI/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDczODU0LmpwZw.jpg" className=" rounded-full h-10 w-10"></img>
        <span className="font-mono w-full flex gap-2">By <h6 className="underline"> Nacho Huala</h6> · 2 days ago</span>
        </section>
        </Link>
      </div>

    );
}

export default PostCard;
