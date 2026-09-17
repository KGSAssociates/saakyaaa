export const site = {
  name: "Saakya Consolidated LLC",
  location: "New York, USA",
  addressLines: ["228 Park Ave S #858374", "New York, NY 10003", "United States"],
  email: "info@saakyaconsolidated.com",
  phone: "+1 (347) 542-1071",
  phoneHref: "tel:+13475421071",
  emailHref: "mailto:info@saakyaconsolidated.com",
  tagline: "Global product portfolio for wholesale and commercial inquiries",
  announcement: "Online ordering coming soon · Products currently available by inquiry",
} as const;

export type Product = {
  name: string;
  description: string;
  image: string;
  subtype?: string;
};

export type ProductCategory = {
  id: string;
  number: string;
  name: string;
  shortName: string;
  heading: string;
  description: string;
  image: string;
  products: Product[];
};

export const productCategories: ProductCategory[] = [
  {
    id: "tissue-hygiene",
    number: "01",
    name: "Tissue & Hygiene",
    shortName: "Tissue & Hygiene",
    heading: "Commercial hygiene essentials for wholesale and hospitality supply.",
    description: "Toilet paper, towels, napkins, and tissues for facilities, hospitality, and wholesale inquiries.",
    image: "/tissue/toilet-paper-hq.jpg",
    products: [
      {
        name: "Toilet Paper",
        subtype: "Hygiene",
        description: "Commercial-grade toilet paper for facilities, hospitality, and wholesale distribution.",
        image: "/tissue/toilet-paper-hq.jpg",
      },
      {
        name: "Kitchen Roll",
        subtype: "Hygiene",
        description: "Absorbent paper towels designed for foodservice and commercial kitchens.",
        image: "/tissue/kitchen-roll-hq.jpg",
      },
      {
        name: "C-Fold Towels",
        subtype: "Hygiene",
        description: "C-fold hand towels for restrooms and high-traffic facilities.",
        image: "/tissue/c-fold-towels-hq.jpg",
      },
      {
        name: "M-Fold Towels",
        subtype: "Hygiene",
        description: "M-fold towels for dispensers in hospitality and commercial washrooms.",
        image: "/tissue/m-fold-towels-hq.jpg",
      },
      {
        name: "Luncheon Napkins",
        subtype: "Hygiene",
        description: "Everyday napkins for catering, restaurants, and foodservice.",
        image: "/tissue/luncheon-napkins-hq.jpg",
      },
      {
        name: "Pocket Tissues",
        subtype: "Hygiene",
        description: "Compact pocket tissues for retail and hospitality amenity packs.",
        image: "/tissue/pocket-tissues-hq.jpg",
      },
      {
        name: "Luxury Napkins",
        subtype: "Hygiene",
        description: "Premium napkins for fine dining and hospitality settings.",
        image: "/tissue/luxury-napkins-hq.jpg",
      },
      {
        name: "Facial Tissues",
        subtype: "Hygiene",
        description: "Soft facial tissues for offices, hotels, and wholesale supply.",
        image: "/tissue/facial-tissues-hq.jpg",
      },
    ],
  },
  {
    id: "food-products",
    number: "02",
    name: "Food Products",
    shortName: "Food Products",
    heading: "Naturally sourced products for wholesale and commercial requirements.",
    description: "Tropical dehydrated fruits, coconut products, and related ingredients presented for wholesale and manufacturing inquiries.",
    image: "/food/food-items-hero.jpg",
    products: [
      {
        name: "Dehydrated Jackfruit",
        subtype: "Dehydrated Fruit",
        description: "Naturally dried tropical jackfruit for snacks and food manufacturing.",
        image: "/food/dehydrated-jackfruit.jpg",
      },
      {
        name: "Dehydrated Pineapple",
        subtype: "Dehydrated Fruit",
        description: "Premium dried pineapple for trail mixes, confectionery, and commercial production.",
        image: "/food/dehydrated-pineapple.jpg",
      },
      {
        name: "Dehydrated Banana",
        subtype: "Dehydrated Fruit",
        description: "Crisp dehydrated banana chips for snack brands and ingredient supply.",
        image: "/food/dehydrated-banana.jpg",
      },
      {
        name: "Dehydrated Mango",
        subtype: "Dehydrated Fruit",
        description: "Dried mango strips preserving color and flavor for retail and bakery use.",
        image: "/food/dehydrated-mango.jpg",
      },
      {
        name: "Coconut Cream",
        subtype: "Coconut",
        description: "Rich coconut cream for foodservice, beverage production, and manufacturing.",
        image: "/food/coconut-cream.jpg",
      },
      {
        name: "Virgin Coconut Oil",
        subtype: "Coconut",
        description: "Cold-pressed virgin coconut oil with a clean aroma for culinary markets.",
        image: "/food/virgin-coconut-oil.jpg",
      },
      {
        name: "Desiccated Coconut",
        subtype: "Coconut",
        description: "Fine-grade desiccated coconut for bakery, confectionery, and manufacturing.",
        image: "/food/desiccated-coconut.jpg",
      },
      {
        name: "Banana Peel Powder",
        subtype: "Ingredient",
        description: "Finely milled banana peel powder for nutraceutical and bakery applications.",
        image: "/food/banana-peel-powder.jpg",
      },
    ],
  },
  {
    id: "ceylon-cinnamon",
    number: "03",
    name: "Ceylon Cinnamon",
    shortName: "Ceylon Cinnamon",
    heading: "Premium Ceylon cinnamon for wholesale and commercial requirements.",
    description:
      "Ceylon cinnamon products presented for wholesale, retail, food service and commercial inquiries.",
    image: "/food/cinnamon-sticks.jpg",
    products: [
      {
        name: "Cinnamon Sticks",
        subtype: "Ceylon Cinnamon",
        description:
          "Cinnamon sticks presented for wholesale, culinary, and commercial spice requirements.",
        image: "/food/cinnamon-sticks.jpg",
      },
      {
        name: "Cinnamon Powder",
        subtype: "Ceylon Cinnamon",
        description:
          "Finely milled cinnamon powder presented for wholesale, retail, and food service inquiries.",
        image: "/food/cinnamon-powder.jpg",
      },
    ],
  },
  {
    id: "coco-peat",
    number: "04",
    name: "Coco Peat Products",
    shortName: "Coco Peat",
    heading: "Growing media solutions for horticultural and agricultural applications.",
    description: "Coco peat products available for commercial, nursery and agricultural inquiries.",
    image: "/COCOPEATBRICK.jpg",
    products: [
      {
        name: "Coco Peat Brick",
        subtype: "Coco Peat Product",
        description:
          "Compressed coco peat product presented for horticultural and commercial growing requirements.",
        image: "/COCOPEATBRICK.jpg",
      },
      {
        name: "Grow Bags",
        subtype: "Coco Peat Product",
        description:
          "Coco-based growing bags presented for nursery, greenhouse and agricultural requirements.",
        image: "/growbag.jpg",
      },
    ],
  },
];

/** Flat catalog for homepage directory — same source as Products page. */
export type CatalogProduct = Product & {
  categoryId: string;
  categoryName: string;
};

export const allCatalogProducts: CatalogProduct[] = productCategories.flatMap((category) =>
  category.products.map((product) => ({
    ...product,
    categoryId: category.id,
    categoryName: category.name,
  }))
);