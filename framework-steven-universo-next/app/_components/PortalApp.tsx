import { AwardsSection } from "./AwardsSection";
import { CharacterExplorer } from "./CharacterExplorer";
import { CuriosityExplorer } from "./CuriosityExplorer";
import { FusionGuide, GamesSection, MomentsTimeline, RebeccaSection, UniverseGuide } from "./ExpandedSections";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { MusicSection } from "./MusicSection";
import { Quiz } from "./Quiz";
import { StorySection } from "./StorySection";

export function PortalApp() {
  return <main className="site-shell"><Header/><Hero/><StorySection/><CharacterExplorer/><UniverseGuide/><FusionGuide/><MomentsTimeline/><GamesSection/><MusicSection/><CuriosityExplorer/><Quiz/><AwardsSection/><RebeccaSection/><Footer/></main>;
}
