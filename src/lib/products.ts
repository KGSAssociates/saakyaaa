export const site = {
  name: "Saakya Consolidated LLC",
  location: "New York, USA",
  addressLines: ["228 Park Ave S #858374", "New York, NY 10003", "United States"],
  email: "info@tiaproducts.com",
  phone: "+1 860-269-4918",
  phoneHref: "tel:+18602694918",
  emailHref: "mailto:info@tiaproducts.com",
  tagline: "Everyday essentials for home, pantry and growing",
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
    heading: "Commercial and everyday hygiene essentials for home and wholesale supply.",
    description: "Premium bath tissues, paper towels, pocket tissues, and car door packs.",
    image: "/products/bath-tissues.png",
    products: [
      {
        name: "Bath Tissues",
        subtype: "Home Essentials",
        description: "2 Ply • 200 sheets. 100% Virgin white paper for commercial and household use.",
        image: "/products/bath-tissues.png",
      },
      {
        name: "Paper Towels",
        subtype: "Home Essentials",
        description: "Strong, absorbent 2-ply paper towels for kitchen, hospitality, and household use.",
        image: "/products/paper-towels.png",
      },
      {
        name: "Pocket Tissues",
        subtype: "Home Essentials",
        description: "2 Ply • 15 pulls. Compact and ultra-soft on-the-go pocket tissue packs.",
        image: "/products/pocket-tissues.png",
      },
      {
        name: "Car Door Tissue Pack",
        subtype: "Home Essentials",
        description: "2 Ply • 50 sheets. Slides into your car door pouch. Soft facial tissues for everyday comfort (Sheet size: 200 mm x 200 mm).",
        image: "/products/car-door-tissue-pack.png",
      },
    ],
  },
  {
    id: "wholesome-foods",
    number: "02",
    name: "Wholesome Foods",
    shortName: "Wholesome Foods",
    heading: "Naturally dried tropical fruits and pantry staples.",
    description: "Premium dehydrated fruits and nutrient-dense traditional grains for wholesale and retail.",
    image: "/products/dehydrated-mango.png",
    products: [
      {
        name: "Dehydrated Jack Fruit",
        subtype: "Dehydrated Fruit",
        description: "3.5 oz (100 gm). Ready to eat pack. Naturally sweet and fiber-rich tropical jackfruit.",
        image: "/products/dehydrated-jackfruit.png",
      },
      {
        name: "Dehydrated Pineapple",
        subtype: "Dehydrated Fruit",
        description: "3.5 oz (100 gm). Ready to eat pack. Sweet, tangy tropical dehydrated pineapple slices.",
        image: "/products/dehydrated-pineapple.png",
      },
      {
        name: "Dehydrated Banana Coins",
        subtype: "Dehydrated Fruit",
        description: "3.5 oz (100 gm). Ready to eat pack. Crisp, naturally sweet dehydrated banana coins.",
        image: "/products/dehydrated-banana-coins.png",
      },
      {
        name: "Dehydrated Mango",
        subtype: "Dehydrated Fruit",
        description: "3.5 oz (100 gm). Ready to eat pack. Premium dried mango slices preserving tropical color and taste.",
        image: "/products/dehydrated-mango.png",
      },
      {
        name: "Dehydrated Lime",
        subtype: "Dehydrated Fruit",
        description: "1.76 oz (50 gm) pack. Aromatic dried lime slices for tea infusions, beverages, and culinary accents.",
        image: "/products/dehydrated-lime.png",
      },
      {
        name: "Red Rice",
        subtype: "Pantry Staples",
        description: "11 lb (5 kg) • 2.20 lb (1 kg). Wholesome, nutrient-dense traditional Sri Lankan red rice.",
        image: "/products/red-rice.png",
      },
    ],
  },
  {
    id: "coconut-range",
    number: "03",
    name: "Coconut Range",
    shortName: "Coconut Range",
    heading: "Pure organic coconut products made from fresh Sri Lankan coconuts.",
    description: "Certified organic coconut milk, rich cream, and instant spray-dried coconut milk powder.",
    image: "/Organic Coconut Milk and Cream Duo.png",
    products: [
      {
        name: "Coconut Milk Powder",
        subtype: "Coconut Range",
        description: "10.52 oz (300 gm). Fresh coconut milk powder made from 100% Sri Lankan coconuts. Tasty, thick & creamy.",
        image: "/products/coconut-milk-powder.png",
      },
      {
        name: "Coconut Milk",
        subtype: "Coconut Range",
        description: "13.5 FL OZ (400 ml). Certified USDA Organic coconut milk. Free from GMO and artificial preservatives.",
        image: "/products/coconut-milk.png",
      },
      {
        name: "Coconut Cream",
        subtype: "Coconut Range",
        description: "13.5 FL OZ (425 g). Certified USDA Organic rich coconut cream for culinary, dessert, and beverage preparations.",
        image: "/products/coconut-cream.png",
      },
    ],
  },
  {
    id: "ceylon-cinnamon",
    number: "04",
    name: "Ceylon Cinnamon",
    shortName: "Ceylon Cinnamon",
    heading: "True Ceylon cinnamon quills and ground powder.",
    description: "Authentic pure Ceylon cinnamon sourced from Sri Lanka for culinary, beverage, and retail supply.",
    image: "/products/cinnamon-sticks.png",
    products: [
      {
        name: "Cinnamon Sticks",
        subtype: "Ceylon Cinnamon",
        description: "Ceylon Cinnamon. 0.75 oz (21.2 gm). Pure Ceylon cinnamon quills for culinary and commercial spice requirements.",
        image: "/products/cinnamon-sticks.png",
      },
      {
        name: "Cinnamon Powder",
        subtype: "Ceylon Cinnamon",
        description: "Ceylon Cinnamon Ground. 2.37 oz (67 gm). Finely milled authentic Ceylon cinnamon powder.",
        image: "/products/cinnamon-powder.png",
      },
    ],
  },
  {
    id: "growing-solutions",
    number: "05",
    name: "Growing Solutions",
    shortName: "Growing Solutions",
    heading: "Horticultural growing media for nursery, greenhouse, and agricultural use.",
    description: "Compressed natural coco peat bricks and heavy-duty coco coir grow bags.",
    image: "/products/coco-peat-bricks.png",
    products: [
      {
        name: "Coco Peat Bricks",
        subtype: "Growing Solutions",
        description: "1 lb (0.45 kg) • 2.20 lb (1 kg) • 11 lb (5 kg). Compressed natural coco peat growing medium.",
        image: "/products/coco-peat-bricks.png",
      },
      {
        name: "Grow Bags",
        subtype: "Growing Solutions",
        description: "From 1 Gallon to 100 Gallons. Premium coco coir grow bags for horticultural and greenhouse cultivation.",
        image: "/products/grow-bags.png",
      },
    ],
  },
  {
    id: "ceylon-tea",
    number: "06",
    name: "Ceylon Tea",
    shortName: "Ceylon Tea",
    heading: "World-renowned pure Ceylon tea blends.",
    description: "Thurson brand authentic Ceylon tea in tea bags and loose tea leaves.",
    image: "/products/ceylon-tea.png",
    products: [
      {
        name: "Ceylon Tea",
        subtype: "Ceylon Tea",
        description: "Thurson Brand. Tea Bags and Loose Tea Leaves. World-renowned pure Ceylon tea for retail and food service inquiries.",
        image: "/products/ceylon-tea.png",
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