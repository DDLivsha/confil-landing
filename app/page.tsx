import bg from '@/assets/images/main-bg.png'
import Button from '@/components/common/Button';
import Faq from '@/components/faq/Faq';
import Features from '@/components/features/Features';
import Home from '@/components/home/Home';
import HowItWorks from '@/components/how-it-works/HowItWorks';
import Pricing from '@/components/pricing/Pricing';
import Testimonials from '@/components/testimonials/Testimonials';
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <Image src={bg} alt="bg" placeholder='blur' quality={90} className='absolute z-[-1] left-0 top-0 w-full max-[900px]:hidden' />
      <Home />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <Faq />
      <div className='ending container'>
        <h4>Start Simplifying Your Clinic’s Paperwork</h4>
        <Link href={`${process.env.NEXT_PUBLIC_APP_LINK}`}>
          <Button variant='primary'>Try Confil - it’s FREE</Button>
        </Link>
      </div>
    </>

  );
}
