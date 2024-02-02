import Header from '@/components/shared/Header/Header';
import Explore from '@/components/home/Explore';

export default function Home() 
{
 
  return (
    <main className="w-full min-h-[100dvh] flex justify-center home-background">
      <div className="w-full max-w-[1536px] z-[1] flex-col min-h-full">
        <Header/>
      
        <Explore/>
      </div>
    </main>
  );
}
