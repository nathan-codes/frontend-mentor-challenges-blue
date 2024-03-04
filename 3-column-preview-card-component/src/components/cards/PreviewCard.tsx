import Image from "next/image";
import { lexenda, bigShoulder } from "@/app/fonts";
import { ReactNode } from "react";
import { StaticImageData } from "next/image";

interface PreviewCardProps {
  color: string;
  title: string;
  icon: string;
  content: ReactNode;
}

const PreviewCard = (props: PreviewCardProps) => {
  return (
    <article className=" flex flex-col max-w-[480px] lg:flex-row lg:max-w-[1000px] mx-3 my-10 ">
      <div className=" bg-brightOrange p-10 space-y-8 rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg">
        <Image src={`${icon}`} alt="sedan" width={64} height={100} />
        <h1
          className={`${bigShoulder.className} text-4xl font-bold text-white`}
        >
          {title}
        </h1>
        <p className=" text-transparentWhite/70">{content}</p>
        <button
          className={`${color} bg-veryLightGray/100 rounded-full px-7 py-3`}
        >
          Learn More
        </button>
      </div>

      <div className=" bg-darkCyan p-10  space-y-8 ">
        <Image src="/icon-sedan.svg" alt="sedan" width={64} height={100} />
        <h1
          className={`${bigShoulder.className} text-4xl font-bold text-white`}
        >
          SEDANS
        </h1>
        <p className=" text-transparentWhite/70">
          Choose a sedan for its affordability and excellent fuel economy. Ideal
          for cruising in the city or on your next road trip.
        </p>
        <button className=" bg-veryLightGray/100 rounded-full px-7 py-3  text-brightOrange">
          Learn More
        </button>
      </div>

      <div className=" bg-veryDarkCyan p-10 space-y-8 rounded-b-lg  lg:rounded-e-lg lg:rounded-s-none">
        <Image src="/icon-sedan.svg" alt="sedan" width={64} height={100} />
        <h1
          className={`${bigShoulder.className} text-4xl font-bold text-white`}
        >
          SEDANS
        </h1>
        <p className=" text-transparentWhite/70">
          Choose a sedan for its affordability and excellent fuel economy. Ideal
          for cruising in the city or on your next road trip.
        </p>
        <button className=" bg-veryLightGray/100 rounded-full px-7 py-3  text-brightOrange">
          Learn More
        </button>
      </div>
    </article>
  );
};

export default PreviewCard;
