import { getData } from '@/api/get-data';
import bg from '@/assets/images/main-bg.png'
import Button from '@/components/common/Button';
import Faq from '@/components/faq/Faq';
import Features from '@/components/features/Features';
import Home from '@/components/home/Home';
import HowItWorks from '@/components/how-it-works/HowItWorks';
import Pricing from '@/components/pricing/Pricing';
import Testimonials from '@/components/testimonials/Testimonials';
import { FaqProps } from '@/interfaces/accordions';
import { FeaturesList } from '@/interfaces/features-list';
import { PricingPlansProps } from '@/interfaces/pricing-plans';
import { TestimonialsProps } from '@/interfaces/testimonials';
import Image from 'next/image';
import Link from 'next/link';

export default async function HomePage() {

  let faq, pricing, testimonials, features, error;

  try {
    faq = await getData<FaqProps[]>("faq");
    pricing = await getData<PricingPlansProps[]>("pricing_plans");
    testimonials = await getData<TestimonialsProps[]>("testimonials");
    features = await getData<FeaturesList[]>("features");
  }
  catch (err) {
    console.error("Failed to load data:", err);
    if (err instanceof Error) {
      error = err.message
    } else {
      error = "Failed to load data"
    }
  }

  return (
    <>
      <Image src={bg} alt="bg" placeholder='blur' quality={90} className='absolute z-[-1] left-0 top-0 w-full max-[900px]:hidden' />
      <Home />
      <Features data={features || []} />
      <HowItWorks />
      <Testimonials data={testimonials || []} error={error} />
      <Pricing data={pricing || []} />
      <Faq data={faq || []} />
      <div className='ending container'>
        <h4>Start Simplifying Your Clinic’s Paperwork</h4>
        <Link href={`${process.env.NEXT_PUBLIC_APP_LINK}`}>
          <Button variant='primary'>Try Confil - it’s FREE</Button>
        </Link>
      </div>
    </>

  );
}
