import { ContainerScroll } from "@/components/global/container-scroll-animation";
import { InfiniteMovingCards } from "@/components/global/infinite-moving-cards";
import Navbar from "@/components/global/navbar";
import { Button } from "@/components/ui/button";
import { clients } from "@/lib/constants";
import Image from "next/image";

export default function Home() {
    return (
        <main className="flex-1">
            <Navbar />
            <section className="[background:radial-gradient(125%_125%_at_50%_10%,#000_35%,#223_100%)] rounded-md flex flex-col items-center">
                <div>
                    <div className="flex flex-col mt-[-100px] md:mt-[-50px]">
                        <ContainerScroll
                            titleComponent={
                                <div className="flex flex-col items-center gap-5">
                                    <Button
                                        size={"lg"}
                                        className="p-8 mb-8 md:mb-0 text-2xl w-full sm:w-fit border-t-2 rounded-full border-[#4D4D4D] bg-[#1F1F1F] hover:bg-white group transition-all flex items-center justify-center gap-4 hover:shadow-xl hover:shadow-neutral-500 duration-500"
                                    >
                                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-500 to-neutral-600 md:text-center font-sans group-hover:bg-gradient-to-r group-hover:from-black goup-hover:to-black">
                                            Start For Free Today
                                        </span>
                                    </Button>
                                    <h1 className="text-5xl md:text-8xl bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-600 font-sans font-bold">
                                        Automate Your Work With Fuzzie
                                    </h1>
                                </div>
                            }
                            children={
                                <Image
                                    src="/temp-banner.png"
                                    fill
                                    alt="bannerImage"
                                    className="object-cover border-8 rounded-2xl w-auto h-auto"
                                />
                            }
                        />
                    </div>
                </div>
                <InfiniteMovingCards
                    items={clients}
                    direction="right"
                    speed="slow"
                />
            </section>
        </main>
    );
}
