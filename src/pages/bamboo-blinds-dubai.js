// pages/service.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from '@/components/Header'
import ContentSection2 from '@/components/ContentSection2';
import ContentOnly from '@/components/ContentOnly';
import ContentService from '@/components/ContentService';
import ServiceGallery from '@/components/ServiceGallery';
import ContentService1 from '@/components/ContentService1';
import Footer from '@/components/Footer';
import ContentService4 from '@/components/ContentService4';
import ProjectSection from '@/components/ProjectSection';
import ContentService3 from '@/components/ContentService3';
import ServiceBanner2 from '@/components/ServiceBanner2';
import Link from 'next/link';

const BombooBlinds = () => {
  const galleryImages = [
    '/static/images/Bamboo-Blinds-3.jpg',
    '/static/images/Bamboo-Blinds-4.jpg',
    '/static/images/Bamboo-Blinds-5.jpg',
    '/static/images/Bamboo-Blinds-6.jpg',
    '/static/images/Bamboo-Blinds-7.jpg',
    '/static/images/Bamboo-Blinds-8.jpg',
  ];
  const faqsData = [
    { 
      question: 'How Do You Care For Bamboo Blinds?',
      answer: 'You need to perform regular cleaning to make your bamboo blinds more durable. You should use a feather duster or vacuum cleaner to remove the dirt and debris from the surface of your bamboo blinds. As far as the monthly cleaning is concerned, wipe the slats of the blinds perfectly.' 
    },
    { 
        question: 'Do Bamboo Blinds Keep Out Rain?',
        answer: 'Bamboo blinds are manufactured in such a way that they have gaps between their slats, so they don’t protect your home from the rain. The rain can easily splash into your room and make your floor wet and dirty.' 
      },
      { 
        question: 'Are Bamboo Blinds Good For The Bedroom?',
        answer: 'Bamboo blinds are the perfect solution for bedrooms that have to face direct sunlight. They give not only you your privacy but also keep the temperature of your room normal. If you want to block the sunlight and keep your bedroom cool, then these blinds would be the best choice for you.' 
      },
      { 
        question: 'Do Cordless Blinds Last As Long As Corded?',
        answer: 'Corded blinds can be more durable as compared to cordless blinds. Corded blinds last for many years getting no damage because they can be operated on easily and carefully. While the cordless blinds are operated manually, they can easily get damaged if you don’t open and close their slats perfectly.' 
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

      <ServiceBanner2 imageUrl="/static/images/Closing-Curtain-121.jpeg" heading="Bamboo Blinds"/>

      <ContentSection2
        image='/static/images/Bamboo-Blinds-2.jpg'
        heading="Get Best Quality Bamboo Blinds Dubai"
        text="Closing Curtain brings you the exceptional and most durable window décor choice, which is Bamboo Blinds Dubai. 
        These highly energy-saving blinds work in absolutely amazing ways and add the most dynamic dimension to the entire space 
        they’ve been installed within. The durability is exceptionally promising and so are the aesthetics."
        h31="Construction"
        h31text="Made from wholly natural materials like grasses, reeds, and jute and can be customized, as well."
        h32="Added Pros"
        h32text="Can be used for achieving perfect light filtering and are the best option for excessively lit spaces."
        />

        <ProjectSection items={items} />

        <ContentOnly
        heading="Enhance Your Windows with Natural Bamboo Blinds Dubai"

        text1={<p>Our all-purpose bamboo window blinds serve as the finest and the most lucrative addition to all spaces. These blinds 
          are extremely easy and timeless to install, as per the foremost benefit. Our Bamboo Blinds Dubai work real efficiently by 
          keeping all the unnecessarily extreme heat out of the room, thus balancing the environment to a great extent.
          </p>}
        
        text2={<p>In addition to that, these blinds are greatly versatile in nature and also come with the advantage of huge 
          energy efficiency. They not only optimize the interior atmosphere in terms of temperature but also offer complete 
          brightness adjustability. This is the kind of <Link className='text-decoration-none text-danger fw-bold' 
          href='roller-blinds-dubai'>incredible window treatment</Link>  that offers the highest levels of privacy maintenance, 
          pretty similar to the working of <Link className='text-decoration-none text-danger fw-bold' 
          href='blackout-blinds-dubai'> Blackout Window Blinds</Link>. All in all, Our Bamboo window Blinds is a greatly beneficial 
          investment that will drastically reduce your energy bills.
          </p>}


        text4={<p>These blinds are super easy to take care of and remain serviceable under all kinds of atmospheric and utilization 
          conditions. Their maintenance merely requires a mild dusting or brushing off at times and they continue their sparkling 
          profiles for prolonged time periods. Last but not the least, is the fact that our bamboo Blinds Dubai are greatly affordable, 
          as well.

          </p>}

        
        />

        <ContentService1
        image='/static/images/blinds-collection-1.jpg'
        heading="What Are The Areas To Use Bamboo Blinds in Dubai?"
        text={<p>These exquisite <Link className='text-decoration-none text-danger fw-bold' href='blackout-blinds-dubai'>window 
        blinds</Link> feature the most simplified structural and design profiles and yet look great in all areas. Their entirely 
        natural-looking wood-toned designs come within various light and dark shades and give off the most entrancing looks. This is to say 
        that you can also enjoy the aesthetics of <Link className='text-decoration-none text-danger fw-bold' href='blackout-blinds-dubai'>
        Beautiful Wooden Blinds </Link> with them, as well.
          </p>}
        text1={<p>This way, it becomes much easier to pair them with all kinds of “wooden effect” themes and even with just the 
          furniture items, too. These blinds offer nice filtering and dimming for all the incoming harsh light and this way you can 
          easily create different <Link className='text-decoration-none text-danger fw-bold' href='sheer-curtains'>
          light casting ornamental effects </Link> with them, too.
          </p>}

        text2={<p>Our Bamboo Blinds Dubai are a highly functional and equally versatile choice for all residential spaces and they also 
          make the <Link className='text-decoration-none text-danger fw-bold' href='office-blinds-dubai'>best Commercial Window Blinds
          </Link> too. These blinds perfectly suit all sizes and styles of windows and have children and pet-friendly nature and 
          therefore can be used within nurseries and kids’ rooms, as well. 

</p>}
        />

        

        <ServiceGallery
        heading="Take A Look At Our Wondrous Works"
        images={galleryImages}
        />

        <ContentService4
        heading="Some Additional Merits Of Our Bamboo Blinds Dubai"
         text2={<p>Our quality bamboo wooden blinds are one of the finest home improvement additions and the most long-lasting ones, 
           too. These purposeful window blinds offer an infinite deal of perks and pros and ahead we’ve compiled the major ones for you.
          </p>}
            
          text3={<p>
            Bamboo window blinds make the most budget-friendly window treatment.<br/>
            Our quality Bamboo blinds Dubai will seamlessly blend into and will complement everything around them.<br/>
            You'll find it the easiest to care for these blinds.<br/>
            When used as an <Link className='text-decoration-none text-danger fw-bold' href='outdoor-blinds-dubai'>outdoor 
            window covering</Link>, these blinds provide the most adequate privacy maintenance. <br/>
            Energy-efficiency is probably the most fundamental plus point of these window blinds, as they provide you with both room 
            insulation and cooling.
          </p>}

        />

        <ContentService
        heading="Get The Finest Bamboo Blinds Dubai Installation From Us        "
        text={<p>In addition to the most excellent quality blinds, we’ve also got you the whole comprehensive skill set of blinds 
          installation, in order to have no compromise over the comfort provision for you. These expert-grade services ensure the 
          best possible seamlessness during blind fitting, so that the newly installed blinds appear as a well-synced part of the 
          surrounding decor.           </p>}
        text1={<p>Over and above, our fitting and adorning services for the Bamboo Blinds Dubai are perfectly time-saving and the entire 
          proficiency remains timelessly beneficial too. This way, you can easily make the most out of your investment regarding the 
          window treatment upgrade. Get in touch with us right away to benefit from the most budget-friendly yet excellent services 
          for your next window treatment.

          </p>}
        text2={<p></p>}
        image="/static/images/Best-Quality-Bamboo-Blinds.jpg"
        />
        
        <ContentService3
        leftSectionTitle="Choose Us For The Highest Quality Window Blinds Selection"

        leftSectionParagraph1={<p><Link className='text-decoration-none text-danger fw-bold' href='/'>Closing Curtain</Link> is one 
        of the most renowned platforms offering quality window treatments all over the UAE. Our first-rate products as well as the 
        associated set of services will not just bring about an ideal upgrade of your spaces but will also provide you the best value 
        for your money. This goes the same for our premium standard Bamboo Blinds Dubai which are a notable choice amongst our extensive 
        window dressing ranges.
            </p>}

        leftSectionParagraph2="You’re more than welcome to have these quality window blinds along with the most proficient installation 
        services and bestow a fundamentally finer look to your places. Besides, you can also have various size and profile customizations 
        in this regard, so as to come up with just the perfect solutions for all of your requirements. Do request a free quote today and 
        enjoy shopping for your next blinds with us!"


        faqHeading="FAQs (Frequently Asked Questions)"

        faqsData={faqsData}
        />

        <Footer/>
    </div>
  );
};

export default BombooBlinds;