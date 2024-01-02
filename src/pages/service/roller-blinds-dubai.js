// pages/service.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from 'src/components/Header'
import ContentSection2 from 'src/components/ContentSection2';
import ContentOnly from 'src/components/ContentOnly';
import ServiceGallery from 'src/components/ServiceGallery';
import ContentService1 from 'src/components/ContentService1';
import Footer from 'src/components/Footer';
import ContentService4 from 'src/components/ContentService4';
import ProjectSection from 'src/components/ProjectSection';
import ContentService3 from 'src/components/ContentService3';
import ServiceBanner2 from 'src/components/ServiceBanner2';
import Link from 'next/link';
import TestimonialsService from 'src/components/TestimonialsService';
import Head from 'next/head';

const RomanBlinds = () => {
  

  const testimonials1 = [
    {
      id: 1,
      name: 'Henry',
      position: ' Fully Use',
      comment: ' Their Roller Blinds Abu Dhabi have served more me than I can express!',
      rating: 5,
      image: '/static/images/testimonial.png',
    },
    {
      id: 2,
      name: 'Mark',
      position: ' Top Class',
      comment: 'Closingcurtain.ae Is the most excellent home decor brand that I have ever come across in my entire life.',
      rating: 5,
      image: '/static/images/testimonial.png',
    },
    
    {
      id: 3,
      name: 'Maria',
      position: ' Amazing',
      comment: '  The blind quality is simply amazing and the work is absolutely wonderful.   ',
      rating: 5,
      image: '/static/images/testimonial.png',
    },
    
    {
      id: 4,
      name: 'David',
      position: ' Fully Use',
      comment: ' Their Roller Blinds Dubai are genuinely worth investing in.',
      rating: 5,
      image: '/static/images/testimonial.png',
    },
    {
      id: 5,
      name: 'Sareena',
      position: ' High Recommended',
      comment: ' You must visit Closingcurtain.ae if you’re looking forward to having the best-personalized blinds. ',
      rating: 5,
      image: '/static/images/testimonial.png',
    },
    {
      id: 6,
      name: 'Mark',
      position: 'Amazing',
      comment: 'Closingcurtain.ae Is the most excellent home decor brand that I have ever come across in my entire life.',
      rating: 5,
      image: '/static/images/testimonial.png',
    },
  ];
  


  const galleryImages = [
    '/static/images/roller-blinds-1.jpg',
    '/static/images/roller-blinds-2.jpg',
    '/static/images/roller-blinds-3.jpg',
    '/static/images/roller-blinds-5.jpg',
    '/static/images/roller-blinds-6.jpg',
    '/static/images/roller-blinds-7.jpg',
  ];
  const faqsData = [
    { 
      question: 'Should Roller Blinds Be Installed Inside Or Outside The Recess?',
      answer: 'That initially depends on your requirements and the profile of your window. However, hanging your roller blinds inside the recess is always a more favorable idea since this way they get to provide a complete coverage. Also, you have better control over light and privacy with this installation of roller blinds. ' 
    },
    { 
        question: 'How Long Do Roller Blinds Last?',
        answer: 'In general, roller blinds tend to last for up to a decade as an initial lifespan. You can always increase their life and performance by ensuring a good upkeep. Also, protecting your roller window blinds from extremely harsh atmospheric conditions, which is one of the maintenance aspects.' 
      },
      { 
        question: 'How Do I Maintain My Roller Window Blinds?',
        answer: 'You can carry out a regular cleanup by cleaning the slats or panels of your roller blinds with a vacuum cleaner. Alternatively you can also dust them off to get rid of the loosened dirt and dust. As for a deeper cleaning, you can remove the blinds and wash them with a mild detergent and warm water. Ensure drying them completely before installing them back. ' 
      },
      { 
        question: 'Do Roller Blinds Block Sunlight?',
        answer: 'Roller blinds do block out sunlight, which in fact is a very advantageous aspect of their functionality. Besides, these blinds are also great at keeping other forms of atmospheric intensity and resultant damage at bay. Also, installing these blinds comes with the major plus point of energy efficiency.' 
      },
      { 
        question: 'Are Roller Blinds A Cheap Option To Go For?',
        answer: 'Roller Blinds, in fact, are a great window treatment choice to consider if you want something affordable. They are not just super inexpensive but also really cost-effective as well, so you’re meant to have the best value for your money. Besides, the comfort provided by roller blinds is always worth the investment.' 
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
    { property: 'title', content: "Roller Blinds Dubai - Buy Luxury Roller Window Blinds Online" },
    { name: 'description', content: "Get Trendy Roller Blinds Dubai At Closingcurtain.ae. We provide best quality roller blinds Dubai with Installation Services At best Prices." },
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
        <link rel="icon" href="/closing-curtains.png" />
      </Head>
      <Header logo='/static/images/logo.png'/>

      <ServiceBanner2 imageUrl="/static/images/Closing-Curtain-121.jpeg" 
      heading="Roller Blinds in Dubai - Premium Window Coverings"/>

      <ContentSection2
        image='/static/images/roller-blinds-8.jpg'
        heading="We Are Best Roller Blinds Dubai Supplier!"
        text="Closing Curtain presents to you the finest manner of treating and adorning your windows, that is with the Roller 
        Blinds Dubai. These super sleek and ideally functional blinds will best serve you as a durable and functional window decor 
        for all your places.         "
        h31="Manufacturing        "
        h31text="Made from Polyester fabrication running over a tubular roller mechanism and controlled with the help of chains"
        h32="Versatility"
        h32text="These blinds come with the most flexible attributes, look really stylish, and are extremely easy to operate"
        />

        <ProjectSection items={items} />

        <ContentOnly
        heading="What Are The Pros Of Roller Blinds Dubai?        "

        text1={<p>Our ravishing roller window blinds offer the foremost advantage of durability and they are an 
            <Link href='bamboo-blinds-dubai' className='text-decoration-none text-danger fw-bold'> ideally versatile option </Link>  
            to consider for all areas. This is the kind of treatment that will make your windows stand out and will perfectly compliment 
            the rest of the décor, as well. Their versatility is quite similar to that of the Roman Window Blinds, suitable for all areas.
            </p>}
        
        text2={<p>It is, by all means, the exceptional elegance that’s meant to last really long. Roller Blinds Dubai are widely available 
            within endless styles, patterns, sizes, orientations, and alignments, so as to provide the best for a number of diversified 
            ornamentations.

            </p>}

        text3={<p></p>}

        text4={<p>They offer amazing and totally flawless levels of privacy and are available within the versions of night and day 
            Roller Window Blinds for the purpose of additional privacy, essentially the functionality of
            <Link  href='blackout-blinds-dubai' className='text-decoration-none text-danger fw-bold'> useful blackout blinds</Link>. 
            They have a totally non-toxic and more of a hazard-free design profile and therefore can be absolutely considered for 
            all kids’ spaces, too. 

            </p>}

        
        />

        <ContentService1
        image='/static/images/blinds-collection-3.jpg'
        heading="What Are The Uses Of Roller Blinds Dubai?        "
        text={<p>The sleek and suave appearance of our Roller Dubai blinds makes them the perfect choice for residential spaces and 
            they also go best with all commercial-grade decors too, as <Link href='blackout-blinds-dubai' 
            className='text-decoration-none text-danger fw-bold'>resilient Office Blinds</Link>. These Blinds look ideal for the 
            areas where there’s a dire need for presentable ornamentation, such as outdoor spaces.

            </p>}
        text1={<p>Other perks and pros of these blinds include the fact that they are greatly energy-efficient in nature. Our Roller 
            Blinds Dubai are also available within vastly serviceable profiles of window roller shutters and sunscreen blinds.

            </p>}
        text2={<p>Also, you can have them with the added functionality of motorized operation, i.e. as <Link href='electric-blinds-dubai' 
        className='text-decoration-none text-danger fw-bold'> Electric Window Curtains</Link>. Plus, they can be paired up with 
        any of the existing home curtain styles, too.

            </p>}
        />

        
        <ContentOnly
        heading="Explore The Extensive Styling Of Our Roller Blinds In Dubai        "

        
        text3={<p>Our sublime quality Roller Window Blinds are the highest versatile window treatment choice that is meant to best 
            suit any and every surrounding decor. These blinds are super flexible as well and therefore can be used in multiple 
            ways, in accordance to the requirements. As for the mainstream versions, these blinds come in the styles of Roller 
            <Link href='blackout-blinds-dubai' className='text-decoration-none text-danger fw-bold'> Blackout Blinds</Link> 
            and Sunscreen roller blinds which can be used as a protection against atmospheric intensities.
            </p>}


        
        />
        <ServiceGallery
        heading="Our Success Stories        "
        images={galleryImages}
        />

        <ContentService4
        heading="Get Our Timeless Expertise For Roller Blinds Dubai Installation        "
         text3={<p><Link href='/' className='text-decoration-none text-danger fw-bold'>Closing Curtain</Link> will be right at your service whenever you acquire 
         any and every service of home improvement for achieving the best versions of your places. This goes the same for our vast skill set of Roller Window 
         blinds installation which will bring about endless comfort in your lifestyle. Our fitting services also include the seamless blending of the new 
         blinds into your existing home décor. <br/> <br/> All of the included skillset of our Roller Blinds Dubai comes at highly affordable rates and you 
         can easily make the most out of this window treatment without having to spend excessively. Just give us a call today and we shall be more than pleased 
         to serve you with our excellence.

          </p>}
        /> 

        <TestimonialsService heading="Testimunal" subHeading="We Are Loved By Our Customers" testimonials={testimonials1}/>
        <ContentService3
        leftSectionTitle="Choose Our Noteworthy Platform For The Best Roller Blinds Selection        "

        leftSectionParagraph1={<p>
            We at <Link href='/' className='text-decoration-none text-danger fw-bold'>Closing Curtain</Link>, have come up with the best 
            blind varieties for all of your residential and commercial spaces. These blinds work wonders as a window treatment solution 
            and are a great way to add a lot of elegance to both your interior and exterior decor. Moreover, you can have these blinds 
            in a number of different styles and design patterns, just according to what your surrounding decor look asks for. 

            </p>}

        leftSectionParagraph2="The nearly endless functional advantages of our Roller Blinds Dubai include cost-effectiveness and the 
        greatest durability. Plus, these blinds will also effectively contribute to keeping your interior spaces clean and well-maintained. 
        So do consider choosing us the next time you plan on a window upgrade!        "


        faqHeading="FAQs (Frequently Asked Questions)"

        faqsData={faqsData}
        />

        <Footer/>
    </div>
  );
};

export default RomanBlinds;