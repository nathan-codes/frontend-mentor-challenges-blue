import Image from "next/image";

// Manrope Google Font used
import { manrope } from "./fonts";
import ArticlePreviewCard from "@/components/ArticlePreviewCard";


export default function Home() {
  return (
    <main
      className={`${manrope.className}  flex justify-center items-center min-h-screen bg-lightGrayishBlue`}
    >
      <ArticlePreviewCard />
    </main>
  );
}
