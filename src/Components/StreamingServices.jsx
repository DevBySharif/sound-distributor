import img1 from"../assets/images/apple-music.svg"
import img2 from"../assets/images/youtube-music.svg"
import img3 from"../assets/images/amazon-music.svg"
import img4 from"../assets/images/soundcloud.svg"
import img5 from"../assets/images/pandora.svg"
import img6 from"../assets/images/deezer.svg"

const StreamingServices = () => {
    return (
        <div className="bg-black border-b border-zinc-700">
            <div className="flex flex-wrap justify-center items-center lg:gap-24 gap-6 p-6 max-w-7xl mx-auto">
  <img className="w-32 h-20" src={img1} alt="Image 1" />
  <img className="w-32 h-20" src={img2} alt="Image 2" />
  <img className="w-20 h-20" src={img3} alt="Image 3" />
  <img className="w-20 h-20" src={img4} alt="Image 4" />
  <img className="w-36 h-20" src={img5} alt="Image 5" />
  <img className="w-36 h-20" src={img6} alt="Image 6" />
</div>
        </div>

    );
};

export default StreamingServices;