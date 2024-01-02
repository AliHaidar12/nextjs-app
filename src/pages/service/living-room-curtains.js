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
import ProductSchema from '../../components/StructuredData';

const LivingRoomCurtains = () => {
  const structuredData = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": "Living Room Curtains Dubai",
    "image": "https://closingcurtain.ae/static/images/Living-Room-Curtains-9.jpg",
    "description": "Get Best Living Room Curtains Dubai At Low Price in UAE.",
    "brand": "LivingRoomCurtainsDubai",
    "sku": "LivingRoomCurtainsDubai",
    "mpn": "LivingRoomCurtainsDubai",
    "offers": {
      "@type": "Offer",
      "url": "https://closingcurtain.ae/service/living-room-curtains",
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
      "reviewBody": "Buy High Quality Living Room Curtains in Dubai Online At Low Rates.",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5.0",
        "bestRating": "5",
        "worstRating": "4.9"
      },
      "datePublished": "2021-09-20",
      "author": {"@type": "Person", "name": "Musa Awais"},
      "publisher": {"@type": "Organization", "name": " Living Room Curtains Dubai"}
    }
  };
  const testimonials1 = [
    {
      id: 1,
      name: 'Henry',
      position: ' Fully Use',
      comment: '  At Closingcurtain.ae you’ll have endless amazing and impressive ideas to decorate your places!',
      rating: 5,
      image: '/static/images/testimonial.png',
    },
    {
      id: 2,
      name: 'David',
      position: ' Fully Use',
      comment: ' Their Living Room Curtains are of the finest quality and they enhance your room decor really well',
      rating: 5,
      image: '/static/images/testimonial.png',
    },
    {
      id: 3,
      name: 'Maria',
      position: ' Amazing',
      comment: ' The quality and textures of their curtains seem so mesmerizing!',
      rating: 5,
      image: '/static/images/testimonial.png',
    },
    {
      id: 4,
      name: 'Mark',
      position: ' Top Class',
      comment: ' The cutest curtains I had from Closingcurtain.ae had the best build quality among all others',
      rating: 5,
      image: '/static/images/testimonial.png',
    },
    {
      id: 5,
      name: 'Sareena',
      position: ' High Recommended',
      comment: ' Their curtains have truly perked up the whole living room of mine!',
      rating: 5,
      image: '/static/images/testimonial.png',
    },
    {
      id: 6,
      name: 'Mark',
      position: 'Amazing',
      comment: ' The cutest curtains I had from Closingcurtain.ae had the best build quality among all others',
      rating: 5,
      image: '/static/images/testimonial.png',
    },
  ];
  const galleryImages = [
    '/static/images/Living-Room-Curtains-8.jpg',
    '/static/images/Living-Room-Curtains-9.jpg',
    '/static/images/Living-Room-Curtains-4.jpg',
    '/static/images/Living-Room-Curtains-5.jpg',
    '/static/images/Living-Room-Curtains-6.jpg',
    '/static/images/Living-Room-Curtains-7.jpg',
  ];
  const faqsData = [
    { 
      question: 'How To Select The Best Living Room Curtains?',
      answer: 'When choosing the curtains for living rooms, the first and foremost factor that needs to be considered is the right kind of comfort provision. It’s best that you stick to neutral and muted tones which seem pleasant and are satisfying to look at. Besides, do look for the right kind of materials that are easy to maintain and are long-lasting.' 
    },
    { 
      question: 'What Is The Ideal Length For Living Room Curtains?',
      answer: 'Floor-to-ceiling profile is the best length option to settle for, when choosing curtains for living rooms. That’s because it ensures complete coverage as well as privacy protection for the living spaces. Moreover, they appear to be really comfortable and are a good way to keep the living room surroundings well-maintained as well. ' 
    },
    { 
      question: 'What Color Should I Choose For My Living Room Window Curtains?',
      answer: 'There are multiple ways of styling you can try, when it comes to the styling of your living rooms. You can have those curtain colors or designs that match the walls of your living room. In addition to that, you can also try syncing the curtain profile with the color of your flooring or with the anchor pieces present in the living room space. ' 
    },
    { 
      question: 'Are Living Room Curtains Pet-Friendly In Nature?',
      answer: 'Living Room Window Curtains, indeed are pet-friendly in nature, therefore entirely favorable for everybody. Besides, they are completely non-toxic themselves and also maintain a good indoor air quality, so they are a healthy choice for everyone in the house, particularly children and elderly people.' 
    },
    { 
      question: 'What Kind Of Curtains Can Be Used For Living Rooms?',
      answer: 'Some of the best living room curtain recommendations are Blackout curtains, cotton curtains, sheer and silk curtains. All of these types are excellent at providing coverage and maximum comfort. Besides, the flexible nature of these curtains lets you customize them easily according to all sorts of requirements. ' 
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
    { property: 'title', content: "Buy Living Room Curtains in Dubai - #1 Living Room Curtain Shop" },
    { name: 'description', content: "Purchase stylish living room curtains In Dubai from Closingcurtain.ae. We provide high-quality custom-made curtains for the living room at the best Prices." },
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

      <ServiceBanner imageUrl="/static/images/ServiceBanner.jpg"/>

      <ContentSection2
        image='/static/images/eyelet-custom-curtain.jpg'
        heading="Living Room Curtains Dubai - Create a Stylish Gathering Space"
        text="Closing Curtain brings you a spectacular curtain choice for the crucial spaces of your living rooms, i.e. the Living 
        Room Curtains Dubai. These marvelous-looking and supremely durable curtains for the living room are a great way to add 
        notable comfort to the living room interiors along with an incredible styling."
        h31="Crafting"
        h31text="Made from 100% silk, linen, cotton, velvet, voile, nylon, sheer, or blended fabrics with a heavy and luxurious texture"
        h32="Functionality"
        h32text="These curtains are best for achieving fuller coverages and maximum room brightening at the same time"
        />

        <ProjectSection items={items}/>

        <ContentOnly
        text1="Our curtains for living rooms comprise a significant number of functionalities and they are the best home decor 
        investment to go for. They are a great choice to flaunt your living rooms with and can be used in both classical and 
        contemporary decor settings."
        
        text2="These curtains feature a thick and resilient fabrication and thus remain serviceable for long. They brighten up the 
        room really well by letting in considerable amounts of natural light and can be used for room darkening, as well. "
        text3="Also, these curtains effectively keep all the troublesome external elements at bay, such as pollutants, noise, 
        allergens, etc. Having our Living Room Curtains Dubai is a one truly smart approach for protecting your precious 
        furniture and other belongings from harsh sunlight and other atmospheric damage. One of the most timelessly amazing 
        choices of these curtains is the Sheer Style Drapes which are excellent for a natural illumination."
        text4="Moreover, these modern curtains for living rooms offer the most flawless climate control and their presence 
        regulates and optimizes the room temperature in a perfect manner. Besides, they also do an efficient job of privacy 
        maintenance, just like the quality Blackout Curtains. And they are the best way to create good indoor air quality, to boot. "

        heading="Give A Stylish Look With Living Room Curtains In Dubai"
        />

        <SaleSection
        text="10% Off Window Curtains and Blinds online - Sale End Today"
        />

        <ContentService
        heading="What’s The Ornamental Worth Of Living Room Curtains in Dubai?"
        text="We’ve got you the most infinite and admirable canvas of entirely unique modern curtain designs for living room. 
        These classy curtains will beautify the whole interior of yours, much captivatingly and their versatile nature makes 
        them suitable for all spaces."
        text1="From heavenly white/neutral drapes for living room to those calmative grey ones, we’ve come up with a whole lot of 
        the most distinctive curtain designs and profiles. These curtains feature highly supple surface textures and give off a 
        pleasant soft look, plus a perfect “well put-together” effect to the whole area’s decor."
        text2="Our Living Room Curtains Dubai ideally go well with all types of window sizes and styles, making them stand out 
        in a noteworthy manner. Not just specified for living rooms, you can go for installing these curtains within any and every 
        space you desire. "
        image="/static/images/Closing-Curtain-7.jpg"
        />
        <ContentOnly
        heading="Have The Suave Styling For Your Living Rooms"
        text1="Our finest quality Living Room Curtains are not just an amazing window treatment, but also an excellent approach to 
        ornating your living rooms in a classy yet comfortable manner. With that said, we’ve got you the trendiest styles of curtains 
        for living rooms with which you can easily create all of your desired ornamental scenarios, whether they are super bold or 
        really minimalist. Silk Curtains Dubai, Electric Dubai Curtains, and Eyelet Window Curtains are some of the incredible living 
        room curtain choices to settle for."
               
        />
        <ServiceGallery
        heading="Explore Our Gleaming Gallery"
        images={galleryImages}
        />

        <ContentService1
        image='/static/images/living-room-curtains-designs-1.jpg'
        heading="Shop For The Trendiest Modern Curtain Designs For Living Room"
        text="At our platform, you’ll come across simply the best and incredible curtain designs for living room. Featuring 
        inviting profiles and supple textures, these curtains can timelessly offer a really cozy makeover for your living rooms."
        text1="Our modern curtains for living rooms come with versatile aesthetics and this is the kind of ornamentation that always remains in fashion.
        Taking the living room interior into consideration, our modern curtains feature ideally complementing print, pattern and color choices, essentially which never seem overly done or dissatisfying in any way.
        You can make the most out of natural light in a softened form, thanks to the light-filtering profiles of our Living Room Curtains Dubai, without compromising your privacy projection in any way, meaning you can even use them as your bedroom window drapes, too. 
        Another mind-blowing styling idea for these curtains is to pair them with some fine window blinds, and resultantly you get a highly functional window treatment, which is super energy-efficient too."
        />
        
        <ContentService2
        heading="We Are The Expert Providers Of Living Room Curtains Installation"
        text="Closing Curtain has got you the most extensive and comprehensive spectrum of services, regarding all of your curtain 
        installation and respective requirements. These fitting services also include ornamentation of the newly installed curtains 
        along with the rest of the room décor. This way, you can have an entire transformation of the whole space with just the 
        addition of this window treatment."
        text1="In addition to that, our Living Room Curtains Installation services are extremely affordable and come with the major 
        perk of cost-effectivity. The treatment will stay timeless all along and you can get all the desired functional alterations 
        as well as additions too. So reach out to us for having these quality services on a budget!"
        image="/static/images/Luxury-living-room-curtains.jpg"
        />

        <ContentService
        heading="Our Living Room Curtains Dubai Are Highly Long-lasting"
        text="These curtains incredibly outperform other solutions of window treatment and are also a great way to enhance the overall 
        comfort extent of any room. They give off a sense of satisfaction and an incredible privacy protection, as well. Besides, they 
        feature just the right kind of attractive looks, which is in perfect accordance with the significance of the prime space of 
        living room. "
        text1="As per the most notable advantage, our quality Living Room Curtains Dubai are totally affordable and ensure providing 
        the same extent of favorable outcomes for many years to come. This way, you can easily expect the best value for your money. 
        So do pay a visit at our curtain outlets in Dubai and enjoy the most delightful versions of your living spaces, afterwards. "
        image="/static/images/Best-living-rooom-curtains.jpg"
        />

      <TestimonialsService heading="Testimunal" subHeading="How Our Happy Clients Talk About Us" testimonials={testimonials1}/>
        <FAQsSection
        heading="FAQs (Frequently Asked Questions)"
        faqsData={faqsData}
        />
        <ProductSchema data={structuredData} />
        <Footer/>
    </div>
  );
};

export default LivingRoomCurtains;
