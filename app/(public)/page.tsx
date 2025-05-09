import { StatsGrid } from '@/components/widgets';
import Navbar from '@/components/Navbar';
//import {ThemeColorToggle} from "@/components/theme-color-toggle";



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Navbar />
      <StatsGrid />
    </main>
  );
}