// pages/service.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from '@/components/Header'
import ServiceBanner from '@/components/ServiceBanner';

import ContentOnly from '@/components/ContentOnly';
import SaleSection from '@/components/SaleSection';
import ContentService from '@/components/ContentService';
import ServiceGallery from '@/components/ServiceGallery';
import ContentService1 from '@/components/ContentService1';
import ContentService2 from '@/components/ContentService2';
import Footer from '@/components/Footer';
import ContentService3 from '@/components/ContentService3';
import Link from 'next/link';

const BlackoutBlinds = () => {
  const galleryImages = [
    '/static/images/Blackout-Blinds-1.jpg',
    '/static/images/Blackout-Blinds-2.jpg',
    '/static/images/Blackout-Blinds-3.jpg',
    '/static/images/Blackout-Blinds-5.jpg',
    '/static/images/Blackout-Blinds-6.jpg',
    '/static/images/Blackout-Blinds-7.jpg',
  ];
  const points = ["",
    "",
    "",
    "" ]
  const faqsData = [
    { 
      question: '1. Can You See Through Blackout Blinds At Night?',
      answer: 'No, you cannot see through blackout blinds at night. As you know, blackout blinds don’t allow light to pass through them. That is the primary reason you can see through your blinds even during the day. As a result, they are the best source for maintaining privacy at your location.'
    },
    { 
      question: '2. Do Blackout Blinds Provide Privacy?',
      answer: 'Yes, blackout blinds can provide completely private space at your place. These blinds are typically made of thick fabric, which prevents light from passing through them and, as a result, block the view of your room from outside both during the day and at night.'
    },
    { 
      question: "3. What's The Difference Between Light Filtering And Blackout Blinds?",
      answer: 'The primary difference between light filtering blinds and blackout blinds is the control of light. Light filtering blinds allow a small amount of light to pass through them to create a naturally diffused environment in your place. While blackout blinds don’t allow even a single ray of light to pass through them, they can provide more privacy than light-filtering blinds.'
    },
    { 
      question: '4. Should Blackout Blinds Be Inside Or Outside Recess?',
      answer: 'Blackout blinds that are fitted outside the window recess are more durable than those fitted inside the recess. They can provide more privacy, and there are fewer chances of decolorization of those blinds fitted outside the recess. So you should fit your blackout blinds outside the recess to make them more useful.'
    },
    
  ];


  return (
    <div>
      <Header logo='/static/images/logo.png'/>

      <ServiceBanner imageUrl="/static/images/ServiceBanner.jpg"/>

        <ContentOnly

        heading="Get Complete Light Control with Blackout Blinds In Dubai"

        text1={<p>Our all-exclusive Blackout Blinds Dubai serve as the<Link href='bamboo-blinds-dubai'>finest window covering solution</Link>
         in the first place. Besides, their incredible functionality is a lot more different and advantageous than other types of blinds.
          These are the<Link href='venetian-blinds-dubai'>heavy-duty blinds</Link>  with the efficient tendency to block out majority of 
          the blazing sunlight, creating the perfect “blackout” effect. They are a great choice for both classic and contemporary homes,
           just like the versatile <Link href='wooden-blinds'>Wooden Window Blinds.</Link>

          </p>}

        text2={<p>This diminishing goes effective for all the disturbing external noises entering the room, as well. Over and above, 
          the amount of room darkening obtained from these blackout <Link href='roller-blinds-dubai'>Dubai blinds</Link> is totally controllable. You can adjust it according to your preference and can easily achieve all your desired levels of complete blacking out, room darkening, or brightening. Our Blackout Blinds Dubai features an extremely resilient and durable build quality, thus will be your serviceable barrier for years straight.



            </p>}

        text3="As for the ornamental aspect, these blinds look highly entrancing within all areas and create the most unique decor spaces. 
        They go ideally well with all kinds of decorative themes, furniture designs, and interior looks. Also, they are greatly resistant 
        to many harmful factors such as moisture, atmospheric damage, wear, and tear, etc."
        />

        <SaleSection
        text="10% Off Window Curtains and Blinds online - Sale End Today"
        />

        <ContentService
        heading="Benefits of Using Blackout Blinds in Dubai For Home & Offices"

        image="/static/images/Blinds-collection.jpg"

        text={<p>These blinds, primarily, are an amazing idea to consider for bedrooms or any other space you like to rest or spend your 
          quality time in. Talking about the bedrooms, these blinds will be the<Link href='bedroom-curtains'>most calmative element</Link> for you after prolonged and tough working hours.
          </p>}

        text1={<p>
             As they efficiently keep all the troublesome glare and sounds at bay, therefore, leave you with totally peaceful and 
             non-disruptive environments. You can easily create all of those pacifying scenarios for yourself that you’ve always adored.
              </p>}

        text2={<p>
                Besides residential utilization, these <Link href='blackout-blinds-dubai'>Blackout Blinds Dubai</Link>Blackout Blinds Dubai is 
                just perfect to consider for all the commercial spaces, meaning they make the <Link href='office-blinds'>perfect Office Blinds</Link>, too. The blacking out ability can be used in either way for area darkening or brightening. Also, their energy efficiency proves to be really beneficial for lowering energy expenses.
            </p>}
        
        />

        <ServiceGallery
        heading="Check Out Those Amazing Curtain Flaunted Interiors"
        images={galleryImages}
        />

       
        <ContentService1
        heading="Looking For A Versatile Window Treatment? Choose Our Blackout Luxury Blinds"

        image='/static/images/blackout-shades-blinds.jpg'
        
        text="Our sublime quality blackout window blinds are not just the most functional home improvement choice but come with a major 
        aesthetic significance. Their versatile design profiles make them ideally suitable for all areas, essentially an investment 
        which is meant to pay you back really well. And totally unlike the common belief, these amazing blinds not just comprise heavy, 
        bulky and dark-colored profiles, rather you can get super interesting design options for them, depending on the requirements."

        text1="Adding to that, this timeless beauty makes our Blackout Blinds Dubai a great choice for outdoor usage, creating the most 
        inviting décor statement you can ever come across. Besides, they are greatly flexible for all sorts of customizations, meaning 
        you can acquire the styling of your choice without any trouble. Just reach out to us today as we’ve got the best home ornamentation
         ideas for you!"

        />
        
        <ContentService2
        heading="Choose Our Adept Installation Services For Blackout Blinds Dubai"

        image="/static/images/Modern-blackout-blinds.jpg"

        text={<p>
              Our expert-grade services for the blinds installation will give rise to the most presentable looking versions of your places. 
              Not to mention the most functional ones too. Our quality services offer the major advantage of 
              <Link href='roman-blinds-dubai'>beautifying the surroundings</Link>  as well, in addition to, of course the bind fitting. You can 
              consider these services for all of the commercial spaces, considering the maximum extent of proficiency. </p>}


        text1={<p>Over and above, our Blackout Blinds Dubai Fitting Services are completely cost-effective too, ensuring the fact that 
          you get the best value for your money. Plus, you’ll find these services incredibly timeless for years on end as the favorable 
          outcomes will keep serving you all along.

          </p>}
        
        />

        

        <ContentService3

        leftSectionTitle="Our Blackout Blinds Dubai Feature The Most Promising Quality"

        leftSectionParagraph1={<p><Link href='/'>Closing Curtain</Link> is the renowned platform where you’re meant to come across the most 
        excellent quality regarding both the products and the services. This goes particularly true for our finest standard blackout 
        window blinds that will make both your residential and commercial interiors the most delightful for you to be around. Not to 
        mention that this comfort provision is extremely long-lasting too. 
        </p>}

        leftSectionParagraph2="You can have the placement of our all-purpose Blackout Blinds Dubai next to a number of different 
        spots such as sliding doors, patio doors and glass panels. These blinds are not just super serviceable but also very cost-effective, 
        as well. Besides, all the pricings are totally affordable too, yet without any compromise on the blind quality. So just request a 
        quote and shop for your favorite blinds online today!"

        faqHeading="FAQs (Frequently Asked Questions)"

        faqsData={faqsData}

        />
        
        <Footer/>
    </div>
  );
};

export default BlackoutBlinds;
