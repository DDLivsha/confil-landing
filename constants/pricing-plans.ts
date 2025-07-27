export interface PricingPlansProps {
   name: string
   description: string
   price_monthly: number
   price_yearly: number
   features: string[]
}

export const pricingPlans: PricingPlansProps[] = [
   {
      name: "Starter",
      description: "Ideal for small clinics",
      price_monthly: 14.99,
      price_yearly: 159.99,
      features: [
         "Up to 10 form templates",
         "500 printed forms/month",
         "Basic analytics + 3 users",
      ]
   },
   {
      name: "Pro",
      description: "Built for growing teams",
      price_monthly: 49,
      price_yearly: 529,
      features: [
         "100 form templates",
         "5,000 printed forms/month",
         "Version control, audit logs, API access",
      ]
   }
]