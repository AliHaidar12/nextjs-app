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
    '/static/images/Top-Quality-Hotel-Curtains-Dubai-1.jpg',
    '/static/images/Top-Quality-Hotel-Curtains-Dubai-2.jpg',
    '/static/images/Top-Quality-Hotel-Curtains-Dubai-3.jpg',
    '/static/images/Top-Quality-Hotel-Curtains-Dubai-4.jpg',
    '/static/images/Top-Quality-Hotel-Curtains-Dubai-5.jpg',
    '/static/images/Top-Quality-Hotel-Curtains-Dubai-6.jpg',
  ];
  const faqsData = [
    { 
      question: 'What Should Be The Best Length For Hotel Curtains?',
      answer: 'In the first place, floor to ceiling profile is the ideal length dimension for hotel curtains, since this kind of sizing ensures the whole beauty depiction. Moreover, this ensures the perfect coverage and privacy provision, which of course is a major requirement. Lastly, these curtains tend to provide the finest dressing for all the windows.' 
    },
    { 
        question: 'What Are The Best Color Choices For Hotel Curtains?',
        answer: 'When choosing hotel curtains, you can play with multiple colors since the hotel or restaurant interior does ask for a notable beautification. Bold colors like Maroons, Navy Blues, Grays, Purples and Deep Reds are some of the best recommendations. Besides, you can also stick to the pastel and neutral ones for creating more comfortable and dreamy looks. ' 
      },
      { 
        question: 'Are Hotel Curtains Supposed To Be Waterproof?',
        answer: 'Hotel curtains can offer a certain level of water-resistance, however, they cannot be waterproof completely. Waterproofing is generally a requirement for resorts and similar spaces where there is an abundance of water sources or within kitchens mostly. Moreover, for ensuring the best upkeep it’s a good idea that you keep your curtains free of moisture and also dry them perfectly before installing them back.' 
      },
      { 
        question: 'How To Maintain The Curtains In Hotels?',
        answer: 'Since hotel curtains are meant to be in abundance, it’s best that you consider professional cleaning services for getting favorable outcomes. In addition to that, a regular dusting and spigot cleaning is also a good approach to keeping the curtains looking good and preventing any harmful buildup. ' 
      },
      { 
        question: 'How Hygienic Are Hotel Curtains?',
        answer: 'Our Hotel curtains Dubai, in the first place, are perfectly hygienic in order to ensure the best health conditions, specifically within dining areas. Besides, you can achieve the rest of the hygiene maintenance by having them cleaned by professionals at regular intervals and by keeping harsh usage conditions and atmospheric impact at bay. ' 
      },
    
  ];
  

  return (
    <div>
      <Header logo='/static/images/logo.png'/>

      <ServiceBanner2 imageUrl="/static/images/Closing-Curtain-121.jpeg" heading="Hotel Curtains"/>

      <ContentSection2
        image='/static/images/1-Hotel-Curtains-UAE.jpg'
        heading="Hotel Curtains Dubai - Elegant Window Treatments for Hospitality Spaces in Dubai"
        text="Hotel Curtains Dubai by Closing Curtain is the finest and the most commercially lucrative choice to settle, for all 
        the hotel, restaurants and resort decors. These curtains are ideal for all spaces and they serve the best of aesthetics as 
        well as prolonged functionalities."
        h31="Manufacturing"
        h31text="Made from sublime quality Cotton or Polyester and are mostly hung within loose pleats and folds."
        h32="Working"
        h32text="These curtains provide the perfect luxurious decor creations and are greatly comforting plus easy to maintain, too."
        />


        <ContentOnly
        heading="Get Our Luxury Hotel Curtains Dubai"

        text1={<p>Our luxury hotel window curtains serve as an <strong>amazing window treatment</strong> offering flawless coverage 
        in the first place. These curtains add to the overall hotel or restaurant space decor in the most noteworthy manner and retain 
        their eye-catching profiles for extended periods of time. Also, they are super flexible and can be easily paired with any 
        given <a href='curtain-accessories'>curtain accessories.</a>
            </p>}
        
        text2={<p>These hotel curtains Dubai create the most ideal and agreeable surroundings for everyone, in terms of comfort provision. 
            Their thick and rich fabrications do the job of flawless temperature balancing and they can effectively keep the external 
            influential elements at bay too. They also possess excellent noise-canceling properties and therefore will make the hotel 
            spaces extremely pleasant to be around.
            </p>}

        text3={<p>Adding to that, our Hotel Curtains make the temperature and light extent totally controllable to best suit all the 
            requirements. The thick and heavy profiles of these curtains make it the most convenient and calmative for your guests to 
            rest in, thus are guaranteed of gaining you reasonable business.
            </p>}

        text4={<p>These curtains give an accomplishing and cozy effect to the rest of the decor, hence making it greatly eye-catching. 
            Moreover, they provide the most effective levels of privacy which also is a highly demanded aspect within professional settings. 
            Last but not least, is the fact that these curtains also make the best <a href='office-curtains'>Office window curtains</a>, 
            a marvelous addition to your power offices. 

            </p>}

        
        />

        <SaleSection
        text="10% Off Window Curtains and Blinds online - Sale End Today"
        />
        <ContentService1
        image='/static/images/Best-Hotel-Curtains-Dubai.jpg'
        heading="What Are The Ornamental Perks Offered By Hotel Curtains Dubai?"
        text={<p>Our curtains have their foremost significance in being the most <a href='silk-curtains'>entrancing accessorizing elements.</a> 
        They are widely available in hugely diversified fabrication, style, pattern, design, print, and shade options, so as to go well 
        with all kinds of decor themes. The richer and engaging profiles of these  curtains make it extremely delightful to be around them.
            </p>}
        text1={<p>You can have them within various sizes and measurements, as well, such as the inviting shorter ones or those having 
            a whole floor-to-ceiling design. Our luxury <a href='/'>Hotel Curtains Dubai</a> designs also come within the versions of 
            <a href='blackout-curtains'>hotel blackout curtains</a>, so as to make the interiors even more pacifying. These curtains 
            feature endless versatility and can be considered for all deluxe hotels, restaurants, resorts, or other public places.
            </p>}
        />

        <ServiceGallery
        heading="Explore Our Gleaming Gallery"
        images={galleryImages}
        />

        <ContentService
        heading="We Are The Expert Installers Of Restaurant Curtains Dubai"
        text={<p>And we shall help you settle for the best choices for all commercial places and business settings. As for our 
            installation services for the hotel <a href='electric-curtains'>luxury curtains</a> , they are incredibly adept and will ensure the 
            most flawless, seamless and timeless fitting of all your desired curtains. Besides, we do ensure carrying out the entire 
            procedure in timely ways, so that you don’t have to face a single inconvenience regarding the utilization of the new window 
            treatment. 

            </p>}
        text1={<p>Our quality Hotel Curtains Dubai Installation Services are not just totally matchless when it comes to proficiency 
            but also in terms of durability too. These installation, fixing and flaunting services will work as legit transformation 
            treatments for your commercial space, giving rise to the new and improved versions in no time. So get in touch with us 
            today to acquire this incredible skill set!

            </p>}
        image="/static/images/Best-hotel-curtains.jpg"
        />
        <SaleSection
        text="10% Off Window Curtains and Blinds online - Sale End Today"
        />
        
        <ContentService2
        heading="Visit Our Top-Notch Platform For The Best Hotel Curtains Dubai Shopping "
        text={<p><a href='/'>Closing Curtainis</a> the top-tier provider of the finest-grade and entirely unique curtain products and 
        services. Our <a href='sheer-curtains'>commercial curtains</a> are one of the most effective ways to get your business settings 
        a major boost and of course all of the resultant favorable outcomes too. This treatment will work wonders regarding all of your 
        commercial space requirements. Not to mention the availability of incredible customization services, too.
            </p>}
        text1={<p>At our noteworthy curtain platform in Dubai, you’re meant to come across the most impressive varieties of Hotel Curtains 
            Dubai, along with customized styles, as well. Do reach out to us and you’ll be absolutely pleased with the sublime quality we 
            offer. Also, we’ve got you incredibly budget-friendly pricings for these quality curtains.

            </p>}
        image="/static/images/Amazing-hotel-curtains.jpg"
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
