import StorySlide from "./slider/story/StorySlide";
import BigestSlide from "./slider/bigestslide/BigestSlide";
import DigiJet from "./DigiJet";
import ShgeftAngizSuper from "./ShgeftAngizSuper";
import ShegeftAngizSlide from "./slider/shegeftAngiz/ShegeftAngizSlide";

function Homepage() {
  return (
    <div className="flex flex-col gap-y-4 items-center max-w-[1920px] overflow-hidden justify-center mx-auto">
      <StorySlide />
      <BigestSlide />
      <DigiJet />
      <ShegeftAngizSlide />
      <ShgeftAngizSuper/>
    </div>
  );
}

export default Homepage;
