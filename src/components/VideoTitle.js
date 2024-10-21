const VideoTitle = (props) => {
    const {title, description} = props;
    return (
        <div className="w-screen aspect-video pt-[20%] px-24 absolute  bg-gradient-to-r from-black">
            <h1 className="text-6xl font-bold text-white">{title}</h1>
            <p className="text-lg py-6 w-1/2 text-white">{description}</p>
            <div>
            <button className="bg-white text-black p-4 px-12 text-xl rounded-lg mx-2 hover:bg-opacity-80">Play</button>          
            <button className="bg-gray-500 text-white p-4 px-12 text-xl rounded-lg mx-2">More Info</button>
            </div>
            
        </div>
    )
}

export default VideoTitle;


      
      