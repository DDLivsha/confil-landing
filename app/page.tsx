import bg from '@/assets/images/main-bg.png'
import Features from '@/components/features/Features';
import Home from '@/components/home/Home';
import HowItWorks from '@/components/how-it-works/HowItWorks';
import Testimonials from '@/components/testimonials/Testimonials';
import Image from 'next/image';

export default function HomePage() {
  return (
    <>
      <Image src={bg} alt="bg" placeholder='blur' quality={90} className='absolute z-[-1] left-0 top-0 w-full' />
      <Home />
      <Features />
      <HowItWorks />
      <Testimonials />
    </>

  );
}
