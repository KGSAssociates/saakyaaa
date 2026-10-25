import Image from 'next/image';

interface ProductImageProps {
  src?: string;
  alt: string;
  fallback?: string;
  className?: string;
  width?: number;
  height?: number;
}

export default function ProductImage({ 
  src, 
  alt, 
  fallback, 
  className = "w-full h-48 object-cover rounded-lg",
  width = 400,
  height = 300 
}: ProductImageProps) {
  // For now, we'll use a placeholder. You can add actual images to the public folder later
  const placeholderSrc = src || fallback || `/api/placeholder/${width}x${height}?text=${encodeURIComponent(alt)}`;
  
  return (
    <div className="relative overflow-hidden">
      <div className={`bg-gray-200 flex items-center justify-center ${className}`}>
        {src ? (
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className={className}
            onError={(e) => {
              // Fallback to placeholder if image fails to load
              const target = e.target as HTMLImageElement;
              target.src = `data:image/svg+xml;base64,${btoa(`
                <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
                  <rect width="100%" height="100%" fill="#f3f4f6"/>
                  <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="16" fill="#6b7280" text-anchor="middle" dy=".3em">
                    ${alt}
                  </text>
                </svg>
              `)}`;
            }}
          />
        ) : (
          <div className="text-center p-4">
            <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-2 flex items-center justify-center">
              <span className="text-2xl text-blue-600">📦</span>
            </div>
            <p className="text-gray-500 text-sm font-medium">{alt}</p>
            <p className="text-xs text-gray-400 mt-1">Image placeholder</p>
          </div>
        )}
      </div>
    </div>
  );
}

// Product image mappings for easy reference (TIA Products catalog)
export const productImages = {
  // Tissue & Hygiene
  'bath-tissues': '/products/bath-tissues.png',
  'paper-towels': '/products/paper-towels.png',
  'pocket-tissues': '/products/pocket-tissues.png',
  'car-door-tissue-pack': '/products/car-door-tissue-pack.png',
  
  // Wholesome Foods
  'dehydrated-jackfruit': '/products/dehydrated-jackfruit.png',
  'dehydrated-pineapple': '/products/dehydrated-pineapple.png',
  'dehydrated-banana-coins': '/products/dehydrated-banana-coins.png',
  'dehydrated-mango': '/products/dehydrated-mango.png',
  'dehydrated-lime': '/products/dehydrated-lime.png',
  'red-rice': '/products/red-rice.png',

  // Coconut Range
  'coconut-milk-powder': '/products/coconut-milk-powder.png',
  'coconut-milk': '/products/coconut-milk.png',
  'coconut-cream': '/products/coconut-cream.png',

  // Ceylon Cinnamon
  'cinnamon-sticks': '/products/cinnamon-sticks.png',
  'cinnamon-powder': '/products/cinnamon-powder.png',

  // Growing Solutions
  'coco-peat-bricks': '/products/coco-peat-bricks.png',
  'grow-bags': '/products/grow-bags.png',

  // Ceylon Tea
  'ceylon-tea': '/products/ceylon-tea.png',

  // Company & Promotional
  'logo': '/images/logo3.png',
  'banner': '/Tia Tropical Product Showcase.png',
  'flyer': '/WhatsApp Image 2026-10-25 at 09.58.33.jpeg',
};