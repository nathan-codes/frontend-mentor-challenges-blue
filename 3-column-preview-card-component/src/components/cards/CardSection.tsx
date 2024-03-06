import PreviewCard from "./PreviewCard";
import sedansIcon from "/public/icon-sedan.svg";
import suvIcon from "/public/icon-sedan.svg"
import LuxIcon from "/public/icon-lux.svg"

const CardSection = () => {
  return (
    <article className=" flex flex-col max-w-[480px] lg:flex-row lg:max-w-[1000px] mx-3 my-10  ">

      <PreviewCard color="brightOrange" title="Sedans" icon={sedansIcon}>
        Cruise in the best car brands without the bloated prices. Enjoy the
        enhanced comfort of a luxury rental and arrive in style.
      </PreviewCard>

      <PreviewCard color="darkCyan" title="Suvs" icon={suvIcon}>
        Take an SUV for its spacious interior, power, and versatility. Perfect
        for your next family vacation and off-road adventures.
      </PreviewCard>

      <PreviewCard color="veryDarkCyan" title="Luxury" icon={LuxIcon}>
        Cruise in the best car brands without the bloated prices. Enjoy the
        enhanced comfort of a luxury rental and arrive in style.
      </PreviewCard>

    </article>
  );
};

export default CardSection;
