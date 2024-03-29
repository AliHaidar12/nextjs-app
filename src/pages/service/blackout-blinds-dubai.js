// pages/service.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from 'src/components/Header'
import ServiceBanner from 'src/components/ServiceBanner';

import ContentOnly from 'src/components/ContentOnly';
import SaleSection from 'src/components/SaleSection';
import ContentService from 'src/components/ContentService';
import ServiceGallery from 'src/components/ServiceGallery';
import ContentService1 from 'src/components/ContentService1';
import ContentService2 from 'src/components/ContentService2';
import Footer from 'src/components/Footer';
import ContentService3 from 'src/components/ContentService3';
import Link from 'next/link';
import TestimonialsService from 'src/components/TestimonialsService';
import Head from 'next/head';
import ProductSchema from '../../components/StructuredData';

const BlackoutBlinds = () => {

  const structuredData = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": "blackout blinds Dubai",
    "image": "https://closingcurtain.ae/static/images/Blinds-collection.jpg",
    "description": "We are the best blackout blinds supplier in Dubai",
    "brand": {
    "name": "blackout blinds Dubai",
    "@type": "Brand"
    },
    "sku": "blackout blinds Dubai",
    "mpn": "blackout blinds Dubai",
    "offers": {
    "@type": "Offer",
    "url": "https://closingcurtain.ae/service/blackout-blinds-dubai",
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
    "publisher": {"@type": "Organization", "name": "blackout blinds Dubai"}
    }
    } 
  const galleryImages = [
    '/static/images/Blackout-Blinds-1.jpg',
    '/static/images/Blackout-Blinds-2.jpg',
    '/static/images/Blackout-Blinds-3.jpg',
    '/static/images/Blackout-Blinds-5.jpg',
    '/static/images/Blackout-Blinds-6.jpg',
    '/static/images/Blackout-Blinds-7.jpg',
  ];
  const testimonials1 = [
    {
      id: 1,
      name: 'Henry',
      position: ' Fully Use',
      comment: ' These blinds were literally the best ones I ever got and they have been super serviceable so far!',
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
      comment: ' I’ve noticed a huge decline in my energy bills ever since I had these amazing Bamboo Blinds Dubai.',
      rating: 5,
      image: '/static/images/testimonial.png',
    },
    
    {
      id: 4,
      name: 'David',
      position: ' Fully Use',
      comment: ' Their bamboo blinds give you an amazing exotic sensation and you feel like being in a natural environment',
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
      comment: ' I came across their amazing bamboo blinds and that was absolutely the best home decor purchase of my life.',
      rating: 5,
      image: '/static/images/testimonial.png',
    },
  ];

  
  const faqsData = [
    { 
      question: '1. Can You See Through Blackout Blinds At Night?',
      answer: 'No, you cannot see through blackout blinds at night. As you know, blackout blinds don’t allow light to pass through them. That is the primary reason you can see through your blinds even during the day. As a result, they are the best source for maintaining privacy at your location.'
    },
    { 
      question: '2. Do Blackout Blinds Provide Privacy?',
      answer: 'Yes, blackout blinds can provide completely private space at your place. These blinds are typically made of thick fabric, which prevents light from passing through them and, as a result, block the view of your room from outside both during the day and at night.'
    },
    { 
      question: "3. What's The Difference Between Light Filtering And Blackout Blinds?",
      answer: 'The primary difference between light filtering blinds and blackout blinds is the control of light. Light filtering blinds allow a small amount of light to pass through them to create a naturally diffused environment in your place. While blackout blinds don’t allow even a single ray of light to pass through them, they can provide more privacy than light-filtering blinds.'
    },
    { 
      question: '4. Should Blackout Blinds Be Inside Or Outside Recess?',
      answer: 'Blackout blinds that are fitted outside the window recess are more durable than those fitted inside the recess. They can provide more privacy, and there are fewer chances of decolorization of those blinds fitted outside the recess. So you should fit your blackout blinds outside the recess to make them more useful.'
    },
    
  ];
  const metaTags = [
    { property: 'title', content: "Blackout Blinds in Dubai - Buy Total Light Control Blinds" },
    { name: 'description', content: "Experience complete light control and privacy with blackout blinds in Dubai. Buy now and create the ideal ambiance at Closing Curtain." },
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
        <link rel="canonical" href="https://closingcurtain.ae/service/blackout-blinds-dubai" />
        <link rel="icon" href="/closing-curtains.png" />
      </Head>
      <Header logo='/static/images/logo.png'/>

      <ServiceBanner imageUrl="/static/images/ServiceBanner.jpg"/>

        <ContentOnly

        heading="Get Complete Light Control with Blackout Blinds In Dubai"

        text1={<p>Our all-exclusive Blackout Blinds Dubai serve as the<Link className='text-decoration-none text-danger fw-bold' href='bamboo-blinds-dubai'>finest window covering solution</Link>
         in the first place. Besides, their incredible functionality is a lot more different and advantageous than other types of blinds.
          These are the<Link className='text-decoration-none text-danger fw-bold' href='venetian-blinds-dubai'>heavy-duty blinds</Link>  with the efficient tendency to block out majority of 
          the blazing sunlight, creating the perfect “blackout” effect. They are a great choice for both classic and contemporary homes,
           just like the versatile <Link className='text-decoration-none text-danger fw-bold' href='wooden-blinds-dubai'>Wooden Window Blinds.</Link>

          </p>}

        text2={<p>This diminishing goes effective for all the disturbing external noises entering the room, as well. Over and above, 
          the amount of room darkening obtained from these blackout <Link className='text-decoration-none text-danger fw-bold' href='roller-blinds-dubai'>Dubai blinds</Link> is totally controllable. You can adjust it according to your preference and can easily achieve all your desired levels of complete blacking out, room darkening, or brightening. Our Blackout Blinds Dubai features an extremely resilient and durable build quality, thus will be your serviceable barrier for years straight.



            </p>}

        text3="As for the ornamental aspect, these blinds look highly entrancing within all areas and create the most unique decor spaces. 
        They go ideally well with all kinds of decorative themes, furniture designs, and interior looks. Also, they are greatly resistant 
        to many harmful factors such as moisture, atmospheric damage, wear, and tear, etc."
        />

        <SaleSection
        text="10% Off Window Curtains and Blinds online - Sale End Today"
        />

        <ContentService
        heading="Benefits of Using Blackout Blinds in Dubai For Home & Offices"

        image="/static/images/Blinds-collection.jpg"

        text={<p>These blinds, primarily, are an amazing idea to consider for bedrooms or any other space you like to rest or spend your 
          quality time in. Talking about the bedrooms, these blinds will be the<Link className='text-decoration-none text-danger fw-bold' href='bedroom-curtains'>most calmative element</Link> for you after prolonged and tough working hours.
          </p>}

        text1={<p>
             As they efficiently keep all the troublesome glare and sounds at bay, therefore, leave you with totally peaceful and 
             non-disruptive environments. You can easily create all of those pacifying scenarios for yourself that you’ve always adored.
              </p>}

        text2={<p>
                Besides residential utilization, these <Link className='text-decoration-none text-danger fw-bold' href='blackout-blinds-dubai'>Blackout Blinds Dubai</Link>Blackout Blinds Dubai is 
                just perfect to consider for all the commercial spaces, meaning they make the <Link className='text-decoration-none text-danger fw-bold' href='office-blinds'>perfect Office Blinds</Link>, too. The blacking out ability can be used in either way for area darkening or brightening. Also, their energy efficiency proves to be really beneficial for lowering energy expenses.
            </p>}
        
        />

        <ServiceGallery
        heading="Check Out Those Amazing Curtain Flaunted Interiors"
        images={galleryImages}
        />

       
        <ContentService1
        heading="Looking For A Versatile Window Treatment? Choose Our Blackout Luxury Blinds"

        image='/static/images/blackout-shades-blinds.jpg'
        
        text="Our sublime quality blackout window blinds are not just the most functional home improvement choice but come with a major 
        aesthetic significance. Their versatile design profiles make them ideally suitable for all areas, essentially an investment 
        which is meant to pay you back really well. And totally unlike the common belief, these amazing blinds not just comprise heavy, 
        bulky and dark-colored profiles, rather you can get super interesting design options for them, depending on the requirements."

        text1="Adding to that, this timeless beauty makes our Blackout Blinds Dubai a great choice for outdoor usage, creating the most 
        inviting décor statement you can ever come across. Besides, they are greatly flexible for all sorts of customizations, meaning 
        you can acquire the styling of your choice without any trouble. Just reach out to us today as we’ve got the best home ornamentation
         ideas for you!"

        />
        
        <ContentService2
        heading="Choose Our Adept Installation Services For Blackout Blinds Dubai"

        image="/static/images/Modern-blackout-blinds.jpg"

        text={<p>
              Our expert-grade services for the blinds installation will give rise to the most presentable looking versions of your places. 
              Not to mention the most functional ones too. Our quality services offer the major advantage of 
              <Link className='text-decoration-none text-danger fw-bold' href='roman-blinds-dubai'>beautifying the surroundings</Link>  as well, in addition to, of course the bind fitting. You can 
              consider these services for all of the commercial spaces, considering the maximum extent of proficiency. </p>}


        text1={<p>Over and above, our Blackout Blinds Dubai Fitting Services are completely cost-effective too, ensuring the fact that 
          you get the best value for your money. Plus, you’ll find these services incredibly timeless for years on end as the favorable 
          outcomes will keep serving you all along.

          </p>}
        
        />

        
    <TestimonialsService heading="Testimunal" subHeading="We Are Loved By Our Customers" testimonials={testimonials1}/>


        <ContentService3

        leftSectionTitle="Our Blackout Blinds Dubai Feature The Most Promising Quality"

        leftSectionParagraph1={<p><Link className='text-decoration-none text-danger fw-bold' href='/'>Closing Curtain</Link> is the renowned platform where you’re meant to come across the most 
        excellent quality regarding both the products and the services. This goes particularly true for our finest standard blackout 
        window blinds that will make both your residential and commercial interiors the most delightful for you to be around. Not to 
        mention that this comfort provision is extremely long-lasting too. 
        </p>}

        leftSectionParagraph2="You can have the placement of our all-purpose Blackout Blinds Dubai next to a number of different 
        spots such as sliding doors, patio doors and glass panels. These blinds are not just super serviceable but also very cost-effective, 
        as well. Besides, all the pricings are totally affordable too, yet without any compromise on the blind quality. So just request a 
        quote and shop for your favorite blinds online today!"

        faqHeading="FAQs (Frequently Asked Questions)"

        faqsData={faqsData}

        />
        <ProductSchema data={structuredData} />
        <Footer/>
    </div>
  );
};

export default BlackoutBlinds;
