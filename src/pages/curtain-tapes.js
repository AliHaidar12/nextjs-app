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
import ContentService2 from '@/components/ContentService2';
import FAQsSection from '@/components/FAQsSection';
import Footer from '@/components/Footer';
import ServiceBanner2 from '@/components/ServiceBanner2';
import ProjectSection from '@/components/ProjectSection';

const CurtainTapes = () => {
  const galleryImages = [
    '/static/images/Curtain-Tapes-2.jpg',
    '/static/images/Curtain-Tapes-3.jpg',
    '/static/images/Curtain-Tapes-4.jpg',
    '/static/images/Curtain-Tapes-5.jpg',
    '/static/images/Curtain-Tapes-6.jpg',
    '/static/images/Curtain-Tapes-7.jpg',
  ];
  const faqsData = [
    { 
      question: 'What Is Meant By Curtain Header Tape?',
      answer: 'Curtain Header Tape, technically, is a fabric band which is usually stiff in profile and is sewn on the top of the curtain panel along with the fabric. It gets collected in the curtain pleats across the whole curtain panel and makes curtain gathering easier due to the built-in pleat pockets. ' 
    },
    { 
        question: 'Is The Iron-On Curtain Tape A Good Idea?',
        answer: 'Iron-on curtain tape or hem tape is actually a really useful accessory to consider, particularly if you don’t want to indulge in detailed and troublesome curtain treatments. As suggested by the name, you simply need to place this tape atop the curtain on the right spot, followed by ironing it thoroughly to the point that it sticks well to the point it’s supposed to hold. ' 
      },
      { 
        question: 'Can I Achieve Traditional Curtain Looks With Curtain Tapes?',
        answer: 'Our Curtain tapes Dubai are indeed super useful elements when it comes to curtain styling. You can achieve literally any and every desired styling with these tapes, and most importantly the classic curtain styles such as pinch pleat patterns or the pencil pleat ones. In addition to that, you can also make use of these curtain tapes for making other traditional curtain designs. ' 
      },
      { 
        question: 'Can Curtain Tapes Be Used For Short Curtains?',
        answer: 'Curtain tapes are a highly versatile accessory as they prove functional for nearly every curtain profile. Besides, you can also find particular curtain tapes, known as Universal tapes, which are particularly designed for shorter curtains. This way, you can easily achieve any of your desired styling with your favorite curtains, no matter what size they are.' 
      },
      { 
        question: 'What’s The Difference Between Curtain Tape And Pleating Tape?',
        answer: 'In the first place, there does not exist a lot of difference between the two, since both are meant for securing the curtain profile and to achieve different styles. As for the pleating plates, you can easily sew them to your desired curtain panels for creating various adorable drapery headings. Regular curtain tapes on the other hand, might require professional handling, particularly if you want way too intricate curtain styling. ' 
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

  return (
    <div>
      <Header logo='/static/images/logo.png'/>

      <ServiceBanner2 imageUrl="/static/images/Closing-Curtain-121.jpeg" heading="Curtain Tapes"/>

      <ContentSection2
        image='/static/images/Curtain-Tapes-8.jpg'
        heading="Curtain Tapes - Functional and Decorative Curtain Accessories in Dubai"
        text="Curtain Tapes Dubai, by Closing Curtain are the elegant and entirely serviceable curtain accessories that will 
        suspend your curtains in just the perfect manner. These tapes work by preventing the curtains from flaring out at the 
        bottom, making them stay at a perfect angle. This way, they help in the perfect creation of different curtain heading styles.  "
        h31="Manufacturing"
        h31text="Made from various different fabrics (according to the curtain profile) and have an adhesive design
         in most cases for holding the curtains"
        h32="Pros"
        h32text="These tapes have their effective functionality in making the curtain usage most effortless and for enhancing
         the curtain beauty, too"
        />
        
        <ProjectSection items={items}/>

        <ContentOnly
        heading="Functional and Decorative Curtain Tapes for Customization"

        text1={<p>Our dazzling drapery tapes have their prime significance in maintaining the right profiles of curtains. These 
            tapes secure the curtain pleats (present at the top) in place, making the curtains appear well put together and thus 
            even more attractive.
            </p>}
        
        text2={<p>These <a className='text-decoration-none text-danger fw-bold' href='curtain-accesories'>amazing Curtain Accessories
        </a> can also be used for creating certain decorative patterns at the sides or the 
            top of the curtain or drapery. Our Curtain heading tapes can be easily attached to the curtains, only by straight 
            stitching or even simply by adhesion.
            </p>}

        text3={<p>The top and bottom of the curtain tape get attached to the curtain liner and that’s when you can notably enhance 
            the working and beauty of your curtains. Using these Curtain Tapes Dubai helps one get more fine control over the curtain 
            pleating and they can also be utilized to determine the amount of curtain fabric required.
            </p>}

        text4={<p>Another noteworthy advantage of considering the efficient usage of these tapes for curtains is that they are 
            extremely easy to use. Plus, their maintenance is fairly inexpensive as well. Also, you can wash them and iron them as 
            per your requirements and they will continue their sparkling beauty for years on end.

            </p>}

        
        />

        <SaleSection
        text="10% Off Window Curtains and Blinds online - Sale End Today"
        />
        <ContentService1
        image='/static/images/curtains-collection-1-2.jpg'
        heading="What Are The Decorative Outcomes Of Using Curtain Tapes?"
        text={<p>These curtain heading tapes make the curtains stand out and become even more beneficial and effortless to use. 
            These are the kind of curtain accessories that are best to acquire for <a href='home-curtains' className='text-decoration-none text-danger fw-bold'>
            all types of curtains </a>  and draperies in the first place. Moreover, they are specifically crucial if you’re looking 
            forward to having any version of the <a className='text-decoration-none text-danger fw-bold' href='silk-curtains'>pleated 
            curtains</a> since they provide adequate handling of the pleats.

            </p>}
        text1={<p>As another interesting fact, these tapes for curtains are widely available in a number of design options. These types 
            of Curtain Tapes Dubai include Shirring tapes, Pleating tapes, Flat pleating tapes, Pencil pleat tapes, Wave tapes, Net rod 
            tapes, Stylish Rod tapes, Reinforcing tapes, Smocking tapes, etc. This way, you can easily achieve different curtain styles 
            and make your interiors appear significantly more appealing.
            </p>}
        text2={<p></p>}
        />

        <ServiceGallery
        heading="See The Wonderful Tape Flaunted Curtains"
        images={galleryImages}
        />

        <ContentService
        heading="Enjoy Amplified Curtain Beauty With Our Curtain Tapes Dubai"
        text={<p>This finest quality curtain accessory works as an extremely functional addition and offers major aesthetic perks too. 
            In the first place, these tapes can be used to achieve any kind of drapery fall perfectly, and therefore work wonders for
             all luxury curtains and most importantly with those having pleats, such as 
             <a className='text-decoration-none text-danger fw-bold' href='eyelet-curtains'>Eyelet Window Curtains</a>. Besides, 
             you also get complete control over the curtain pleating and hence can easily style them just the way you want.
            </p>}
        text1={<p>This enhanced beauty comes with the added perks of a fuller coverage and privacy maintenance. You can make your 
            windows stand out by dressing them with of course a <a className='text-decoration-none text-danger fw-bold' href='hotel-curtains'>
            quality curtain treatment</a> and our seamlessly beautiful tapes. And in the same way, you can use these tapes as a 
            reviving addition to your existing curtains, so as to give them a whole new and way more attractive look.
            </p>}
        image="/static/images/Beauty-With-Our-Curtain-Tapes-Dubai.jpg"
        />
        <SaleSection
        text="10% Off Window Curtains and Blinds online - Sale End Today"
        />
        
        <ContentService2
        heading="Choose Us For The Finest Curtain Treatments"
        text={<p>We’ve got you a whole lot of the best accessories for curtains, the most noteworthy of which are Curtain Tapes Dubai 
            Attachment. This incredible treatment will ensure that your curtains turn out to be the most attractive looking and are 
            super convenient to deal with, as well. And that’s how we’ll ensure making 
            <a className='text-decoration-none text-danger fw-bold' href='office-curtains'>every curtain purchase</a> the most 
            beneficial for you.
            </p>}
        text1={<p>Our advantageous treatment of the curtain tapes addition is a great way to secure your curtains and to ensure 
            the smoothest working for them. You can have this treatment done to both new and old curtains, in order to make them 
            the most functional. Besides, this treatment is totally affordable and you’ll find it to be infinitely advantageous, 
            once you get it done for your curtains. 

            </p>}
        image="/static/images/Best-curtains-tapes.jpg"
        />
        
        <ContentService
        heading="We Provide The Most Extensive Curtain Accessory Ranges"
        text={<p>Closing Curtain is the expert platform where you’re meant to get any and every service related to the curtains. 
            From unique customizations of the new ones all the way to the additions and alterations of the former ones, we’ll do it 
            all for you with the highest level of excellence. One of the most notable procedures among these is the addition of Curtain 
            Tapes Dubai, which are designed to make the most out of any given curtain. 
            </p>}
        text1={<p>In addition to these curtain tapes, we’ve got you a vast range of various other curtain accessories too, such as the 
            <a className='text-decoration-none text-danger fw-bold' href='curtain-rings'>Curtain Rings</a> and 
            <a className='text-decoration-none text-danger fw-bold' href='curtain-rods'>Curtain Rods Dubai</a>Curtain Rods Dubai. 
            You can enjoy shopping for these accessories online and can also have the amazing experience of choosing them in-stores. 

            </p>}
        text2={<p></p>}
        image="/static/images/Amazing-curtains-tape.jpg"
        />
        
        <FAQsSection
        heading="FAQs (Frequently Asked Questions)"
        faqsData={faqsData}
        />

        <Footer/>
    </div>
  );
};

export default CurtainTapes;
