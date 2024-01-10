import React from 'react';
import TypesSection from 'src/components/TypesSections';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import ServiceBanner2 from 'src/components/ServiceBanner2';
import Head from 'next/head';
function FabricCollection() {
    const images = [];

for (let i = 1; i <= 299; i++) {
    const imagePath = `/static/images/fabric/fabric (${i}).jpg`;
    images.push(imagePath);
}

    return (
        <div>
            <Head>
            <link rel="canonical" href="https://closingcurtain.ae/fabric-collection" />
            <link rel="icon" href="/closing-curtains.png" />
            </Head>
            <Header logo='/static/images/logo.png'/>

            <ServiceBanner2 imageUrl="/static/images/Closing-Curtain-121.jpeg" 
            heading="Fabric Collection - Explore Our Wide Range of Fabrics"/>
            <TypesSection
            images={images}
            showButton={false}
            heading="Fabric Collection - Explore Our Wide Range of Fabrics"/> 
            <Footer/>
        </div>
    );
}

export default FabricCollection;