import Header from '@/components/shared/Header/Header';
import Explore from '@/components/home/Explore';
import MobileMenu from '@/components/shared/MobileMenu/MobileMenu';

export default function Home() 
{
 
  return (
    <div className="w-full min-h-[100dvh] flex justify-center home-background">
      <div className="w-full max-w-[1536px] z-[1] flex-col min-h-full relative">
        <Header/>
        <MobileMenu/>
      
        <Explore/>
      </div>
    </div>
  );
}
