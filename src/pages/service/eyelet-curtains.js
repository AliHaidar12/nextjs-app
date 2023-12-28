// pages/service.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from 'src/components/Header'
import ContentSection2 from 'src/components/ContentSection2';
import ContentOnly from 'src/components/ContentOnly';
import SaleSection from 'src/components/SaleSection';
import ServiceGallery from 'src/components/ServiceGallery';
import ContentService1 from 'src/components/ContentService1';
import ContentService2 from 'src/components/ContentService2';
import Footer from 'src/components/Footer';
import ServiceBanner2 from 'src/components/ServiceBanner2';
import ContentService3 from 'src/components/ContentService3';
import Link from 'next/link';
import TestimonialsService from 'src/components/TestimonialsService';

const EyeletCurtains = () => {



  const testimonials1 = [
    {
      id: 1,
      name: 'Henry',
      position: ' Fully Use',
      comment: ' I happened to order these cute curtains for my living room and my experience has been really fantastic.  ',
      rating: 5,
      image: '/static/images/testimonial.png',
    },
    {
      id: 2,
      name: 'Mark',
      position: ' Top Class',
      comment: ' These Eyelet Curtains have proved to be the most exceptional curtains of my life!',
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
      comment: ' These guys truly offer you extraordinary curtains which are highly engaging and adorable  ',
      rating: 5,
      image: '/static/images/testimonial.png',
    },
    {
      id: 6,
      name: 'Mark',
      position: 'Amazing',
      comment: ' These Eyelet Curtains have proved to be the most exceptional curtains of my life!',
      rating: 5,
      image: '/static/images/testimonial.png',
    },
  ];



  const galleryImages = [
    '/static/images/Eyelet-Curtains-1.jpg',
    '/static/images/Eyelet-Curtains-2.jpg',
    '/static/images/Eyelet-Curtains-3.jpg',
    '/static/images/Eyelet-Curtains-4.jpg',
    '/static/images/Eyelet-Curtains-6.jpg',
    '/static/images/Eyelet-Curtains-8.jpg',
  ];
  const faqsData = [
    { 
      question: '1. How Do You Hang Eyelet Curtains Straight?',
      answer: 'Hanging eyelet curtains is very easy. You just need to follow the following process to hang your eyelet curtains straight. Buy eyelet curtains with even a number of grommets. Measure the length of your window. Buy the curtain rod, which matches the size of the grommets. Place the brackets on the wall. Iron the curtains if needed. Put the curtains into the curtain rod.  Place the rod having curtains into the brackets. Your curtains hang straight by this process.' 
    },
    { 
        question: '2. Do Eyelet Curtains Need To Be Double Width?',
        answer: 'Yes, eyelet curtains need to be double width as compared to the window. If the width of your window is 100 cm, you should buy two curtains of 120 cm width. It means the curtains are more than double. If you are buying made to measure curtains, increase or decrease the size of the curtains by 20%.' 
      },
      { 
        question: '3. Do Eyelet Curtains Need Rings?',
        answer: 'No, there is no need for curtain pole rings for the installation of eyelet curtains. You can comfortably put your eyelet curtains on your older pole with no need to buy pole rings. You just need to consider the diameter of pole before installing curtains.' 
      },
      { 
        question: '4. What Is The Ideal Diameter Of A Curtain Pole For Eyelet Curtains?',
        answer: 'The ideal diameter of a curtain pole for the hanging of eyelet curtains is 26 to 28 mm. Take the pole for your curtains with 28mm or slightly smaller, so your curtains can easily move within it.' 
      },
    
  ];
  

  return (
    <div>
      <Header logo='/static/images/logo.png'/>

      <ServiceBanner2 imageUrl="/static/images/Closing-Curtain-121.jpeg" heading="Eyelet Curtains"/>

      <ContentSection2
        image='/static/images/Eyelet-Curtains-9.jpg'

        heading="Get Stylish Eyelet Curtains In Dubai"

        text="Eyelet Curtains Dubai by Closing Curtain is one wonderful way to spice up your surroundings in the most long-lasting ways.
         These curtains stand out with their smoothest movements, their elegant looks, and how they add an agreeable convenience to one’s
          lifestyle."
          h31="Construction"
        h31text="Made from the highest quality Cotton, Linen, Acrylic, Polyester, or blended fabrics and come with elegant finishes."
        h32="Working"
        h32text="These curtains have eyelet holes for the passage of curtain rods and work super smoothly in all directions."
        />


        <ContentOnly
        heading="Contemporary Style With Eyelet Curtains Dubai for Modern Windows"

        text1={<p>Our all-purpose and super-efficient eyelet window curtains give the freedom of styling and redesigning in the first place.
             These curtains are fairly flexible and vastly versatile in nature, therefore can be considered for all sorts of uses. Their 
             prime significance lies within their absolutely effortless movement across the <Link href='curtain-rods'>curtain rods</Link>, which 
             is, in fact the only <Link className='text-decoration-none text-danger fw-bold' href='curtain-rings'>curtain accessory </Link>required by these curtains. These curtains are not 
             just extremely convenient to operate but also are very easy and quick when it comes to their installation. Another notable 
             aspect of choosing these curtains as your <Link className='text-decoration-none text-danger fw-bold' href='bedroom-curtains'>residential window treatment</Link> is the advantage of their 
             affordability.

            </p>}
        
        text2={<p>
            We’ve got you a huge variety of ready-made Eyelet Curtains in Dubai that make the best window treatment for all spaces, 
            particularly the usage as <Link className='text-decoration-none text-danger fw-bold' href='living-room-curtains'>Living Room Curtains.</Link>


        </p>}
        />

        <SaleSection
        text="10% Off Window Curtains and Blinds online - Sale End Today"
        />
        <ContentService1
        image='/static/images/Eyelet-Curtains-4.jpg'
        heading="What Are The Perks And Pros Of Eyelet Curtains?"
        text={<p>
            These are the kind of curtains that are meant to look great within all scenarios as they ideally complement all ornamental 
            themes. They appear supremely contemporary and are just the <Link className='text-decoration-none text-danger fw-bold' href='hotel.curtains'>most economical window covering choice</Link>
             to go for, as well. <br/>Besides of course the residential usage, you can also have them as the <Link className='text-decoration-none text-danger fw-bold' href='office-curtains'>
             sleekest commercial or workspace drapes, </Link> too.
        </p>}
        text1={
            <p>Moreover, you can also have them within nearly any and every kind of fabrication ranging from the light and 
                <Link className='text-decoration-none text-danger fw-bold' href='sheer-curtains'>pleasant sheer ones</Link> to those thick and plush velvet ones.
            </p>
        }
        text2={<p>
                Also, these Eyelet Curtains Dubai come with the most vogue variety of sizes and coverage options such as the window length 
                ones or those with floor to ceiling profiles.<br/>
                Last but not the least, is the greatly calmative curtain selection of eyelet <Link className='text-decoration-none text-danger fw-bold' href='blackout-curtains'>blackout curtains,
                </Link> which can also be paired up with any of the desired curtain accessories, such as <Link className='text-decoration-none text-danger fw-bold' href='curtain-tapes'>
                curtain tapes.</Link>
        </p>}
        />

        <ContentOnly
        heading="Explore The Trendiest Styles Of Eyelet Curtains in Dubai"

        text1={<p>Our suave eyelet style curtains are a great way to add notable beauty to any and every interior space, since these 
            curtains always remain in fashion. They can easily sync into any of the surrounding decor themes and always appear the most 
            elegant. Also, these curtains are an excellent way to achieve the best coverage levels. This way, they are an exceptionally 
            favorable choice as <Link className='text-decoration-none text-danger fw-bold' href='bedroom-curtains'>bedrooms drapes</Link> and are best for all similar spaces, too. So do explore 
            our platform to look for the best complementing curtain styles for your homes!

            </p>}
                />

        <ServiceGallery
        heading="Explore The Trendiest Styles Of Eyelet Curtains in Dubai"
        images={galleryImages}
        />

        <ContentService1
        image='/static/images/best-eyelet-curtains-UAE-1024x700.jpg'
        heading="Get The Home Styling That Always Remains The Trendiest"
        text={<p>
                Our exquisite quality Eyelet luxury drapes are one of the most timelessly beneficial choices of window treatment, as they 
                feature a beauty which can never possibly become outdated. Whether you want an addition to a classic decor or are looking 
                for an accentuation of a modern styled place, our eyelet window curtains will serve you most fundamentally in all scenarios. 
                From solid and bold color choices to neutral and pastel ones, you can get just about any option which blends well with the 
                surrounding area.

        </p>}
        text1={
            <p>
                Besides, Eyelet Curtains Dubai are amongst those limited astonishing curtain types that look exceptionally good with 
                floral, geometric, check, lined and dotted prints. Such choices bring about a major welcoming pop of color and vibrancy 
                to the room and have the tendency to complement just about any decorative stuff. 

            </p>
        }
        
        />
        
        
        <ContentService2
        heading="Choose Our Excellence For Eyelet Window Curtains Installation"
        text="We’ve come up with expert-grade excellence regarding the most flawless curtain installation and beautification within your 
        places. Our services ensure an ideally seamless fitting of the curtains while also making them sync well with the surrounding 
        spaces. Besides, all of this skill set of ours is super quick when it comes to completion."
        text1="Do have our Eyelet Curtains Dubai Installation Services all across the UAE and get your curtains the treatment they deserve. 
        This curtain fitting treatment is perfectly timeless and will also save you from the discomforts and unfavorable outcomes of DIY 
        installation. Request your free quote today to make the most out of this affordable and long-lasting excellence!        "
        image="/static/images/Luxuryb-eyelet-curtains.jpg"
        />

      <TestimonialsService heading="Testimunal" subHeading="We Are Loved By Our Customers" testimonials={testimonials1}/>
        
        <ContentService3

        leftSectionTitle="We Supply Top Quality Eyelet Curtains Dubai All Over The UAE"

        leftSectionParagraph1={<p><Link className='text-decoration-none text-danger fw-bold' href='/'>Closing Curtain</Link> is the top-tier provider of the finest quality Eyelet Window <Link href='/'>
        curtains in Dubai</Link> which will serve as a major uplifting of your places. Our sublime standard curtains are a fundamentally useful window 
        treatment and a dynamic ornamental upgrade of all interior spaces. You’ll find these curtains a legit breeze to maintain and they’ll 
        keep serving you for years on end.


        </p>}

        leftSectionParagraph2="All of our Eyelet Curtains Dubai Styles are super ritzy to look at and you’ll have a wonderful time picking 
        out your favorite ones. We’ve got you these amazing curtains at highly affordable price ranges and this way you can have a perfect 
        home décor upgrade on a budget. Contact us for getting the best home improvement ideas.
        "

        faqHeading="FAQs (Frequently Asked Questions)"

        faqsData={faqsData}

        />

        <Footer/>
    </div>
  );
};

export default EyeletCurtains;
