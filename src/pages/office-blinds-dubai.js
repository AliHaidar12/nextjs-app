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

const OfficeBlinds = () => {
  const galleryImages = [
    '/static/images/Office-Blinds.jpg',
    '/static/images/Office-Blinds1.jpg',
    '/static/images/Office-Blinds2.jpg',
    '/static/images/Office-Blinds3.jpg',
    '/static/images/Office-Blinds4.jpg',
    '/static/images/Office-Blinds5.jpg',
  ];
  const faqsData = [
    { 
      question: "1. What Type Of Blinds Are Best For Office?",
      answer: "You can use any type of blind for your office according to your choice and the interior of your place. But if you want ideal blinds for your office, as suggested by experts, then roller blinds, blackout blinds, vertical blinds, Venetian blinds, day and night blinds, and wooden blinds can be the best choices for you." 
    },
    { 
        question: "2. Why Do Offices Have Blinds?",
        answer: "If your workers are using laptops and screens in your office, then blinds are the best window solution for you because they can block all the unwanted light and harmful radiation. Because of their soundproof qualities, they can add calm and peacefulness to your place. They can also protect your office from being seen from outside when it is vacant." 
      },
      { 
        question: "3. What Materials Are Available For Office Blinds?",
        answer: "There are several materials available on the market that you can use for your office blinds. The most suitable and beneficial materials for the use of office blinds are wood, aluminum, and PVC. These blinds give your offices complete privacy and also protect them from outside noises that can disturb your working environment." 
      },
      { 
        question: "4. How Do You Put Down Office Blinds?",
        answer: "The opening and closing mechanisms of your office blind totally depend on you. You can install a remote control system for your office blinds, or you can also add a string or chain to put down your blinds. You can also select between the horizontal and vertical opening and closing mechanisms according to the needs of your place." 
      },
     
    
    
  ];
  const items = [
    {
      icon: "/static/images/window-1.png",
      number: "3200",
      title: "Project Complete"
    },
    {
      icon: "/static/images/customer-service.svg",
      number: "3000",
      title: "Happy Clients"
    },
    {
      icon: "/static/images/medal.png",
      number: "25",
      title: "Award Wins"
    },
    {
      icon: "/static/images/curtains.png",
      number: "3700",
      title: "No. of Designs"
    },
  ]

  //const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

  return (
    <div>
      <Header logo='/static/images/logo.png'/>

      <ContentSection2
        image='/static/images/Vertical-Office-Blinds.jpg'
        heading="Buy Best Office Blinds in Dubai At Low Price"
        text="Want to buy stylish office blinds in Dubai? Closing Curtain, being well aware of all the commercial level requirements, 
        presents to you the highest presentable window décor of office blinds. These super sleek and modern blinds will serve as 
        greatly attractive and lucrative ornamentation for you at the same time. This treatment is best at making all workspaces 
        a lot more comfortable than before!"
        h31="Construction"
        h31text="Made from aluminum, PVC, real wood, or faux wood and come in the form of slats operated by cords"
        h32="Functionality"
        h32text="These blinds have a lightweight yet very hard-wearing profile and are extremely resilient and versatile in nature"
        />

        <ServiceBanner imageUrl="/static/images/quality-blinds-in-uae.jpg"/>

        

        <ContentOnly
        text1="In the first place, our office window blinds feature an absolutely premium crafting, the one that is in perfect 
        accordance with all the workspace demands. These blinds are way too appealing to look at and provide the most durable 
        and heavy-duty functionality."
        
        text2="In addition to that, the incredible way in which our Office Blinds Dubai work is meant to favor you a lot and will 
        also save reasonable bucks of yours. They feature a sturdy build quality and their foremost perk is the efficient light 
        control. You can benefit from this light adjustment in multiple ways."
        text3="These favorable blinds let in maximum amounts of natural light, hence lowering the energy expenses. In the same 
        way, our office window blinds offers effective shadowing or darkening, as well, which is a crucial commercial requirement 
        under the circumstances of meetings and presentations. In other words, providing the incredible functionality of Blackout 
        window blinds."
        text4="Moreover, our office blinds will be your reliable protectors, when it comes to your safety as well as of course, 
        your valued workspace. The privacy that office blinds offer is flawless and thus is the most beneficial investment to 
        consider. At this point, a noteworthy choice of our commercial blinds worth mentioning is the Bamboo window blinds."

        heading="Optimize Your Workplace With Our Office Blinds Dubai "
        />

        <ProjectSection items={items}/>

       
        <ContentService
        heading="Features Of Our Office Blinds In Dubai"
        text1="These durable and sturdy office blinds do serve adornment purposes really efficiently, too. With their nicest 
        streamlined aesthetics, they give off a wholly sleek appearance and an accomplishing effect on the overall workspace. 
        Office Roller Blinds are a particular recommendation in this regard, which best suits a vast majority of requirements."
        text2="Office Blinds Dubai is the most practical approach to complimenting your office room decor. Their beauty comes 
        with several functional benefits, as well, and they are notable enough to make a difference. Moreover, these blinds 
        greatly enhance productivity extent since they ensure perfect comfort provision for the workers. "
        text3="Having our Office Blinds in Dubai will let you enjoy the most pleasant decor creation on a budget. Also, they 
        add on the beauty of a place by those wonderful patterns and styles in which they filter and cast the natural lig"
        image="/static/images/Office-Blinds-Collection.jpg"
        />
        
        <ServiceGallery
        heading="Visit Our Glorious Gallery"
        images={galleryImages}
        />

        <ContentService1
        image='/static/images/quality-office-blinds-in-Dubai.jpg'
        heading="Choose The Finest Window Décor For Your Power Offices"
        text="Our office blinds are one of the most amazing ways to add a lot of elegance to any commercial space, without making 
        anything seem overly done. That’s because these sleek blinds feature just the right kind of presentable looks, which is 
        meant to appear attractive but never too bold. Also, this does contribute to creating a welcoming statement for the 
        commercial environments, which of course, is a major factor when it comes to business growth."
        text1="Our Office Blinds Dubai are flexible and you can always pair them with any other window treatments in case of 
        particular requirements, such as with some quality curtains or external shutters. And with these blinds, you’ll enjoy 
        a complete adjustment over all essential factors around you, such as privacy maintenance, room illumination, safety 
        purposes, aesthetic goals and functional requirements."
        />
        
        <SaleSection
        text="10% Off Window Curtains and Blinds online - Sale End Today"
        />

        <ContentService2
        heading="Have Our Exceptionally Adept Office Blinds Installation Services"
        text="Closing curtain presents to you the finest skill set for Office Blinds fitting and organization, so as to 
        generate the best outcomes from the treatment. These expert-grade services are aimed at perfection and you’ll 
        find them entirely seamless and timeless simultaneously. Besides, these services also ensure providing the best 
        for all of the distinctive functional requirements too."
        text1="Do choose our time-tested proficiency when you’re looking forward to a dynamic upgrade for your commercial 
        areas, work spaces, and corporate offices. Office Blinds Dubai is affordable and timeless to acquire. Moreover, 
        we also ensure getting done with the entire procedure(s) in perfectly timely ways. Reach out to us and have our 
        services right at your doorstep."
        image="/static/images/Amazing-office-blinds-subai.jpg"
        />

        <ContentService
        heading="Our Office Blinds Dubai Feature The Most Quality Construction"
        text="And these blinds will have a lot of elegance as well as comfort induced within your places with these amazing blinds. They are not 
        just great at enhancing the entire interior looks but also bring about a lot of productivity which seems really pleasant. 
        The build quality you get is ideally sublime and so is the amazing performance. Not to mention the durability factor, as well.  "
        text1="Our Office Blinds in Dubai provides the most notable levels of comfort and they are a great way to reduce the energy 
        expenses within the workspaces, too. Visit our platform to shop for these best blinds online and you’ll have an amazing time 
        selecting an amazing window treatment for your commercial environments!"
        image="/static/images/Best-office-blinds-dubai.jpg"
        />
        <FAQsSection
        heading="FAQs (Frequently Asked Questions)"
        faqsData={faqsData}
        />

        <Footer/>
    </div>
  );
};

export default OfficeBlinds;
