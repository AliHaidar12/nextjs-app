// pages/service.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from '@/components/Header'
import ContentOnly from '@/components/ContentOnly';
import ContentService from '@/components/ContentService';
import ContentService1 from '@/components/ContentService1';
import Footer from '@/components/Footer';
import ServiceBanner2 from '@/components/ServiceBanner2';
import ProjectSection from '@/components/ProjectSection';
import GallerySection from '@/components/GallerySection';

const AboutUs = () => {
    const galleryImages = [
        '/static/images/Closing-Curtain-8.jpeg',
        '/static/images/Closing-Curtain-9.jpeg',
        '/static/images/Closing-Curtain-10.jpeg',
        '/static/images/Closing-Curtain-11.jpeg',
        '/static/images/Closing-Curtain-1.jpeg',
        '/static/images/Closing-Curtain-4.jpeg',
        '/static/images/Closing-Curtain-15.jpg',
        '/static/images/Closing-Curtain-16.jpeg',
        '/static/images/Closing-Curtain-26.jpeg',
        '/static/images/Closing-Curtain-23.jpeg',
        '/static/images/Closing-Curtain-12.jpeg',
        '/static/images/Closing-Curtain-9.jpg',
      ];
  const faqsData = [
    { 
      question: 'What Is Meant By Curtain Header Tape?',
      answer: 'Curtain Header Tape, technically, is a fabric band which is usually stiff in profile and is sewn on the top of the curtain panel along with the fabric. It gets collected in the curtain pleats across the whole curtain panel and makes curtain gathering easier due to the built-in pleat pockets. ' 
    },
    { 
        question: 'Is The Iron-On Curtain Tape A Good Idea?',
        answer: 'Iron-on curtain tape or hem tape is actually a really useful accessory to consider, particularly if you don’t want to indulge in detailed and troublesome curtain treatments. As suggested by the name, you simply need to place this tape atop the curtain on the right spot, followed by ironing it thoroughly to the point that it sticks well to the point it’s supposed to hold. ' 
      },
      { 
        question: 'Can I Achieve Traditional Curtain Looks With Curtain Tapes?',
        answer: 'Our Curtain tapes Dubai are indeed super useful elements when it comes to curtain styling. You can achieve literally any and every desired styling with these tapes, and most importantly the classic curtain styles such as pinch pleat patterns or the pencil pleat ones. In addition to that, you can also make use of these curtain tapes for making other traditional curtain designs. ' 
      },
      { 
        question: 'Can Curtain Tapes Be Used For Short Curtains?',
        answer: 'Curtain tapes are a highly versatile accessory as they prove functional for nearly every curtain profile. Besides, you can also find particular curtain tapes, known as Universal tapes, which are particularly designed for shorter curtains. This way, you can easily achieve any of your desired styling with your favorite curtains, no matter what size they are.' 
      },
      { 
        question: 'What’s The Difference Between Curtain Tape And Pleating Tape?',
        answer: 'In the first place, there does not exist a lot of difference between the two, since both are meant for securing the curtain profile and to achieve different styles. As for the pleating plates, you can easily sew them to your desired curtain panels for creating various adorable drapery headings. Regular curtain tapes on the other hand, might require professional handling, particularly if you want way too intricate curtain styling. ' 
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

      <ServiceBanner2 imageUrl="/static/images/Closing-Curtain-121.jpeg" heading="About Closing Curtain"/>
      
      <ContentService
        heading="Welcome to Closing Curtain"
        text={<p>Welcome to Closing Curtain, your premier destination for exquisite curtains and blinds in Dubai, UAE. We are dedicated 
            to enhancing your living and working spaces with our extensive range of high-quality window treatments. Whether you’re 
            looking for blackout curtains, sheer curtains, or stylish blinds, we have the perfect solution to suit your needs.
            </p>}
        text1={<p>At Closing Curtain, we understand the importance of creating a comfortable and inviting ambiance in your home or office. 
            Our team of experienced professionals is committed to providing you with personalized service and exceptional products that 
            meet your unique style and functional requirements.

            </p>}
        image="/static/images/Closing-Curtain-About-1.jpeg"
        
        />
        
        <ProjectSection items={items}/>

        <ContentOnly
        heading="What Products & Services Do We Offer?"

        text1={<p>Our collection features an impressive array of options to cater to various tastes and preferences. If you desire privacy 
            and complete light control, our blackout curtains are designed to create a peaceful sanctuary where you can rest and rejuvenate. 
            For those seeking an elegant touch, our silk curtains exude luxury and sophistication, adding a refined aesthetic to any space.

            </p>}
        
        text2={<p>We also offer a diverse range of blinds that effortlessly combine functionality and style. Our office blinds provide a 
            professional atmosphere, allowing you to create the ideal work environment. Outdoor blinds are designed to withstand the 
            elements while maintaining privacy and protecting against harsh sunlight. Roller blinds, roman blinds, and vertical blinds 
            offer versatile options for controlling light and enhancing the overall design of your space. We also provide Free Installation 
            in 48 Hours.
            </p>}

        text3={<p>At Closing Curtain, we go beyond providing exceptional products. We believe in building lasting relationships with 
            our clients based on trust, integrity, and reliability. Our team of experts is always ready to assist you in selecting the 
            perfect curtains and blinds that align with your vision and requirements. We offer personalized consultations to ensure that 
            you make informed decisions and achieve the desired results.


            </p>}

       
        
        />

        <ContentService1
        image='/static/images/Closing-curtains-About.jpeg'
        heading="Where Do We Provide Our Services?"
        text={<p className='fw-bold'>Closing Curtain takes pride providing a wide selection of 
        high-quality curtains and blinds to elevate places around Dubai, Sharjah, and Abu Dhabi.
            
            </p>}
        text1={<p>As a customer-centric company, we take pride in delivering superior craftsmanship and attention to detail. Our products 
            are sourced from trusted manufacturers, ensuring durability, functionality, and aesthetic appeal. We are committed to 
            maintaining high standards of quality to exceed your expectations.

            </p>}
        text2={<p>Whether you are transforming your home or upgrading your office, Closing Curtain is your one-stop solution for all 
            your window treatment needs. Discover the perfect curtains and blinds that harmonize with your space and reflects your unique 
            style. Experience exceptional customer service and create an atmosphere of elegance and comfort with Closing Curtain.<br/><br/>
            Contact us today to schedule a consultation and let us help you elevate your space with our exquisite curtains and blinds.
            </p>}
        />

        <GallerySection  images={galleryImages} />

        <Footer/>
    </div>
  );
};

export default AboutUs;
