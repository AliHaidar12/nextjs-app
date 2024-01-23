import React from 'react';
import HeroSection from '../../components/NewService/HeroSection';
import Header from 'src/components/Header';
import ContentImage from '../../components/NewService/ContentImage';
import GallerySection from '../../components/NewService/NewServiceGallery';
import ContactForm from '../../components/NewService/ServiceContactForm';
import NewServiceSection from '../../components/NewService/NewServiceSection';
import ProjectSection from '../../components/NewService/NewProjectSection';
import ServiceSection from '../../components/NewService/NewServicesSection';
import NewTestimonialService from '../../components/NewService/NewTestimonialService';
import WhyUsSection from '../../components/NewService/WhyUsSection';
import Footer from 'src/components/Footer';
import Head from 'next/head';
import NewServiceSection1 from '../../components/NewService/NewServiceSection1';
import CallToAction from '../../components/NewService/CallToAction';


function Service() {
  const points = [
    {title: "Expert Measurement", text: "Expert measurement and installation services"},
    {title: "Affordable Prices", text: "Wide range of prices to fit any budget"},
    {title: "Expert Measurement", text: "Expert measurement and installation services"},
  ]
  const testimonials1 = [
    {
      id: 1,
      name: 'Henry ',
      comment: ' I happened to order these cute curtains for my living room and my experience has been really fantastic.  ',
      rating: 5,
      image: '/static/images/testimonials/testimonial-1.jpg',
    },
    {
      id: 2,
      name: 'Mark',
      comment: ' These Eyelet Curtains have proved to be the most exceptional curtains of my life!',
      rating: 5,
      image: '/static/images/testimonials/testimonial-1.jpg',
    },
    
    {
      id: 3,
      name: 'Maria',
      comment: ' I had their Electric Curtains for my office and that decision has been extremely favorable for me. ',
      rating: 5,
      image: '/static/images/testimonials/testimonial-1.jpg',
    },
    
    {
      id: 4,
      name: 'David',
      comment: ' Their automatic curtains do save a lot of my time and I’m so thankful for that. ',
      rating: 5,
      image: '/static/images/testimonials/testimonial-1.jpg',
    },
    {
      id: 5,
      name: 'Sareena',
      comment: ' These guys truly offer you extraordinary curtains which are highly engaging and adorable  ',
      rating: 5,
      image: '/static/images/testimonials/testimonial-1.jpg',
    },
    {
      id: 6,
      name: 'Mark',
      comment: ' These Eyelet Curtains have proved to be the most exceptional curtains of my life!',
      rating: 5,
      image: '/static/images/testimonials/testimonial-1.jpg',
    },
  ];

  const galleryImages = [
    '/static/images/curtains/Curtains-1 (7).jpg',
    '/static/images/curtains/Curtains-1 (6).jpg',
    '/static/images/curtains/Curtains-1 (5).jpg',
    '/static/images/curtains/Curtains-1 (4).jpg',
    '/static/images/curtains/Curtains-1 (3).jpg',
    '/static/images/curtains/Curtains-1 (2).jpg',
    '/static/images/curtains/Curtains-1 (1).jpeg',
    '/static/images/curtains/Curtains-1 (1).jpg',
  ];
  const galleryImages2 = [
    '/static/images/curtains/Curtains-6 (1).jpg',
    '/static/images/curtains/Curtains-6 (2).jpg',
    '/static/images/curtains/Curtains-6 (3).jpg',
    '/static/images/curtains/Curtains-6 (1).png',
  ];
  const subImages = [
    '/static/images/curtains/Curtains-1 (10).jpg',
    '/static/images/curtains/Curtains-1 (11).jpg',
    '/static/images/curtains/Curtains-1 (9).jpg',
    '/static/images/curtains/Curtains-1 (8).jpg',
  ];
  const items = [
    {
      icon: "/static/images/icons/verified.png",
      number: "3200+",
      title: "Project Complete"
    },
    {
      icon: "/static/images/icons/costumer.png",
      number: "3100+",
      title: "Happy Clients"
    },
    {
      icon: "/static/images/icons/medal.png",
      number: "25+",
      title: "Award Wins"
    },
    {
      icon: "/static/images/icons/design-thinking.png",
      number: "370+",
      title: "No. of Designs"
    },
  ]
  return (
    <div>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      <Header logo='/static/images/logo.png' />
      <HeroSection
        imageUrl="/static/images/curtains/Curtains-1.jpeg"
        text="Welcome To Closing Curtain"
        heading="We Provide High Quality Bedroom Curtains In Dubai "
        content="Home Curtains Dubai by Closing Curtain are the most perfect and durable window treatment selection for all your places. These curtains create an exceptionally attractive and cozy home decor and are one."
      />
      <ContentImage url="/static/images/curtains/Curtains-7.jpg" 
      surl="/static/images/curtains/Curtains-5.jpeg"
      logo="/static/images/quality-icon.png"
      title="Welcome To Closing Curtain"
      heading="We Provide High Quality Bedroom Curtains Dubai In Wide Range"
      text={<p>Our all-purpose and beyond worthwhile home window curtains can be seamlessly paired with all ornamentations of your choice. 
        Depending on the fabrication, thickness, and layering, there are endless options available of our exclusive home window curtains, 
        <br/><br/>
        These curtains are highly versatile in nature and they have the efficient tendency to seamlessly blend into all sorts of spaces. 
        Also, you can have customized versions of these colored, graceful Home Curtains 
        </p>}
        />
        <GallerySection 
        images={galleryImages} 
        heading="Have A Look At Our Curtains & Blinds Projects"
        />
        <ContactForm url="/static/images/curtains-3.jpg"/>
        <NewServiceSection
        image="/static/images/curtains/Curtains (11).jpg"
        title="Welcome To Closing Curtain"
        heading="Choose Our Exquisite Home Curtains Installation Services          "
            text={<p>Our extraordinary fitting and organization services for the Home Window Curtains will bring about the most attractive 
              looking spaces. This curtain treatment works wonders as an incredible transformation of the whole interiors, 
              making them stand out notably. From measurements to post-installation stylings, you’ll find each and every step 
              entirely perfect and seamless, with timeliness being the additional advantage.
              These premium installation services for the Home Curtains Dubai are not just incredibly pocket-friendly but also really 
              cost-effective to acquire.
              </p>}
        
          />
            <GallerySection 
            images={galleryImages2} 
            />
            <NewServiceSection1
            points={points}
            image="/static/images/curtains/Curtains (2).jfif"
            title="Welcome To Closing Curtain"
            heading="We offer high-quality carpentery services at great prices in Dubai.            "
            text={<p>
              Our all-purpose and beyond worth while home window curtains can be seamlessly paired with all ornamentations of your choice. 
              Depending on the fabrication, thickness, and layering, there are endless options available of our exclusive home window curtains, 
              </p>}
            />
            <CallToAction image="/static/images/testimonials/testimonial-1.jpg"
          title="We offer high-quality carpentery services at great prices in Dubai."/>
          
          <ServiceSection
          title="Welcome To Closing Curtain"
          subImages={subImages}
          mainImageUrl="/static/images/curtains/Curtains-1 (12).jpg" 
          heading="We Provide High Quality Bedroom Curtains Dubai In Wide Range"
          text={<p>Our all-purpose and beyond worthwhile home window curtains can be seamlessly paired with all ornamentations of your choice. 
            Depending on the fabrication, thickness, and layering, there are endless options available of our exclusive home window curtains, 
            These curtains are highly versatile in nature and they have the efficient tendency to seamlessly blend into all sorts of spaces. 
            Also, you can have customized versions of these colored, graceful Home Curtains 
            </p>}
          />
          <ProjectSection items={items}/>
          <NewTestimonialService
          image="/static/images/curtains-5.jpg" 
          icon="/static/images/icons/play-button.png"
          subHeading="How Our Happy Clients Talk About Us"
          heading="Testimunal"
          testimonials={testimonials1}
          />
          
          <WhyUsSection imageUrl="/static/images/curtains/Curtains.jpg"
          heading="Why Us? – Here is What Makes Us Unique Curtains Shop          "
          text="Closing Curtains, a well-known home decor brand in Dubai, is the customer’s first pick, with thousands of positive 
            reviews. We try to deliver you the most exquisite curtains with the most luxury! Let us now assist you in accomplishing your goals; 
            all you have to do is select your curtain designs and decorate your windows with exquisite window dressing. Our outstanding 
            services have made us quite popular among Dubai residents. We care about the satisfaction of our valued clients. Bring in 
            your needs and queries, and we’ll respond as quickly as possible. Find our best curtains in Dubai deals on our website, 
            or give us a call for exquisite Curtains Dubai, as well as purchasing information and recommendations. And put your eyes 
            on the top curtains offered in Dubai."
            
          />
          <Footer/>
    </div>
  );
}

export default Service;
