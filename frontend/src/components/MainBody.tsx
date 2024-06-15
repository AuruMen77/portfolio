import Community from "./Community";
import Education from "./Education";
import Experience from "./Experience";

const MainBody = () => {
    return (
        <div className="flex flex-col text-center mt-5 pt-10">
            <h1 className="text-4xl font-bold text-blue-500"> Hello, I am Azzedine</h1>
            <h2 className="text-xl tracking-tighter text-yellow-500"> An aspiring web developer</h2>
            <div className="text-left grid md:grid-cols-3 max-h-[vh] gap-10">
            <Education/>
            <Experience/>
            <Community/>
         
               
            
                {/* <AspectRatio ratio={2 / 3} >
                        <img src={myPicture} className=" object-cover max-w-full max-h-[100vh]" />
                    </AspectRatio> */}

            </div>
        </div>
    )
}

export default MainBody;