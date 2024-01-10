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
import Footer from 'src/components/Footer';
import ServiceBanner from 'src/components/ServiceBanner';
import ContentService4 from 'src/components/ContentService4';
import ProjectSection from 'src/components/ProjectSection';
import ContentService3 from 'src/components/ContentService3';
import Link from 'next/link';
import TestimonialsService from 'src/components/TestimonialsService';
import ContentService5 from 'src/components/ContentService5';
import Head from 'next/head';

const BlindDubai = () => {
  const galleryImages = [
    '/static/images/1-Top-Quality-Blackout-Curtains.jpg',
    '/static/images/2-Top-Quality-Blackout-Curtains.jpg',
    '/static/images/3-Top-Quality-Blackout-Curtains.jpg',
    '/static/images/4-Top-Quality-Blackout-Curtains.jpg',
    '/static/images/5-Top-Quality-Blackout-Curtains.jpg',
    '/static/images/6-Top-Quality-Blackout-Curtains.jpg',
  ];
  const faqsData = [
    { 
      question: 'How Do Window Blinds Add Value To A Property?',
      answer: 'Our premium window blinds bring about the most presentable versions of your homes and offices, which gives off a nice impression and does add to the overall value. Besides, since they serve protection purposes too, they’re a greatly beneficial element to invest in.' 
    },
    { 
        question: 'How Do Blinds Offer The Advantage Of Energy-Efficiency?',
        answer: 'Blinds Dubai, with their thick and quality structures balance out the room temperature effectively, thus diminishing the need for artificial sources. They are a great way to prevent heat loss and keep interiors well insulated and similarly can also keep the rooms cool during summers.' 
      },
      { 
        question: 'Can Blinds Be Used With Other Window Treatments?',
        answer: 'Yes, blinds are amazingly flexible and the most adjustable choice of a window treatment which can be easily combined or layered with other window covers. They can be paired with curtains, shutters, valances and literally everything, such as the unique styling of blackout blinds and sheer curtains.' 
      },
      { 
        question: 'What Are The Best Material Choices For Window Blinds?',
        answer: 'As for the material choices of window blinds, you can choose from a number of options like Vinyl, Plastic, Aluminum, Real Wood, Faux Wood, Metal and Bamboo. In addition to that, you can also stick to the choice of synthetic materials and fabricated blinds, such as Polyester, Cotton, Linen, Microfiber, Chenille and Faux Silk.' 
      },
      { 
        question: 'Where To Buy Cheap Blinds In Dubai?',
        answer: 'If you’re looking for affordable yet quality window blinds then Closing Curtain is one of the best supplier recommendations to consider. With perks like premium build quality, styling versatility, customization services and quick delivery and installation services, the blinds are simply matchless and totally worth going for.' 
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
  const testimonials1 = [
    {
      id: 1,
      name: 'Henry',
      position: ' Fully Use',
      comment: '  Their blinds work so fine that I stopped taking those nerve relaxants that I used to take before.',
      rating: 5,
      image: '/static/images/testimonial.png',
    },
    {
      id: 2,
      name: 'Mark',
      position: ' Top Class',
      comment: '   I got their premium office window blinds and the experience was totally delightful. These blinds look extremely good and have. ',
      rating: 5,
      image: '/static/images/testimonial.png',
    },
    
    {
      id: 3,
      name: 'Maria',
      position: ' Amazing',
      comment: ' These people at Closing Curtain provide you with the most flawless window blind fitting services and I was seriously impressed. ',
      rating: 5,
      image: '/static/images/testimonial.png',
    },
    
    {
      id: 4,
      name: 'David',
      position: ' Fully Use',
      comment: ' Came across their versatile blind varieties and I must say they’ve got some seriously amazing collections making the right choice.',
      rating: 5,
      image: '/static/images/testimonial.png',
    },
    {
      id: 5,
      name: 'Sareena',
      position: ' High Recommended',
      comment: ' Closing Curtain has, by far, been the best home decor provider for me over the recent years and the quality.',
      rating: 5,
      image: '/static/images/testimonial.png',
    },
    {
      id: 6,
      name: 'Mark',
      position: 'Amazing',
      comment: '   I got their premium office window blinds and the experience was totally delightful. These blinds look extremely good and have. ',
      rating: 5,
      image: '/static/images/testimonial.png',
    },
  ];
  const metaTags = [
    { property: 'title', content: "Buy Stylish and Functional Blinds in Dubai | Closing Curtain" },
    { name: 'description', content: "Discover a wide range of stylish and functional blinds in Dubai. Buy Closing Curtain's quality window coverings to enhance your space." },
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
        <link rel="canonical" href="https://closingcurtain.ae/service/blinds-dubai" />
        <link rel="icon" href="/closing-curtains.png" />
      </Head>
      <Header logo='/static/images/logo.png'/>

      <ServiceBanner imageUrl="/static/images/quality-blinds-in-uae.jpg"/>
     
      <ContentSection2
        image='/static/images/Versatile-Blackout-Curtains.jpg'
        heading="Blinds in Dubai - Stylish and Functional Window Coverings        "
        text="Blinds Dubai by Closing Curtain is the most luxurious, finest looking and long-term promising window treatment, the perfect decor choice for your homes and offices. These blinds are extremely high-performance and their addition brings about fundamental comfort in one’s lifestyle.        "
        h31="Crafting"
        h31text="These quality blinds come in both fabricated and stiff material versions and are available with various suitable measurements        "
        h32="Pros"
        h32text="These blinds make the most durable window treatment, are easy to care for and versatile for every decor        "
        />

        
        <ProjectSection items={items} />
        <ContentOnly
        heading="Discover Stylish and Functional Blinds for Your Space        "

        text1={<p>
            Our first-rate window blinds are not just simply the perfect way to dress and adorn your windows but also are the long-term favorable and practical solution. They are simply unbeatable when it comes to aesthetics as they can seamlessly blend into any given surrounding decor, irrespective of the theme or even the age/culture depicted by it.

            </p>}
        
        text2={<p>
            These quality Custom Blinds Dubai are the most purposeful window treatment and they will protect your privacy in the most flawless manner, which does mean safety provision, as well. With these incredibly flexible and versatile blinds, you get a better control over the incoming light and can easily adjust it according to your preferences, whether it’s room darkening or brightening.

            </p>}

        text3={<p>
            Moreover, when you buy these best blinds in Dubai, you get major benefits of energy-efficiency, meaning a reduction in your energy bills. Plus, these blinds are super convenient to maintain and care for and they’re both child-safe and pet friendly, too. Another amazing perk of these blinds is the effective Sun protection they offer, saving both your homes from excess heat and your valuable furniture and floorings from damage.
            </p>}
        />

        <SaleSection
        text="10% Off Window Curtains and Blinds online - Sale End Today"
        />
        <ContentService5/>
        <ContentService1
        image='/static/images/Blackout-Hotel-Curtains-UAE.jpg'
        heading="The Aesthetic Versatility Of Our Custom Blinds Dubai        "
        text={<p>Our best Dubai blinds come in a vast range of options and styles, suitable for both commercial and residential settings, making it the easiest for you to pick the best one out. From size measurements to styling options, there are a whole lot of versatile choices available and you can get a noticeable uplifting for your interiors with these quality blinds.

            </p>}
        text1={<p>
                From the vintage beauty of Venetian Blinds, all the way to the sleek and modern looks of Blackout Blinds Dubai, you will explore innumerable amazing options at our best Blinds Shop in UAE. Moreover, these blinds are greatly flexible and can be easily layered up with other window treatments, as well, in case the decorative requirements demand so.

            </p>}
            text2={<p>
                In addition to the material choices, we’ve also got you a whole lot of color, pattern, design and style options too, so as to add considerably to your home decors. Besides, you can always seek our incredible window blind customization services in this regard, too.

            </p>}
        />

        <ServiceGallery
        heading="Check Our Trendy Window Blind Ideas        "
        images={galleryImages}
        />
        <ContentService4
        heading="Get Your Desired Home Decorations With Our Customized Window Blinds        "
         text1={<p> 
             In order to make the blind addition experience even more exciting for you, we’ve come up with our matchless skillset of window blind customization, with which you can enhance your home decor in the most unique way ever. Our custom Blinds are a great way to give a nice and harmonious look to all sorts of interiors and they beautify all of their surrounding elements, as well.
 
          </p>}
          text2={<p> 
            Over and above, these customized window shades make a greatly presentable commercial-grade window treatment, too, Their sleek profiles complement all the high-end decor settings in a presentable manner. For instance, if you’re particularly concerned about privacy protection or coverage factors, then you can stick to the fabricated versions, such as the Roman Blinds Dubai.

         </p>}
         text4={<p>
                In the same way, if light divergence or window treatment layering are your primary decorative goals, then it’s best to stick to options like Roller blinds, Vertical Blinds or Bamboo Shades.
            </p>}
        />

        

        <ContentService
        heading="Buy Cheap Blinds Dubai From Us With Fastest Delivery Services        "
        text={<p>
            Our best blinds in Dubai are totally outperforming when it comes to durability as well as performance. They are not just the most long-lasting window treatment but also the most convenient to deal with and practically useful. Their addition will make your lives significantly comfortable and will keep your interiors well-maintained and presentable, too.

            
            </p>}
        text2={<p>
                We’ve got you these best blinds in Dubai with the most affordable pricings, so you can easily upgrade your places with them on a budget. Besides, these cheap window blinds are the most cost-effective too, meaning they will keep repaying for longer time spans. Do choose us for the best blind selection experience or you can also shop online for these blinds and we shall be delivering them to your places real quickly.
            </p>}
        image="/static/images/Modern-blackout-curtains.jpg"
        />
        
        <SaleSection
        text="10% Off Window Curtains and Blinds online - Sale End Today"
        />
        <TestimonialsService heading="Testimunal" subHeading="See What Our Clients Say" testimonials={testimonials1}/>
         
        <ContentService3
        leftSectionTitle="Choose Our Skillful Window Blind Installation Services In UAE        "

        leftSectionParagraph1={<p><Link className='text-decoration-none text-danger fw-bold' href='/'>Closing Curtain</Link> 
        is the first-rate provider of the vastest lineup of window treatment services and you’re meant to find our excellence significantly different from others. In addition to the best Blinds Dubai, we’ve got you incredible blind installation services as well, which is to say that you can get the entire compilation of services under one roof.
            </p>}

        leftSectionParagraph2="Our window blind installation services come with incomparable proficiency and ensure making this very addition the most beneficial for you over time. Besides, these services are completely affordable as well as cost-effective and you can easily count-on them for a budget-friendly yet advantageous upgrade of your places. Get in touch with us today!        "

        faqHeading="FAQs (Frequently Asked Questions)"

        faqsData={faqsData}
        />

        <Footer/>
    </div>
  );
};

export default BlindDubai;
