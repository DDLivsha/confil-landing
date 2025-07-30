export async function getData<T>(section: string): Promise<T | null> {
   try {
      const res = await fetch(
         `${process.env.NEXT_PUBLIC_API_URL}/rest/v1/main_data?section=eq.${section}&select=*`,
         {
            headers: {
               apikey: process.env.NEXT_PUBLIC_API_KEY!,
               Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
            },
         }
      );

      const json = await res.json();

      if (!res.ok) {
         throw new Error(json.message ?? "Failed to fetch data");
      }

      if (!json.length) {
         throw new Error(`No data found for section "${section}"`);
      }

      return json[0].content;
      
   } catch (error) {
      console.error(`Error fetching ${section}:`, error);
      throw error;
   }
};