// pages/service.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from '@/components/Header'
import ContentSection2 from '@/components/ContentSection2';
import ContentOnly from '@/components/ContentOnly';
import SaleSection from '@/components/SaleSection';
import ContentService from '@/components/ContentService';
import ServiceGallery from '@/components/ServiceGallery';
import ContentService1 from '@/components/ContentService1';
import Footer from '@/components/Footer';
import ServiceBanner from '@/components/ServiceBanner';
import ContentService4 from '@/components/ContentService4';
import ProjectSection from '@/components/ProjectSection';
import ContentService3 from '@/components/ContentService3';

const BlackoutCurtains = () => {
  const galleryImages = [
    '/static/images/1-Top-Quality-Blackout-Curtains.jpg',
    '/static/images/2-Top-Quality-Blackout-Curtains.jpg',
    '/static/images/3-Top-Quality-Blackout-Curtains.jpg',
    '/static/images/4-Top-Quality-Blackout-Curtains.jpg',
    '/static/images/5-Top-Quality-Blackout-Curtains.jpg',
    '/static/images/6-Top-Quality-Blackout-Curtains.jpg',
  ];
  const faqsData = [
    { 
      question: 'Do Blackout Curtains Work Both Ways?',
      answer: 'The blackout curtains work from one side. The other side of blackout window curtains has blackout fabric that blocks all the light rays and most of the sound that enters your place. Blackout fabric faces the wall, and the liner is made from beautiful fabric that faces the room.' 
    },
    { 
        question: 'What Are The Benefits Of Blackout Curtains?',
        answer: 'There are many benefits to Blackout curtains. One of the biggest benefits of these curtains is that they can provide you an opportunity to sleep peacefully even during the day while blocking all the light rays and sounds. With the help of these amazing curtains, you can get extra privacy at home.' 
      },
      { 
        question: 'What Is The Difference Between Blackout And 100% Blackout Curtains?',
        answer: 'There is a minor difference between blackout curtains and 100% blackout curtains. The fabric that is used in the making of blackout curtains can be 90% to 95% blackout, but 100% blackout curtains use fabric that is completely blackout.' 
      },
      { 
        question: 'Do Blackout Curtains Block UV Rays?',
        answer: 'Yes, blackout curtains can block UV radiation from entering your home. But they can’t block 100% of harmful radiation; they can just reduce it. Rooms having blackout curtains are safe from the damage of UV radiation, so furniture, carpets, and paint in those rooms can last a long time with no damage.' 
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
      number: "5",
      title: "Award Wins"
    },
    {
      icon: "/static/images/curtains.png",
      number: "370+",
      title: "No. of Designs"
    },
  ]
  

  return (
    <div>
      <Header logo='/static/images/logo.png'/>

      <ServiceBanner imageUrl="/static/images/ServiceBanner.jpg"/>

      <ContentSection2
        image='/static/images/Versatile-Blackout-Curtains.jpg'
        heading="Blackout Curtains Dubai - Perfect Option For Windows!"
        text="Blackout Curtains Dubai is the most durable and beautiful curtain type to choose for your windows. We offer high-quality 
        blackout window curtains with a huge range of design and color collections.         "
        h31="Construction"
        h31text="Made from Heavy microfibre, Polyester, Thick Cotton, or Polyester-Cotton blend using the triple weave technology"
        h32="Pros"
        h32text="These curtains effectively diminish the majority amount of the light and noise entering a room, along with room insulation"
        />

        <ProjectSection items={items} />

        <ContentOnly
        heading="Buy Custom Made Blackout Curtains Dubai By Closing Curtain"

        text1={<p>Our Blackout window curtains have their foremost perk in being super-efficient light blockers. This way they create the
             most agreeable and calming environments within all interiors. These wondrous blackout curtains Dubai come with ideal usage 
             versatility and can be used to achieve several desired levels of room darkening, in addition to a complete blackout. These 
             Black Out Curtains are a perfect choice for bedrooms and also are the best option as comforting  
             <a className='text-decoration-none text-danger fw-bold' href='living-room-curtains'> living room drapes</a>.

            </p>}
        
        text2={<p>They feature a thick and rich fabrication and therefore work as the sturdiest barriers, effectively keeping all the 
            external bothersome factors at bay. So in addition to providing the most non-disruptive and calmative sleeping times and 
            rest hours, they’ll also keep your interior spaces clean and well-maintained.
            </p>}

        text3={<p>Adding to that, having our hard-wearing blackout window curtains will keep all the noise pollution totally away from 
            you. These Blackout Curtains also work as perfect thermal curtains, providing admirable levels of temperature optimization. 
            So at this point, it goes without saying that these curtains make the best 
            <a className='text-decoration-none text-danger fw-bold' href='office-curtains'> Office curtains </a> 
            and <a className='text-decoration-none text-danger fw-bold' href='hotel-curtains'> commercial drapes</a> too. 

            </p>}

        text4={<p>These curtains insulate the interiors up to a considerable extent and also offer the ideal cooling effect when needed, 
            thus the perfect window treatment approach for all atmospheric conditions. Blackout Curtains Dubai feature the finest build 
            quality and therefore are extremely resilient in nature. And they will be your low-cost and 
            <a href='eyelet-curtains' className='text-decoration-none text-danger fw-bold'> low-maintenance window treatments </a> 
            for many years to come.

            </p>}

        
        />

        <SaleSection
        text="10% Off Window Curtains and Blinds online - Sale End Today"
        />
        <ContentService1
        image='/static/images/Blackout-Hotel-Curtains-UAE.jpg'
        heading="What Are Decor Pros Of Blackout Curtains in Dubai?"
        text={<p>Our best blackout window curtains offer ideally captivating aesthetics, as well. These curtains are the best idea to 
            consider when there is a major requirement for a genuinely functional home decor. They are the eye-catching form of window 
            covering with the most flexible and versatile attributes, in order to provide the best for all needs, for instance the usage 
            as <a href='home-curtains' className='text-decoration-none text-danger fw-bold'> all-purpose home curtains</a>. 

            </p>}
        text2={<p>You can have these smart and serviceable curtains within all of your desired places and can totally pair them with 
            any ornamental organization of your choice. Apart from the standard blackout ones, you can also have these stunning drapes 
            in the form of room darkening curtains. Also, you don’t really need to stick with the mainstream Blackout Curtains Dubai, 
            rather you can have them within any of your desired shading or coloring, as the efficient working remains the same.

            </p>}
        />

        <ContentService4
        heading="Everlasting Significance Of Blackout Curtains Dubai"
         text1={<p> Our quality blackout room curtains are a foolproof way of achieving an incredible comfort for your places, that too, 
             without the slightest compromise on styling. These curtains are just the right kind of 
             <a className='text-decoration-none text-danger fw-bold' href='blackout-blinds-dubai'> functional decor </a> and can seriously 
             outperform any and every other type of curtain. 
          </p>}
          text2={<p> Post getting these quality curtains, you’re meant to notice a major change within your overall health as well as your 
              sleep quality. These curtains will serve as legit life-savers for those of you with messed up sleep schedules or those working 
              in night shifts. 
         </p>}
         text4={<p>In addition to light blockage, they also provide reasonable levels of sound insulation, thus adding to the overall 
             comfort provision.

            </p>}
        />

        <ServiceGallery
        heading="Take A Look At Our Exclusive Varieties"
        images={galleryImages}
        />

        <ContentService
        heading="Have Our Premium Blackout Curtains Dubai Installation Services"
        text={<p>Our quality curtains are just the most incredible choice to consider, in case you’re up for a 
            <a className='text-decoration-none text-danger fw-bold' href='roller-blinds-dubai'> window treatment upgrade</a>. 
            Having that said, we’re proud to present you with our expert-grade 
            services for the Blackout window curtains installations, aimed towards the highest levels of excellence. Our services will 
            take the best care of each and every step of a flawless curtain fitting.
            </p>}
        text2={<p>Over and above, our Blackout Curtains Dubai installation services will work as a major decorative treatment for your 
            places, making them a lot more appealing than before. Affordability, cost-effectivity, swiftness, timelessness and ultimate 
            perfection are the other noteworthy aspects of our services. Do request your free quote today and schedule your places for the 
            perfect curtain additions!

            </p>}
        image="/static/images/Modern-blackout-curtains.jpg"
        />
        <SaleSection
        text="10% Off Window Curtains and Blinds online - Sale End Today"
        />
         
        <ContentService3
        leftSectionTitle="We Are The Top-notch Suppliers Of Quality Blackout Curtains in Dubai"

        leftSectionParagraph1={<p><a className='text-decoration-none text-danger fw-bold' href='/'>Closing Curtain</a> is a top-tier 
        platform, well-known for offering exceptional quality window curtains in Dubai on a budget. Our quality blackout drapes are not 
        just the most wonderful decor addition, but also a really incredible functional element for enhancing the comfort extent of your 
        places. Moreover, these curtains will favor you with their cost-efficiency too, for extensive timespans. 
            </p>}

        leftSectionParagraph2="Do reach out to us for shopping the best Blackout Curtains Dubai at pocket-friendly rates and you’ll find 
        this treatment to be the most advantageous one in the long run. We do provide expert installation services as well and will make 
        your next home improvement project the most mind-blowing for you. Get in touch today!"

        faqHeading="FAQs (Frequently Asked Questions)"

        faqsData={faqsData}
        />

        <Footer/>
    </div>
  );
};

export default BlackoutCurtains;
