import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import SaleSection from 'src/components/SaleSection';

import ServicesSection from '../components/ServicesSection';
const curtains = [
  {
    icon: "/static/images/Home-Curtains-5.jpg",
    title: "Home Curtains",
    pageUrl: "/service/home-curtains/"
  },
  {
    icon: "/static/images/Living-Room-Curtains-4.jpg",
    title: "Living Room Curtains",
    pageUrl: "/service/living-room-curtains"
  },
  {
    icon: "/static/images/Bedroom-Curtains-3-500x500.jpg",
    title: "Bedroom Curtains",
    pageUrl: "/service/bedroom-curtains"
  },
  {
    icon: "/static/images/Top-Quality-Hotel-Curtains-Dubai-2.jpg",
    title: "Hotel Curtains",
    pageUrl: "/service/hotel-curtains"
  },
  
  {
    icon: "/static/images/Amazing-office-curtains.jpg",
    title: "Office Curtains",
    pageUrl: "/service/office-curtains"
  },
  {
    icon: "/static/images/Eyelet-Curtains-2.jpg",
    title: "Eyelet Curtains",
    pageUrl: "/service/eyelet-curtains"
  },
  {
    icon: "/static/images/5-Electric-Curtains.jpg",
    title: "Sheer Curtains",
    pageUrl: "/service/sheer-curtains"
  },
  {
    icon: "/static/images/Silk-Curtains-9.jpg",
    title: "Silk Curtains",
    pageUrl: "/service/silk-curtains"
  },
  {
    icon: "/static/images/linen16.jpg",
    title: "Linen Curtains",
    pageUrl: "/service/linen-curtains"
  },
  {
    icon: "/static/images/2-Top-Quality-Blackout-Curtains.jpg",
    title: "Blackout Curtains",
    pageUrl: "/service/blackout-curtains"
  },
  {
    icon: "/static/images/Soundproof Curtains (6).jpg",
    title: "Soundproof Curtains",
    pageUrl: "/service/soundproof-curtains"
  },
  {
    icon: "/static/images/2-Electric-Curtains.jpg",
    title: "Electric Curtains",
    pageUrl: "/service/electric-curtains"
  },
  {
    icon: "/static/images/Curtain-accessory-4.jpg",
    title: "Curtains Accessories",
    pageUrl: "/service/curtain-accessories"
  },
  {
    icon: "/static/images/curtain-rings-6.jpg",
    title: "Curtain Rings",
    pageUrl: "/service/curtain-rings"
  },
  {
    icon: "/static/images/Curtain-Rods-6.jpg",
    title: "Curtain Rods",
    pageUrl: "/service/curtain-rods"
  },
  {
    icon: "/static/images/Curtain-Tapes-4.jpg",
    title: "Curtain Tapes",
    pageUrl: "/service/curtain-tapes"
  },

]

  const blinds = [
    {
      icon: "/static/images/Vertical-Shades-in-UAE-1.jpg",
      title: "Blinds Shop",
      pageUrl: "/service/blinds-dubai"
    },
    {
      icon: "/static/images/Bamboo-Blinds-3.jpg",
      title: "Bamboo Blinds ",
      pageUrl: ""
    },
    {
      icon: "/static/images/Blackout-Blinds-6.jpg",
      title: "Blackout Blinds ",
      pageUrl: "/service/blackout-blinds-dubai"
    },
    {
      icon: "/static/images/roller-blinds-6.jpg",
      title: "Roller Blinds ",
      pageUrl: "/service/roller-blinds-dubai"
    },
    {
      icon: "/static/images/Roman-Blinds-5.jpg",
      title: "Roman Blinds ",
      pageUrl: "/service/roman-blinds-dubai"
    },
    {
      icon: "/static/images/high-quality-Venetian-Luxury-Blinds.jpg",
      title: "Venetian Blinds ",
      pageUrl: "/service/venetian-blinds-dubai"
    },
    {
      icon: "/static/images/Vertical-Blinds-4.jpg",
      title: "Vertical Blinds ",
      pageUrl: "/static/images/Vertical-Blinds-4.jpg"
    },
    {
      icon: "/static/images/Wooden-Blinds3.jpg",
      title: "Wooden Blinds ",
      pageUrl: "/service/wooden-blinds-dubai"
    },
    {
      icon: "/static/images/Vertical-Office-Blinds.jpg",
      title: "Office Blinds ",
      pageUrl: "/service/office-blinds-dubai"
    },
    {
      icon: "/static/images/Best-outdoor-blinds-dubai-1.jpg",
      title: "Outdoor Blinds ",
      pageUrl: "/service/outdoor-blinds-dubai"
    },
]
function service() {
  
  return (
    <div>
      <Header logo="/static/images/logo.png" />
      <ServicesSection 
      items={curtains}
      heading="Curtains"
      />
      <SaleSection
        text="10% Off Window Curtains and Blinds online - Sale End Today"
        />
      <ServicesSection 
      items={blinds}
      heading="Blinds"
      />
      <Footer />
    </div>
  )
}

export default service