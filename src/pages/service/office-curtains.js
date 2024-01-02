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
import ContentService1 from 'src/components/ContentService1';
import ContentService2 from 'src/components/ContentService2';
import FAQsSection from 'src/components/FAQsSection';
import Footer from 'src/components/Footer';
import TestimonialsService from 'src/components/TestimonialsService';
import Head from 'next/head';
import ProductSchema from '../../components/StructuredData';

const OfficeCurtains = () => {
  const structuredData = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": "Office Curtains Dubai",
    "image": "https://closingcurtain.ae/static/images/Living-Room-Curtains-1.jpg",
    "description": "https://closingcurtain.ae/static/images/Best-office-curtains.jpg",
    "brand": "OfficeCurtainsDubai",
    "sku": "OfficeCurtainsDubai",
    "mpn": "OfficeCurtainsDubai",
    "offers": {
    "@type": "Offer",
    "url": "https://closingcurtain.ae/service/office-curtains",
    "priceCurrency": "AED",
    "price": "250",
    "priceValidUntil": "2024-12-31",
    "availability": "https://schema.org/PreOrder",
    "itemCondition": "https://schema.org/NewCondition"
    },
    "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "bestRating": "5",
    "worstRating": "4.9",
    "ratingCount": "1800",
    "reviewCount": "2960"
    },
    "review": {
    "@type": "Review",
    "name": "MUsa Awais",
    "reviewBody": "Buy High Quality Office Curtains in Dubai Online At Low Rates.",
    "reviewRating": {
    "@type": "Rating",
    "ratingValue": "5.0",
    "bestRating": "5",
    "worstRating": "4.9"
    },
    "datePublished": "2023-10-11",
    "author": {"@type": "Person", "name": "Musa Awais"},
    "publisher": {"@type": "Organization", "name": "Office Curtains Dubai"}
    }
   }

  const testimonials1 = [
    {
      id: 1,
      name: 'Henry',
      position: ' Fully Use',
      comment: ' I happened to order these cute curtains for my office room and my experience has been really fantastic.  ',
      rating: 5,
      image: '/static/images/testimonial.png',
    },
    {
      id: 2,
      name: 'Mark',
      position: ' Top Class',
      comment: ' I must say these incredible blinds did change the entire look of my office in no time.   ',
      rating: 5,
      image: '/static/images/testimonial.png',
    },
    
    {
      id: 3,
      name: 'Maria',
      position: ' Amazing',
      comment: '  The blind quality is simply amazing and the work is absolutely wonderful.   ',
      rating: 5,
      image: '/static/images/testimonial.png',
    },
    
    {
      id: 4,
      name: 'David',
      position: ' Fully Use',
      comment: ' Their office curtains do save a lot of my time and I’m so thankful for that. ',
      rating: 5,
      image: '/static/images/testimonial.png',
    },
    {
      id: 5,
      name: 'Sareena',
      position: ' High Recommended',
      comment: ' These guys truly offer you extraordinary curtains which are highly engaging and adorable  ',
      rating: 5,
      image: '/static/images/testimonial.png',
    },
    {
      id: 6,
      name: 'Mark',
      position: 'Amazing',
      comment: '  I must say these incredible blinds did change the entire look of my office in no time. ',
      rating: 5,
      image: '/static/images/testimonial.png',
    },
  ];
  
  const faqsData = [
    { 
      question: "How Curtains Can Change Your Office Look?",
      answer: "Office curtains can seriously transform the whole look of your office decors, while also adding a significant deal of comfort, as well. These curtains give a well-balanced and uniform look to the office interiors and also eliminate the harshness of external elements up to a notable extent. " 
    },
    { 
        question: "Which Curtains Are The Best Choice For Offices?",
        answer: "You can try out literally any and every option in this regard, however some of the most useful options for office curtains Dubai are the Blackout ones, sheer and cotton ones. These curtains can offer you both an effective room brightness as well as darkening, so you can pick out a choice based on your requirements. " 
      },
      { 
        question: "Should Office Curtains Touch The Floor?",
        answer: "Floor-to-ceiling curtains are always the most effective window dressing approach and office curtains aren’t an exception either. However, you might as well not want to go for this idea since floor touching curtains are likely to get entangled in nearby furniture or even in shoes. Besides, offices are always high foot traffic areas, so you also stick to the shorter curtain profiles." 
      },
      { 
        question: "How To Maintain Office Curtains?",
        answer: "Manual maintenance is generally not very feasible for commercial spaces, since any and every window treatment is always in abundance in these spaces. Office curtains aren’t an exception, so it’s best that you consider professional cleaning services for your curtains every 6 to 8 months. As for a regular upkeep, you can try dusting the curtains off to get rid of loosened buildup." 
      },
      { 
        question: "What Color Curtains Look Best In Offices?",
        answer: "Pastels, Navy Blues, Grays, Off-whites and similar undertones and shades are some of the best color recommendations for office curtains, since these curtains give off a professional and presentable vibe. In addition to that, you can try out the bold ones as well and can have them synced with your furniture and/ or carpets." 
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
    { property: 'title', content: "Buy Luxury Office Curtains in Dubai - Enhance Your Workspace" },
    { name: 'description', content: "Enhance your workspace with professional office curtains in Dubai. Buy now and create a productive and stylish environment with Closing Curtain." },
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

      <ServiceBanner imageUrl="/static/images/ServiceBanner.jpg"/>

      <ContentSection2
        image='/static/images/Best-Office-Curtains-1.jpg'
        heading="Office Curtains Dubai - Give A Luxury Look To Your Workspace"
        text="Closing Curtain presents to you the ideal workspace window solution of Office Curtains Dubai, which works wonderfully 
        to enhance all such commercial spaces. Our all-exclusive office window curtains and office door curtains offer the most 
        durable working, along with ideally presentable aesthetics, too."
        h31="Manufacturing"
        h31text="Made from 100% Cotton, Linen, Faux Silk, or from different types of blended fabrics , such as the cotton-polyester blend"
        h32="Functionality"
        h32text="These curtains are extremely hard-wearing, resilient, and versatile in nature, plus best suit all kinds of requirements"
        />

        <ProjectSection items={items}/>

        <ContentOnly
        text1="Our curtains for office efficiently meet all criteria of a greatly presentable commercial-grade decor. These curtains 
        are highly functional in nature and offer the most prolonged and equally effective purposefulness all along."
        
        text2="Their energy-efficient functionality contributes to the lowering of energy expenses, up to a considerable extent. 
        Besides, you can achieve different levels of room brightening as well as room darkening with Office Curtains Dubai, right 
        according to your requirements. One really common example of this is the choice of Automatic Commercial Curtains.  "
        text3="This way, it becomes much likely to save the valued resources by making the most out of natural light, since our 
        curtains work by filtering it to a mild and agreeable level, similar to the working of fine sheer drapes. Also, you can 
        have the light completely cut off with the thicker versions of these Office Curtains in Dubai, when the situation asks 
        for it, such as during meetings and presentations. "
        text4="Over and above, our office window and door curtains do serve safety purposes really well, too. They adequately ensure 
        privacy maintenance by providing higher and trustworthy levels of coverage. Last but not the least, is the super effective 
        temperature balancing induced by these incredible curtains, essentially the useful functionality of Blackout Window Curtains. "

        heading="Get Our High Quality Office Curtains Dubai"
        />

        

        <ContentService
        heading="How Aesthetically Efficient Are Office Curtains Dubai?"
        text1="Our office curtains in Dubai perfectly suit all kinds of workspace decor themes. Their sleek and eye-catching looks 
        have their significance in not just improving the aesthetics but also in notably enhancing the level of productivity."
        text2="Office Curtains Dubai makes the windows stand out and come within perfect size and profile ranges in order to suit 
        all types of window orientations. For instance, you can have lighter and softer textures if you want your workspaces to 
        appear well-lit, and this way you can also achieve a beneficial cost-cutting of the energy bills."
        image="/static/images/Best-office-curtains.jpg"
        text3="Moreover, you can go for the heavier and thicker versions of our Office Window Curtains  high-end and luxurious 
        adornment, along with maximum serviceability. Also, these curtains feature several patterned and layered designs too, 
        which go well with the majority of the workspace decor styles."
        />
        
        <SaleSection
        text="10% Off Window Curtains and Blinds online - Sale End Today"
        />

        <ContentService2
        heading="We Are The Top-Tier Office Curtains Dubai Providers"
        text="And we’ve got the most extensive varieties of the best commercial-grade curtains for you. These classy and trendy 
        yet decent curtain styles will sync well into your commercial and office decors and will also accentuate the surrounding 
        space in noteworthy ways. Besides making a selection from the predefined office window drape varieties, you can always 
        entrust your requirements with our curtain customization services, too."
        text1="As per the foremost plus point, our Office Curtains Dubai come in hand at highly budget-friendly price ranges, so you 
        don’t need to break your bank for getting the treatment done. Not to mention the added benefit of cost-effectivity. Do reach 
        out to us and have all your requirements negotiated with us for getting the best outcomes!"
        image="/static/images/Amazing-office-curtains.jpg"
        />

        <ContentService1
        image='/static/images/Best-office-curtains.jpg'
        heading="Choose Our Proficient Fitting Services For Office Curtains"
        text="When at Closing Curtain, you can easily say farewell to all the discomforts of searching for the right kind of 
        services for your curtains. With that said, we’ve come up with the finest-grade installation services for the office 
        window curtains, including the styling factor, as well. This timeless skillset of ours will instantly generate a highly 
        improved and impressive version of your commercial spaces. "
        text1="Over and above, our Dubai Office Curtains Installation is completely budget-friendly, yet will guarantee you 
        the most favorable outcomes. Do ensure getting our matchless expertise for your workspace improvements and you’ll 
        definitely love the results afterwards. We deal and deliver all across the UAE and you can easily avail yourselves 
        of our quality window treatment services right in the convenience of your comfort zones."
        />
        
        <TestimonialsService heading="Testimunal" subHeading="Some Worthiest Client Feedbacks" testimonials={testimonials1}/>

        <FAQsSection
        heading="FAQs (Frequently Asked Questions)"
        faqsData={faqsData}
        />
        <ProductSchema data={structuredData} />
        <Footer/>
    </div>
  );
};

export default OfficeCurtains;
