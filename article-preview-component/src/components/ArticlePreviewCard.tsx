import Image from "next/image";
import drawers from "/public/drawers.jpg"

const ArticlePreviewCard = () => {
  return (
    <article className="flex flex-col md:flex-row w-[22.5rem] md:w-[37rem] lg:w-[45.625rem] rounded-xl shadow-xl m-6 transition-all">
      
        <div className="">
          <Image src={drawers} alt="drawers" />
        </div>
      
      <main>
        <h1 className="text-base md:text-lg lg:text-xl font-bold">
          Shift the overall look and feel by adding these wonderful touches to
          furniture in your home
        </h1>
        <p className="text-[0.8125rem] text-desaturatedBlue ">
          Ever been in a room and felt like something was missing? Perhaps it
          felt slightly bare and uninviting. I&apos;ve got some simple tips to
          help you make any room feel complete.
        </p>
        <div className="flex border-sky-300 border">
          <span></span>
          <span></span>
        </div>
      </main>
    </article>
  );
};

export default ArticlePreviewCard;
