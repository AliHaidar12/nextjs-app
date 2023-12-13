
// pages/service.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from '@/components/Header'
import ServiceBanner from '@/components/ServiceBanner';
import ContentSection2 from '@/components/ContentSection2';
import ProjectSection from '@/components/ProjectSection';
import ContentOnly from '@/components/ContentOnly';
import SaleSection from '@/components/SaleSection';
import ContentService from '@/components/ContentService';
import ServiceGallery from '@/components/ServiceGallery';
import ContentService1 from '@/components/ContentService1';
import ContentService2 from '@/components/ContentService2';
import FAQsSection from '@/components/FAQsSection';
import Footer from '@/components/Footer';

const VenetianBlinds = () => {
  const galleryImages = [
    '/static/images/Living-Room-Curtains-8.jpg',
    '/static/images/Living-Room-Curtains-9.jpg',
    '/static/images/Living-Room-Curtains-4.jpg',
    '/static/images/Living-Room-Curtains-5.jpg',
    '/static/images/Living-Room-Curtains-6.jpg',
    '/static/images/Living-Room-Curtains-7.jpg',
  ];
  const faqsData = [
    { 
      question: "Can You See Through Venetian Blinds At Night?",
      answer: "Venetian blinds are famous for offering complete privacy from outsiders. No matter from which material your blinds are manufactured, once you completely close the slats of Venetian blinds, no one will be able to look into your room at night." 
    },
    { 
        question: "Do Venetian Blinds Give Privacy?",
        answer: "Yes, you can get privacy as per your needs by lowering the horizontal slats of Venetian blinds. In fact, if you are looking for blinds that are perfect for giving you privacy, then Venetian blinds would be the best choice for you." 
      },
      { 
        question: "Do Venetian Blinds Keep the Lights Out?",
        answer: "Many people prefer to get Venetian blinds because they offer extraordinary features for controlling the light. You can let the light come into your room, diffuse it, or completely block it by adjusting the slats of your blinds. We can also use them as the best alternative to blackout blinds because they can block the light completely." 
      },
      { 
        question: "Are Venetian Blinds Suitable For Bedrooms?",
        answer: "Yes, Venetian blinds are an ideal choice for your bedroom because they offer complete privacy and the best control over light. Apart from this, they are also the best at giving a sophisticated, elegant, modern, and luxurious look to the interior décor of your bedroom." 
      },
      
  ];
  const items = [
    {
      icon: "/static/images/window-1.png",
      number: "3000",
      title: "Project Complete"
    },
    {
      icon: "/static/images/customer-service.svg",
      number: "3400",
      title: "Happy Clients"
    },
    {
      icon: "/static/images/medal.png",
      number: "46",
      title: "Award Wins"
    },
    {
      icon: "/static/images/curtains.png",
      number: "1700+",
      title: "No. of Designs"
    },
  ]

  //const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

  return (
    <div>
      <Header logo='/static/images/logo.png'/>

      

      <ContentSection2
        image='/static/images/venetian-blinds-8.jpg'
        heading="Get Venetian Blinds in Dubai By Top Supplier"
        text="Closing Curtain has got you the classic and calmative window treatment choice of Venetian Blinds in Dubai, which will be the 
        worthiest upgrade of your places. These “back then” famous blinds feature the highest-grade durability and will be the nicest 
        accessorizing of all your residential as well as commercial decors. "
        h31="Quality Creation"
        h31text="Feature horizontal slats of wood, plastic (PVC), or aluminum, which are suspended with cords or cloth tapes"
        h32="Vastest Versatility"
        h32text="These blinds go best with all decors, are extremely resilient in nature, and really convenient to upkeep"
        />

        <ServiceBanner imageUrl="/static/images/quality-blinds-in-uae.jpg"/>

        <ContentOnly
        text1="Our versatile Venetian window Blinds come with the foremost perk of longevity in the first place. And most importantly 
        this durability that remains unaffected from all kinds of damaging aspects such as moisture, steam, stains, spills, etc. 
        (other kinds of damage that don’t start with)."
        
        text2="Venetian Blinds Dubai offer the finest aesthetics and most importantly a complete control over the extent of room 
        brightening or darkening, similar to a quality blackout window treatment. They are specifically the best option for small 
        rooms and spaces,  since they give off a nice roomier effect."
        text3="Also, the privacy maintenance they offer is completely unquestionable, as well. Plus, they will instantly become a 
        mind-blowing enhancement of your place’s architecture when used as outdoor window blinds. Not to mention the fact that our 
        Venetian Blinds in Dubai add a lot of value to your properties, to boot."
        text4="They come with a highly convenient operating mechanism and thus can be installed within all spaces, even if there 
        are children and/or pets around. Their hazard-free cord offers a number of adjustments and can be used for multiple slat 
        twisting and alignments."

        heading="We Offer Luxury Venetian Blinds In Dubai"
        />

        <ProjectSection items={items}/>


        <ContentService
        heading="Where Will The Venetian Blinds Dubai Look Best? "
        text="These blinds are, by all means, the right investment in terms of a functional décor. They feature extensive 
        varieties of styles, design profiles, and colors and thus offer vast choices for different ornamental creations."
        text1="They are equally ideal for indoors yet serve outdoors specifically with their UV resistant properties. Their 
        appearance turns out to be uniquely elegant and therefore can be easily used within all commercial areas and workspaces too."
        text2="You can even acquire a complete blackout with the help of these Venetian Blinds Dubai and another significant aspect 
        of these unique blinds is being the vintage décor pieces that have always been the most popular. Also, these blinds are a 
        great alternative to beautiful wooden blinds. "
        image="/static/images/blinds-collection-2.jpg"
        />
        <ContentOnly
        heading="Trendiest Styles Of Venetian Window Blinds"
        text1="Our quality Venetian Dubai blinds are one of the most effective home ornamentation approaches. Besides, these blinds are super 
        versatile and can be easily made to fit for achieving any and every functional purpose. And the two most popular styles of these 
        worthwhile blinds are Mini Venetian Window Blinds (one or more than one inch slats) and Micro Venetian Dubai in Blinds 
        (half inch slats)."
               
        />
        <ServiceGallery
        heading="Explore Our Mind-Blowing Blind Versions"
        images={galleryImages}
        />

        <ContentService1
        image='/static/images/high-quality-Venetian-Luxury-Blinds.jpg'
        heading="Some Functional Aspects Of Our Luxury Venetian Blinds in Dubai"
        text="Venetian window blinds are one of the most presentable blind styles, which can be used with both traditional and modern 
        homes, and for nearly every type of window ranging from bay windows to the smaller ones. With these Venetian blinds Dubai, 
        it becomes really easy to control the incoming light as well as the room’s environment. This does lead to the advantage of 
        energy efficiency."
        text1="Being low maintenance and cost-effective is another major plus point of Venetian blinds as they truly make a one-time 
        investment.
        In case you want a suitable alternative to curtains, then there’s no option better than Venetian window blinds, given 
        the factors of comfort provision and affordability.
        Opening and closing venetian luxury blinds is really effortless and time-saving as well, something which makes them 
        a perfect choice for commercial settings."
        
        />

        <SaleSection
        text="10% Off Window Curtains and Blinds online - Sale End Today"
        />
        
        <ContentService2
        heading="We Offer Quality Services For Venetian Blinds Dubai Installation"
        text="At Closing Curtain, you’re meant to acquire the whole skill set of any given home improvement project under one roof. 
        We ensure serving you with the best services along with top-quality products. Our Venetian Luxury Blinds Installation 
        services are one of the notable aspects of our expertise and you’ll find this treatment the most advantageous for you in the long run."
        text1="We’ve got you the most affordable yet expert-grade Installation and post-installation décor services for Venetian Blinds 
        Dubai which are meant to sync your new blinds perfectly into your home décor. So do give us a call now, in case you have any 
        concerns and queries regarding the venetian blind fitting. "
        image="/static/images/Luxury-Ventian-Blinds-Dubai.jpg"
        />

        <ContentService
        heading="Shop For The Trendiest Venetian Blinds Dubai On A Budget"
        text="Our sublime standard Venetian Window blinds will be the most lucrative addition to your places, offering both the 
        beautification and functional benefits. These incredibly cost-effective Blinds are not just a great way to dress and 
        enhance your windows but also a perfect approach to making your interiors even more comfortable for you. They are highly 
        energy-efficient and will reduce the energy-expenses for you, in addition to perfectly optimizing the interior temperature. "
        text1="Over and above, our
        
        Venetian Blinds in Dubai are the easiest and the most effortless to deal with, in terms of maintenance. 
        This treatment will stay functional for years on end and will give you the best value for your money. Reach out to us today and 
        have these budget-friendly blinds as the most serviceable decor for your places!"
        image="/static/images/Amazing-venetian-blinds.jpg"
        />
        <FAQsSection
        heading="FAQs (Frequently Asked Questions)"
        faqsData={faqsData}
        />

        <Footer/>
    </div>
  );
};

export default VenetianBlinds;
