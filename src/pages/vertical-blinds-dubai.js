// pages/service.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from '@/components/Header'
import ContentSection2 from '@/components/ContentSection2';
import ContentOnly from '@/components/ContentOnly';
import ContentService from '@/components/ContentService';
import ServiceGallery from '@/components/ServiceGallery';
import ContentService1 from '@/components/ContentService1';
import Footer from '@/components/Footer';
import ContentService4 from '@/components/ContentService4';
import ProjectSection from '@/components/ProjectSection';
import ContentService3 from '@/components/ContentService3';

const VerticalBlinds = () => {
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
  

  return (
    <div>
      <Header logo='/static/images/logo.png'/>

      <ContentSection2
        image='/static/images/eyelet-custom-curtain.jpg'
        heading=""
        text=""
        h31=""
        h31text=""
        h32=""
        h32text=""
        />

        <ProjectSection items={items} />

        <ContentOnly
        heading=""

        text1={<p></p>}
        
        text2={<p></p>}

        text3={<p></p>}

        text4={<p></p>}

        
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

        <ContentService4
        heading=""
         text3={<p>
          </p>}
        />
        
        <ContentService3
        leftSectionTitle=""

        leftSectionParagraph1={<p>
            </p>}

        leftSectionParagraph2=""


        faqHeading=""

        faqsData={faqsData}
        />

        <Footer/>
    </div>
  );
};

export default VerticalBlinds;