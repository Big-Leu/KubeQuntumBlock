import Card from "../components/box"
import { cardsData } from "../components/data";
export default function Home() {
  return (
    <div className=" relative w-screen h-screen flex justify-center overflow-hidden">
      <div className="z-10">
        <div className="flex flex-row space-x-9 mt-[3rem] justify-center">
          <h1 className="font-koulen text-6xl">Project</h1>
          <h1 className="font-koulen text-6xl">KubeQuntumBlock</h1>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-[4rem] overflow-y-auto max-h-[800px]">
          {cardsData.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </div>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute max-w-screen max-h-fit top-0 object-cover z-0 "
      >
        <source src="/video/test1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
