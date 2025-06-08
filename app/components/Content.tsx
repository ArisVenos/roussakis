import { Carousel } from "./Carousel";
import { HomeCards } from "./HomeCards/HomeCards";

export function Content() {
  return (
    <div className="h-dvh">
      <Carousel />
      <div className="pt-10" />
      <HomeCards />
    </div>
  );
}
