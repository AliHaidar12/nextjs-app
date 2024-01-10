// pages/service.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from 'src/components/Header'
import ServiceBanner from 'src/components/ServiceBanner';
import ContentSection2 from 'src/components/ContentSection2';
import ContentOnly from 'src/components/ContentOnly';
import SaleSection from 'src/components/SaleSection';
import ContentService from 'src/components/ContentService';
import ServiceGallery from 'src/components/ServiceGallery';
import ContentService1 from 'src/components/ContentService1';
import ContentService2 from 'src/components/ContentService2';
import Footer from 'src/components/Footer';
import ContentService3 from 'src/components/ContentService3';
import Link from 'next/link';
import Head from 'next/head';
import ProductSchema from '../../components/StructuredData';

const SheerCurtains = () => {
  const structuredData ={
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": "Sheer Curtains Dubai",
    "image": "https://closingcurtain.ae/static/images/Stunning-Sheer-Curtains.jpg",
    "description": "Get stylish Sheer curtains in dubai At amazing low rates.",
    "brand": "bedroomcurtainsdubai",
    "sku": "sheercurtainsdubai",
    "mpn": "sheercurtainsdubai",
    "offers": {
    "@type": "Offer",
    "url": "https://closingcurtain.ae/service/sheer-curtains",
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
    "reviewBody": "Get High Qualilty Sheer Curtains Dubai At Closingcurtain.ae. We Have Wide range of stylish Sheer curtains in Dubai. Order Now!",
    "reviewRating": {
    "@type": "Rating",
    "ratingValue": "5.0",
    "bestRating": "5",
    "worstRating": "4.9"
    },
    "datePublished": "2021-06-10",
    "author": {"@type": "Person", "name": "Musa Awais"},
    "publisher": {"@type": "Organization", "name": "sheer Curtains Dubai"}
    }
   }
  const galleryImages = [
    '/static/images/1-Electric-Curtains.jpg',
    '/static/images/2-Electric-Curtains.jpg',
    '/static/images/3-Electric-Curtains.jpg',
    '/static/images/4-Electric-Curtains.jpg',
    '/static/images/5-Electric-Curtains.jpg',
    '/static/images/6-Electric-Curtains.jpg',
  ];
  const faqsData = [
    { 
      question: 'Can Sheer Curtains Be Used Alone?',
      answer: 'Yes, you can install the sheer curtains alone in those areas where you don’t need too much privacy. Because white sheer curtains comprise translucent fabric, the opacity of the material determines how much privacy it can offer from outsiders if you hang them alone. ' 
    },
    { 
        question: 'What Is The Purpose Of Sheer Curtains?',
        answer: 'The main purpose of installing sheer curtains is to add a touch of modernity to your interior. Apart from this, they are also used to getting the airy, bright, and soft atmosphere that can enlighten the soul of any person.' 
      },
      { 
        question: 'Should Sheer Curtains Touch The Floor?',
        answer: 'Yes, you can give an amazing effect to your sheer curtains by making them touch the floor. It depends on the style that you want to apply to your interior decor with the help of these curtains. They will give a soft and aesthetic look if they are left to touch the floor.' 
      },
      { 
        question: 'When Should I Get Sheer Curtains?',
        answer: 'Get the sheer curtains only when you want to live in a soft, cozy, bright, and airy environment. When you want to enhance the ambiance of your room with the help of light filtered from sheer curtains, if you want to give a luxurious, appealing, and modern look to your interior, then sheer curtains would be the best choice for you.' 
      },
      
  ];
  
  const metaTags = [
    { property: 'title', content: "Top Rated Sheer Curtains Dubai Shop - Buy No.1 Sheer Drapes" },
    { name: 'description', content: "Closing Curtain is the top seller of sheer curtains Dubai at best pricing. We offer wide range of sheer curtains in Dubai with best installation service." },
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
        <link rel="canonical" href="https://closingcurtain.ae/service/sheer-curtains" />
        <link rel="icon" href="/closing-curtains.png" />
      </Head>
      <Header logo='/static/images/logo.png'/>

      <ServiceBanner imageUrl="/static/images/ServiceBanner.jpg"/>

      <ContentSection2
        image='/static/images/Super-Electric-Curtains.jpg'
        heading="Sheer Curtains Dubai - Soft and Airy Window Coverings"
        text="Sheer Curtains Dubai by Closing Curtain is the most mesmerizing yet heavy-duty curtain choice for a window treatment. 
        These attractive-looking curtains will be the finest decor addition to all your places and they are equally functional and 
        durable in nature too. "
        h31="Construction        "
        h31text="Made from 100% synthetic polyester, in a lightweight and light filtering profile, and are low-maintenance"
        h32="Pros"
        h32text="These curtains create the most pleasant environments and look greatly eye-catching and comforting, as well"
        />

        <ContentOnly
        heading="Create an Airy Ambience with Our Sheer Curtains in Dubai"

        text3={<p>Our window sheers are the most delightful decor elements to have and most importantly the ones that have a highly 
            resilient nature.<br/>These easy-to-maintain and totally low-cost home curtains will let you make the most out of natural 
            light and you can enjoy well-lit interiors around you.<br/> They are great at light filtering and make even the most piercing 
            sun rays extremely mild and pleasant, ultimately the benefit of energy efficiency.<br/>Our sheer curtains Dubai are long-lasting 
            in their functionality and the credit goes to their finest build quality. <br/>The curtains also provide up-to-the-mark privacy
             similar to the <Link className='text-decoration-none text-danger fw-bold' href='blackout-curtains'>Blackout window curtains </Link>  
             and adjustment light filtering and divergence.<br/> These curtains have a lightweight profile and yet are very sturdy.<br/> 
             They work by effectively diminishing the entrance of pollutants, allergens, insects, etc, keeping your surroundings 
             perfectly decluttered and well-maintained.<br/>They are extremely easy and inexpensive to clean and their designs, prints, 
             and colors are totally fade-resistant, as well.



            </p>}
        
            />

        <ContentService1
        heading="What Are The Areas To Use Sheer Curtains In?        "
        text={<p>You can flaunt any and every space with these classy curtains as they feature a highly versatile profile. They make 
            the perfect Bedroom curtains, are a great choice for guest rooms, dining rooms, living rooms, hallways and can even be used 
            within outdoor spaces like terraces, balconies, patios, etc. Moreover, these curtains look really eye-catching adjacent to 
            glass panes, sliding panels, patio doors and bi-fold doors.
            </p>}
        text1={<p>
            You can also make use of the sheer curtain panels as perfect room dividers or for creating a dreamy effect. And they 
            are an excellent choice for workspaces and commercials usage as elegant office curtains. Besides, you can also make use 
            of the semi Sheer Curtains Dubai if you don’t want the standard design. 
            </p>}
        image="/static/images/Stylish-Sheer-Curtains.jpg"
        />

        
        <ServiceGallery
        heading="See Our Sheer Curtain Gallery        "
        images={galleryImages}
        />


        

        <ContentService
        heading="The Aesthetic Wonders Of Our Sheer Window Drapes"
        text={<p>These are the kind of curtains that are beyond versatile and never fail accentuating any type of given surrounding. 
            For instance, these curtains are a really comforting choice for living room spaces and tend to brighten up the whole area 
            with their incredible light-filtering properties. Also, you can make them sync with some other window treatments, and a really 
            amazing example in this regard is the combination of Sheer Curtains Dubai with Blackout Window Blinds. 

            </p>}
        text1={<p>Adding to that, you get various impressive styling choices for these curtains, in addition to the solid or neutral 
            color options. And sheer window curtains look absolutely mesmerizing in floral prints, geometric patterns, lined styles 
            and even in the polka dot motifs. Visit us today, and we shall offer you the most extensive spectrum for an amazing curtain 
            selection!
            </p>}
        image="/static/images/Workspace-Decors-With-Our-Automatic-Curtains-Dubai.jpg"
        />

        <SaleSection
        text="10% Off Window Curtains and Blinds online - Sale End Today"
        />
        
        <ContentService2
        heading="Choose Our Flawless Sheer Curtains in Dubai Installation Services        "
        text={<p><Link className='text-decoration-none text-danger fw-bold' href='/'>Closing Curtain </Link>  brings you the entire curtain 
        services at one stop and you’ll find our whole skill set to be the most comprehensive one regarding all your home improvement 
        needs. Our curtain installation services bring about the entire beauty of any and every curtain type while also ensuring the 
        provision of maximum functional benefits to you, as well. 
            </p>}
        text1={<p>Our Sheer Curtains Dubai Installation and Organization Services will serve you a lot more than just a window 
            treatment upgrade, ensuring that you make the most out of this home décor project. So just give us a call today or get 
            in touch with us via email to have the best fitting and flaunting services for your favorite curtains. 
            </p>}
        image="/static/images/Classic-Electric-Curtains-In-UAE-1.jpg"
        />
        

        <ContentService3

        leftSectionTitle="Buy Quality And Affordable Sheer Curtains Dubai From Us        "

        leftSectionParagraph1={<p>And have your interiors upgraded like never before! Our curtain shop in the UAE features trendsetting 
            styles of Sheer Luxury Curtains in Dubai and you can add a great deal of beauty to your homes with them. They are mind-blowing 
            to look at and will timelessly create the most pleasant interior surroundings for you.

            </p>}

        leftSectionParagraph2="Also, these Sheer Curtains Dubai are really flexible in nature and therefore can be paired with literally 
        anything and can be draped in multiple ways, too. So do visit our Dubai curtain stores to shop for the best window dressing upgrade 
        on a budget!"


        faqHeading="FAQs (Frequently Asked Questions)"

        faqsData={faqsData}

        />
        <ProductSchema data={structuredData} />
        <Footer/>
    </div>
  );
};

export default SheerCurtains;
