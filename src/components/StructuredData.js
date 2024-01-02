import React from 'react';

const ProductSchema = ({ data }) => {
  const {
    name,
    image,
    description,
    brand,
    sku,
    mpn,
    offers,
    aggregateRating,
    review,
  } = data;

  const schemaData = {
    '@context': 'https://schema.org/',
    '@type': 'Product',
    name,
    image,
    description,
    brand,
    sku,
    mpn,
    offers: {
      '@type': 'Offer',
      ...offers,
    },
    aggregateRating,
    review,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

export default ProductSchema;
