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
import Footer from '@/components/Footer';
import ServiceBanner from '@/components/ServiceBanner';
import ProjectSection from '@/components/ProjectSection';
import ContentService2 from '@/components/ContentService2';
import FAQsSection from '@/components/FAQsSection';

const CurtainRings = () => {
  const galleryImages = [
    '/static/images/curtain-rings-3.jpg',
    '/static/images/curtain-rings-4.jpg',
    '/static/images/curtain-rings-5.jpg',
    '/static/images/curtain-rings-6.jpg',
    '/static/images/curtain-rings-7.jpg',
    '/static/images/curtain-rings-8.jpg',
  ];
  const faqsData = [
    { 
      question: 'How Many Curtain Rings Are Required For Curtains?',
      answer: 'As per the industry standards, you’ll need around 3 to 4 curtain rings per foot width of your curtain panels. Taking this easy criteria into account, you can easily purchase the required number of rings for curtains. Besides, buying a couple of extra ones is always a favorable idea, in case you happen to lose one or have any incorrect estimates. ' 
    },
    { 
        question: 'How To Ensure A Perfect Gliding For The Curtain Rings?',
        answer: 'Spraying the curtain pole or track with a commercial dry silicone spray is one of the most useful ways for achieving the smoothest movements for your curtains. The silicon spray will address any of the rod or pole imperfections, providing a smooth and hurdle-free surface for the curtain rings to glide on, without causing any trouble. ' 
      },
      { 
        question: 'Which Is The Best Curtain Ring Choice?',
        answer: 'A metal decorative rustproof ring is one of the most suitable choices for literally any kind of curtains. That’s because metal rings can easily provide the right grip for even the heaviest curtains and aren’t likely to go bad at any point of the usage. Besides, they generally come in stylish varieties, so you won’t need to worry about ornamental factors, either. ' 
      },
      { 
        question: 'Are Curtain Rings Supposed To Be Visible?',
        answer: 'That’s totally a matter of personal choice in the first place and if you’re concerned about the appearance of your curtains, you can try various ideas in this regard. Clip-on curtain rings are a good choice to consider since they are not visible. Alternatively, you can try hanging your curtains at higher points so that the rings aren’t visible. Another idea is to make use of decorative rings so that they don’t appear unattractive at all. ' 
      },
      { 
        question: 'How Close Should I Keep My Curtain Rings?',
        answer: 'As a thumb rule, your curtain rings should be four inches away from each other, in order to create a nice look of the overall curtain profile. Besides, this also ensures a smoother movement for each curtain panel. Moreover, such a distance of the curtain rings is also helpful for creating various drapery styles and pleat designs.' 
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

      <ServiceBanner imageUrl="/static/images/ServiceBanner.jpg"/>

      <ContentSection2
        image='/static/images/curtain-rings-9.jpg'
        heading="Curtain Rings - Stylish Accessories for Your Curtains in Dubai"
        text="Closing Curtain presents to you the best of all curtain accessories, i.e. Curtain Rings Dubai. These amazing rings for 
        curtains serve as a suspension essential for the curtains, holding them securely within the place, while also making their 
        entire beauty depict really well, too.        "
        h31="Construction"
        h31text="Made from sublime quality Wood, Plastic, Metal, or Aluminium and available within versatile designs and size options."
        h32="Working"
        h32text="These rings work by providing the right suspension to the curtains and ensuring their smooth movement."
        />

        <ProjectSection items={items} />

        <ContentOnly
        heading="Stylish Curtain Rings for Perfect Curtain Arrangements"

        text1={<p>Curtain pole rings or simply rings for curtains have their prime significance in a number of ways. They do make a huge 
          difference and you’re meant to benefit a lot from that, as well. These rings provide a hurdle-free and totally effortless 
          medium for both commercial and <a className='text-decoration-none text-danger fw-bold' href='home-curtains'> residential curtains 
          </a> to move, whenever you need to have them opened or closed.
          </p>}
        
        text2={<p>This way, it becomes much more convenient to have the desired movement of curtains as well as to control the amount of 
          light and air passage. These rings make the curtain installation extremely easy and timeless, plus super secure, too. When you 
          have these drapery rings or Curtain Rings Dubai, then all you need to do is to have the metal pins (present at the back of the 
          curtain/drapery) attached to the rings. Afterwards, you can simply have the curtain installation on the 
          <a className='text-decoration-none text-danger fw-bold' href='curtain-rods'> Curtain Rods </a>. 
          </p>}

        text4={<p>The curtain pole rings are designed to ensure the right formation of the curtain pleats, similar to the working of 
          <a className='text-decoration-none text-danger fw-bold' href='curtains-taps'> curtain tapes </a> and you can also create several curtain draping designs with the help of these rings. Moreover, the curtain can be easily folded into pleats, pinch pleats, goblet pleats, box pleats, pencil pleats, and many other creative styles, this way. 

          </p>}

        
        />

        <SaleSection
        text="10% Off Window Curtains and Blinds online - Sale End Today"
        />
        <ContentService1
        image='/static/images/curtain-rings-collection-.jpg'
        heading="Where To Use Curtain Rings?"
        text={<p>Our all-purpose rings for curtains come within extensive designs, therefore you get a vast canvas to make the perfect 
          use of your aesthetic sense and beautify your curtains. Also, for the purpose of major segregation, these ritzy rings can be 
          distinguished on the basis of visibility. You can go for the clip-on option if you don’t want the rings to show.
          </p>}
        text2={<p>
          Adding to that, there are many other options available which appear to be extremely attractive and well-synced with your curtains. 
          These include curtain metal rings(a versatile choice that goes well with all curtains), curtain shower rings (used for bathrooms 
          and shower stalls), <a className='text-decoration-none text-danger fw-bold' href='eyelet-curtains'>curtain eyelet</a> rings, 
          and Curtain Rings with hooks. You can use these chic rings for all your desired type of curtains and draperies and add a lot 
          of elegance to your places.


        </p>}
        />

        

        <ServiceGallery
        heading="Check Out Our Amazing Ring Varieties"
        images={galleryImages}
        />

        <ContentService
        heading="How Our Quality Curtain Rings Make A Difference"
        text={<p>This exquisite quality hardware is particularly designed to bring about major comfort within your lifestyle and to make 
          your window treatment handling maximally easier for you. These rings work as a legit curtain essential and are widely used with 
          nearly all types of curtains Besides, they provide you with the flexibility of creating all your desired curtain heading styles, 
          particularly in the case of luxury curtains.<br/> Also, these rings work wonders for amplifying the beauty of your favorite curtains, making them appear the most 
          eye-catching. Besides, if you seek some functional purposes from your window treatments, such as 
          <a className='text-decoration-none text-danger fw-bold' href='blackout-curtains'> light-blockage</a> or in case you have 
          <a className='text-decoration-none text-danger fw-bold' href='sheer-curtains'> light-filtering drapes </a>, then these curtain 
          rings will make this factor the easiest for you, 
          by providing smooth and <a className='text-decoration-none text-danger fw-bold' href='electric-curtains'> time-saving curtain</a>
           movements.
          </p>}
        
        image="/static/images/Quality-Curtain-Rings-Make-A-Difference-1.jpg"
        />
        <SaleSection
        text="10% Off Window Curtains and Blinds online - Sale End Today"
        />

        <ContentService2
        heading="Have Our Remarkable Curtain Rings Dubai Installation Services"
        text={<p>These <a className='text-decoration-none text-danger fw-bold' href='curtain-accessories'>quality curtain accessories</a>  
        have their major cruciality in being the primary curtain must-haves. With that said, we’ve got you our expert-grade services 
        for the right fitting and organization of these rings, so that your overall curtain profile turns out to be the most attractive. 
        Not to mention the obvious advantage that you can enjoy a really smooth and trouble-free curtain handling this way. 
          </p>}
        text1={<p>Our premium-grade Curtain Rings Dubai Fitting Services are a great idea to make your 
          <a className='text-decoration-none text-danger fw-bold' href='office-curtains'> curtain treatment </a> a lot more useful 
          for you. Besides, these services will also save you from the unacceptable outcomes of DIY stitching and fittings of the rings. 
          So do ensure flawlessness at every step of your upcoming curtain installation projects with our quality, affordable and 
          long-term effective services. 

          </p>}
        image="/static/images/Modern-curtains-rings.jpg"
        />
       

        <ContentService
        heading="We Are The Top-tier Suppliers Of The Best Accessories For Curtains"
        text={<p>When <a className='text-decoration-none text-danger fw-bold' href='/'> choosing Closing Curtain </a> for any and every 
        one of your home décor projects, you don’t need to be concerned about a single aspect at all. From the highest quality products 
        to the most efficient services, we ensure serving you with our timeless excellence at each and every step. This goes the same 
        for the impressive quality of our Curtain Rings Dubai with which you can notably enhance both the beauty and the functionality 
        of your curtains. 

          </p>}
        text1={<p>These incredible curtain essentials will help you deal with your curtains without any trouble. Also they’ll ensure 
          keeping all of the damaging factors (disastrous engagements, buildups, contamination) effectively away from your curtains, 
          ultimately making them a lot more favorable for you. Not to mention the easy maintenance, as well. So choose the right treatment 
          for your valued curtains and have them accentuated with our quality accessories. Give us a call today!
          </p>}
        image="/static/images/Best-curtains-ring.jpg"
        />
       
         
        <FAQsSection
        heading="FAQs (Frequently Asked Questions)"

        faqsData={faqsData}
        />

        <Footer/>
    </div>
  );
};

export default CurtainRings;
