

const Banner = () => {
    return (
        <div>
           <div className={`bg-[url('https://i.ibb.co/Tmk3D3B/Rectangle-2-1.png')]  bg-cover bg-no-repeat lg:w-ful md:w-full  w-[350px] lg:mr-10 mr-3 ml-3 lg:ml-10 p-10 bg-sky-700  mt-10`}>

            
        
        <h3 className=" text-white font-bold mt-5">Top play music station</h3>
        <h1 className="lg:text-4xl md:text-2xl text-2xl text-white  ">The Dark Side of Music: Unveiling Its Negative Effects</h1>
        
        <p className=" text-white mt-5 ">Music, often regarded as a universal language, possesses a profound impact on individuals and societies alike. While it has long been celebrated for its ability to evoke emotions, foster connections, and uplift spirits, the flip side of the melody reveals a spectrum of adverse effects that are often overlooked</p>

         <button className=" bg-black pl-4 pr-4 rounded-xl pt-2 pb-2 mt-5  text-white">For You?</button>
    </div>
    <div>
    <button className=" lg:ml-10 bg-black pl-8 pr-8 rounded-full pt-3 pb-3 mt-5  text-white">For You</button>
    <button className=" lg:ml-20 bg-black pl-8 pr-8 rounded-full pt-3 pb-3 mt-5  text-white">Popular</button>
    <button className=" lg:ml-20 bg-black pl-8 pr-8 rounded-full pt-3 pb-3 mt-5 text-white">Trend</button>
    <button className=" lg:ml-20 bg-black pl-8 pr-8 rounded-full pt-3 pb-3 mt-5  text-white">Pop</button>
    <button className=" lg:ml-20 bg-black pl-8 pr-8 rounded-full pt-3 pb-3 mt-5  text-white">Edm</button>
    <button className=" lg:ml-20 bg-black pl-8 pr-8 rounded-full pt-3 pb-3 mt-5  text-white">Rock</button>
    <button className=" lg:ml-16 bg-black pl-8 pr-8 rounded-full pt-3 pb-3 mt-5  text-white">More</button>
    
    </div>


            
            
        </div>
    );
};

export default Banner;