// pages/service.js
import React from 'react';
import Link from 'next/link';
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
import Head from 'next/head';
import ProductSchema from '../../components/StructuredData';

const BedroomCurtains = () => {
  const structuredData = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": "Bedroom Curtains Dubai",
    "image": "https://closingcurtain.ae/static/images/room-darkening-soundproof-curtains-dubai.jpg",
    "description": "Get stylish bedroom curtains in dubai At amazing low rates.",
    "brand": "bedroomcurtainsdubai",
    "sku": "bedroomcurtainsdubai",
    "mpn": "bedroomcurtainsdubai",
    "offers": {
    "@type": "Offer",
    "url": "https://closingcurtain.ae/service/bedroom-curtains",
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
    "reviewBody": "Get High Qualilty bedroom curtains In Dubai At Closingcurtain.ae. We Have Wide range of stylish bedroom curtains in Dubai. Order Now!",
    "reviewRating": {
    "@type": "Rating",
    "ratingValue": "5.0",
    "bestRating": "5",
    "worstRating": "4.9"
    },
    "datePublished": "2021-06-10",
    "author": {"@type": "Person", "name": "Musa Awais"},
    "publisher": {"@type": "Organization", "name": "Bedroom Curtains Dubai"}
    }
   }
  const galleryImages = [
    '/static/images/Bedroom-Curtains-2-500x500.jpg',
    '/static/images/Bedroom-Curtains-1-500x500.jpg',
    '/static/images/Bedroom-Curtains-3-500x500.jpg',
    '/static/images/Bedroom-Curtains-4-500x500.jpg',
    '/static/images/Bedroom-Curtains-5-500x500.jpg',
    '/static/images/Bedroom-Curtains-6-500x500.jpg',
  ];
  const points = ["Expert Staff",
    "Fast Installation",
    "Affordable Prices",
    "Customer Satisfaction" ]
  const faqsData = [
    { 
      question: 'Which Type Of Curtains Are Best For The Bedroom?',
      answer: 'The electric curtains come with a motor that is hidden in them. When you press the button to open and close them, the motor will let them roll up and down. You can operate them in different ways, like pushing the button manually to control them. If they are wireless, then you can use a remote control or an Android app. You will press any button from any corner of your room to perform a specific task.'
    },
    { 
        question: 'Do Bedroom Curtains Have To Touch The Floor?',
        answer: 'The surface answer to this question is “Yes, your curtains for the bedroom should touch the floor.” It usually depends on the style and design of your curtains. What curtains are you using? If you want short curtain styles for your bedroom, then you can easily go for that. If you want to give a traditional and cultural look to your room through curtains, then you can choose curtains that touch the floor.'
      },
      { 
        question: 'Do Bedroom Curtains Have To Match?',
        answer: 'Yes, you can match your bedroom curtains, but it is unnecessary unless you are fussy about the uniformity of your place. You can also add bedroom curtains in contrast to your room to give it a more contemporary look. It completely depends upon your interior and the taste of your design.'
      },
      { 
        question: 'Which Color is most suitable for Bedroom Curtains?',
        answer: 'The color choice of curtains for your bedroom should be according to your interests. Experts recommend soothing and light colors for the curtains because you have to take a rest in your bedroom, so it must be calm and peaceful. So always choose mind-and-eye-relaxing colors so your curtains help you improve your sleep.'
      },
      
    
  ];
  const metaTags = [
    { property: 'title', content: "Bedroom Curtains Dubai - #1 Bedroom Drapes Shop - 20% OFF" },
    { name: 'description', content: "Purchase modern bedroom curtains Dubai at closingcurtain.ae. We have a wide rang of beautiful bedroom curtains in Dubai at the best prices." },
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
        <link rel="canonical" href="https://closingcurtain.ae/service/bedroom-curtains" />
        <link rel="icon" href="/closing-curtains.png" />
      </Head> 
      <Header logo='/static/images/logo.png'/>

      <ServiceBanner imageUrl="/static/images/ServiceBanner.jpg"/>

        <ContentOnly

        heading="Bedroom Curtains Dubai - The Best Decor Option For Bedroom In 2023"

        text1="Bedroom Curtains Dubai featuring the most entrancing aesthetics and long-lasting functionalities, our all-exclusive 
        curtains for bedrooms are simply the best way to create your desired bedding decors, while maximally ensuring the factor of 
        usefulness. Their perks and pros have a long way to go, making them worth the choice."

        text2={<p>With these curtains, you can instantly make your comfort zones cozier and more relaxing for you. Another major
             advantage of these curtains’ utility is their flawless tendency to maintain privacy, which is totally the most crucial
              requirement of a bedroom space. The functionality is efficient enough, similar to the working of a <Link className='text-decoration-none text-danger fw-bold' href='office-curtains'>blackout window treatment</Link>.

            </p>}

        text3="In addition to that, our curtains will balance the temperature within your bedrooms really well, just according to 
        your preference and to the extent, that’s pacifying for you. Also, our Bedroom Curtains Dubai are matchless when it comes 
        to an effective blockage of all the unnecessary noise, hence adding maximally to the entire comfort provision for you."

        text4={<p>These calmative curtains for bedrooms will efficiently protect the beauty and décor organization of your bedroom in 
        multiple ways. These curtains, while serving as an outstanding window covering, also keep away all the dust, dirt, sun damage, 
        and insects. Moreover, you can have them with various useful and smart additions, such as in the form 
        of <Link className='text-decoration-none text-danger fw-bold' href='electric-curtains'> Electric Window Treatment.</Link></p>}

        />

        <SaleSection
        text="10% Off Window Curtains and Blinds online - Sale End Today"
        />

        <ContentService
        heading="Give A Beautiful Look To Your Space With Bedroom Curtains in Dubai"

        image="/static/images/room-darkening-soundproof-curtains-dubai.jpg"

        text={<p>Our all-purpose and heavy-duty curtains for bedrooms come with the widest collections of fabrications, prints, patterns,
         designs, draping, and most importantly color schemes.</p>}

        text1={<p>Amongst our extensive varieties, you can not only look for the best match for your existing bedroom decor but can also
             choose a number of calmative curtain shades in order to create attractive contrasting organizations.
             <Link className='text-decoration-none text-danger fw-bold' href='sheer-curtains'>Sheer Bedroom Drapes </Link>
             are one classy choice in this regard, that can be paired with another <Link className='text-decoration-none text-danger fw-bold' href='blackout-curtains'>room darkening window treatment.</Link> </p>}

        text2={<p>Our Bedroom Curtains Dubai add a lot of pleasurable warmth to the bedroom area, making them the coziest for you. 
            You can go for the prints and patterns choice if you want a luxurious look or you can simply play with the combination 
            of complementing colors.

            </p>}
        
        />

        <ServiceGallery
        heading="Check Out Those Amazing Curtain Flaunted Interiors"
        images={galleryImages}
        />

       
        <ContentService1
        heading="We Provide High Quality Bedroom Curtains Dubai In Wide Range"

        image='/static/images/black-color-bedroom-curtain-designs.jpg'
        
        text="Our premium quality curtains stand out amongst all other bedroom window treatment options, and for good reason. 
        This bed curtain set, in the first place, is an addition that seems ideally well-balanced and never indecent or way too bold."

        text1="Since the bedroom is a majorly important place having the dire requirement of privacy protection, our curtains serve as
         the best choice regarding this feature. And most importantly you get this flawless privacy without any compromise over the light
          adjustment. "

        text2="If you’ve been struggling with jet lagged or messed up sleep schedules, then our Bedroom Curtains Dubai are no less than a 
        wonder for you, as they will help you achieve a good sleep quality with their comfort provision, in terms of light blocking, 
        temperature regulating and acoustic protection.
        Installing our quality curtains in your bedroom spaces, is an effective way to keep the interior clean, decluttered and 
        well-maintained, as they block all dirt and dust particles from entering the room."
        />
        
        <ContentService2
        heading="Have Our Remarkable Excellence For Bedroom Curtains Installation"

        image="/static/images/Luxury-Ventian-Blinds-Dubai (1).jpg"

        text={<p>We’ve got just the right compilation of expertise required for a new window treatment installation within your comfort
             zones. Our quality bedroom curtain installation services will ensure bringing about the finest ornamental versions of your
              bedrooms as well, in addition to the perfect curtain fitting. So you can totally call this treatment a 
              <Link className='text-decoration-none text-danger fw-bold' href='silk-curtains'>wonderful décor upgrade</Link>. 

            </p>}

        text1={<p>Moving further, our quality Bedroom Curtains Dubai Installation services will also give rise to an endless comfort 
            provision for you. These services comprise the highest level of proficiency along with swiftness and zero compromise over 
            the quality. So do choose the perfect improvement treatment for your bedrooms by requesting a free quote at our platform today!</p>}
        
        />

        <ContentService
        heading="We Are Top Supplier Of Bedroom Curtains in Dubai At Best Price"

        image="/static/images/Amazing-venetian-blinds (1).jpg"

        text={<p><Link className='text-decoration-none text-danger fw-bold' href='/'>Closing Curtain</Link> is the top-tier home décor provider and expert for your places, which will always help you settle for 
            the best decisions, regarding their betterment. Having that said, we’re more than glad to bring you our trendiest and premium 
            quality collections of the best bedroom window curtains, which will be a mind-blowing addition for the crucial spaces of your 
            bedrooms. These curtains not just appear extremely entrancing themselves but also have the tendency to harmonize all the s
            urrounding décor, as well.
</p>}

        text1={
            <p>Do visit us today and shop for the best Bedroom Curtains Dubai Ranges, in order to bestow a wholly new and mind-blowing 
              look to your rooms. These curtains will provide with a great deal of functional benefits as well and you’ll definitely find 
              this treatment the most comforting, as compared to the previous ones. Request your free curtain quote today!

            </p>
        }
        
        />

        <ContentService3

        leftSectionTitle="Why Choose Us?"

        leftSectionParagraph1={<p><Link className='text-decoration-none text-danger fw-bold' href='/'>Closing Curtain</Link> is the top-rated supplier in Dubai, well-known for providing the best 
        bedroom curtains in Dubai. Our premium collection of window curtains features attractive designs and patterns. You can add 
        beauty and functionality to your bedroom interior. Buy high-quality bedroom window curtains from us at competitive pricing. </p>}

        leftSectionParagraph2="In addition, we also provide top-notch curtain installation services to provide the perfect fitting of our luxurious bedroom window coverings. You can request a free home visit from our experts to get free measurements of your bedroom windows. Contact us anytime for a free consultation and samples to buy the most suitable curtains. "

        leftSectionPoints={points}

        faqHeading="FAQs (Frequently Asked Questions)"

        faqsData={faqsData}

        />
        <ProductSchema data={structuredData} />
        <Footer/>
    </div>
  );
};

export default BedroomCurtains;
