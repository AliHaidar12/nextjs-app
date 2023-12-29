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

const LinenCurtains = () => {
  

  const testimonials1 = [
    {
      id: 1,
      name: 'Henry',
      position: ' Fully Use',
      comment: ' I happened to order these cute curtains for my living room and my experience has been really fantastic.  ',
      rating: 5,
      image: '/static/images/testimonial.png',
    },
    {
      id: 2,
      name: 'Mark',
      position: ' Top Class',
      comment: ' The curtain quality is simply amazing and the work is absolutely wonderful.   ',
      rating: 5,
      image: '/static/images/testimonial.png',
    },
    
    {
      id: 3,
      name: 'Maria',
      position: ' Amazing',
      comment: ' I had their linen Curtains for my office and that decision has been extremely favorable for me. ',
      rating: 5,
      image: '/static/images/testimonial.png',
    },
    
    {
      id: 4,
      name: 'David',
      position: ' Fully Use',
      comment: ' Their linen curtains do save a lot of my time and I’m so thankful for that. ',
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
      comment: '  The curtain quality is simply amazing and the work is absolutely wonderful.   ',
      rating: 5,
      image: '/static/images/testimonial.png',
    },
  ];





  const galleryImages = [
    '/static/images/linen11.jpg',
    '/static/images/linen12.jpg',
    '/static/images/linen13.jpg',
    '/static/images/linen14.jpg',
    '/static/images/linen15.jpg',
    '/static/images/linen16.jpg',
  ];
  const faqsData = [
    { 
      question: "Do Linen Curtains Block Light?",
      answer: "Linen curtains can offer the diminishing of the incoming natural light to some extent, however that’s never a complete light blockage. The fiber strands of these curtains are intricately woven therefore turn out as a rich overall profile which is likely to provide a good insulation and an acceptable deal of room darkening. " 
    },
    { 
        question: "How To Maintain Linen Curtains?",
        answer: "Always make use of warm or at best cold water for washing linen curtains along with a mild detergent. If you’re going for a machine wash, try going for the lightest setting possible, which is often called the “handwash” too. This will prevent the fabric damage of linen curtains and will also ensure their longevity. " 
      },
      { 
        question: "Are Linen Curtains A Good Choice For Offices And Workspaces?",
        answer: "Linen Curtains are actually a great choice for all commercial spaces, due to their elegant profiles and promising performances. They can easily outlast even the most intense levels of usages and are great at repelling dust and dirt accumulation as well. Besides, they are super flexible and you can easily have them styled according to any given requirements. " 
      },
      { 
        question: "How Long Do Linen Curtains Last?",
        answer: "In general, linen curtains are likely to last for nearly five years and can be more sustainable with good maintenance. When it comes to the upkeep of linen curtains, try avoiding their direct contact with harsh atmospheric conditions and always make use of non-toxic cleaners and mild cleaning techniques." 
      },
      { 
        question: "Can I Have Linen Curtains In My Bedroom?",
        answer: "Linen Curtains are actually a great choice for bedrooms and similar personal spaces, thanks to the excellent levels of comfort they offer. These curtains can easily stay tough against all the damaging factors and are the easiest to deal with, as well. Besides, you can easily have them paired up with any of your desired room decoration scenarios." 
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
    { property: 'title', content: "Timeless and Natural Linen Curtains in Dubai | Closing Curtain" },
    { name: 'description', content: "Experience timeless elegance with linen curtains in Dubai. Create a warm ambiance. Buy high-quality fabrics from Closing Curtain's collection." },
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
      </Head>
      <Header logo='/static/images/logo.png'/>

      <ServiceBanner imageUrl="/static/images/ServiceBanner.jpg"/>

      <ContentSection2
        image='/static/images/1-Linen-Curtains-Dubai.jpg'
        heading="Linen Curtains - Timeless and Natural Window Coverings in Dubai"
        text="Linen Curtains by Closing Curtain are the truly amazing curtain choice and more of a must-have for your places. 
        Our luxurious Linen window curtains serve as the sturdiest and the most durable window treatment, ideal for all areas. 
        And the timeless beauty of these curtains always seems exceptionally attractive."
        h31="Crafting"
        h31text="Made from the highest quality Linen or linen blend and have a natural and luxurious finish."
        h32="Pros"
        h32text="These curtains are perfect for achieving both a traditional as well as modern decor look."
        />

        <ProjectSection items={items}/>

        <ContentOnly
        text1="Our linen window curtains are a lucrative and long-lasting curtain choice. These curtains feature a lightweight 
        and supple profile yet are extremely heavy-duty in nature. They give off a soft and warm look and are great for having 
        neutral-toned décor effects."
        
        text2="These curtains optimize the room temperature much effectively with both their insulating as well as room cooling 
        properties. You can have maximum amounts of nicely filtered sunlight with the help of their incredible fabrications. 
        The same goes for the extent of airiness too and you can totally adjust the amount of these factors within your surroundings. 
        Also, you can have them in the Eyelet Curtain Styles."
        text3="All in all, our Linen Curtains provide the most excellent levels of comfort with not only their temperature 
        balancing properties but also with the way they stop excessive noise from entering the room space. "
        text4="Our curtains in Dubai have a child-friendly nature and therefore can be considered for nurseries and kids’ 
        rooms as well. They are totally eco-friendly and are extremely versatile and customizable to best fit all kinds of 
        requirements. Also, these curtains are the right choice to use for all humid atmospheric conditions and even for 
        the severely warm ones, too."

        heading="Timeless and Natural Linen Curtains for a Serene Look"
        />        

        <ContentService
        heading="Choose The Classy Decoration Of Linen Luxury Curtains"
        text1="Our finest standard linens are one of the most effective ideas to glam up your residential places super quickly. 
        Besides, the very performance of these curtains turns out to be exceptionally good, when used as Bedroom Window Curtains. 
        And of course, you can consider their usage for other areas too, most importantly as the Living room drapes."
        text2="That’s because these curtains contribute really well to the comfort provision, which is certainly the most major 
        requirement of residential settings. Also, the aesthetics they offer are totally pleasant, mild, minimalist and the resultant 
        decoration doesn’t seem overly done at all."
        image="/static/images/Amazing-linen-curtains.jpg"
        />

        <ServiceGallery
        heading="Explore Our Gleaming Gallery"
        images={galleryImages}
        />

        <SaleSection
        text="10% Off Window Curtains and Blinds online - Sale End Today"
        />

       
        

        <ContentService1
        image='/static/images/Classy-Decoration-Of-Linen-Luxury-Curtains-555x400.jpg'
        heading="Choose Our Premium Services For Linen Curtains Dubai Installation"
        text="Closing Curtain is right at your service to help you make the most out of any and every of your home improvement 
        projects. This goes the same for our vast service spectrum of the Linen Curtains Installation, which will work as a major 
        game-changing treatment for your places. Our services are aimed towards both the flawless fitting as well as post-styling, 
        in order to have the best outcomes of a treatment."
        text1="You can avail our sublime standard Curtains Installation Services at incredibly budget-friendly pricings and are 
        meant to find this addition the most long-term favorable. Do give us a call or email us whenever you’re planning on a curtain 
        upgrade and we shall serve you with our timeless excellence. "
        />
        
        <ContentService2
        heading="Have Us As Your Foremost Linen Curtains Dubai Providers"
        text="We’ve come up with entirely trendsetting ranges of the Linen Dubai Curtains for a suave uplifting of your spaces. 
        These curtains are not just mesmerizing to look at but also induce a genuine sensation of satisfaction and comfort. 
        Plus, the build quality is super sustainable and can easily last for years on end. "
        text1="Our Linen Curtains Dubai can easily outperform any given window treatment and they will also provide the additional 
        advantage of keeping your living spaces clean and well-maintained. Do check out our platform for shopping these best blinds 
        online and find the best pairing element for your decors."
        image="/static/images/Best-linen-curtains.jpg"
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

export default LinenCurtains;
