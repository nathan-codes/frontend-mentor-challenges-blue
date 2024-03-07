import { ReactNode } from "react";
import { lexenda, bigShoulder } from "@/app/fonts";
import { StaticImageData } from "next/image";
import Image  from "next/image";

interface PreviewCardProps {
  color: string;
  title: string;
  icon: StaticImageData;
  children: ReactNode;
}

const PreviewCard = (props:PreviewCardProps) => {
  return (
      <div className={` bg-${props.color}  p-10 space-y-8`}>
          
          <Image src={props.icon}  alt="sedan" width={64} height={100} />
          

      <h1 className={`${bigShoulder.className} text-4xl font-bold text-white`}>
        {props.title}
      </h1>
      <p className="text-transparentWhite/70">{props.children}</p>
      <button
        className={`bg-veryLightGray/100 rounded-full px-7 py-3 text-${props.color}`}
      >
        Learn More
      </button>
    </div>
  );
}

export default PreviewCard
