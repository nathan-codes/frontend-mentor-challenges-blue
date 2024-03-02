import Image from "next/image";
import {Big_Shoulders_Display} from "next/font/google"

const big_shoulders_display = Big_Shoulders_Display({
  weight: ["400","500"],
    subsets: ["latin"],
  
    
});

const PreviewCard = () => {
  return (
    <article className="border-2 flex flex-col max-w-[480px] lg:flex-row lg:max-w-[1000px] m-2 rounded-lg">
      <div>
        <Image src="/icon-sedan.svg" alt="sedan" width={64} height={100} />
              <h1 className={`${big_shoulders_display.className} text-3xl font-bold`} >SEDANS</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem porro
          quisquam molestias fugit at inventore nulla aliquam vel, odit eius
          dolores autem tempora.
        </p>
        <button>Learn More </button>
      </div>
      <div>
        <h1>SEDANS</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem porro
          quisquam molestias fugit at inventore nulla aliquam vel, odit eius
          dolores autem tempora.
        </p>
        <button>Learn More </button>
      </div>
      <div>
        <h1>SEDANS</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem porro
          quisquam molestias fugit at inventore nulla aliquam vel, odit eius
          dolores autem tempora.
        </p>
        <button>Learn More </button>
      </div>
    </article>
  );
};

export default PreviewCard;
