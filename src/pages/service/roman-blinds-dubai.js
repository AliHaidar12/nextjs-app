// pages/service.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from 'src/components/Header'
import ContentSection2 from 'src/components/ContentSection2';
import ContentOnly from 'src/components/ContentOnly';
import ServiceGallery from 'src/components/ServiceGallery';
import ContentService1 from 'src/components/ContentService1';
import Footer from 'src/components/Footer';
import ContentService4 from 'src/components/ContentService4';
import ProjectSection from 'src/components/ProjectSection';
import ContentService3 from 'src/components/ContentService3';
import ServiceBanner2 from 'src/components/ServiceBanner2';
import Link from 'next/link';
import TestimonialsService from 'src/components/TestimonialsService';
import Head from 'next/head';
import ProductSchema from '../../components/StructuredData';

const RomanBlinds = () => {
  const structuredData = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": "roman blinds Dubai",
    "image": "https://closingcurtain.ae/static/images/Roman-Blinds-2.jpg",
    "description": "We are the best roman blinds supplier in Dubai",
    "brand": {
    "name": "roman blinds Dubai",
    "@type": "Brand"
    },
    "sku": "roman blinds Dubai",
    "mpn": "roman blinds Dubai",
    "offers": {
    "@type": "Offer",
    "url": "https://closingcurtain.ae/service/roman-blinds-dubai",
    "priceCurrency": "AED",
    "price": "170",
    "priceValidUntil": "2024-12-31",
    "availability": "https://schema.org/PreOrder",
    "itemCondition": "https://schema.org/NewCondition"
    },
    "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "bestRating": "5",
    "worstRating": "4.9",
    "ratingCount": "1149",
    "reviewCount": "2086"
    },
    "review": {
    "@type": "Review",
    "name": "Pervaiz Iqbal",
    "reviewBody": "top-rated Blinds supplier in Dubai. . .",
    "reviewRating": {
    "@type": "Rating",
    "ratingValue": "5.0",
    "bestRating": "5",
    "worstRating": "4.9"
    },
    "datePublished": "2023-10-13",
    "author": {"@type": "Person", "name": "Musa Awais"},
    "publisher": {"@type": "Organization", "name": "roman blinds Dubai"}
    }
    }

  const testimonials1 = [
    {
      id: 1,
      name: 'Henry',
      position: ' Fully Use',
      comment: ' Their Roller Blinds Abu Dhabi have served more me than I can express!',
      rating: 5,
      image: '/static/images/testimonial.png',
    },
    {
      id: 2,
      name: 'Mark',
      position: ' Top Class',
      comment: ' I came across their amazing bamboo blinds and that was absolutely the best home decor purchase of my life.',
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
      comment: ' I was greatly amazed and of course very much impressed with their super timely shipment.',
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
      comment: ' I came across their amazing bamboo blinds and that was absolutely the best home decor purchase of my life.',
      rating: 5,
      image: '/static/images/testimonial.png',
    },
  ];
  



  const galleryImages = [
    '/static/images/Roman-Blinds-3.jpg',
    '/static/images/Roman-Blinds-5.jpg',
    '/static/images/Roman-Blinds-6.jpg',
    '/static/images/Roman-Blinds-7.jpg',
    '/static/images/Roman-Blinds-8.jpg',
    '/static/images/Roman-Blinds-9.jpg',
  ];
  const faqsData = [
    { 
      question: '1. How Much Do Roman Shades Cost?',
      answer: 'Roman blinds are considered the most expensive window coverings. Because of the use of premium quality fabric in the making of these roman shades, the price range of these shades starts at $100 and goes up to $1000. The price of your roman shades depends upon the choice of material.' 
    },
    { 
        question: '2. Can I Put A Roman Blind On A Large Window?',
        answer: 'Yes, you can put a roman blind on a large window. Roman blinds are mostly used in rooms with wide windows or those with bay windows. They look perfect in those places and enhance the look of the room. You can easily decide the length and width of your roman blinds on your own.' 
      },
      { 
        question: '3. How Do You Remove A Roman Blind?',
        answer: 'First, remove the side nuts from the brackets. Now remove the headrail of the roman blinds from the brackets. Place the blinds on the floor. Now detach the first slat of the blinds from the headrail. Now your Roman blind is completely removed from the headrail.' 
      },
      { 
        question: '4. How Do Roman Blinds Work?',
        answer: 'Roman blinds usually operate on a string on which a flat piece of fabric is neatly pleated. When you pull the string of the Roman blinds, the fabric of the blinds fully extends and they look completely outstanding at your place. When you have to close the blinds, you also have to pull the string, and this time, the fabric folds create pleats and look uniform in the room.' 
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
  const metaTags = [
    { property: 'title', content: "Roman Blinds Dubai | Buy #1 Soft Roman Blinds In Dubai" },
    { name: 'description', content: "Closingcurtain.ae offers best roman blinds Dubai with wide range of colours and designs. We also give installation service for roman blinds in Dubai." },
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
        <link rel="canonical" href="https://closingcurtain.ae/service/roman-blinds-dubai" />
        <link rel="icon" href="/closing-curtains.png" />
      </Head>
      <Header logo='/static/images/logo.png'/>

      <ServiceBanner2 imageUrl="/static/images/Closing-Curtain-121.jpeg" heading="Roman Blinds"/>

      <ContentSection2
        image='/static/images/Roman-Blinds-2.jpg'
        heading="Roman Blinds Dubai - Classic Elegance for Your Windows"
        text="Roman Blinds Dubai is the best window treatment choice in the UAE. Our all-exclusive and classy-looking Roman window blinds will 
        serve you with the finest aesthetics and the most extraordinarily durable functionality. Not to mention that they are an incredibly 
        versatile choice for all requirements.        "
        h31="Crafting"
        h31text="Made from Polyester, cotton, linen, blended fabrics, Damasks, and Jacquard fabrics and available within extensive designs."
        h32="Distinction"
        h32text="These blinds have an insulated poly/cotton blended lining, offer flawless coverage and insulation, and best suit all spaces."
        />

        <ProjectSection items={items} />

        <ContentOnly
        heading="Get Luxury Roman Blinds In Dubai for Your Windows        "

        text1={<p>Our roman window blinds look unbelievably appealing themselves and they accentuate the entire space around them 
            really nice, too. They give an ideally balanced look to the surroundings and are a wonderful choice for all windows, 
            specifically the smaller ones.
            </p>}
        
        text2={<p>Their thick and durable fabrication makes them effectively resistant to all kinds of hazardous aspects and thus 
            very long-lasting too. Roman Blinds Dubai are a super practical choice to consider if you’re looking forward to a fairly 
            <Link className='text-decoration-none text-danger fw-bold' href='outdoor-blinds-dubai'> heavy-duty window solution </Link>  
            functionality.
            </p>}

        text3={<p>Also, they are just the best idea to go for smaller rooms or spaces, in order to make them appear way more spacious. 
            Our Roman Window Blinds serve as the best alternative to window curtains. Their coverage appears to be the fullest and this 
            way they get to maintain the room privacy really well, too. Not to mention this makes them a really good choice of 
            <Link className='text-decoration-none text-danger fw-bold' href='office-blinds-dubai'> Office Window Blinds</Link>.

            </p>}

        text4={<p>Our Roman window blinds will be the nicest addition to your home/apartment/office decor in super affordable ways and their 
            working is totally cost-effective, to boot. Also, You won’t be needing to do or spend too much in terms of their maintenance.

            </p>}
        
        />

        <ContentService1
        image='/static/images/blinds-collection-5.jpg'
        heading="What Are The Best Uses Of Roman Blinds Dubai?        "
        text={<p>There are multiple ways in which you can use your aesthetic creativity and play with the structural and ornamental 
            versatility of our roman Dubai blinds. These quality blinds are ideal to create the most appealing layered and patterned 
            design effects, due to the finest finishes they offer. Plus, this way, you can enjoy the functionality of useful 
            <Link className='text-decoration-none text-danger fw-bold' href='blackout-blinds-dubai'> blackout blinds too</Link>.

            </p>}
        text1={<p>You can even have them paired up with curtains for an even <Link className='text-decoration-none text-danger fw-bold' 
        href='blackout-blinds-dubai'> unique interior ornamentation.</Link> These blinds feature wide material/fabrication, design, 
        pattern, print, and color options. This way, you can easily look for those versions that ideally match your existing or 
        upcoming decors.

            </p>}
        text2={<p>You can use our Roman Blinds Dubai, as the most presentable window treatment within all workspaces, too, similar 
            to the working of <Link className='text-decoration-none text-danger fw-bold' 
        href='vertical-blinds-dubai'> smart vertical blinds</Link>.

            </p>}
        />

        
        <ContentOnly
        heading="Have The Trendy Styling Of Roman Blinds Dubai        "
        text4={<p>These quality blinds are one of the most useful window dressing elements which come with the added benefit of versatility, 
            as well. They not just look great but also optimize the room environment really well along with an excellent energy-efficiency. 
            As for the styling factor, these blinds come in extensive options, such as Flat roman window blinds, hobbled ones, pleated 
            styles and relaxed blind versions.


            </p>}
        
        />
        <ServiceGallery
        heading="See Our Charming Blind Decor Creations        "
        images={galleryImages}
        />

        <ContentService4
        heading="Have Our Expert Installation Services For Roman Blinds in Dubai        "
         text3={<p> Closing Curtain will take the best care of all your window treatment requirements with the highest levels of 
             proficiency. Our expert-grade blind installation services are aimed towards both the flawless blind fitting as well 
             as their ornamental syncing with the rest of the room decor. This way, we always succeed in generating the best outcomes 
             from every single service genre of ours. <br/> <br/>
             Moreover, our Roman Blinds Dubai Installation comes at highly affordable rates, which is to say that you can make the most 
             out of these services completely on a budget. Plus, our services remain timelessly beneficial and are a great approach to 
             more comfortable living spaces. Do request a free quote today and we’ll serve you right away!
          </p>}
        />
        <TestimonialsService heading="Testimunal" subHeading="We Are Loved By Our Customers" testimonials={testimonials1}/>
        
        <ContentService3
        leftSectionTitle="We Supply Premium Quality Roman Blinds Dubai All Over The UAE        "

        leftSectionParagraph1={<p> Our finest standard roman window blinds will work wonders as both a decorative and a 
            <Link className='text-decoration-none text-danger fw-bold' 
        href='electric-curtains'> functional addition </Link> to your places. These blinds add a notable level of comfort to 
        your lifestyle and seem really pleasant to look at, too. Moreover, the build quality you get is the most promising too 
        and you won’t need another window treatment for years straight. 

            </p>}

        leftSectionParagraph2="These incredible Roman Blinds Dubai will seamlessly suit all of the window profiles and you won’t have a 
        single trouble in syncing them with your desired interior and/ or exterior ornamentation. Don’t forget to visit our blinds 
        store in Dubai and cherish the experience of having the best blinds for your places. Also, you can shop for these quality 
        blinds online from us, just in the comfort of your home.        "


        faqHeading="FAQs (Frequently Asked Questions)"

        faqsData={faqsData}
        />
        <ProductSchema data={structuredData} />
        <Footer/>
    </div>
  );
};

export default RomanBlinds;