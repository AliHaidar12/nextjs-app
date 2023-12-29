// pages/service.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from 'src/components/Header'
import ContentSection2 from 'src/components/ContentSection2';
import ContentOnly from 'src/components/ContentOnly';
import ContentService from 'src/components/ContentService';
import ServiceGallery from 'src/components/ServiceGallery';
import ContentService1 from 'src/components/ContentService1';
import Footer from 'src/components/Footer';
import ContentService4 from 'src/components/ContentService4';
import ProjectSection from 'src/components/ProjectSection';
import ContentService3 from 'src/components/ContentService3';
import Link from 'next/link';
import TestimonialsService from 'src/components/TestimonialsService';
import Head from 'next/head';

const VerticalBlinds = () => {


  const testimonials1 = [
    {
      id: 1,
      name: 'Henry',
      position: ' Fully Use',
      comment: ' Their Blinds Abu Dhabi have served more me than I can express!',
      rating: 5,
      image: '/static/images/testimonial.png',
    },
    {
      id: 2,
      name: 'Mark',
      position: ' Top Class',
      comment: 'I asked for a few Vertical Blinds Dubai customizations and to my surprise, these people came up with astonishing blind versions.',
      rating: 5,
      image: '/static/images/testimonial.png',
    },
    
    {
      id: 3,
      name: 'Maria',
      position: ' Amazing',
      comment: ' Closingcurtain.ae is one entirely amazing place to shop for the best home decor from, particularly top-quality window treatments',
      rating: 5,
      image: '/static/images/testimonial.png',
    },
    
    {
      id: 4,
      name: 'David',
      position: ' Fully Use',
      comment: ' I just love how these blinds have literally glorified the entire home decor of mine.',
      rating: 5,
      image: '/static/images/testimonial.png',
    },
    {
      id: 5,
      name: 'Sareena',
      position: ' High Recommended',
      comment: ' Their blinds feature the best build quality and the most flawless working I’ve ever come across.',
      rating: 5,
      image: '/static/images/testimonial.png',
    },
    {
      id: 6,
      name: 'Mark',
      position: 'Amazing',
      comment: 'I asked for a few Vertical Blinds Dubai customizations and to my surprise, these people came up with astonishing blind versions.',
      rating: 5,
      image: '/static/images/testimonial.png',
    },
  ];
  
  const galleryImages = [
    '/static/images/Vertical-Blinds-1.jpg',
    '/static/images/Vertical-Blinds-3.jpg',
    '/static/images/Vertical-Blinds-4.jpg',
    '/static/images/Vertical-Blinds-5.jpg',
    '/static/images/Vertical-Blinds-6.jpg',
    '/static/images/Vertical-Blinds-7.jpg',
  ];
  const faqsData = [
    { 
      question: '1. Why are My Vertical Blinds Opening Or Closing?',
      answer: 'If your vertical blinds are not opening or closing properly, then there are chances that the fabric of the slats has become loose, and this has caused difficulty in the operation of your blinds. There is also a chance that the headrail of the blinds is damaged. The chain of blinds can also be stuck in the blind’s motor.' 
    },
    { 
        question: '2. Can Vertical Blinds Be Cut To Size?',
        answer: 'Yes, you can adjust the size of your vertical blinds according to your needs. You cannot cut the blinds from the bottom because you have to use the bottom pockets to place the weights, so you can just adjust the size from the top of the blinds.' 
      },
      { 
        question: '3. Can Vertical Blinds Adjust?',
        answer: 'Yes, you can easily adjust the vertical blinds. You can open and close them easily according to your needs. You can also adjust the length of the vertical slats of the blinds according to your requirements. With your vertical blinds, you can control the amount of light entering your home.' 
      },
      { 
        question: '4. Should Vertical Blinds Touch The Floor?',
        answer: 'Yes, vertical blinds usually touch the floor. Although the length of your vertical blinds is entirely up to you, if you want to keep your blinds clean, then keep them 3 to 4 inches above the floor.' 
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
  
  const metaTags = [
    { property: 'title', content: "Vertical Blinds Dubai | Buy Luxury Vertical Window Blinds" },
    { name: 'description', content: "Are you looking for vertical blinds Dubai? Closingcurtain.ae is Ideal place to buy luxury vertical blinds in Dubai. Visit now & get best Offers from us!" },
    { name: 'robots', content: 'index, follow' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
  ];
  return (
    <div>
      <Head>
        {metaTags.map((tag, index) => (
          tag.property ? (
          <title key={index}>{tag.content}</title>
          ) : (
          <meta key={index} name={tag.name} content={tag.content} />
          )
        ))}
      </Head>
      <Header logo='/static/images/logo.png'/>

      <ContentSection2
        image='/static/images/Vertical-Blinds-8.jpg'
        heading="Buy Best Vertical Blinds Dubai Online"
        text="Closing Curtain presents to you the finest 
        and sleekest window treatment choice of Vertical Blinds Dubai. These wondrous blinds ideally glorify all window profiles and 
        are particularly an amazing option for larger windows and sliding doors. Both the aesthetics and durability of these blinds 
        are totally matchless, making them worth the investment. "
        h31="Manufacturing"
        h31text="Made from synthetic polyester fabric or rigid PVC, thus are extremely durable and resilient in nature"
        h32="Pros"
        h32text="These highly versatile and attractive blinds ideally complement the windows as well as the whole interiors"
        />

        <ProjectSection items={items} />

        <ContentOnly
        heading="Get Luxury Vertical Blinds In Dubai For Your Windows"

        text1={<p>Our Vertical Window Blinds offers the classiest accessorizing of all window styles and eventually adds greatly to 
          the entire space’s beauty. They not only look super entrancing but also provide the most long-lasting serviceability.
          </p>}
        
        text2={<p>Our Vertical Blinds Dubai are perfectly suitable for all kinds of decor and functional requirements. The most notable 
          advantage of their work is that they make the ceilings look higher and the rooms appear considerably more spacious than before.
          </p>}

        text3={<p>This way, these blinds are the best option to consider for rather less vacant or congested spaces. Besides, investing 
          in our <Link  className='text-decoration-none text-danger fw-bold' href='office-blinds-dubai'>commercially suitable blinds
          </Link> is another great idea, as it will keep all your professional and workspaces well-maintained and your energy expenses 
          fairly low. These blinds are extremely easy to take care of and they effectively protect your places from all kinds of hazardous 
          external factors.
          </p>}

        text4={<p>Over and above, Our vertical blinds in Dubai are truly incomparable when it comes to privacy maintenance. These 
          useful blinds will ideally keep all the troublesome and contaminating elements at bay. Also, you can enjoy a complete 
          light and privacy adjustment with them, just according to your liking.

          </p>}

        
        />

        <ContentService1
        image='/static/images/blinds-collection-4.jpg'
        heading="What Are The Application Areas Of Vertical Blinds?"
        text={<p>These are genuinely the most versatile and <Link className='text-decoration-none text-danger fw-bold' href='outdoor-blinds-dubai'>
           multi-purpose blinds </Link> that can be used for all sorts of coverage and decor-enhancing requirements. Apart from 
           the windows, you can install them next to sliding panes, glass panels, and bi-fold doors, as well.
          </p>}
        text1={<p>Their sleek and presentable looks make them the most perfect commercial-grade decor choice, in addition to being a 
          <Link className='text-decoration-none text-danger fw-bold' href='outdoor-blinds-dubai'> lucrative residential window treatment</Link>. 
          Our blinds, as per the most favorable fact, have extremely budget-friendly price ranges yet their long-lasting functionality is 
          totally unquestionable.
          </p>}
        text2={<p>Our Vertical Blinds Dubai are the kind of blinds that always remain the trendiest, thanks to their ritzy appearances. 
          They are a practically functional and low-maintenance solution to invest in, and most importantly they are meant to stay the 
          same for years straight.

          </p>}
        />

        <ServiceGallery
        heading="Check Out Our Astonishing Creations"
        images={galleryImages}
        />

        <ContentService
        heading="Want An All-purpose Covering Solution? Our Vertical Shades Have Got You!"
        text={<p>These blinds not only make a perfect window treatment but also are the most suitable solution for all types of sliding 
          doors and similar paned structures. You can use them as efficient outdoor coverage elements and can ensure the right kind of 
          protection for all your interior stuff, such as furniture, floorings, and other elements from fading damage. 
          </p>}
        text2={<p>Adding to that, these vertical blinds in Dubai are the best choice if you want to make any of your desired interior or 
          exterior spaces more comfortable and pleasant to be in, thanks to their temperature balancing as well as insulating properties. 
          Last but not least, is the fact that vertical window blinds are the easiest to deal with since they have better tilting 
          mechanisms. Also, these blinds are greatly flexible when it comes to functional and ornamental customizations.

          </p>}
        image="/static/images/Vertical-Shades-in-UAE-1.jpg"
        />

        <ContentService4
        heading="Hire Us As Your Expert Vertical Blinds Dubai Installers"
         text2={<p>
           We are dedicated to perfection regarding every single <Link className='text-decoration-none text-danger fw-bold' 
           href='wooden-blinds-dubai'>home improvement treatment</Link> of yours. Our quality blind installation services will bring 
           about the finest flaunting of your chosen Vertical Blinds Dubai within your desired spaces, thus saving you from the mess 
           of DIY installation. Plus, these installation services also ensure that the new blind treatment appears as a seamlessly 
           blended part of your existing interior and/ or exterior. 
          </p>}
          text3={<p>
            Timeliness and the most promising excellence are the notable aspects of our vertical blind fitting services. Besides, you’ll 
            find this blind treatment adequately serviceable for you, even after years of usage, which is to say that you won’t need to 
            spend on another one at all. Give us a call today!
          </p>}
        />
        <TestimonialsService heading="Testimunal" subHeading="Top Feedbacks From Our Customers" testimonials={testimonials1}/>
        <ContentService3
        leftSectionTitle="Shop Trendiest Vertical Blinds in Dubai From Us"

        leftSectionParagraph1={<p><Link className='text-decoration-none text-danger fw-bold' href='/'>Closing Curtain </Link>
         is the top-tier platform where you’ll come across the widest range of top-quality vertical window blinds in Dubai. All of our 
         vertical window blinds are available at ideally affordable rates along with the most promising quality. These blinds will not 
         just provide you with an excellent performance as a window treatment but will also work wonders as an ornamental accentuation 
         of your whole place. 
            </p>}

        leftSectionParagraph2="Besides the residential collections, we’ve also got you an extensive deal of the best Office Vertical 
        Blinds Dubai. This super cost-effective and sustainable window treatment for commercial spaces will offer you the major plus 
        point of energy efficiency. Do get in touch with us today to have this game-changing treatment in your place.        "


        faqHeading="FAQs (Frequently Asked Questions)"

        faqsData={faqsData}
        />

        <Footer/>
    </div>
  );
};

export default VerticalBlinds;