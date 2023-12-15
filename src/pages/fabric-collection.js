import React from 'react';
import TypesSection from '@/components/TypesSections';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceBanner2 from '@/components/ServiceBanner2';

function FabricCollection() {
    const images = [];

for (let i = 1; i <= 299; i++) {
    const imagePath = `/static/images/fabric/fabric (${i}).jpg`;
    images.push(imagePath);
}

    return (
        <div>
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