// pages/service.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from 'src/components/Header'
import ContentSection2 from 'src/components/ContentSection2';
import ContentOnly from 'src/components/ContentOnly';
import SaleSection from 'src/components/SaleSection';
import ServiceGallery from 'src/components/ServiceGallery';
import ContentService1 from 'src/components/ContentService1';
import ContentService2 from 'src/components/ContentService2';
import ContentService4 from 'src/components/ContentService4';
import ContentService3 from 'src/components/ContentService3';
import Footer from 'src/components/Footer';
import ServiceBanner2 from 'src/components/ServiceBanner2';
import ProjectSection from 'src/components/ProjectSection';
import Head from 'next/head';

const soundproofCurtains = () => {

    const items = [
        {
          icon: "/static/images/window-1.png",
          number: "3200",
          title: "Project Complete"
        },
        {
          icon: "/static/images/customer-service.svg",
          number: "2600",
          title: "Happy Clients"
        },
        {
          icon: "/static/images/medal.png",
          number: "5",
          title: "Award Wins"
        },
        {
          icon: "/static/images/curtains.png",
          number: "4500",
          title: "No. Of Collection"
        },
      ]
  const galleryImages = [
    '/static/images/Soundproof Curtains (1).jpg',
    '/static/images/Soundproof Curtains (2).jpeg',
    '/static/images/Soundproof Curtains (3).jpg',
    '/static/images/Soundproof Curtains (4).jpg',
    '/static/images/Soundproof Curtains (6).jpg',
    '/static/images/Soundproof Curtains (5).jpg',
  ];
  const faqsData = [
    { 
      question: 'Are Sound-Absorbing Curtains Effective?',
      answer: 'Yes, soundproof curtains can significantly and noticeably reduce the levels of incoming noise. Depending on the quality of fabric materials and the thickness of the fabric layers, the extent of function may vary from panel to panel. However, on a larger scale, these heavyweight curtains are super effective.' 
    },
    
    { 
        question: 'What Are Acoustic Curtains Made Of?',
        answer: 'The most commonly used fabrics for making genuinely effective acoustic curtains are polyester, suede, and velvet. That’s because the extra-large and thick layers of strongly inter-knitted fabrics can pretty easily act as a barrier to the sound waves rather than letting them pass through.' 
      },
      { 
        question: 'Where Can I Find The Best Soundproof Curtains In Dubai?',
        answer: 'Closing Curtain is the best acoustic curtain-selling store in Dubai no matter whether you’re looking for the best quality, economical pricing, or unmatched versatility of the products. That’s because they’re among the most renowned, reliable, and top-quality acoustic curtain suppliers in Dubai.' 
      },
      { 
        question: 'Which Is Better Soundproof Curtains or Panels?',
        answer: 'Soundproof curtains are more versatile comparatively and can also be used to flaunt a wide variety of indoor and outdoor places. On the other hand, soundproof panels prove to be more beneficial against a range of mid and low-frequency sounds making them get the upper hand functionality-wise. ' 
      },
      
    
  ];
  
  const metaTags = [
    { property: 'title', content: "Buy High Quality Soundproof Curtains Dubai | 30-40% OFF" },
    { name: 'description', content: "We offer a range of soundproof curtains Dubai for homes and offices. Get cheap & high quality aesthetic noise cancelling curtains. Call us now." },
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

      <ServiceBanner2 imageUrl="/static/images/Closing-Curtain-121.jpeg" heading="Buy Our Soundproof Curtains"/>
      
      <ContentSection2
        image='/static/images/soundproof-curtains (1).jpg'
        heading="Soundproof Curtains Dubai–The Most Serviceable Window Treatment"
        text="Closing Curtain presents you with Soundproof Curtains Dubai which are the best solution to counter noise pollution issues 
        coming from outside your home space. These curtains not only absorb incoming noise but also function to add to the delightfulness 
        and desirability of your home interior."
        h31="Crafting"
        h31text="Made from 100% mass loaded vinyl core, these heavyweight and thickly fabricated curtains are dense and follow an 
        inter-knitting weaving."
        h32="Benefits"
        h32text="These acoustic curtains will truly uplift the aesthetics of your space besides helping you enjoy quality sleep."
        />
        <ProjectSection items={items}/>
        
        <ContentOnly
        heading="Enjoy The Perks & Pros Of Having Soundproof Curtains Dubai"

        text1={<p>Here’s a brief explanation of all the noteworthy features that you can enjoy with this valuable purchase.</p>}
        
        text2={<p>
          Our soundproof curtains Dubai are available in a wide variety of astonishing options for a complementing choice.
          The best quality crafting standards make these curtains highly durable, truly resilient, and genuinely purposeful.
          These acoustic curtains function to absorb incoming noise and therefore reduce the interior noise levels for promising sleep quality.
          The delightful designs and interesting patterns of these colorful noise-canceling curtains will surely uplift the aesthetics of your place.
          Being heavyweight, these curtains provide significant insulation and energy efficiency as well.
          Your soundproof curtains can become dual functional just by the addition of blackout fabric lining.
        </p>}

        
        />
        <ContentService2
        heading="Buy The Most Captivating Transparent Soundproof Curtains"

        
        text={<p>
          No one can deny the fact that each and every home interior is designed specifically keeping in view the aesthetic taste of the owner and therefore, demands 
          to be decorated distinctively. Keeping in view these utmost interior requirements, we offer acoustic curtains in a wide variety of complementing options.
        </p>}

        text1={<p>The intricate designs matched ideally with astonishing weave-like patterns is our curtain styling approach improves the aesthetics 
          of each and every home space. Besides, our transparent Soundproof Curtains Dubai are available in a vast collection of amazing designs, 
          delightful patterns, comforting textures, astonishing colors, and variable sizes. 
            </p>}

        image="/static/images/soundproof-curtains (5).jpg"
        />

        <ContentService1
        image='/static/images/soundproof-curtains (4).jpg'
        heading="Explore The Versatility Aspect Of Soundproof Curtains"
        text={<p>If you’re looking for an answer to where these elegant window treatments are used, then you will be very much delighted to know that these 
          noise-canceling window coverings feature a versatile profile. Just like silk curtains Dubai, you can make use of these acoustic curtains to decorate 
          your bedrooms, guest rooms, dining rooms, living rooms, hallways, etc.
            </p>}
        text1={<p>Besides, the use of these acoustic window treatments in outdoor spaces like balconies, patios, terraces, etc will significantly add to 
          the aesthetic value of these places. Last but not the least, these amazing window covering solutions can act as room dividers and be ideally paired 
          with glass panels, bi-fold doors, etc.</p>}
          
        />
        <SaleSection
        text="40% Off Window Curtains and Blinds online - Sale End Today"
        />
        
        <ServiceGallery
        heading="View our Flourishing Soundproof Curtains Gallery"
        images={galleryImages}
        />        
        <ContentService4
        heading="We Offer Proficient Installation Services For Soundproof Curtains Dubai"
         text1={<p> 
             Now that you’ve bought sound-absorbing curtains for your home as the ultimate window treatment. Obviously, you must be 
             looking forward to getting your soundproof curtains Dubai panel installed proficiently. For this purpose, we are the 
             only reliable source for a valuable investment. We have a team of highly skilled, and equally experienced professionals 
             to perform this task for you. Also, you need not worry about the cost of installation services because just like the 
             products, you’ll find our quality installation services to be equally inexpensive as well.
          </p>}
          
         
        />
        <ContentService3

        leftSectionTitle="Get Our Premium Quality Soundproof Curtains At Affordable Prices"

        leftSectionParagraph1={<p> Coming towards the quality of material, these noise reducing curtains are specially crafted with 
          multiple fabric layers in between so as to regulate the functionality aspect quite superbly. Besides, we only use 100% 
          pure quality materials in the manufacturing process and that’s why our best soundproof curtains Dubai come under the 
          category of heavyweight and dense window coverings. </p>}

        leftSectionParagraph2="Speaking of the cost factor, you’ll be astonished to know about the reasonable price ranges of our products. 
        We offer the most budget-friendly prices for these best-quality sound-absorbing curtains to help you get your desired window 
        covering element without disturbing your financial situation. "


        faqHeading="FAQs (Frequently Asked Questions)"

        faqsData={faqsData}

        />
       
        <Footer/>
    </div>
  );
};


export default soundproofCurtains;