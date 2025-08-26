import { FaqProps } from '@/interfaces/accordions';
import { FeaturesList } from '@/interfaces/features-list';
import { PricingPlansProps } from '@/interfaces/pricing-plans';
import { TestimonialsProps } from '@/interfaces/testimonials';

interface DataProps {
   faq: FaqProps[];
   pricing_plans: PricingPlansProps[];
   testimonials: TestimonialsProps[];
   features: FeaturesList[];
}

export async function getData(): Promise<DataProps | null> {
   try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/main`);

      const json = await res.json();

      if (!res.ok) {
         throw new Error(json.message ?? "Failed to fetch data");
      }

      if (!json.length) {
         throw new Error(`No data found`);
      }

      return json[0];

   } catch (error) {
      console.error(`Error fetching data`, error);
      throw error;
   }
};