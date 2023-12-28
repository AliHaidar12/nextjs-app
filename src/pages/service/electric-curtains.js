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
import Footer from 'src/components/Footer';
import ContentService3 from 'src/components/ContentService3';
import Link from 'next/link';
import TestimonialsService from 'src/components/TestimonialsService';

const ElectricCurtains = () => {

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
      comment: ' The quality of their remote control curtains is simply amazing and their working is super smooth and flawless. ',
      rating: 5,
      image: '/static/images/testimonial.png',
    },
    
    {
      id: 3,
      name: 'Maria',
      position: ' Amazing',
      comment: ' I had their Electric Curtains for my office and that decision has been extremely favorable for me. ',
      rating: 5,
      image: '/static/images/testimonial.png',
    },
    
    {
      id: 4,
      name: 'David',
      position: ' Fully Use',
      comment: ' Their automatic curtains do save a lot of my time and I’m so thankful for that. ',
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
      comment: 'The quality of their remote control curtains is simply amazing and their working is super smooth and flawless. ',
      rating: 5,
      image: '/static/images/testimonial.png',
    },
  ];

  

  const galleryImages = [
    '/static/images/1-Electric-Curtains.jpg',
    '/static/images/2-Electric-Curtains.jpg',
    '/static/images/3-Electric-Curtains.jpg',
    '/static/images/4-Electric-Curtains.jpg',
    '/static/images/5-Electric-Curtains.jpg',
    '/static/images/6-Electric-Curtains.jpg',
  ];
  const faqsData = [
    { 
      question: 'How Does An Electric Curtain Work?',
      answer: 'The electric curtains come with a motor that is hidden in them. When you press the button to open and close them, the motor will let them roll up and down. You can operate them in different ways, like pushing the button manually to control them. If they are wireless, then you can use a remote control or an Android app. You will press any button from any corner of your room to perform a specific task.' 
    },
    { 
        question: 'How Much Do Electric Curtains Cost?',
        answer: 'The cost of electric curtains ranges from $100 to $300. The cost varies with the quality and functionality offered by the curtains. If you want the best quality curtains with all the features as per your needs, the price will also increase automatically.' 
      },
      { 
        question: 'How Do You Hang A Motorized Curtain Track?',
        answer: 'Yes, we provide services for hanging the track of motorized curtains. Hire our experienced staff that has been working in this field for many years. Our professional team will hang your curtains on the track rail and give them the functionality to operate wirelessly. You can open and close them using a remote or mobile phone.' 
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

      <ServiceBanner imageUrl="/static/images/ServiceBanner.jpg"/>

      <ContentSection2
        image='/static/images/Super-Electric-Curtains.jpg'
        heading="Electric Curtains Dubai- Automated Window Solution"
        text="Closing Curtain presents to you the ultimate smart and time-saving window treatment of Electric Curtains Dubai. 
        These curtains will save a considerable extent of your precious time, physical effort, and energy expenses, which makes 
        them an extremely durable investment to go for."
        h31="Crafting"
        h31text="Made from Acrylic, Polyester, Nylon, Cotton, or other blended fabrics with the highest levels of resistance"
        h32="Functionality"
        h32text="The rails of these curtains work over a motor and they can be controlled in various ways depending on the lifestyle"
        />

        <ProjectSection items={items}/>

        <ContentOnly
        heading="Convenience and Automation with Electric Curtains Dubai"

        text1={<p>Our amazing automatic curtains are the type of functional decor that will prove to be advantageous for you in multiple 
            ways. These time-saving curtains come with the most beneficial perk of the smoothest and most effortless working, and the 
            only <Link className='text-decoration-none text-danger fw-bold' href='curtains-accessories'>curtain accessory</Link> required 
            for them are quality rods.
            </p>}
        
        text2={<p>Electric Curtains Dubai get operated in a number of ways and you can go for the one which is more convenient for you. 
            Also, you can pre-set (pre-program) these curtains to get opened or shut at specific intervals during the day.
            </p>}

        text3={<p>The incredible and totally smart operating manners of these useful curtains include working with remote control, 
            with a wall-mounted switch, or even through a smartphone application. Moreover, you can have your elegant Electric Curtains 
            in Dubai integrated with your smart home systems and thus have them working right according to your lifestyle.

            </p>}

        text4={<p>In addition to that, these motorized curtains come with a built-in syncing with all voice assistants such as Google 
            Assistant, Amazon Alexa, Siri, etc. Their thick and heavy profiles can be used for an effective room darkening or 
            brightening like the <Link className='text-decoration-none text-danger fw-bold' href='curtains-accessories'>Blackout Window 
            Curtains</Link> and for keeping all the pollutants and external damage away.
            </p>}
        />

        <ContentService1
        heading="Will Electric Curtains in Dubai Really Look Attractive?"
        text={<p>These <Link className='text-decoration-none text-danger fw-bold' href='sheer-curtains'>wondrous curtains</Link> not only will 
        look charmingly appealing but will also add a lot of value to your properties. Our motorized drapes have super safe cordless 
        design profiles and therefore are totally children and pet-friendly. And you will be amazed by the fact that these remote 
        control curtains go seamlessly well with all the interior decors.
            </p>}
        text1={<p>Also, you can use them within outdoor spaces and as <Link className='text-decoration-none text-danger fw-bold' 
        href='curtain-commercial'>commercial curtains</Link> too, for the purpose of an effective and the safest coverage. These curtains 
        maintain privacy like none other and you can adjust their coverage extent just the way you like. Over and above, our Electric 
        Curtains in Dubai will benefit you a lot with their energy efficiency and they will also protect the entire interior and other 
        belongings. Last but not least, their sturdy build quality makes them last longer, as well. 
            </p>}
        image="/static/images/Top-Quality-Electric-Curtains.jpg"
        />

        <ContentOnly
        heading="Features And Favorability Aspects Of Electric Curtains Dubai"
        text1={<p>These <Link className='text-decoration-none text-danger fw-bold' href='office-curtains'>incredible and serviceable 
        curtains</Link> are a great way to add endless comfort to your lifestyles and also to dress your windows in an extremely 
        attractive manner. Besides, these curtains are just the perfect choice for modern homes. You can benefit from them in 
        multiple ways and can have various purposes fulfilled from them as well. The most common examples in this regard are 
        energy-efficiency and the flawless control over privacy and room atmosphere.

            </p>}
        
        />
        <ServiceGallery
        heading="Check Out Our Impressive Creations"
        images={galleryImages}
        />


        

        <ContentService
        heading="Amp Up Your Workspace Decors With Our Automatic Curtains"
        text={<p>These curtains are an exceptionally best choice for commercial areas and workspace interiors, considering the benefits 
            of convenient operation, energy-efficiency and cost-effectivity. Besides, the presentable aesthetics are also a major plus 
            point, making this option complete win-win deal. Since professional settings always face a lack of time, there does arise 
            a dire need some time-saving and easy-to-handle treatment. And this very purpose, of course, can be maximally 
            fulfilled by our Electric Curtains Dubai.
            </p>}
        text1={<p>Adding to that, the instant and completely trouble-free movement of these curtains proves fundamentally helpful 
            in times of meetings, presentations and similar times. Also, such a window treatment makes it the easiest to make use of 
            multimedia with all desired changings (opening and closing/adjustments) just in the blink of an eye.
            </p>}
        image="/static/images/Workspace-Decors-With-Our-Automatic-Curtains-Dubai.jpg"
        />

        <SaleSection
        text="10% Off Window Curtains and Blinds online - Sale End Today"
        />
        
        <ContentService2
        heading="Get Our Expert-grade Installation For Electric Curtains"
        text={<p>Our quality motorized curtains require a great deal of proficiency for their installation. With that said, we’re 
            glad to present to you our excellence regarding the perfect fitting of these curtains, in order to make this new incredible 
            curtain treatment the most favorable for you. Besides the most flawless curtain fitting, we also ensure the fact that our 
            skillset remains time-saving all-along, as well. 
            </p>}
        text1={<p>You’re more than welcome to acquire these first-rate installation services for the Electric Curtains Dubai and treat 
            your places in a super contemporary and most lucrative way. Over and above, our services are widely available at highly 
            budget-friendly rates and you’re meant to find this home improvement treatment entirely cost-effective in the long-run. 
            Request your free quote for the best installation services, today!

            </p>}
        image="/static/images/Classic-Electric-Curtains-In-UAE-1.jpg"
        />
        <TestimonialsService heading="Testimunal" subHeading="We Are Loved By Our Customers" testimonials={testimonials1}/>

        <ContentService3

        leftSectionTitle="Our Electric Curtains Dubai Feature The Most Incomparable Quality"

        leftSectionParagraph1={<p><Link className='text-decoration-none text-danger fw-bold' href='/'>Closing Curtain </Link> 
             brings you the most incredible curtain treatment for both your homes and offices, 
            that too, with a number of everlasting benefits. Our all-exclusive curtains are an excellent choice to consider if you’re 
            planning on a window treatment upgrade, as they will also offer the added perk of a suave beautifying of the home décor around. 

            </p>}

        leftSectionParagraph2="These Electric Curtains Dubai are one of the finest décor elements that you can add to your spaces and enjoy 
        an everlasting comfort afterwards. They are not just entirely pocket-friendly but also prove to be supremely beneficial for 
        extensive periods of time. You can buy these quality curtains online and can also have an amazing in-store shopping experience 
        at our curtain outlets in the UAE.

        "


        faqHeading="FAQs (Frequently Asked Questions)"

        faqsData={faqsData}

        />

        <Footer/>
    </div>
  );
};

export default ElectricCurtains;
