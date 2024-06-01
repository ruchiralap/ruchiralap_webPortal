import { Link } from "react-router-dom";
import SharedBanner from "../../Shared/SharedBanner/SharedBanner";


const About = () => {
    return (
        <>
        <SharedBanner title="About US"></SharedBanner>
            
            <div className="flex gap-5 mt-10 lg:flex-row flex-col mx-auto p-4 max-w-6xl">
        <div data-aos-delay="2100"
                  data-aos-duration="2000"
                  data-aos-easing="ease-in-out"
                  data-aos="zoom-in"  className="lg:w-1/2 h-[450px]">
          <img className=" h-full w-full object-cover" src="https://i.ibb.co/SncfWXx/junk-food-shopping-bag-grocery-store-cartoon-fast-food-side-dish-vegetable-plant-png-clipart-removeb.png"alt="" />
        </div>
        <div   className="lg:w-1/2   justify-center flex flex-col">
          <p data-aos-delay="100"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out" 
                  data-aos="fade-left"  className="text-5xl mb-5 font-bold">
                  রুচির আলাপ সম্পর্কে</p>
    

          <p data-aos-delay="2100"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                  data-aos="zoom-in-up"  >‘’রুচির আলাপ’’ দেশের অন্যতম বিশ্বস্ত প্রতিষ্ঠান! প্রত্যন্ত অঞ্চল থেকে নিরাপাদ খাদ্য সংগ্রহ করে,পুষ্টিগুন বজায় রেখে ক্রেতার হাতে পৌছে দেয়াই আমাদের মূল উদ্দেশ্য। পুষ্টিকর ও উচ্চমানের পণ্য সরবারহের প্রতিশ্রুতি বজায় রেখে এর মধ্যেই গ্রাহকের আস্থা অর্জন করেছে, দেশে নিরাপদ খাদ্যে সরবারহকারী অন্যতম বিশ্বস্ত এই প্রতিষ্ঠান। বিশুদ্ধ এবং নিরাপদ খাদ্য সরবারহ এবং গ্রাহক সেবা নিশ্চিত করতে আমরা প্রতিশ্রুতিবদ্ধ। প্রত্যন্ত অঞ্চল থেকে নিরাপাদ খাদ্য সংগ্রহ করে,পুষ্টিগুন বজায় রেখে ক্রেতার হাতে পৌছে দেয়াই আমাদের প্রধান লক্ষ্য।.</p>
      
      <Link to="/allProducts">
            <button data-aos-delay="2100"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                  data-aos="zoom-in-up" className=" border mt-7  rounded-full px-12 py-4  text-[#201700] bg-[#F9C302] font-extrabold">
              বাজার করুন
            </button>
          </Link>
        </div>
      </div>
        
            
        </>
    );
};

export default About;