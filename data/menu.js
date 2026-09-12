// EDIT THIS FILE whenever you want to change names, prices, descriptions or images.
// Put new pictures in /public/images and use paths such as "/images/chicken-biryani.jpg".

export const menuItems = [
  {
    id: 1,
    name: "Chicken Dum Biryani",
    category: "Biryani",
    description: "Aromatic basmati rice layered with homestyle spiced chicken.",
    price: 18,
    image: "/images/banner.jpeg",
    available: true
  },
  {
    id: 2,
    name: "Vegetable Biryani",
    category: "Vegetarian",
    description: "Fragrant basmati rice cooked with vegetables and traditional spices.",
    price: 15,
    image: "/images/banner.jpeg",
    available: true
  },
  {
    id: 3,
    name: "Chicken Curry",
    category: "Curries",
    description: "Slow-cooked homestyle chicken curry prepared fresh to order.",
    price: 16,
    image: "/images/banner.jpeg",
    available: true
  },
  {
    id: 4,
    name: "Dal Tadka",
    category: "Vegetarian",
    description: "Comforting yellow lentils finished with a fragrant tempering.",
    price: 12,
    image: "/images/banner.jpeg",
    available: true
  },
  {
    id: 5,
    name: "Family Meal Pack",
    category: "Meal Packs",
    description: "A convenient family meal. Contact us on WhatsApp for the current selection.",
    price: 45,
    image: "/images/banner.jpeg",
    available: true
  },
  {
    id: 6,
    name: "Chapati Pack",
    category: "Breads",
    description: "Fresh homemade soft chapatis. Pack quantity can be confirmed on WhatsApp.",
    price: 10,
    image: "/images/banner.jpeg",
    available: true
  },

  {
  id: 7,
  name: "Apricot Delight",
  category: "Desserts",
  description:
    "A rich, creamy and fruity homemade apricot dessert prepared with premium ingredients.",
  price: 7.99,
  image: "/images/apricot-delight.jpg",
  available: true
}
];

export const business = {
  name: "Homemade Masala Kitchen",
  tagline: "Where every meal feels like home.",
  heroHeading: "Fresh homemade Indian food, prepared to order",
  heroText:
    "Authentic flavours, fresh ingredients and convenient pickup or delivery in selected Sydney suburbs.",
  // Use country code without +, spaces or brackets. Example Australia: 61412345678
  whatsappNumber: "61402274920",
  email: "orders@homemademasalakitchen.com",
  phoneDisplay: "0400 000 000",
  serviceArea:
    "Parramatta, Harris Park, Granville and selected nearby Sydney suburbs",
  orderNotice:
    "Please place orders at least 24 hours in advance. Availability is confirmed through WhatsApp."
};
