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

// Product image mappings for easy reference
export const productImages = {
  // Tapes & Paper Products
  'BOPP': '/images/BOPP.png',
  'masking-tape': '/images/masking-tape.jpg',
  'paper-masking-tape': '/images/paper-masking-tape.png',
  'kitchen-roll': '/images/Kitchen_Roll.jpg',
  'toilet-paper': '/images/toilet-paper.webp',
  
  // Coir Products
  'coco-peat-brick': '/images/COCOPEATBRICK.jpg',
  'coco-chips-bale': '/images/cocochipbale.jpg',
  'coco-peat-bale': '/images/COCOPEATBALE.jpg',
  'grow-bags': '/images/growbag.jpg',
  'compressed-coir-fibre': '/images/COMPRESSEDCOIRFIBREBALE.jpg',
  
  // Company
  'logo': '/images/logo3.png',

  // Food Items
  'dehydrated-jackfruit': '/food/dehydrated-jackfruit.jpg',
  'dehydrated-pineapple': '/food/dehydrated-pineapple.jpg',
  'dehydrated-banana': '/food/dehydrated-banana.jpg',
  'dehydrated-mango': '/food/dehydrated-mango.jpg',
  'coconut-cream': '/food/coconut-cream.jpg',
  'virgin-coconut-oil': '/food/virgin-coconut-oil.jpg',
  'desiccated-coconut': '/food/desiccated-coconut.jpg',
  'banana-peel-powder': '/food/banana-peel-powder.jpg',
  'cinnamon-sticks': '/food/cinnamon-sticks.jpg',
  'cinnamon-powder': '/food/cinnamon-powder.jpg',
};