// pages/service.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from 'src/components/Header'
import ContentSection2 from 'src/components/ContentSection2';
import ContentOnly from 'src/components/ContentOnly';
import SaleSection from 'src/components/SaleSection';
import ContentService from 'src/components/ContentService';
import ContentService1 from 'src/components/ContentService1';
import Footer from 'src/components/Footer';
import ServiceBanner from 'src/components/ServiceBanner';
import ProjectSection from 'src/components/ProjectSection';
import Link from 'next/link';
import ContentService2 from 'src/components/ContentService2';
import FAQsSection from 'src/components/FAQsSection';
import TestimonialsService from 'src/components/TestimonialsService';
import Head from 'next/head';
import ProductSchema from '../../components/StructuredData';

const OutdoorBlind = () => {

  const structuredData = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": "outdoor blinds Dubai",
    "image": "https://closingcurtain.ae/static/images/Top-Quality-Outdoor-Blinds-Dubai.jpg",
    "description": "Get no.1 quality outdoor blinds in Dubai.",
    "brand": "outdoor blinds Dubai",
    "sku": "outdoor blinds Dubai",
    "mpn": "outdoor blinds Dubai",
    "offers": {
    "@type": "Offer",
    "url": "https://closingcurtain.ae/service/outdoor-blinds-dubai",
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
    "reviewBody": "Get High Qualilty outdoor blinds In Dubai At Closingcurtain.ae. We Have Wide range of stylish outdoor blinds in Dubai. Order Now!",
    "reviewRating": {
    "@type": "Rating",
    "ratingValue": "5.0",
    "bestRating": "5",
    "worstRating": "4.9"
    },
    "datePublished": "2023-10-12",
    "author": {"@type": "Person", "name": "Musa Awais"},
    "publisher": {"@type": "Organization", "name": "outdoor blinds Dubai"}
    }
   } 

  const testimonials1 = [
    {
      id: 1,
      name: 'Henry',
      position: ' Fully Use',
      comment: ' Their outdoor blinds did make a difference. By now, just the idea of entering my places fascinates me a lot.',
      rating: 5,
      image: '/static/images/testimonial.png',
    },
    {
      id: 2,
      name: 'Mark',
      position: ' Top Class',
      comment: 'Their blinds do work wonders! The way they’ve made my outdoors stand out just excites me a lot. ',
      rating: 5,
      image: '/static/images/testimonial.png',
    },
    
    {
      id: 3,
      name: 'Maria',
      position: ' Amazing',
      comment: '  The blind quality is simply amazing and the work is absolutely wonderful.   ',
      rating: 5,
      image: '/static/images/testimonial.png',
    },
    
    {
      id: 4,
      name: 'David',
      position: ' Fully Use',
      comment: '  Post I had their window blinds, all my worries have long gone. Now my place looks really clean and well-maintained. ',
      rating: 5,
      image: '/static/images/testimonial.png',
    },
    {
      id: 5,
      name: 'Sareena',
      position: ' High Recommended',
      comment: ' You must visit Closingcurtain.ae if you’re looking forward to having the best-personalized blinds. ',
      rating: 5,
      image: '/static/images/testimonial.png',
    },
    {
      id: 6,
      name: 'Mark',
      position: 'Amazing',
      comment: 'Their blinds do work wonders! The way they’ve made my outdoors stand out just excites me a lot. ',
      rating: 5,
      image: '/static/images/testimonial.png',
    },
  ];
  
  const faqsData = [
    { 
      question: '1. How Do You Clean Outdoor Blinds?',
      answer: 'The maintenance of outdoor blinds is easy. You can easily maintain your blinds by following some necessary steps. You just need to dust the blinds with a clean mop daily. After a week or two, you can add a mild detergent to the water in a ratio of 1:20 and clean your blinds with this mixture. You can also rinse your blinds with water according to their fabric.' 
    },
    { 
        question: '2. What Are The Best Outdoor Blinds To Keep Heat Out?',
        answer: 'Opaque blinds are one of the perfect options for outdoor areas if you want to eliminate heat from your outdoor spaces. Transparent blinds are also another great option to beat the annoying rays of the sun in summer. If you want to give your outdoor space a cool look in the summer, you can also use CAFE blinds.' 
      },
      { 
        question: '3. Do Outdoor Blinds Waterproof?',
        answer: 'Outdoor blinds are completely or partially waterproof depending on their material. They protect your outdoor sitting areas from rain, sunrays, and harsh weather. They are also a source to protect your outdoor furniture from rain, so it doesn’t ruin the interaction with water.' 
      },
      { 
        question: '4. How Do You Prevent Outdoor Blinds From Blowing?',
        answer: 'Blowing is one of the most noticeable problems with blinds in windy environments. By following certain steps, you can easily stop your blinds from blowing. Weighting the blinds can prevent your blinds from blowing in the wind. Another technique you can use for your blinds by adding the fabric at the back of the blinds. Attach your blinds to the wall by using small hooks.' 
      },
      { 
        question: '5. How Do You Weigh Down Outdoor Blinds?',
        answer: 'High-quality blinds come with weights, so there is no need to weigh them again, but if your blinds don’t have weights, then you can easily add them at the end of the blinds. You can use paperweights, fabric weights, or metallic weights at the ends of your blinds. You can add these weights by hanging them with decorative chains.' 
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
    { property: 'title', content: "Best Outdoor Blinds Dubai Shop - Buy Outside Blinds Online" },
    { name: 'description', content: "Buy Outdoor Blinds in Dubai, discover our modern outdoor blinds Dubai at low prices. Enhance your outside look with our blinds today!" },
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
        image='/static/images/Top-Quality-Outdoor-Blinds-Dubai.jpg'
        heading="Best Outdoor Blinds Dubai Shop in UAE        "
        text="Closing Curtain has got you the best and most long-lasting window solution for all your outdoor spaces, that is Outdoor 
        Blinds Dubai. These blinds are incomparably heavy-duty in nature and will ideally serve you under all kinds of circumstances. 
        Besides, you get trendy options to choose from, so as to easily create all of your desired outdoor decors.        "
        h31="Manufacturing"
        h31text="Made from high-quality PVC material, acrylic, PVC coated polyester mesh, or Polycotton canvas fabric with solution dyeing"
        h32="Working"
        h32text="These blinds feature an extreme resistance against all kinds of atmospheric conditions and are highly energy-efficient 
        in nature, as well"
        />

        <ProjectSection items={items} />

        <ContentOnly
        heading="We Provide Hig- Quality Outdoor Blinds in Dubai        "

        text1={<p>Our outdoor window blinds are the most versatile and equally serviceable kind of blinds which you can consider for 
            several different uses. These blinds serve the accessorizing purpose really well and most importantly in a functional manner.

            </p>}
        
        text2={<p>You can notably enhance all your outdoor spaces with our Outdoor Blinds Dubai and make them stand out in a smart 
            way with the help of these blinds’ serviceability. Their greater levels of energy efficiency will save you a lot on your 
            energy bills and the utility surely doesn’t stop here.

            </p>}

        text3={<p>They serve as the most effective barrier between your valued property as well as your precious belongings and all 
            the external harmful factors. Considering our blinds installation will instantly preserve the entire space of your in the 
            most effective ways.

            </p>}

        text4={<p>Investing in these <Link className='text-decoration-none text-danger fw-bold' href='roller-blinds-dubai'>highly 
        functional blinds</Link>  will get you the perfect guarantee of your privacy maintenance. These blinds are not just super 
        affordable but also very versatile in nature, therefore can be used within all desired areas, such as with sliding doors 
        and patio doors and not just specifically against the windows.

            </p>}

        
        />

        <SaleSection
        text="10% Off Window Curtains and Blinds online - Sale End Today"
        />

<ContentOnly
        heading="Explore The Latest Styles Of Our Outdoor Blinds Dubai"

        text1={<p className='text-start'>Our quality outdoor blinds come in extensive structural and style versions, in order to best suit 
        each and every exterior requirement. These blinds are a great way to achieve the most flawless protection for all of your outdoor 
        areas and associated belongings. Take a look at the versatile types <br/> <br/>

        <strong>Plantation Shutters</strong><br/> <br/>
        
        Our Outdoor Blinds Dubai are excellent at maintaining privacy in the most presentable manner. These shutters are super flexible 
        and you can easily extend your usage area while also beautifying your spaces. They work wonders for balconies, terraces and patios. 
        Moreover, you can also enjoy amazing weather protection with them. 
            </p>}
        
        text2={<p className='text-start'>
            <strong>Retractable Awnings</strong><br/> <br/>
            These awnings require a wall mounting and then they can be easily extended for providing coverage to any desired area. 
            This smart functionality of our outdoor blinds Dubai is super flexible and can be easily made to retract away when not 
            in use. Besides, you can operate them both manually and physically and can have them in various classy style options 
            according to your outdoor requirements. 
        </p>}

        text3={<p className='text-start'>
            <strong>PVC Blinds</strong><br/> <br/>
            
            These smart Outdoor Blinds in Dubai will offer you flawless protection against atmospheric intensity, along with the 
            added benefit of clear and beautiful outside viewing. Since these blinds are constructed from high-quality PVC, they 
            are extremely resilient in nature and cannot be damaged easily. Say farewell to the discomforts of dangling ropes, strings 
            or chains and enjoy the most adorable yet functional outdoor coverage. 
        </p>}

        text4={<p className='text-start'>
            <strong>Timber Outdoor Blinds</strong><br/> <br/>
            Timber blinds are just the right option for you, if you’re into natural decors and want all your home ornamentations to 
            be classic. These blinds not only look great but also offer the major advantage of complete control over both light and 
            privacy. This way, you can make the most out of your outdoor spaces, without the slightest compromise over the comfort as 
            well as privacy protection. <br/> <br/>
            <strong>Shade Blinds</strong><br/> <br/>
            These blinds are the perfect idea to address the discomfort of direct sunlight, that too, without blocking the view at all. 
            They will effectively reduce the heat intensity and therefore will keep your surroundings perfectly well-balanced in terms 
            of temperature. Also, you can adjust them right according to your requirements. 
            
        </p>}

        
        />
        <ContentService1
        image='/static/images/Classic-Outdoor-Blinds-Suppliers-Dubai.jpg'
        heading="What Is The Ornamental Importance Of Outdoor Blinds Dubai?"
        text={<p>Our blinds are totally matchless when it comes to the right provision for all kinds of requirements. These blinds 
            feature perfect crafting in accordance with the cruciality of the outdoor spaces, as those are the primary welcoming areas.
            </p>}
        text1={<p>having these Outdoor Blinds Dubai, you’re meant to come across a legit transformation within your outdoors. You 
            can have them fitted at a number of spaces such as windows, sliding panes, glass panels, folding doors, or even as a major 
            coverage element for outdoor facing areas. An excellent version of this amazing treatment is the 
            <Link className='text-decoration-none text-danger fw-bold' href='bamboo-blinds-dubai'></Link>exterior bamboo blinds.

            </p>}
        text2={<p>These blinds will effectively keep all the harmful insects, atmospheric, Sun, and human damage at bay, hence protecting 
            your places in a much-needed way. This <Link className='text-decoration-none text-danger fw-bold' href='bedroom-curtains'>
            quality window treatment  </Link> is a pleasant ornamental as well as a functional element 
            to invest in, pleasing you with the most favorable outcomes, too. 

            </p>}
        />

        <ContentService2
        heading="Choose Our Timeless Outdoor Blinds Installation Service        "
        text={<p>And get your places the dynamic treatment they deserve! Our first-rate blind fitting services ensure the highest 
            level of proficiency and seamlessness, in order to give rise to the finest outcomes. This skill set of ours also includes 
            creating an ornamental harmony between your chosen type of blinds as well as the surrounding decor. The serviceability remains 
            timeless and continues to favor you for years on end.

            </p>}
        text1={<p>Our Outdoor Blinds Dubai Fitting services are entirely affordable and you can have them as a transformation phase for 
            your places. These services are versatile and adept enough to ideally provide for all the distinctive requirements, whether 
            they are residential or commercial. Do reach out to us today and we’ll provide you the best and 
            <Link className='text-decoration-none text-danger fw-bold' href='bedroom-curtains'> most effective coverage solutions 
            </Link> for your outdoors. 

            </p>}
        image="/static/images/Outdoor-blinds-dubai-1.jpg"
        />

        <ContentService
        heading="We Are The Trustworthy Suppliers Of Outdoor Blinds in Dubai"
        text={<p>Each and every window treatment product and service of ours features the finest quality as well as excellence. 
            That’s how we make a certain home improvement decision of yours, most fruitful for you. Besides, this of course goes 
            the same for the quality of the outdoor window blinds we offer you, for the perfectly functional and attractive window 
            dressing. Our blinds are not just the most pleasant home decor element to acquire but also are the most comforting ones too. 
            </p>}
        text2={<p>Their build quality is both resilient and sustainable at the same time, which explains the incredible and timeless 
            performance. Take a tour of our blinds shop in Dubai and we’ll serve you with the best Outdoor Blinds Dubai Shopping 
            experience. Moreover, you can always benefit from the convenient idea of buying these best blinds online.
            </p>}
        image="/static/images/Best-outdoor-blinds-dubai-1.jpg"
        />
        <TestimonialsService heading="Testimunal" subHeading="How We Get Adored By Our Clients" testimonials={testimonials1}/>
         
        <FAQsSection
        

        heading="FAQs (Frequently Asked Questions)"

        faqsData={faqsData}
        />
        <ProductSchema data={structuredData} />
        <Footer/>
    </div>
  );
};

export default OutdoorBlind;