import getReadmeData from "@/helpers/getReadmeData";
import Markdown from "markdown-to-jsx";

const Readme = () => {
    const readme = getReadmeData();
    return (
        <div className="flex flex-col md:flex-row items-start mt-8 sm:mx-8">
            <img className="max-w-1/2 md:max-w-1/3 rounded-md mr-8 mb-8" src="/images/readme_img.jpg" alt="Readme" />
            
            <div className="md:mt-0">
                <h1 className="text-4xl sm:text-5xl font-bold text-black dark:text-white">Readme</h1>
                
                <Markdown className="mt-8 text-black dark:text-white">{readme.content}</Markdown>
                
                <div className="mt-8">
                    <div className="text-l text-black dark:text-white mb-4">
                        <span className="font-bold mr-9">Name:</span>
                        <span>{readme.data.name}</span>
                    </div>
                    <div className="text-l text-black dark:text-white mb-4">
                        <span className="font-bold mr-4">Address:</span>
                        <span>{readme.data.address}</span>
                    </div>
                    <div className="text-l text-black dark:text-white">
                        <span className="font-bold mr-14">Pin:</span>
                        <span>{readme.data.pincode}</span>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Readme;