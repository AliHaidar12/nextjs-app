// pages/service.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from 'src/components/Header'

import Footer from 'src/components/Footer';
import GallerySection from 'src/components/GallerySection';
import ServiceBanner2 from 'src/components/ServiceBanner2';
import Head from 'next/head';
const Gallery = () => {
  const galleryImages = [
    '/static/images/gallery/1.jpeg',
    '/static/images/gallery/3.jpeg',
    '/static/images/gallery/4.jpeg',
    '/static/images/gallery/40.jpg',
    '/static/images/gallery/11.jpg',
    '/static/images/gallery/8.jpg',
    '/static/images/gallery/9.jpg',
    '/static/images/gallery/10.jpg',
    '/static/images/gallery/12.jpg',
    '/static/images/gallery/13.jpg',
    '/static/images/gallery/14.jpg',
    '/static/images/gallery/15.jpg',
    '/static/images/gallery/16.jpg',
    '/static/images/gallery/17.jpg',
    '/static/images/gallery/20.jpg',
    '/static/images/gallery/21.jpg',
    '/static/images/gallery/18.jpg',
    '/static/images/gallery/41.jpg',
    
    '/static/images/gallery/24.jpg',
    '/static/images/gallery/25.jpg',
    
    
    '/static/images/gallery/30.jpg',
    '/static/images/gallery/31.jpg',
    '/static/images/gallery/32.jpeg',
    '/static/images/gallery/37.jpeg',
    '/static/images/gallery/34.jpeg',
    '/static/images/gallery/35.jpeg',
    '/static/images/gallery/26.jpeg',
    '/static/images/gallery/27.jpg',
    
    

    // '/static/images/Living-Room-Curtains-5.jpg',
    // '/static/images/Living-Room-Curtains-6.jpg',
    // '/static/images/Living-Room-Curtains-7.jpg',
  ];
  

  return (
    <div>
      <Head>
      <link rel="canonical" href="https://closingcurtain.ae/gallery" />
      <link rel="icon" href="/closing-curtains.png" />
      </Head>
      <Header logo='/static/images/logo.png'/>

      <ServiceBanner2 imageUrl="/static/images/Closing-Curtain-121.jpeg" 
      heading="Gallery - Inspiring Curtain and Blind Designs"/>

      <GallerySection  images={galleryImages}
        showButton={false} 
        heading="Inspiring Designs in Our Curtain and Blind Gallery"/>

        <Footer/>
    </div>
  );
};

export default Gallery;