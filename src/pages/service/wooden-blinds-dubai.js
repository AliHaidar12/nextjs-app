// pages/service.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from 'src/components/Header'
import ServiceBanner from 'src/components/ServiceBanner';
import ContentSection2 from 'src/components/ContentSection2';
import ProjectSection from 'src/components/ProjectSection';
import ContentOnly from 'src/components/ContentOnly';
import SaleSection from 'src/components/SaleSection';
import ContentService from 'src/components/ContentService';
import ServiceGallery from 'src/components/ServiceGallery';
import ContentService1 from 'src/components/ContentService1';
import ContentService2 from 'src/components/ContentService2';
import FAQsSection from 'src/components/FAQsSection';
import Footer from 'src/components/Footer';
import TestimonialsService from 'src/components/TestimonialsService';
import Head from 'next/head';
import ProductSchema from '../../components/StructuredData';

const WoodenBlinds = () => {
  
  const structuredData = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": "Wooden blinds Dubai",
    "image": "https://closingcurtain.ae/static/images/wooden-blinds-2.jpg",
    "description": "We are the best Wooden blinds supplier in Dubai",
    "brand": {
    "name": "Wooden blinds Dubai",
    "@type": "Brand"
    },
    "sku": "Wooden blinds Dubai",
    "mpn": "Wooden blinds Dubai",
    "offers": {
    "@type": "Offer",
    "url": "https://closingcurtain.ae/service/wooden-blinds-dubai",
    "priceCurrency": "AED",
    "price": "170",
    "priceValidUntil": "2024-12-31",
    "availability": "https://schema.org/PreOrder",
    "itemCondition": "https://schema.org/NewCondition"
    },
    "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "bestRating": "5",
    "worstRating": "4.9",
    "ratingCount": "1149",
    "reviewCount": "2086"
    },
    "review": {
    "@type": "Review",
    "name": "Pervaiz Iqbal",
    "reviewBody": "top-rated Blinds supplier in Dubai. . .",
    "reviewRating": {
    "@type": "Rating",
    "ratingValue": "5.0",
    "bestRating": "5",
    "worstRating": "4.9"
    },
    "datePublished": "2023-10-13",
    "author": {"@type": "Person", "name": "Musa Awais"},
    "publisher": {"@type": "Organization", "name": "Wooden blinds Dubai"}
    }
    } 

  const testimonials1 = [
    {
      id: 1,
      name: 'Henry',
      position: ' Fully Use',
      comment: '  Their blinds installation services were the most skillful ones I’ve ever had. Also, their working teams are admirably customer-friendly!',
      rating: 5,
      image: '/static/images/testimonial.png',
    },
    {
      id: 2,
      name: 'Mark',
      position: ' Top Class',
      comment: ' I asked for a few Vertical Blinds Dubai customizations and to my surprise, these people came up with astonishing blind versions.',
      rating: 5,
      image: '/static/images/testimonial.png',
    },
    
    {
      id: 3,
      name: 'Maria',
      position: ' Amazing',
      comment: '  Their blinds have genuinely enhanced the look of an entire floor within my workspace. Everybody likes them a lot!',
      rating: 5,
      image: '/static/images/testimonial.png',
    },
    
    {
      id: 4,
      name: 'David',
      position: ' Fully Use',
      comment: ' Closingcurtain.ae is one entirely amazing place to shop for the best home decor from, particularly top-quality window treatments',
      rating: 5,
      image: '/static/images/testimonial.png',
    },
    {
      id: 5,
      name: 'Sareena',
      position: ' High Recommended',
      comment: ' Their blinds feature the best build quality and the most flawless working I’ve ever come across.',
      rating: 5,
      image: '/static/images/testimonial.png',
    },
    {
      id: 6,
      name: 'Mark',
      position: 'Amazing',
      comment: ' I asked for a few Vertical Blinds Dubai customizations and to my surprise, these people came up with astonishing blind versions.',
      rating: 5,
      image: '/static/images/testimonial.png',
    },
  ];



  const galleryImages = [
    '/static/images/Wooden-Blinds.jpg',
    '/static/images/Wooden-Blinds1.jpg',
    '/static/images/Wooden-Blinds2.jpg',
    '/static/images/Wooden-Blinds3.jpg',
    '/static/images/Wooden-Blinds4.jpg',
    '/static/images/Wooden-Blinds5.jpg',
  ];
  const faqsData = [
    { 
      question: "Are Wooden Blinds Good For Privacy?",
      answer: "Yes, wooden blinds are the best at providing complete privacy from outsiders, and you can also control the light as per your needs. You can raise and lower the blinds as per your needs for controlling both privacy and light. When you completely close the wooden blinds, no one will look into your room." 
    },
    { 
        question: "Do Wooden Blinds Block Out Light?",
        answer: "Yes, wooden blinds offer amazing block-out light features. As they are manufactured with thick material, they act like blackout blinds and completely block or allow the light to come from outside. You can have a peaceful sleep during the daytime if you close the wooden blinds completely." 
      },
      { 
        question: "Are Wooden Blinds Cheaper Than Curtains?",
        answer: "The average price of wooden blinds ranges from $42 to $225 per blind, while the average price of curtains ranges from $100 to $250 per panel. So, we can say that the wooden blinds are cheaper than the curtains." 
      },
      { 
        question: "Do Faux Wood Blinds Keep Heat Out?",
        answer: "Yes, when you install faux wood blinds in your room, they provide the best insulation features. They help you reduce your electricity bills in both seasons. In winter, you can let sunlight come into your room and raise the temperature. While in summer, you can block the sunlight completely and keep your room cool so you don’t need to run the air conditioner 24/7." 
      },
      
  ];
  const items = [
    {
      icon: "/static/images/window-1.png",
      number: "3200+",
      title: "Project Complete"
    },
    {
      icon: "/static/images/customer-service.svg",
      number: "3100+",
      title: "Happy Clients"
    },
    {
      icon: "/static/images/medal.png",
      number: "25+",
      title: "Award Wins"
    },
    {
      icon: "/static/images/curtains.png",
      number: "370+",
      title: "No. of Designs"
    },
  ]

  const metaTags = [
    { property: 'title', content: "Wooden Blinds Dubai - Buy #1 Wood Blinds For At 20% Off, UAE" },
    { name: 'description', content: "Are you looking for the best wooden Blinds Dubai Supplier? Closingcurtain.ae is top rated shop to buy wooden blinds in Dubai. Visit Now!" },
    { name: 'robots', content: 'index, follow' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
  ];

  return (
    <div>
      <Head>
        {metaTags.map((tag, index) => (
          tag.property ? (
          <title key={index}>{tag.content}</title>
          ) : (
          <meta key={index} name={tag.name} content={tag.content} />
          )
        ))}
        <link rel="icon" href="/closing-curtains.png" />
      </Head>
      <Header logo='/static/images/logo.png'/>

      <ServiceBanner imageUrl="/static/images/quality-blinds-in-uae.jpg"/>

      <ContentSection2
        image='/static/images/wooden-blinds-2.jpg'
        heading="Wooden Blinds Dubai - Natural Beauty for Your Windows"
        text="Closing Curtain brings you the mind-blowing window treatment of Wooden Blinds Dubai. These attractive looking and 
        supremely durable blinds will serve you as the most lucrative home decor element. Besides, they are an elegant covering 
        solution for all windows, with the versatility that is totally suitable for all uses."
        h31="Construction"
        h31text="Made from composite wood material, basswood, or Vinyl/PVC material, and have a lightweight yet sturdy profile."
        h32="Aesthetics"
        h32text="Their slats are easy to operate, move flexibly and make the windows stand out in a presentable manner."
        />

        <ProjectSection items={items}/>

        <ContentOnly
        text1="Our heavy-duty wooden blinds serve as the most unique-looking and stylish residential window covering. Their super 
        sturdy and resilient structures make them the perfect . These blinds induce a delightful insulation within the interiors 
        and are thus a beneficial home improvement addition to consider."
        
        text2="Besides, their temperature optimization factor also includes the cooling effect, besides the warmth addition. Another 
        significant aspect of these amazing blinds is the flawless privacy they offer. As per the most noteworthy advantage, these 
        wood blinds provide the perk of incredible energy efficiency and they will notably lower all the energy expenses of your 
        place(s). All in all, our Wooden Blinds Dubai is a really tasteful choice for all commercial and residential spaces."
        text3="These blinds also have their noteworthy significance in blocking out most of the excessive and troublesome sunlight 
        and the credit goes to their utterly solid and opaque designs. Moreover, you can totally control the amount of heat as well 
        as room brightening/darkening with them. These window blinds are totally safe to use, in terms of kid and pet-friendliness 
        and therefore can be considered as a versatile option for all areas. "
       
        heading="Wooden Blinds Dubai Give Natural Beauty To Your Windows"
        />

        

        <ContentService
        heading="What's The Aesthetic Worth Of Our Wooden Blinds Dubai"
        text="From bedrooms to offices, you can go for this useful window treatment for any and every space of your choice. They 
        feature a nice and sleek appearance, similar to the Roller Window Blinds and therefore are meant to go well with all kinds 
        of interiors as well as exteriors."
        text1="The best part of considering these high quality blinds as a window solution is that they are very low-maintenance. 
        Not to mention the fact that they don’t host too much dust, dirt, or grime in the first place."
        text2="In addition to that, these incredibly hard-wearing blinds come within extensive varieties and you get nearly endless 
        options of designs, profile patterns, and color schemes to choose from. The extremely versatile and flexible nature of our 
        Wooden Blinds Dubai make them the best option to utilize under all circumstances, similar to the Blackout Luxury Blinds.  "
        image="/static/images/blindscollection.jpg"
        />
        
        <ServiceGallery
        heading="Check Out Our Incredible Window Blind Collections"
        images={galleryImages}
        />

        <ContentService1
        image='/static/images/wooden-shades-in-UAE-1000x700.jpg'
        heading="Get Your Home Decors The Mesmerizing Upgrade Of Wooden Shades Dubai"
        text="Our premium quality wooden window blinds are an incredibly best option for those of you adoring natural décor themes. 
        Their profiles appear beautiful like the bamboo shades and their addition works as a fundamental change to any and every 
        place. Besides, these blinds are presentable to the point that they can be used as the sole decorative ingredient for any 
        minimally adorned space."
        text1="Adding to this, this timeless beauty makes our Wooden Blinds Dubai the best option of an external covering, considering 
        the factors of durability and resilience. Also, if you’re looking for a suitable commercial window solution, then there could 
        be no other option better than these heavy-duty shades."
        />
        <SaleSection
        text="10% Off Window Curtains and Blinds online - Sale End Today"
        />
        <ContentService2
        heading="Choose Our Adept Installation Services"
        text="Closing Curtain will bring you the entire skill set required for your next window treatment project under one roof. 
        Our experts not only serve you with perfectionist-grade installation services for Wooden Blinds in Dubai but also ensure 
        creating a seamless ornamentation amongst the new blinds and the rest of the room decor. This all-exclusive efficiency 
        will help you make the most out of your investment. "
        text1="Over and above, our services are entirely rapid when it comes to the timely completion of the whole project. Besides, 
        this perfection remains entirely timeless too."
        image="/static/images/Durable-Wooden-Blinds-UAE.jpg"
        />

        <ContentService
        heading="We Are The Top-Tier Providers Of Wooden Blinds Dubai"
        text="And with us, you’ll enjoy a wholly new and amazing experience of window treatment upgrade. Our quality wooden blinds 
        Dubai are the most versatile solution to consider for nearly all of the windows, whether they are indoors or outdoors. 
        Their solid build quality is guaranteed to outperform any and every standard window covering and this goes the same for 
        the durability factor, too."
        text1="Do have us for getting your next window treatment and of course a major home improvement. Our quality blind varieties 
        include various incredible options such as Vertical Luxury Blinds and several other choices."
        image="/static/images/Custom-Wooden-Blinds-UAE.jpg"
        />

        <TestimonialsService heading="Testimunal" subHeading="Top Feedbacks From Our Customers" testimonials={testimonials1}/>
        <FAQsSection
        heading="FAQs (Frequently Asked Questions)"
        faqsData={faqsData}
        />
        <ProductSchema data={structuredData} />
        <Footer/>
    </div>
  );
};

export default WoodenBlinds;
