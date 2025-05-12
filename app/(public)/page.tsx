import { StatsGrid } from '@/components/widgets';
import Navbar from '@/components/NavBars/Navbar';
//import {ThemeColorToggle} from "@/components/theme-color-toggle";

export default function Home() {
  return (
    <main >
      <Navbar />
      <div className="container mx-auto pt-24 px-4">
        <StatsGrid />
      </div>
    </main>
  );
}