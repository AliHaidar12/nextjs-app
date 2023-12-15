// pages/service.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';

import Header from '@/components/Header'
import ContentSection2 from '@/components/ContentSection2';
import ContentOnly from '@/components/ContentOnly';
import SaleSection from '@/components/SaleSection';
import ContentService from '@/components/ContentService';
import ServiceGallery from '@/components/ServiceGallery';
import ContentService1 from '@/components/ContentService1';
import Footer from '@/components/Footer';
import ContentService4 from '@/components/ContentService4';
import ContentService3 from '@/components/ContentService3';
import ServiceBanner2 from '@/components/ServiceBanner2';

const CurtainRods = () => {
    const galleryImages = [
        '/static/images/Curtain-Rods-3.jpg',
        '/static/images/Curtain-Rods-4.jpg',
        '/static/images/Curtain-Rods-5.jpg',
        '/static/images/Curtain-Rods-6.jpg',
        '/static/images/curtain-Rods-7.jpg',
        '/static/images/curtain-Rods-9.jpg',
      ];
  const faqsData = [
    { 
      question: "1. What's The Difference Between Curtain Rods And Drapery Rods?",
      answer: 'One of the most prominent differences between a curtain rod and a drapery rod is its weight-bearing capacity. Curtains are not too heavy, so they can easily hang on even delicate rods with thinner clips. While draperies are heavier than curtains, they need rods that can bear their weight and there is a need for thick clips to hang them.' 
    },
    { 
        question: '2. How Wide Should Curtain Rods Be?',
        answer: 'The curtain rods should be wider than your windows. Your curtain rods should be 8 to 12 inches wider than the width of your windows. So it can give 4 to 6 inches on both sides of the window. In this way, your windows are completely visible when you pull your curtains aside.' 
      },
      { 
        question: '3. How Much Weight Can A Curtain Rod Hold?',
        answer: 'The maximum weight that a curtain rod can hold is almost 45 pounds. The weight-bearing capacity of curtain rods varies depending on the material of the rod. Steel curtain rods can bear the weight of 40 pounds. Plastic and wood rods can bear a weight of up to 20 to 25 pounds. Metal rods are the strongest of all and can support 45 pounds of weight.' 
      },
      { 
        question: '4. Do You Need A Middle Bracket On The Curtain Rod?',
        answer: 'If you have a wider window, then you will need to install middle brackets on the curtain rods. Usually, place a supporting bracket every 30 to 35 inches. So you can estimate the need for middle brackets by the length of your windows. If your window is 65 inches long, you will need 2 middle brackets.' 
      },
    
  ];


  
  

  return (
    <div>
      <Header logo='/static/images/logo.png'/>

      <ServiceBanner2 imageUrl="/static/images/Closing-Curtain-121.jpeg" heading="Curtain Rods"/>

      <ContentSection2
        image='/static/images/Curtain-Rods-2.jpg'
        heading="Curtain Rods Dubai - Buy Functional and Decorative Window Hardware"
        text="Closing Curtain brings you the highest quality Curtain Rods Dubai, for the most adequate fitting of your curtains. These 
        attractive-looking and extremely durable rods will not only provide the right installation canvas for your curtains but will 
        maximize their beauty, as well.         "
        h31="Construction"
        h31text="Made from top-quality Wood, Plastic, or Metal and available within all types of length and width measurements"
        h32="Working"
        h32text="These rods make the curtain suspend at the right altitude and at the perfect distance from surrounding stuff"
        />

        <SaleSection
        text="10% Off Window Curtains and Blinds online - Sale End Today"
        />

        <ContentOnly
        heading="Functional and Decorative Curtain Rods Dubai for Your Windows"

        text1={<p>These rods are more of a curtain essential or must-have in the first place. They provide the adequate medium for 
            curtains to move in the smoothest and most effortless ways. Most commonly, they are used to attach the curtains using 
            certain other elements such as <Link  className='text-decoration-none text-danger fw-bold' href='curtain-ring'>Curtain rings </Link>, 
            hooks, clips, or hoops.
            </p>}
        
        text2={<p>
            But in other cases, these Curtain Rods Dubai are made to pass through the curtains holes (eyelets in general) present at the 
            top of the curtains, followed by hanging them. This way, it becomes much easier to move the curtain across the rod and also 
            to open and close it much quickly. These rods can be easily used for all types of curtains and the usage isn’t just confined 
            to <Link  className='text-decoration-none text-danger fw-bold' href='eyelet-curtains'> Eyelet Window Curtains </Link>.


        </p>}

        text3={<p>These rods come within a number of sizes and styles by default. However, if you don’t find the right kind of rods 
            for your curtains, then you can always have the customization of Curtain Rods in Dubai from us. 
            </p>}

        text4={<p>We are the first-rate <Link  className='text-decoration-none text-danger fw-bold' href='curtain-rings'> curtain 
        accessories supplier in UAE </Link> and have incomparable excellence in dealing with all kinds of curtain requirements. 
        One notable example of our vast service spectrum is the ravishing rods will make your curtains stand out and thus you can 
        enjoy their whole beauty for the longest periods of time.

            </p>}
        
        />

        <ContentService1
        image='/static/images/curtains-rods-collection.jpg'
        heading="What Are The Benefits Of Curtain Rods?"
        text1={<p>Our quality rods feature the best and sturdiest build quality, hence are well-guaranteed of lasting long. In addition to 
            the curtain beauty enhancement, these rods also ensure the most appropriate safety of your curtains, efficiently keeping all
             kinds of damage at bay. These rods come in a wide variety of sizes, styles, finishes, patterns, and colors, so as to well 
             complement all<Link  className='text-decoration-none text-danger fw-bold' href='sheer-curtains'> curtain designs </Link> .

            </p>}
        text2={<p>You can have the ornamental rods that feature stylish ends and beautiful profiles or you can have those simple ones 
            that look genuinely elegant. Over and above, we’ve got you several adjustable Curtain Rods Dubai options too, that can be 
            made to fit various types of curtain designs, such as the 
            <Link  className='text-decoration-none text-danger fw-bold' href='silk-curtains'> Adorable Silk Curtains </Link>. These rods are a 
            must-have for all curtain flaunted areas generally. However, they’re specifically important for places such as bathrooms, 
            i.e. for smooth movement of shower curtains. 

            </p>}
        />

        <ContentService4
        heading="Popular Styles Of Curtain Rods Dubai        "
         text1={<p>We’ve got you a whole lot of amazing options of the rods for curtains, so that you don’t need to face a single 
             inconvenience in finding the right element for your curtains. Also, you can consider our expert recommendations in this 
             regard. 
          </p>}
          text2={<p>In addition to that, you can always benefit from the curtain rod customization services, which, as the name suggests, 
              is the particular crafting or molding of a certain rod for a certain functionality, i.e. for fulfilling a distinctive 
              requirement.
         </p>}
         text3={<p>Some of the most frequently used versions of our quality Curtain Rods Dubai include cafe Curtain Rod, Traverse Rod, 
             Extendable Rods, Acrylic Rods for curtains and various ornamental options such as the decorative iron rods and wooden rods. 
             You can shop for all these ritzy rod options online or can always pay a visit to our curtain shops in Dubai!


       </p>}
        />

        <ServiceGallery
        heading="Check Out Our Premium Quality Curtain Hardware"
        images={galleryImages}
        />

        <ContentService
        heading="Have Us For The Best Expertise Of Curtain Rods Installation"
        text={<p>And we’ll help you benefit the most from your<Link  className='text-decoration-none text-danger fw-bold' href='living-room-curtains'> 
        new curtain treatment </Link> . Our experts are right at your service to help you at any and every point of the curtain accessory 
        selection as well as fitting. We’ll not just help you pick out the right kind of curtain accessories but will also serve 
        you with the most perfect and seamless installation of each one of them.

            </p>}
        text2={<p>This goes particularly true for our Curtain Rods Dubai Installation, with which you can ensure a flawless fitting 
            and an amazing beauty depiction of your curtains. Our services are completely affordable and you’ll find each one of them 
            the most useful treatment for your curtains. So don’t delay those incredible additions to your curtains anymore and give 
            us a call today. We shall be more than glad to serve you right away!

            </p>}
        image="/static/images/Best-curtains-rods-1.jpg"
        />
        <SaleSection
        text="10% Off Window Curtains and Blinds online - Sale End Today"
        />
         
        <ContentService3
        leftSectionTitle="We Offer The Finest Curtain Accessories All Across The UAE"

        leftSectionParagraph1={<p>
            <Link  className='text-decoration-none text-danger fw-bold' href='/'></Link>Closing Curtain, your ultimate trustworthy home décor 
            provider has got you the <Link  className='text-decoration-none text-danger fw-bold' href='/'>complete range 
            of curtain services</Link> for generating the most adorable versions of your places. Our Curtain Rods Dubai are just another notable 
            aspect of the <Link  className='text-decoration-none text-danger fw-bold' href='/'> extensive curtain treatment spectrum  </Link> 
            of ours, from which you can easily find the best complementing must-haves for your curtains. 
            </p>}

        leftSectionParagraph2="We welcome you to explore our platform and shop for the finest quality curtain essentials and accessories, 
        thus benefit maximally from your curtains. Besides, if you aren’t very much obvious about the exact requirements of your window 
        treatments, then you can simply negotiate whatever you look forward to, from your next curtain treatment and we shall help you 
        settle for the best. Do request your free quote today!
        "
        faqHeading="FAQs (Frequently Asked Questions)"

        faqsData={faqsData}
        />

        <Footer/>
    </div>
  );
};

export default CurtainRods;