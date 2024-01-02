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
import ServiceBanner from 'src/components/ServiceBanner';
import Link from 'next/link';
import ProjectSection from 'src/components/ProjectSection';
import TestimonialsService from 'src/components/TestimonialsService';
import Head from 'next/head';

const HomeCurtains = () => {

    const testimonials1 = [
        {
          id: 1,
          name: 'Henry',
          position: ' Fully Use',
          comment: '  Their curtains do feature amazing quality and the looks are way too mesmerizing as well.',
          rating: 5,
          image: '/static/images/testimonial.png',
        },
        {
          id: 2,
          name: 'David',
          position: ' Fully Use',
          comment: ' Their curtains are just something magical on a serious note and they seem simply mesmerizing to look at!',
          rating: 5,
          image: '/static/images/testimonial.png',
        },
        {
          id: 3,
          name: 'Maria',
          position: ' Amazing',
          comment: ' I had the best curtain customizations at Closingcurtain.ae and those personalizations were right according to my decor requirements.',
          rating: 5,
          image: '/static/images/testimonial.png',
        },
        {
          id: 4,
          name: 'Mark',
          position: ' Top Class',
          comment: '  I love the durability advantage of their curtains and how they keep all the dust away from my home.',
          rating: 5,
          image: '/static/images/testimonial.png',
        },
        {
          id: 5,
          name: 'Sareena',
          position: ' High Recommended',
          comment: ' These dazzling Home Curtains from Closingcurtain.ae just accessorized my place in such as an unbelivebly perfect way!',
          rating: 5,
          image: '/static/images/testimonial.png',
        },
        {
          id: 6,
          name: 'Mark',
          position: 'Amazing',
          comment: ' I love the durability advantage of their curtains and how they keep all the dust away from my home.',
          rating: 5,
          image: '/static/images/testimonial.png',
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
  const galleryImages = [
    '/static/images/Home-Curtains-7.jpg',
    '/static/images/Home-Curtains-6.jpg',
    '/static/images/Home-Curtains-5.jpg',
    '/static/images/Home-Curtains-4.jpg',
    '/static/images/Home-Curtains-3.jpg',
    '/static/images/Home-Curtains-8.jpg',
  ];
  const faqsData = [
    { 
      question: 'What To Consider When Choosing The Curtains For Home?',
      answer: 'A standard good window curtain must be able to provide maximum comfort and this includes both privacy maintenance as well as coverage. Besides, the fabric and profile of your chosen curtains must be easy to clean and maintain. Next up, you can consider the styling factor that your new curtains should complement your existing home décor. ' 
    },
    
    { 
        question: 'Are Curtains Always Supposed To Touch The Floor?',
        answer: 'While having floor-to-ceiling curtains is somewhat of a thumb rule for curtain selection, it isn’t always necessary to go for this profile. You can choose this style as it provides complete coverage and escalates a sensation of satisfaction and comfort all around. However, as for areas with greater traffic, it’s best that you opt for shorter length curtains. ' 
      },
      { 
        question: 'Do I Need To Match My Curtains To The Walls?',
        answer: 'Matching the curtains to the walls is a great and more of a fool-proof styling approach to consider, since it creates a fine overall harmony and uniformity. In addition to the adjacent walls, you can have your home curtains matched to your carpets/flooring or simply to the anchor pieces of the room.' 
      },
      { 
        question: 'How To Take The Best Care Of Home Window Curtains?',
        answer: 'The first and foremost step to curtain upkeep is to carry out a careful cleanup and this goes for both the selection of mild cleaning elements and gentle cleaning techniques. This way, you can easily make your curtain fabric last long and don’t fade, as well. Considering professional curtain cleaning every three to six months is also a good idea for curtain maintenance. ' 
      },
      { 
        question: 'How To Get Rid Of Curtain Wrinkles?',
        answer: 'Start by removing the curtains and placing them atop a towel on a flat surface or ironing table. Have the lowest setting of your iron enabled and start ironing the curtain carefully, going over one section at a time. This will help address the wrinkled curtains without damaging them. Alternatively, you can have them steam-cleaned, as well. ' 
      },
      
    
  ];
  
  const metaTags = [
    { property: 'title', content: "Beautify Your Living Spaces with Home Curtains in Dubai | Closing Curtain" },
    { name: 'description', content: "Beautify your living spaces with exquisite home curtains in Dubai. Buy now and explore Closing Curtain's wide selection of designs and fabrics." },
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

      <ServiceBanner2 imageUrl="/static/images/Closing-Curtain-121.jpeg" heading="Home Curtains"/>

      <ContentSection2
        image='/static/images/Home-Curtains-1.jpg'
        heading="Home Curtains - Beautify Your Living Spaces in Dubai        "
        text="Home Curtains Dubai by Closing Curtain are the most perfect and durable window treatment selection for all your places. These curtains create an exceptionally attractive and cozy home decor and are one of the most promising home improvement treatments to acquire.        "
        h31="Construction"
        h31text="Made from high-quality Linen, Polyester, Nylon, Damask weave, Silk, Cotton, Voile, or blended fabrics and with maximum thread count.        "
        h32="Pros"
        h32text="These curtains with the best build quality make an ideal aesthetic match for all interiors spaces by, adding a fundamental comfort.        "
        />

        <ServiceBanner imageUrl="/static/images/ServiceBanner.jpg"/>
        <ContentOnly
        heading="Beautify Your Living Spaces with Exquisite Home Curtains        "

        text1={<p>Our <Link className='text-decoration-none text-danger fw-bold' href='eyelet-curtains'>quality window </Link> drapes are 
        the ideal way to give an accomplishing effect to your entire home decor. These curtains feature the most resilient profiles 
        and that’s how they turn out to be extremely long-lasting.
</p>}
        
        text2={<p>Their addition will not only glorify the beauty of your surroundings much instantly, but will also make them way more cozy 
            for you than before. In the first place, the installation of these incredible curtains will prevent harsh sunlight from entering 
            your places, thus protecting your furniture and other stuff from potential damage. Such an incredible light control offers the 
            smart functionality of quality <Link className='text-decoration-none text-danger fw-bold' href='blackout-curtains'> Blackout Window Curtains </Link> . 


            </p>}

        text3={<p>Besides, these curtains carry out the most effective noise cancellation and will let you cherish a never-ending comfort. 
            Our Home Curtains Dubai are the best functional decor elements to invest in and can be used to create a nice ornamental harmony 
            within your place. Also, you can enjoy these curtains within multiple incredible versions such as the time-saving Motorized 
            Curtains.


            </p>}

        text4={<p>These curtains add a delightful warmth to the interiors and the same goes for making your spaces well-airy, too, 
            depending on the requirements. You can give your windows an instant and timeless lift with the help of these curtains 
            and they will notably amplify the rest of the place’s beauty, as well. 



            </p>}

        
        />
        <ProjectSection items={items}/>

        <ContentService1
        image='/static/images/best-soundproof-curtains-shop-in-dubai.jpg'
        heading="The Highest Versatility Of Our Home Curtains Dubai        "
        text={<p>Our all-purpose and beyond worthwhile home window curtains can be seamlessly paired with all ornamentations of your choice. 
            Depending on the fabrication, thickness, and layering, there are endless options available of our exclusive home window curtains, so as to effectively fulfill various coverage and light divergence requirements.

            </p>}
        text1={<p>These curtains are highly versatile in nature and they have the efficient tendency to seamlessly blend into all sorts of 
            spaces. Also, you can have customized versions of these colored, graceful Home Curtains UAE within every single design or 
            pattern of your choice.


            </p>}
            text2={<p>
                Our luxury curtains will add reasonable value to your place and they are the best way to beautify it in an affordable manner.
                 Plus, there are vast structural options coming at hand too, depending on the coverage requirements such as the Sheer Style 
                 Curtains or the floor-to-ceiling ones.


            </p>}
        />

        <ServiceGallery
        heading="Explore Our Magnificent Curtain Gallery        "
        images={galleryImages}
        />

        <ContentService
        heading="Create Your Dream Home Decors With Our Home Curtains UAE        "
        text={<p>Looking forward to styling your homes in a subtle yet stunning way? We’ve got just the perfect curtain ornamentation 
            ideas for you, using our quality Home Curtains Dubai. 

 

            </p>}
        text1={<p>These mind-blowing curtains can be easily synced with any given decor theme, no matter how minimalist or detailed it is. And the same goes for the difference between classic and contemporary spaces too.<br/>
            You can have them in bold or neutral colors, if you want to make a statement decor, as these choices work wonders for personalized spaces like bedrooms, living rooms, offices. 

            </p>}
            text2={<p>
                For areas like kitchens and dining rooms, we’ve got you fun and inviting patterned and printed curtain designs, and some of the popular choices include florals, checked, geometric patterns, lined and polka dot designs.<br/>
                For the external usage, you can also consider pairing these curtains with some other window treatment or covers, such as 
                <Link className='text-decoration-none text-danger fw-bold' href='outdoor-blinds-dubai' >quality outdoor blinds</Link>. Other 
                options in this regard could be <Link className='text-decoration-none text-danger fw-bold' href='vertical-blinds-dubai'>
                 Vertical window shades </Link> or organic style blinds.
            </p>}   
        image="/static/images/Versatile-Home-Curtains-UAE.jpg"
        />
        <SaleSection
        text="10% Off Window Curtains and Blinds online - Sale End Today"
        />
        
        <ContentService2
        heading="Choose Our Exquisite Home Curtains Installation Services        "
        text={<p>Our extraordinary fitting and organization services for the Home Window Curtains will bring about the most attractive looking spaces. This curtain treatment works wonders as an incredible transformation of the whole interiors, making them stand out notably. From measurements to post-installation stylings, you’ll find each and every step entirely perfect and seamless, with timeliness being the additional advantage. 


            </p>}
        text1={<p>These premium installation services for the Home Curtains Dubai are not just incredibly pocket-friendly but also really cost-effective to acquire. So do get in touch with us for having the ultimate perfection for your next home improvement project as we’ve got loads of incredible decor solutions for your places!



            </p>}
        image="/static/images/Luxury-home-curtains.jpg"
        />

<ContentService
        heading="We Provide The Highest Quality Home Curtains Dubai        "
        text={<p>
            Closing Curtain is one of the leading curtain suppliers all across the UAE, renowned for offering the finest standard and trendsetting curtains. Our curtains not just feature the best build quality but also are highly resilient to most of the factors that are likely to cause damage. This way, they become practically favorable regarding all the usage with easy maintenance being an additional plus point.


            </p>}
        text1={<p>
            In addition to that, our quality Home Curtains Dubai come at supremely affordable rates and are cost-efficient too. You can avail the expert customization services too, apart from selecting the pre-defined curtain styles. Visit us today or shop for these best curtains online from us at the best pricings.


            </p>}
             
        image="/static/images/Amazing-home-curtains.jpg"
        />

        <TestimonialsService heading="Testimunal" subHeading="How Our Happy Clients Talk About Us" testimonials={testimonials1}/>
        <FAQsSection
        heading="FAQs (Frequently Asked Questions)"
        faqsData={faqsData}
        />
       
        <Footer/>
    </div>
  );
};

export default HomeCurtains;
