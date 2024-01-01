// components/ProductSchema.js
import React from 'react';

const ProductSchema = ({
  name,
  image,
  description,
  brand,
  sku,
  mpn,
  offerUrl,
  priceCurrency,
  price,
  priceValidUntil,
  availability,
  itemCondition,
  aggregateRating,
  review,
}) => {
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
      url: offerUrl,
      priceCurrency,
      price,
      priceValidUntil,
      availability,
      itemCondition,
    },
    aggregateRating,
    review,
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
  );
};

export default ProductSchema;
