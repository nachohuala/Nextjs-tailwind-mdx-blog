import { TimeIcon,PasteIcon } from '../public/icons/icons';
import Link from "next/link";


const IMAGES_DICTIONARY = {
  "python":"https://w7.pngwing.com/pngs/780/811/png-transparent-logo-python-logos-and-brands-icon.png",
  "react":"https://icons-for-free.com/download-icon-logo+react+react+js+icon-1320184811840217251_512.png",
  "fastapi":"https://w7.pngwing.com/pngs/141/126/png-transparent-fastapi-hd-logo.png",
  "mongodb":"https://www.pngrepo.com/png/331488/512/mongodb.png",
  "chatgpt":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/2048px-ChatGPT_logo.svg.png",
  "pinecone":"https://i.ibb.co/XSsJf5c/54333248-removebg-preview.png",
  "pandas":"https://pandas.pydata.org/static/img/favicon_white.ico",
  "scikit":"https://www.cilans.net/wp-content/uploads/2019/09/scikit-learn-logo-notext-1.png",
  "numpy":"https://user-images.githubusercontent.com/67586773/105040771-43887300-5a88-11eb-9f01-bee100b9ef22.png",
  "powerbi":"https://i.ibb.co/YBLdP7c/Captura-desde-2023-04-25-15-17-17-removebg-preview.png",
  "seaborn":"https://seeklogo.com/images/S/seaborn-logo-244EB2DEC5-seeklogo.com.png"
}


const PostCard = ({title,date,slug,tags,description,author,bannerURL}) => {
    return (
        <div className="flex flex-col bg-gray-900 text-white border-gray-300 border rounded-xl py-2 text-center px-4 py-4 justify-between h-full">
        <Link href={`/posts/${slug}`} className="space-y-4">
         {/* <!-- IMAGE -->  */}
        <div className="relative overflow-hidden cursor-pointer rounded-xl ">
        <img src={bannerURL} alt={title} className="rounded-xl object-cover hover:scale-110 opacity-50 hover:opacity-75 transition duration-300 ease-in-out w-full"></img>
              {/* <h3 className="absolute text-sm top-5 right-5 bg-yellow-400 text-white py-1 px-2 rounded-xl">Top Right</h3>
                  <h3 className="absolute text-sm bottom-5 left-5 bg-yellow-400 text-white py-1 px-2 rounded-xl">Bottom Left</h3>
                  <h3 className="absolute text-sm bottom-5 right-5 bg-yellow-400 text-white py-1 px-2 rounded-xl">Bottom Right</h3> 
                  <h3 className="absolute text-sm top-5 left-5 bg-yellow-400 text-white py-1 px-2 rounded-xl">Top Left</h3>
                */}
                <div className="absolute top-5 left-5">
                  <div className="flex justify-end gap-2 bg-white rounded-full px-2 py-2 shadow-2xl">
                    {tags.map((tag)=>{return(
                      <div className="">
                        <img src={IMAGES_DICTIONARY[tag]} alt={tag} className="h-4 w-4 sm:h-6 sm:w-6 md:h-8 md:w-8 xl:h-10 xl:w-10 rounded-full"></img>
                      </div>
                    )})}
                  </div>
                </div>
        </div>
        {/* <!-- TECHNOLOGIES-->  */}

       {/* <!-- TITLE -->  */}
        <h2 className="text-left text-indigo-400 text-sm font-italic font-light">{title} → {date}</h2>
        {/* <!-- SUBTITLE -->  */}
        <h3 className="text-base sm:text-xl lg:text-2xl text-white font-bold text-left">{title}</h3>
        {/* <!-- CONTENT -->  */}
        <p className="text-sm sm:text-base lg:text-lg text-gray-300 text-left overflow-ellipsis h-16">{description}</p>

        {/* <!-- FINAL SECTION -->  */}
        <section className="flex flex-row items-center justify-center mx-auto space-x-4 w-full py-2">
          <img src="https://images.generated.photos/8OAGobSgGzf4uK93LKdKefvnnrv4ODAV0CaWrSILXEI/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDczODU0LmpwZw.jpg" className=" rounded-full h-10 w-10"></img>
        <span className="font-mono w-full flex gap-2">By <h6 className="underline">{author}</h6> <TimeIcon/> 2 min read</span>
        </section>
        </Link>
      </div>

    );
}

export default PostCard;
