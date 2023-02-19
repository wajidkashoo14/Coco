import Products from "@/components/BestSellingProducts";
import Feedback from "@/components/Feedback";
import Hero from "@/components/Hero";
import UtilityProducts from "@/components/UtilityProducts";
import WhyCoconut from "@/components/WhyCoconut";



export default function Home() {
  return ( 
  <>
   <Hero />
   <WhyCoconut />
   <Products />
   <UtilityProducts />
   <Feedback />
    </>
  );
}