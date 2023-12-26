import BlogItems from '@/components/BlogItems';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ServiceBanner2 from '@/components/ServiceBanner2';
import React from 'react';

function blog() {
    const blogs = [
        {
          id: 1,
          link: "/best-types-of-curtains-to-choose-for-your-home-in-dubai/",
          image: "/static/images/Curtains-in-Dubai-1536x1079.jpg",
          title: 'Best Types Of Curtains To Choose For Your Home in Dubai',
          date: 'October 19, 2023',
          comments: "No",
          description: 'Decorating your home? Choosing the right curtains in Dubai is important for a room to come together. Dubai’s intense sunlight',
        },
        {
          id: 2,
          link: "/Luxury-Blackout-Curtains-2022/",
          image: "/static/images/affordable-living-room-curtains-ideas-1.jpg",
          title: 'Top 10 Best Types of Luxury Blackout Curtains 2023',
          date: 'February 24, 2022',
          comments: "No",
          description: 'Curtains are essential elements for giving us privacy and blocking the light coming from outside. If you need deep sleep,',
        },
        {
          id: 3,
          link: "/living-room-curtains-ideas/",
          image: "/static/images/Affordable-Living-Room-Curtains-Ideas.jpg",
          title: '10+ Affordable Living Room Curtains Ideas',
          date: 'February 19, 2022',
          comments: "No",
          description: 'Curtains can transform the style of your living room as well as the whole interior of your home. Apart from',
        },
        // Add more blog items as needed
      ];
    return (
        <div>
            <Header logo='/static/images/logo.png'/>
            <ServiceBanner2 imageUrl="/static/images/Closing-Curtain-121.jpeg" heading="Blog"/>
            <BlogItems blogs={blogs}/>
            <Footer/>
        </div>
    );
}

export default blog;