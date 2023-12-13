// pages/service.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from '@/components/Header'
import ContentSection2 from '@/components/ContentSection2';
import ContentOnly from '@/components/ContentOnly';
import SaleSection from '@/components/SaleSection';
import ContentService from '@/components/ContentService';
import ServiceGallery from '@/components/ServiceGallery';
import ContentService1 from '@/components/ContentService1';
import ContentService2 from '@/components/ContentService2';
import FAQsSection from '@/components/FAQsSection';
import Footer from '@/components/Footer';
import ServiceBanner2 from '@/components/ServiceBanner2';

const HotelRoomCurtains = () => {
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
      question: '',
      answer: '' 
    },
    { 
        question: '',
        answer: '' 
      },
      { 
        question: '',
        answer: '' 
      },
      { 
        question: '',
        answer: '' 
      },
    
  ];
  

  return (
    <div>
      <Header logo='/static/images/logo.png'/>

      <ServiceBanner2 imageUrl="/static/images/Closing-Curtain-121.jpeg" heading="Hotel Curtains"/>

      <ContentSection2
        image='/static/images/eyelet-custom-curtain.jpg'
        heading=""
        text=""
        h31=""
        h31text=""
        h32=""
        h32text=""
        />


        <ContentOnly
        heading=""

        text1={<p></p>}
        
        text2={<p></p>}

        text3={<p></p>}

        text4={<p></p>}

        
        />

        <SaleSection
        text="10% Off Window Curtains and Blinds online - Sale End Today"
        />
        <ContentService1
        image='/static/images/living-room-curtains-designs-1.jpg'
        heading=""
        text={<p></p>}
        text1={<p></p>}
        text2={<p></p>}
        />

        <ServiceGallery
        heading="Explore Our Gleaming Gallery"
        images={galleryImages}
        />

        <ContentService
        heading=""
        text={<p></p>}
        text1={<p></p>}
        text2={<p></p>}
        image="/static/images/Closing-Curtain-7.jpg"
        />
        <SaleSection
        text="10% Off Window Curtains and Blinds online - Sale End Today"
        />
        
        <ContentService2
        heading=""
        text={<p></p>}
        text1={<p></p>}
        image="/static/images/Luxury-living-room-curtains.jpg"
        />
        
        <ContentService
        heading=""
        text={<p></p>}
        text1={<p></p>}
        text2={<p></p>}
        image="/static/images/Closing-Curtain-7.jpg"
        />
        
        <FAQsSection
        heading="FAQs (Frequently Asked Questions)"
        faqsData={faqsData}
        />

        <Footer/>
    </div>
  );
};

export default HotelRoomCurtains;
