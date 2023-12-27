import getReadmeData from "@/helpers/getReadmeData";
import Markdown from "markdown-to-jsx";

const Readme = () => {
    const readme = getReadmeData();
    return (
        <div className="flex flex-col md:flex-row p-6 items-start m-0 mt-8 md:m-8">
            <img className="w-80 lg:w-96 rounded-md" src="/images/readme_img.jpg" alt="Readme" />
            <div className="ml-0 mt-8 md:ml-14 md:mt-0">
                <h1 className="text-4xl sm:text-5xl font-bold text-white">Readme</h1>
                <Markdown className="mt-8 text-white">{readme.content}</Markdown>
                <div className="mt-8">
                    <div className="text-l text-white mb-4">
                        <span className="font-bold mr-9">Name:</span>
                        <span>{readme.data.name}</span>
                    </div>
                    <div className="text-l text-white mb-4">
                        <span className="font-bold mr-4">Address:</span>
                        <span>{readme.data.address}</span>
                    </div>
                    <div className="text-l text-white">
                        <span className="font-bold mr-14">Pin:</span>
                        <span>{readme.data.pincode}</span>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Readme;