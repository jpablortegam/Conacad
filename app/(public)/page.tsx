import { StatsGrid } from '@/components/widgets';
import * as React from "react"
import { ModeToggle } from '@/components/ui/mode-toggle'; // Adjust the path if necessary
//import { TabsDemo } from '@/components/tabs-demo'; // Adjusted to import as a named export

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
      <div className="w-full flex justify-end mb-4">
        <ModeToggle />
      </div>
      
      <StatsGrid />
    </main>
  );
}
