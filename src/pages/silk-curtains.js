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
import Link from 'next/link';
import TestimonialsService from '@/components/TestimonialsService';

const SilkCurtains = () => {
  

  const testimonials1 = [
    {
      id: 1,
      name: 'Henry',
      position: ' Fully Use',
      comment: '  The silk curtain fabric is so soft and supple and I just can’t help caressing these curtains again and again.',
      rating: 5,
      image: '/static/images/testimonial.png',
    },
    {
      id: 2,
      name: 'Mark',
      position: ' Top Class',
      comment: 'I do feel their superlative Silk Curtains UAE be mood-boosting for me every time I’m around them.',
      rating: 5,
      image: '/static/images/testimonial.png',
    },
    
    {
      id: 3,
      name: 'Maria',
      position: ' Amazing',
      comment: ' At Closingcurtain.ae, you will definitely find the best quality curtains and their curtains are totally incomparable',
      rating: 5,
      image: '/static/images/testimonial.png',
    },
    
    {
      id: 4,
      name: 'David',
      position: ' Fully Use',
      comment: ' I was greatly amazed and of course very much impressed with their super timely shipment.',
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
      comment: 'I do feel their superlative Silk Curtains UAE be mood-boosting for me every time I’m around them.',
      rating: 5,
      image: '/static/images/testimonial.png',
    },
  ];
  


  const galleryImages = [
    '/static/images/Silk-Curtains-3.jpg',
    '/static/images/Silk-Curtains-5.jpg',
    '/static/images/Silk-Curtains-6.jpg',
    '/static/images/Silk-Curtains-7.jpg',
    '/static/images/Silk-Curtains-8.jpg',
    '/static/images/Silk-Curtains-9.jpg',
  ];
  const faqsData = [
    { 
      question: 'How To Wash Silk Curtains?',
      answer: 'Always make use of lukewarm water for washing silk curtains and carefully wash one panel at a time with hands. This will prevent the delicate fabric from getting damaged and faded. As for the cleaning element, never use harsh cleaners or chemicals and just stick to a mild cleaner with a neutral pH.' 
    },
    { 
        question: 'Should The Curtains Only Hit The Floor Or The Sill?',
        answer: 'As far as the Silk Curtain styling is concerned, opting for the floor-to-ceiling ones is always a good and time tested approach. Ideally, your curtains should touch the floor and if that’s not a practical choice for your room, you can simply have them hover for half an inch above, which will prevent the fabric puddling.' 
      },
      { 
        question: 'Which Curtain Hanging Style Is Good For Maximizing Windows?',
        answer: 'You can go for either hanging the curtains above the frame or wider than the frame. The first installation setting involves mounting the curtain rod up to 4 to 6 inches higher than the window frame for creating a taller window illusion. As for the second approach, your curtain rod should be extended around 3 to 6 inches beyond the window frame, which is to make the window appear grander. ' 
      },
      { 
        question: 'Do Silk Curtains Require Tiebacks?',
        answer: 'Tiebacks have a potential likelihood of becoming a must-have for Silk Curtains, since their profiles are really plush and of course, silken! Therefore, they are more likely to cause trouble whenever you want your window view to be exposed. So the best way to hold them sideways is to use tie backs.' 
      },
    
  ];
  

  return (
    <div>
      <Header logo='/static/images/logo.png'/>

      <ServiceBanner2 imageUrl="/static/images/Closing-Curtain-121.jpeg" heading="Silk Curtains"/>

      <ContentSection2
        image='/static/images/Silk-Curtains-2.jpg'

        heading="Get Luxurious Silk Curtains In Dubai "

        text="Closing Curtain has got you the famous and durable curtain choice of Silk Curtains Dubai with the enhancement of our 
        signature beautification. Our suave and serviceable silk luxury curtains are one timeless way to style your places in the 
        most functional manner."

        h31="Manufacturing"
        h31text="Made from 100% pure natural protein Silk fabric, have the finest supple finish and the most vibrant and rich appearance."
        h32="Significance"
        h32text="These curtains feature a thin yet sturdy build quality and are perfect for air passage and creating a lavish decor statement."
        />


        <ContentOnly
        heading="Luxurious Silk Curtains Dubai For Elegant Window Treatments"

        text1={<p>Our luxury silk drape window treatment not only is the most charming way of treating your windows but it also comes
             with a number of advantages. The silk curtain fabric is super lightweight, plus extremely soft and smooth to touch.
            </p>}
        
        text2={<p>This sublime fabrication makes our curtains drape well and appear fuller. These curtains have a sturdy and resilient 
            profile, which prevents the transfer of dirt and dust particles, thus making your interiors easy to maintain. They are the 
            kind of curtains that won’t lose their plush textures or the vibrance of their colors, even after prolonged uses.
            </p>}

        text3={<p>Our Luxury Silk Curtains Dubai feature highly fade-resistant colors and prints and therefore remain ideally 
            beautiful all their life. Another significant advantageous aspect of these <Link className='text-decoration-none text-danger fw-bold' href='eyelet-curtains'>purposeful curtains</Link>
             is that they are highly 
            resistant to all kinds of accumulations such as bacteria, molds, mildew, and even the dust and dirt particles. 
            Cleaning them is very easy and effortless as well.
            </p>}

        text4={<p>These are totally non-toxic, allergen-free and more of a <Link className='text-decoration-none text-danger fw-bold' href='sheer-curtains'>hygienic curtain</Link> choice to 
        consider. Also, they are well-absorbent in nature and thus effectively continue their beautiful appearance under all kinds 
        of atmospheric conditions. Though these curtains work wonders for nearly all uses, they work particularly best as 
        <Link className='text-decoration-none text-danger fw-bold' href='living-room-curtains'>Living Room Curtains.</Link>

            </p>}

        
        />

        <SaleSection
        text="10% Off Window Curtains and Blinds online - Sale End Today"
        />
        <ContentService1
        image='/static/images/Best-silk-curtains.jpg'
        heading="What Are The Areas To Use Silk Curtain?"
        text={<p>You can never possibly go wrong when flaunting any and every space with our silk <Link className='text-decoration-none text-danger fw-bold' href='bedroom-curtains'>luxury curtains
        </Link>. Our silk curtain panels instantly give rise to a luxury, delightful, comforting and inviting vibe.
            </p>}
        text1={<p>Over and above, these <Link className='text-decoration-none text-danger fw-bold' href='bedroom-curtains'>stylish curtains</Link> come with endless designs and structural profiles,
         and you have a lovely time picking out your favorite ones.
            </p>}
        text2={<p>Some noteworthy versions include dupioni silk window curtains (blackout curtains with a metallic print and faux-silk 
            texture), faux silk luxury curtains, and extra-wide Silk Curtains Dubai, which work wonders as 
            <Link className='text-decoration-none text-danger fw-bold' href='bedroom-curtains'>Bedroom Curtains.</Link> Similarly, our Silk curtain blackout is another smart and spectacular manner 
            in which you can bring about a lot of comfort to your life. <br/> In addition to these, you can also go for the creation
             of your desired designs of custom silk drapes. 
            </p>}
        />

        <ServiceGallery
        heading="Explore Our Gleaming Gallery"
        images={galleryImages}
        />

        <ContentService
        heading="Looking For An All-round Décor Solution? Choose Our Quality Silk Drapes"
        text={<p>From residential uses all the way to the commercial settings, these wondrous curtains are simply the most ideal choice.
             They can totally outperform and outlive other curtain types, which does add to their overall worth. Speaking of the 
             functional benefits, these curtains are incredibly long-lasting and most importantly stay tough against damages. As 
             compared to other curtain choices, our Silk Curtains in Dubai don’t get wrinkled, crushed or rumpled. This way, you 
             can easily consider their usage for all spaces, even those where a considerable upkeep isn’t feasible.

            </p>}
        text1={<p>As for the aesthetic part, no other curtain choice can possibly beat our Silk Luxury Curtains as they are exceptionally
             stylish and can be used with just about any décor organization. 
            </p>}
        text2={<p>Just reach out to us today and have your hand placed over the ritziest curtains ever!
            </p>}
        image="/static/images/high-Quality-Silk-Drapes.jpg"
        />
        <SaleSection
        text="10% Off Window Curtains and Blinds online - Sale End Today"
        />
        
        <ContentService2
        heading="Make The Most Out Of Our Expert Installation Services"
        text={<p> <Link className='text-decoration-none text-danger fw-bold' href='/'>Closing Curtain</Link> brings you the finest fitting and flaunting services for Silk Curtains Dubai, 
        so as to ensure the <Link className='text-decoration-none text-danger fw-bold' href='curtains-accessories'>best decorative upgrade</Link> of your places. Hiring our professionals for 
        the perfect and most seamless curtain installation will keep all the unfavorable outcomes of DIY installation attempts at bay, 
        ensuring that you benefit the most from this treatment. Our experts ace every single procedure of the curtain fitting and give 
        rise to the most comfortable versions of your places. 
            </p>}
        text1={<p>Besides, our Silk Curtains Dubai Installation Services are incredibly affordable, which is to say that you can easily
             transform your places on a budget. These services are ideally time-saving as well and will make the new curtain treatment 
             timelessly beneficial for you.
            </p>}
        image="/static/images/Best-silk-curtains.jpg"
        />
        
        <ContentService
        heading="We Are The First-rate Providers Of Quality Silk Curtains Dubai"
        text={<p>And we welcome you to shop for the most trendsetting styles of these mind-blowing curtains for a dynamic décor upgrade 
            of your places. Our quality curtains are not only entirely matchless when it comes to attracting every gaze and beautifying 
            the whole surrounding spaces, but also they add a great deal of everlasting comfort to the lifestyles, too. Plus, we’ve got 
            you loads of classy style options to choose your favorite ones from. 
            </p>}
        text1={<p>Besides, if you don’t find our predefined styles of the Silk Curtains Dubai to be suitable according to your home 
            décor, we’re right at your service with the timeless skill of curtain customization. Do get in touch with us and explore 
            those mesmerizing silken drapes for your places that won’t ever stop pleasing you!
            </p>}
        image="/static/images/Amazing-silk-curtains.jpg"
        />
        <TestimonialsService heading="Testimunal" subHeading="We Are Loved By Our Customers" testimonials={testimonials1}/>
        <FAQsSection
        heading="FAQs (Frequently Asked Questions)"
        faqsData={faqsData}
        />

        <Footer/>
    </div>
  );
};

export default SilkCurtains;
