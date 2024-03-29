// pages/service.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from 'src/components/Header'
import ContentSection2 from 'src/components/ContentSection2';
import ContentOnly from 'src/components/ContentOnly';
import SaleSection from 'src/components/SaleSection';
import ContentService from 'src/components/ContentService';
import ServiceGallery from 'src/components/ServiceGallery';
import ContentService1 from 'src/components/ContentService1';
import ContentService2 from 'src/components/ContentService2';
import FAQsSection from 'src/components/FAQsSection';
import Footer from 'src/components/Footer';
import ServiceBanner2 from 'src/components/ServiceBanner2';
import ProjectSection from 'src/components/ProjectSection';
import Link from 'next/link';
import TestimonialsService from 'src/components/TestimonialsService';
import Head from 'next/head';

const CurtainTapes = () => {
  const testimonials1 = [
    {
      id: 1,
      name: 'Henry',
      position: ' Fully Use',
      comment: '  Their curtains work so fine that I stopped taking those nerve relaxants that I used to take before.',
      rating: 5,
      image: '/static/images/testimonial.png',
    },
    {
      id: 2,
      name: 'Mark',
      position: ' Top Class',
      comment: '  These tapes do work wonders and my experience with them was an amazing one! ',
      rating: 5,
      image: '/static/images/testimonial.png',
    },
    
    {
      id: 3,
      name: 'Maria',
      position: ' Amazing',
      comment: '  I just love those mesmerizing patterns made by these incredible tapes for curtains. ',
      rating: 5,
      image: '/static/images/testimonial.png',
    },
    
    {
      id: 4,
      name: 'David',
      position: ' Fully Use',
      comment: '   My curtains got a lovely lift-up and were spiced up really well, plus those rods look really charming themselves!',
      rating: 5,
      image: '/static/images/testimonial.png',
    },
    {
      id: 5,
      name: 'Sareena',
      position: ' High Recommended',
      comment: ' I was greatly amazed and of course very much impressed with their super timely shipment.',
      rating: 5,
      image: '/static/images/testimonial.png',
    },
    {
      id: 6,
      name: 'Mark',
      position: 'Amazing',
      comment: ' These tapes do work wonders and my experience with them was an amazing one!',
      rating: 5,
      image: '/static/images/testimonial.png',
    },
  ];

  



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
  const metaTags = [
    { property: 'title', content: "Functional and Decorative Curtain Tapes in Dubai | Closing Curtain" },
    { name: 'description', content: "Enhance your curtains with functional and decorative curtain tapes in Dubai. Explore our collection, buy Closing Curtain's wide selection now." },
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
        <link rel="canonical" href="https://closingcurtain.ae/service/curtain-tapes" />
        <link rel="icon" href="/closing-curtains.png" />
      </Head>
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
        
        text2={<p>These <Link className='text-decoration-none text-danger fw-bold' href='curtain-accesories'>amazing Curtain Accessories
        </Link> can also be used for creating certain decorative patterns at the sides or the 
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
            These are the kind of curtain accessories that are best to acquire for <Link href='bedroom-curtains' className='text-decoration-none text-danger fw-bold'>
            all types of curtains </Link>  and draperies in the first place. Moreover, they are specifically crucial if you’re looking 
            forward to having any version of the <Link className='text-decoration-none text-danger fw-bold' href='silk-curtains'>pleated 
            curtains</Link> since they provide adequate handling of the pleats.

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
             <Link className='text-decoration-none text-danger fw-bold' href='eyelet-curtains'>Eyelet Window Curtains</Link>. Besides, 
             you also get complete control over the curtain pleating and hence can easily style them just the way you want.
            </p>}
        text1={<p>This enhanced beauty comes with the added perks of a fuller coverage and privacy maintenance. You can make your 
            windows stand out by dressing them with of course a <Link className='text-decoration-none text-danger fw-bold' href='hotel-curtains'>
            quality curtain treatment</Link> and our seamlessly beautiful tapes. And in the same way, you can use these tapes as a 
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
            <Link className='text-decoration-none text-danger fw-bold' href='office-curtains'>every curtain purchase</Link> the most 
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
            <Link className='text-decoration-none text-danger fw-bold' href='curtain-rings'>Curtain Rings</Link> and 
            <Link className='text-decoration-none text-danger fw-bold' href='curtain-rods'>Curtain Rods Dubai</Link>Curtain Rods Dubai. 
            You can enjoy shopping for these accessories online and can also have the amazing experience of choosing them in-stores. 

            </p>}
        text2={<p></p>}
        image="/static/images/Amazing-curtains-tape.jpg"
        />
        <TestimonialsService heading="Testimunal" subHeading="We Are Loved By Our Customers" testimonials={testimonials1}/>
        <FAQsSection
        heading="FAQs (Frequently Asked Questions)"
        faqsData={faqsData}
        />

        <Footer/>
    </div>
  );
};

export default CurtainTapes;
