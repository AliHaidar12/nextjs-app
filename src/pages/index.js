import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import Header from 'src/components/Header'
import Banner from 'src/components/Banner'
import Services from 'src/components/Services';
import ContentSection from 'src/components/ContentSection';
import ContentSection2 from 'src/components/ContentSection2';
import GallerySection from 'src/components/GallerySection';
import ContentSection3 from 'src/components/ContentSection3';
import ContentSection4 from 'src/components/ContentSection4';
import ProjectSection from 'src/components/ProjectSection';
import TypesSection from 'src/components/TypesSections';
import ContentSection5 from 'src/components/CotentSection5';
import CotentBoxes from 'src/components/CotentBoxes';
import ContentSection6 from 'src/components/ContentSection6';
import ContentSection7 from 'src/components/ContentSection7';
import ContentSection8 from 'src/components/ContentSection8';
import ImageCarousel from 'src/components/ImageCarousel';
import ContactForm from 'src/components/ContactForm';
import TestimonialsSection from 'src/components/TestimonialsSection';
import SaleSection from 'src/components/SaleSection';
import Footer from 'src/components/Footer';


import Image from 'next/image';
 

export default function Home() {

  
  


  const testimonials = [
    {
      image: '/static/images/testimonial.png',
      rating: 5,
      message: ' Their curtains have truly perked up the whole living room of mine!',
      name: ' Maria',
    },
    {
      image: '/static/images/testimonial.png',
      rating: 5,
      message: ' The cutest curtains I had from Closingcurtain.ae had the best build quality among all others',
      name: 'Mark',
    },
    {
      image: '/static/images/testimonial.png',
      rating: 4,
      message: ' Their Living Room Curtains are of the finest quality and they enhance your room decor really well',
      name: ' David',
    },
    {
      image: '/static/images/testimonial.png',
      rating: 5,
      message: ' Their curtains have truly perked up the whole living room of mine!',
      name: ' Sareena',
    },
    {
      image: '/static/images/testimonial.png',
      rating: 5,
      message: ' The cutest curtains I had from Closingcurtain.ae had the best build quality among all others',
      name: 'Mark',
    },
    {
      image: '/static/images/testimonial.png',
      rating: 4,
      message: ' Their Living Room Curtains are of the finest quality and they enhance your room decor really well',
      name: ' David',
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
  const imagesData = [
  { src: '/static/images/icons/motorized curtains.png', alt: 'Electric Curtains', href: "/service/electric-curtains", title: "Electric Curtains" },
  { src: '/static/images/icons/blackout curtains.png', alt: 'Blackout Curtains', href: "/service/blackout-curtains", title: "Blackout Curtains"  },
  { src: '/static/images/icons/sheer curtains.png', alt: 'Sheer Curtains' , href: "/service/sheer-curtains", title: "Sheer Curtains"  },
  { src: '/static/images/icons/Soundproof-curtain.png', alt: 'Soundproof Curtains' , href: "/service/soundproof-curtains", title: "Soundproof Curtains"  },
  { src: '/static/images/icons/Linen-curtains.png', alt: 'Linen Curtains' , href: "/service/linen-curtains", title: "Linen Curtains"  },
  { src: '/static/images/icons/roman blinds.png', alt: 'Roman Blinds', href: "/service/roman-blinds-dubai", title: "Roman Blinds"  },
  { src: '/static/images/icons/window.png', alt: 'Roller Blinds', href: "/service/roller-blinds-dubai", title: "Roller Blinds"  },
  { src: '/static/images/icons/wooden-blinds.png', alt: 'wooden blinds', href: "/service/wooden-blinds-dubai", title: "Wooden Blinds"  },
  { src: '/static/images/icons/venetian-blinds.png', alt: 'venetian blinds', href: "/service/venetian-blinds-dubai", title: "Venetian Blinds"  },
];

  
  const galleryImages = [
    '/static/images/Closing-Curtain-8.jpeg',
    '/static/images/Closing-Curtain-9.jpeg',
    '/static/images/Closing-Curtain-10.jpeg',
    '/static/images/Closing-Curtain-11.jpeg',
    '/static/images/Closing-Curtain-1.jpeg',
    '/static/images/Closing-Curtain-4.jpeg',
    '/static/images/Closing-Curtain-15.jpg',
    '/static/images/Closing-Curtain-16.jpeg',
    '/static/images/Closing-Curtain-26.jpeg',
    '/static/images/Closing-Curtain-23.jpeg',
    '/static/images/Closing-Curtain-12.jpeg',
    '/static/images/Closing-Curtain-9.jpg',
  ];
  const typeImages = [
    '/static/images/Ribbon-4195-Callistus-Blackout-1.jpg',
    '/static/images/suede-4291-Callistus-Blackout-2.jpg',
    '/static/images/suede-4291-Callistus-Blackout-3.jpg',
    '/static/images/suede.jpg',
    '/static/images/suede1.jpg',
    '/static/images/suede2.jpg',
    '/static/images/suede3.jpg',
    '/static/images/suede4.jpg',
    '/static/images/suede5.jpg',
    '/static/images/suede6.jpg',
    '/static/images/suede7.jpg',
    '/static/images/suede8.jpg',
  ];

  const careouselImage = [
    '/static/images/ImageCarousel.png',
    '/static/images/ImageCarousel1.png',
    '/static/images/ImageCarousel2.png',
    '/static/images/ImageCarousel3.png',
    '/static/images/ImageCarousel4.png',
  ]
  const metaTags = [
    { property: 'title', content: 'Curtains Dubai, Top Online Curtain Shop UAE - ClosingCurtain' },
    { name: 'description', content: 'Discover more stylish Curtains Dubai At closingcurtain.ae. Choose from our wide range of curtains in Dubai with new style & color options. Visit now!' },
    { name: 'robots', content: 'index, follow' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
  ];
  return (
    <>
      <Head>
        
        {metaTags.map((tag, index) => (
        tag.property ? (
          <title key={index}>{tag.content}</title>
        ) : (
          <meta key={index} name={tag.name} content={tag.content} />
        )
      ))}
        <link rel="canonical" href="https://closingcurtain.ae/"/>
        <link rel="icon" href="/closing-curtains.png" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-TC1TYEWZPG"></script>
        <script>
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-TC1TYEWZPG');`}
        </script>
      </Head> 
      <main>
        <Header logo='/static/images/logo.png'/>

        <Banner 
        imagesData={imagesData}
        side_image='/static/images/banner.jpg'
        heading="Curtains Dubai - Best Window Treatment By Closing Curtain "
        text="Curtains Dubai are the best choice to give the perfect look to your windows. We provide premium quality Curtains in Dubai made of the finest fabrics to add luxury to your interiors. Our window coverings create a modern interior look with their attractive designs."
        text1="Our trendsetting collection of the best window curtains is the best choice for all kinds of home and office windows. Feel free to visit our showroom in Al Quoz or order curtains online in Dubai."/>
        
        <Services icon='/static/images/svgexport-2.svg'/>

        <ContentSection
        image='/static/images/Curtains_Dubai1.jpg'
        paragraph1="Finding a reliable curtain supplier in Dubai takes time and effort. You have found just an award-winning supplier of modern curtains with delivery options all over the UAE. Our showroom is located in Al Quoz, Dubai."
        paragraph2="You can call us to get the services in other states of UAE. Our team is very passionate about making every customer satisfied with the most amazing curtains."
        paragraph3="Being the leading curtain supplier, we make sure that our customers are satisfied with the curtain design, fabric thickness, and header style. To ensure this, we plan a meeting before installation to discuss needs. 
        Get the best design variety of curtains with low-cost fitting services from us."
        heading="We Are the Top Supplier of Curtains in Dubai"/>

        <ContentSection2 
        image='/static/images/eyelet-custom-curtain.jpg'
        heading="Buy Luxury Curtains In Dubai To Transform Your Space"
        text="Our finest window curtains are the most effective way to upgrade your living spaces. Their unique texture and soft fabrics bring charm and elegance to your place. We've got you the most extensive range of Curtains in Dubai, which will noticeably enhance your place's overall look and practicality."
        h31="Quality"
        h31text="We ensure the most durable build quality of our curtains. They offer the most impressive performance for many years without any damage."
        h32="Aesthetics"
        h32text="Our modern curtains in Dubai can be acquired in classic or modern designs according to your interior theme and personal design choices."
        />

        <GallerySection  images={galleryImages} 
        heading="Have A Look At Our Curtains & Blinds Projects"/>
        <ContentSection3
        mainHeading="Discover Modern Curtains in Dubai For Your Windows"
        heading="Blackout Curtains"
        text="These incredibly comforting Dark Curtains Dubai will be your ultimate saviour against jet lagging, neighbourhood noise and the piercing glare of sunlight. Such curtains are becoming our store`s best-selling in Dubai because of their insulation and heat-reducing features. You can make your room completely dark during peak hours to get peaceful sleep or focus on your work. "
        text1="There are different fabric options available for room darkening curtains in our shop. You can visit us and buy our top-quality curtains in Dubai with efficient back lining. Make your room comfortable, energy efficient, cool, and dark with our affordable blackout window curtains."
        image="/static/images/Privacy-Curtains.jpg"
        />
        <ContentSection4
        heading="Office Curtains"
        text="Combining the perks of elegance, durability and energy efficiency, our premium-grade commercial Curtains 
        Dubai bring about all the much-needed presentable beauty. Hanging the right office curtains is essential to ensure 
        a professional-looking interior space. Whether it`s a commercial office or a home workspace, we have the best range 
        of curtains for offices in Dubai that will enhance the comfort level of your office room. "
        text1="Our curtains are made with a special fabric that does not let the light enter, reducing the unwanted glare on 
        your laptop screen. This way, you can create a desirable work environment at your place by hanging out office window coverings."
        image="/static/images/yellow-office-curtain.jpeg"
        button='Buy Office Curtains'
        />
        
        <ContentSection3
        heading="Electric Curtains in Dubai"
        text="Working seamlessly over motors and high-quality batteries, our automatic curtains will save you maximum time, effort 
        and energy expenses. They do not need a lot of electricity to operate. At our store, we provide curtains in Dubai that 
        come with different types of motors. Some of them are battery-operated, and others work on home electricity.  "
        text1="There are different fabric options available for room darkening curtains in our shop. You can visit us and buy our 
        top-quality curtains in Dubai with efficient back lining. Make your room comfortable, energy efficient, cool, and dark with 
        our affordable blackout window curtains."
        image="/static/images/Blackout-Motorized-Curtain.jpg"
        backgroundColor="#1a808d"
        buttonColor="#ffffff"
        textColor="#ffffff"         
        headingColor="#ffffff"
        buttonTextColor="black"
        imagePosition="left"
        button='Buy Electric Curtains'
        />
        
        <ContentSection4
        heading="Sheer Curtains"
        text="All curtains are not made to make your place darker; some are used to create an airy environment to allow ventilation 
        in your apartment or home. We provide premium quality sheer window curtains Dubai with different fabric choices to offer 
        the desired features to our clients."
        text1="With their outstanding beauty and light-filtering functionality, these cheap yet quality drapes in Dubai make the finest 
        interior styling statement. It doesn`t matter if you have a traditional or modern interior; our white sheer window curtains will 
        enhance the ambiance of your space. Feel the soft sunlight in your home with our easy-to-main sheer drapes. "
        image="/static/images/Bedroom-Sheer-Curtain.jpg"
        button="Buy Sheer Curtains"
        />

        <ContentSection3
        heading="Home Curtains"
        text="Any home is incomplete without a versatile variety of curtains. Our Dubai home curtains collection has simple, bold, 
        elegant, and plain design options to cater to every customer`s needs. You will surely find the best curtains for your home 
        from our Dubai store. "
        text1="We provide the most mind-blowing collection of delightful and serviceable drapes for all residential settings; our 
        quality home curtains are exceptionally purposeful. They improve the aesthetics and add great functionality to your 
        apartment or villa. Call us now to avail yourself of the free measurement of your home windows."
        image="/static/images/Home-curtain.jpg"
        button='Buy Home Curtains'
        />
        <ContentSection4
        heading="Silk Curtains Dubai"
        text="Silk curtain fabric has always been a great choice for modern or classic interior spaces. We provide silk window 
        coverings in Dubai that are made by following the highest quality standards. You will feel the sophistication of our 
        delicate curtains Dubai with their purest fabric and unique patterns. Add beauty to your window with our affordable silk curtains."
        text1="You can get these curtains in any color and design to match them with your background walls or furnishing. We aim 
        to modernize every interior with our stylish curtains in Dubai. For maximum customer satisfaction, we offer customization 
        options to design your silk curtains according to your personal design choices."
        image="/static/images/Eyelet-Silk-Curtain.jpg"
        backgroundColor="#1a808d"
        buttonColor="#ffffff"
        textColor="#ffffff"         
        headingColor="#ffffff"
        buttonTextColor="black"
        imagePosition="left"
        button='Buy Silk Curtains'
        />

        <ContentSection
        image='/static/images/Curtains_Dubai_21.jpg'
        paragraph1="You might want to buy elegant curtains with modern designs, but your budget is low. Our curtain collection 
        has high-end options to adorn every window or interior decor."
        paragraph2="We offer premium quality curtains in Dubai at very low prices to make our customers happy. Over ten years 
        of experience, we have been the first choice of many customers because of the highest quality and lowest prices."
        paragraph3="You can visit our curtain shop in Dubai to explore the latest design range of window coverings. We offer 
        special discount offers to our new customers. It doesn`t matter if you are buying curtains for homes or offices in Dubai; 
        we will provide you with the best drapes in Dubai at the most reasonable prices. Call us today to know the material and 
        design options available under your budget."
        heading="We Offer Luxury Curtains at Low Prices"
        backgroundColor="white"  // Set your desired background color
        textColor="black"  />
        <ProjectSection items={items}/>
        <SaleSection
        text="10% Off Window Curtains and Blinds online - Sale End Today"
        />

        <TypesSection heading="Choose The Best Pattern For Curtains" images={typeImages}/>
        <ContentSection5
        image="/static/images/Luxury-Motorized-Curtain.jpeg"
        text="Closing Curtain is a trustworthy provider of world-class window coverings in Dubai. All our products are processed 
        to be entirely on a budget, with which you can enjoy the perks of both comfort and affordability. Our trendiest and most 
        promisingly durable Curtains Dubai varieties work wonders a lot more than just a window treatment."
        text1="These drapes are exquisitely designed to offer the benefits of beautification and functionality so that you won`t 
        need to add any other element for these major purposes. We have 10 years of experience in this field, which makes us the 
        best curtain company in Dubai."
        heading="Celebrate Our 10 Years of Success With Our Curtain Company"
        />

        <div className="row d-flex justify-content-center align-items-center">
          <Image
            width={600}
            height={200}
            src="/static/images/review-rating-1.png"
            alt="banner"
            style={{ maxWidth: '50%' }}
            className="img-fluid decreased-width"
          />
        </div>

        <ContentSection5
        image="/static/images/new-designs-for-soundproof-curtains.jpg"
        text="In addition to the mesmerizing curtain styles, we`ve also got a whole lineup of high-quality accessories for curtains, 
        which are created for aesthetic and utility requirements. This way, you can easily make the most out of your chosen window 
        curtains in Dubai"
        text1="Using our top-quality accessories will keep your curtains functional for many years. Visit our all-exclusive curtain 
        shop in Dubai and get yourselves the home decor addition that is a major home improvement. We offer a special discount on 
        a new design collection of curtains. "
        heading="Shop Curtain Accessories At Best Curtain Shop in Dubai"
        reverseDirection={true}
        />

        <CotentBoxes
        heading="How Our Best Curtains Dubai Make A Difference"
        text=" These entirely pleasant and serviceable window curtains not just perform the window coverage job really well, but also are the most effective way to add maximum comfort and convenience to your lifestyle. "
        text1="Ahead are some of the major perks and pros of our quality curtain treatment compiled briefly:"
        boxText="A perfect climate control and more of an efficient temperature optimization is the foremost plus point of our quality window drapes, creating the most pleasant interior environments."
        boxText1="Our curtains Dubai work as a potential barrier against all the external damage, thus saving your furniture, floorings, and other interior stuff from contamination, bacterial buildup and discoloration."
        boxText2="Adding these curtains to your homes is a great way to make them well-maintained, decluttered, organized and most importantly to add a healthy and non-toxic indoor air quality."
        box1Text="Acoustic protection is another amazing advantage you get to experience, once you have our best Curtains Dubai installed in your homes and offices."
        box1Text1="These curtains are just the most foolproof way to ensure flawless privacy protection for your places, keeping all sorts of intrusions at bay, most importantly while you`re away."
        box1Text2="The decorative perspective of these curtains is yet another major perk, meaning these curtains give rise to the most harmonized, pleasing and well-organized version of your places."
        />

        <ContentSection6
        image="/static/images/eyelet-custom-curtain (1).jpg"
        heading="Hang Our Custom Curtains for Perfect Interior Contrast"
        text="When you arrive at our curtain shop in Dubai, you're meant to come across a really wide and versatile set of services. Along with modern, ready-made curtains, we provide custom-made curtains in Dubai that will exclusively add beauty to your interior space. You can also ask for customization in design, manufacturing, and hanging style. Get the desired window look with our personalized window coverings."
        />

        <ContentSection7
        image="/static/images/eyelet-custom-curtain (1).jpg"
        heading="Get Our Top-Notch Curtain Installation Services in Dubai"
        text="Our curtain company in Dubai has the best employees who can install the curtains in Dubai with perfection in a minimum time. We offer our expert curtain installation service at a very low rate to our customers. You can call us anytime to book our curtain fitting service anywhere in Dubai."
        />

        <ContentSection8
        heading="Why Choose Us to Buy Curtains in Dubai?"
        text="You need to buy the best curtains from a reliable store in Dubai. We have made a significant name by providing 
        top-quality Curtains Dubai at very affordable rates. Explore our vast curtain collection to find the best match for 
        your interior and windows."
        text1="There are different fabric options available for room darkening curtains in our shop. You can visit us and buy our top-quality curtains in Dubai with efficient back lining. Make your room comfortable, energy efficient, cool, and dark with our affordable blackout window curtains."
        image="/static/images/soundproof-office-curtains-dubai.jpg"
        />
        <ImageCarousel
        heading="Major Clients We Served"
        images={careouselImage}/>
        <ContactForm/>
        
        <TestimonialsSection
        testimonials={testimonials}/>

<div>
      {/* Your page content goes here */}
      
    </div>
        <Footer/>
      </main>

    </>
  )
}
