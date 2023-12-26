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
import ServiceBanner from '@/components/ServiceBanner';
import Link from 'next/link';
import ProjectSection from '@/components/ProjectSection';
import TestimonialsService from '@/components/TestimonialsService';
import ContentService6 from '@/components/ContentService6';
import ContentService7 from '@/components/ContentService7';

const HomeCurtains = () => {

    const testimonials1 = [
        {
          id: 1,
          name: 'Henry',
          position: ' Fully Use',
          comment: ' All the potential difficulties that I used to face while handling my curtains literally vanished with their accessories.',
          rating: 5,
          image: '/static/images/testimonial.png',
        },
        {
            id: 2,
            name: 'Mark',
            position: ' Top Class',
            comment: ' I got the best curtain poles from Closingcurtain.ae and those were the best quality ones I’ve ever had',
            rating: 5,
            image: '/static/images/testimonial.png',
          },
        {
          id: 4,
          name: 'David',
          position: ' Fully Use',
          comment: '  Their curtain essentials are so cute that you just can’t help desiring them for yourself.',
          rating: 5,
          image: '/static/images/testimonial.png',
        },
        {
          id: 3,
          name: 'Maria',
          position: ' Amazing',
          comment: ' Their Curtain Accessories do work wonders and after having them, I did fall for my own curtains!',
          rating: 5,
          image: '/static/images/testimonial.png',
        },
       
        {
          id: 5,
          name: 'Sareena',
          position: ' High Recommended',
          comment: ' Their accessories for curtains work really well and I found the exact and the cutest match to my existing curtains',
          rating: 5,
          image: '/static/images/testimonial.png',
        },
        {
          id: 6,
          name: 'Mark',
          position: 'Amazing',
          comment: ' I got the best curtain poles from Closingcurtain.ae and those were the best quality ones I’ve ever had',
          rating: 5,
          image: '/static/images/testimonial.png',
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
          number: "25+",
          title: "Award Wins"
        },
        {
          icon: "/static/images/curtains.png",
          number: "370+",
          title: "No. of Designs"
        },
      ]
  const galleryImages = [
    '/static/images/Curtain-accessory-1.jpg',
    '/static/images/Curtain-accessory-2.jpg',
    '/static/images/Curtain-accessory-3.jpg',
    '/static/images/Curtain-accessory-4.jpg',
    '/static/images/Curtain-accessory-5.jpg',
    '/static/images/Curtain-accessory-6.jpg',
  ];
  const faqsData = [
    { 
      question: 'How Do I Make My Curtains Appear More Beautiful?',
      answer: 'You can enhance your plain looking curtains by adding a couple of accessories, which will make them stand out. You can go for the decorative ones such as the tassels, tiebacks and holdbacks, which work as an ornamental addition for the curtains and is also a more cost-effective approach as compared to investing in new curtains.',
    },
    { 
        question: 'What To Consider While Buying Curtain Accessories?',
        answer: 'In the first place, you should consider the kind of addition you’re looking forward to, whether it’s based on functional requirements or is aimed towards the decorative factor. Most of the time you don’t really need to spend on new curtains and can simply revive the existing ones with a smart selection of the essentials and accessories. ',
      },
      { 
        question: 'What Is The Difference Between Curtain Tiebacks And Holdbacks?',
        answer: 'Curtain tiebacks and curtain holdbacks are pretty much the same thing except for some minor differences. As for the tiebacks will hold your curtains back and will keep them in place whenever you fold them sideways. Holdbacks, on the flip side, is a rigid hardware piece which is usually attached to the adjacent wall and the curtain is pulled behind it when required. ',
      },
      { 
        question: 'Which Curtain Poles Are Suitable For Heavy Curtains?',
        answer: 'In case of heavy curtains, you should opt for large diameter rods, which have a great tendency of holding heavy curtains. Besides holding the curtains, these rods provide a smooth medium for the curtain movement and also make it easy to operate the curtains in all desired dimensions. ',
      },
      { 
        question: 'What’s The Point Of Curtain Brackets?',
        answer: 'Curtain brackets help to keep the curtains in place over a curtain rod. This makes it easy to move the curtains in all directions. If you’re opting for more than one element on a curtain rod, such as blinds, you should make use of long and extended brackets as they will make the job easier. ',
      },
      
    
  ];
  

  return (
    <div>
      <Header logo='/static/images/logo.png'/>

      <ServiceBanner imageUrl="/static/images/ServiceBanner.jpg"/>
      <ContentSection2
        image='/static/images/Curtain-Accessories.jpg'
        heading="Curtain Accessories - Enhance Your Window Treatments in Dubai        "
        text="Curtain Accessories by Closing Curtain is the remarkable compilation of curtain must-haves and those wonderful additions that will bring about a notably beautiful version of your curtains. These curtain rods and accessories serve as the most glorious enhancement of your curtains, while also making them a lot more functional too.         "
        h31="Available Varieties        "
        h31text="These include curtain rods, hooks, rings, tapes, poles, rails, tiebacks, and various other types of embellishing elements        "
        h32="Endless Benefits        "
        h32text="These accessories help in the perfect and smoothest operating of curtains and also to maximally enhance their beauty        "
        />

        <SaleSection
                text="10% Off Window Curtains and Blinds online - Sale End Today"
                />
        
        <ContentOnly
        heading="Enhance Your Window Treatments with Curtain Accessories        "

        text1={<p>  These ravishing elements will let you make the most out of your <Link 
        className='text-decoration-none text-danger fw-bold' href='home-curtains'> window treatments </Link> in the first place. They 
        help in increasing the work efficiency of the curtains and also to secure them in the right way. This makes them a crucial 
        element for curtains that are subjected to higher usage, such as Luxury Commerical Curtains.
</p>}
        
        text2={<p>
            Our classy looking curtain rods and accessories can be segregated into functional types and the ornamental versions. This way, 
            it will become a lot easier for you to have a more specific and wise selection, according to your requirements. As for 
            the curtain essentials, these include rods, poles, hooks, rings, rails, tracks, and clips.
            </p>}

        text3={<p>
                All of this curtain hardware is primarily important because it provides a ground for curtain installation and in most 
                cases is extremely crucial for the suspension, orientation, or putting together of nearly all types of curtains, such as 
                <Link className='text-decoration-none text-danger fw-bold' href='linen-curtains'> Insulating Linen Curtains. </Link> Next 
                comes those ornamental Curtain Accessories that serve as the post-styling and are more of adornment factors for the curtains. 
            </p>}

        text4={<p>
            These accessories are equally significant too, since they let you enjoy a proper and totally effortless working of your curtains.
             With the help of these accessories, you can create different beautiful effects from your curtains such as draping, layering, 
             pleating, folding, bindings, or even the sideways folding of the curtains. Also. they play a vital role in all styles of 
             curtain headings.
            </p>}

        
        />
        <ProjectSection items={items}/>

        <ContentService1
        image='/static/images/Closing-Curtain-233.jpeg'
        heading="What Difference Do The Curtain Accessories Make?        "
        text={<p>
            These are the legit must-haves that not only increase the functionality of your curtains but also make them stand out in a 
            reasonably captivating manner. These decors as well as <Link className='text-decoration-none text-danger fw-bold' 
            href='curtain-tap'> functional accessories</Link> work as the icing on the cake, making your curtains work even more 
            smoothly, such as the <Link className='text-decoration-none text-danger fw-bold' href='curtain-rings' > Curtain Rods</Link>.
            </p>}
        text1={<p>
            With the help of these essentials, you can ensure the fact that your curtains get the right alignment, the one which is at an 
            adequate distance from the surrounding stuff. 
            </p>}
            text2={<p>
                Our quality curtain hardware provides support to the curtains and diminish the likelihood of their entangling with 
                anything in contact, thus securing them for long.<br/> <br/>

                Also, you can have an alteration in the existing appearance or profile of your curtains, if you don’t like the present one. 
                All you need to do is make a smart use of our chic Curtain Accessories.
            </p>}
        />

        <ServiceGallery
        heading="Explore Our Magnificent Curtain Gallery        "
        images={galleryImages}
        />
        <ContentOnly
        heading="Our Extensive Lineup Of Quality Curtain Accessories Dubai        "

        text1={<p>We’ve got the vastest ranges of both ornamental and purposeful curtain essentials, exclusively designed to effectively meet all the curtain requirements. And in addition to shopping from the available stuff, you can also request the custom creation of your desired items with ultimate perfection and cheap rates from us.

            
</p>}
        text2={<p>Here’s a brief compilation of the quality window curtain hardware we provide. </p>}
        />
        <ContentService6
        image="/static/images/Curtain-Rods.jpg"
        heading="Curtain Rods"
        text={<p>
          Otherwise known as curtain poles, these rods function for providing a firm canvas for a smooth and trouble-free curtain movement. 
          You can have them in various finished versions from our shops and can get both minimalist and detailed decorative options.


        </p>}
        />
        <ContentService7
        image="/static/images/Curtain-Tapes.jpg"
        heading="Curtain Tapes "
        text={<p>
          Curtain tapes are meant for holding the curtain draping or pleat(s), essentially creating different curtain heading styles and 
          they are widely used with all luxury curtain ideas. You can give a whole new look to your old and boring curtains with the classy, 
          eye-catching patterns created by these useful tapes. 
        </p>}
        />
        <ContentService6
        image="/static/images/Curtain-Rings.jpg"
        heading="Curtain Rings         "
        text={<p>
          Mostly used with Eyelet Window Curtains, these rings come in different sizes, depending on the diameter or the curtain rod or 
          pole. These rings not just help in the smooth movement of the curtain panel but also make it really easy to install nearly all 
          types of curtains.

        </p>}
        />
        <ContentService7
        image="/static/images/Curtain-Hooks.jpg"
        heading="Curtain Hooks "
        text={<p>
          These curtain hooks serve the primary purpose of holding the curtain panel onto the curtain rod, essentially preventing any 
          displacements. They simply need to be hooked over the curtain rod and their functionality is similar to that of the curtain 
          rings, except for the manner of fitting.
        </p>}
        />
        <ContentService6
        image="/static/images/Tiebacks.jpg"
        heading="Tiebacks         "
        text={<p>
          Probably the most used curtain decorative accessory, our quality tiebacks can instantly glam up any and every curtain look, 
          thanks to their versatility. You can pair these ritzy tiebacks with any curtains of your choice, however they look exceptionally 
          best with luxury curtain styles. 
        </p>}
        />
        
        <ContentService2
        heading="Get Your Curtains The Expert Accessorizing From Us"
        text={<p>
            Our finest quality accessories for curtains will notably change the look as well as the working of your curtains, making them 
            a lot more favorable for you. With that said, we’ve also got you the entire skill set of fitting and attachment of these 
            accessories and essentials with maximum proficiency. This way, we ensure bringing about the most useful version of your curtains. 

            </p>}
        text1={<p>
                These Curtain Accessories addition and fitting treatments are not just super seamless and quick but also are absolutely 
                timeless, too. You can significantly make your curtains last long with this adept treatment. Extreme affordability is 
                another notable aspect of our services along with the best cost-effectivity as well. Just give us a call and get your 
                required curtain accessorizing services booked today!


            </p>}
        image="/static/images/Luxury-home-curtains.jpg"
        />

        <ContentService
        heading="We Are The First-rate Suppliers Of Curtain Accessories Dubai        "
        text={<p>
            <Link className='text-decoration-none text-danger fw-bold' href='/'>Closing Curtain</Link> brings you the trendiest and the 
            widest collections of accessories for curtains. You’re meant to find any and every of your required elements within these e
            xtensive ranges and hence can easily make the most out of your fabricated window treatments. Whether you’re opting for s
            omething functional or simply want an ornamental uplifting for your curtains, we’ve totally got you covered at every point.


            </p>}
        text1={<p>
            Our Curtain Accessories Dubai feature the finest build quality and turn out to be impressively long-lasting. Besides, 
            they will make your curtains stay a lot more durable, as well. So do reach out to us for selecting the best accessories 
            for your curtains and make them a lot more outstanding!
            </p>}
             
        image="/static/images/Amazing-home-curtains.jpg"
        />

        <TestimonialsService heading="Testimunal" subHeading="How Our Happy Clients Talk About Us" testimonials={testimonials1}/>
        <FAQsSection
        heading="FAQs (Frequently Asked Questions)"
        faqsData={faqsData}
        />
       
        <Footer/>
    </div>
  );
};

export default HomeCurtains;
