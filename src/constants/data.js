import images from './images';

const wines = [
  {
    title: 'Chapel Hill Shiraz',
    price: '$56',
    tags: 'AU | Bottle',
  },
  {
    title: 'Catena Malbee',
    price: '$59',
    tags: 'AU | Bottle',
  },
  {
    title: 'La Vieillw Rose',
    price: '$44',
    tags: 'FR | 750 ml',
  },
  {
    title: 'Rhino Pale Ale',
    price: '$31',
    tags: 'CA | 750 ml',
  },
  {
    title: 'Irish Guinness',
    price: '$26',
    tags: 'IE | 750 ml',
  },
];

const cocktails = [
  {
    title: 'Aperol Sprtiz',
    price: '$20',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Dark 'N' Stormy",
    price: '$16',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Daiquiri',
    price: '$10',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Old Fashioned',
    price: '$31',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Negroni',
    price: '$26',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Outstanding Service Award',
    subtitle: 'For our dedication to providing exceptional service that goes above and beyond to ensure every guest has a memorable experience.',
  },
  {
    imgUrl: images.award01,
    title: 'Sustainability Award',
    subtitle: 'For our commitment to sustainability, using locally-sourced, organic ingredients and implementing eco-friendly practices to minimize our impact on the environment',
  },
  {
    imgUrl: images.award05,
    title: 'Best Fine Dining Restaurant',
    subtitle: 'For our overall excellence in fine dining, from the quality of our food and wine, to our service and ambiance, providing guests with an unforgettable dining experience',
  },
  {
    imgUrl: images.award03,
    title: 'Culinary Innovation Award',
    subtitle: 'For our innovative and creative approach to culinary arts, pushing the boundaries of traditional cuisine and exploring new flavors and techniques.',
  },
];

export default { wines, cocktails, awards };
