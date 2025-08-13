import { useEffect } from 'react';

const SEOHead = ({ 
  title, 
  description, 
  keywords, 
  canonical, 
  ogImage, 
  ogType = "website",
  structuredData 
}) => {
  const defaultTitle = "Ashlytics - Web Development & Mobile App Development Services";
  const defaultDescription = "Transform your business with cutting-edge web and mobile app development services. Ashlytics delivers exceptional digital solutions that drive growth and exceed expectations.";
  const defaultKeywords = "web development, mobile app development, e-commerce development, React Native, Flutter, iOS development, Android development, website design, digital transformation, Mumbai, India";
  const defaultCanonical = "https://ashlytics.com/";
  const defaultOgImage = "https://ashlytics.com/logo.png";

  const finalTitle = title || defaultTitle;
  const finalDescription = description || defaultDescription;
  const finalKeywords = keywords || defaultKeywords;
  const finalCanonical = canonical || defaultCanonical;
  const finalOgImage = ogImage || defaultOgImage;

  useEffect(() => {
    // Update document title
    document.title = finalTitle;
    
    // Update meta tags
    const updateMetaTag = (name, content) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    const updatePropertyMetaTag = (property, content) => {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Update primary meta tags
    updateMetaTag('title', finalTitle);
    updateMetaTag('description', finalDescription);
    updateMetaTag('keywords', finalKeywords);
    
    // Update canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', finalCanonical);
    
    // Update Open Graph tags
    updatePropertyMetaTag('og:type', ogType);
    updatePropertyMetaTag('og:url', finalCanonical);
    updatePropertyMetaTag('og:title', finalTitle);
    updatePropertyMetaTag('og:description', finalDescription);
    updatePropertyMetaTag('og:image', finalOgImage);
    updatePropertyMetaTag('og:site_name', 'Ashlytics');
    updatePropertyMetaTag('og:locale', 'en_US');
    
    // Update Twitter tags
    updatePropertyMetaTag('twitter:card', 'summary_large_image');
    updatePropertyMetaTag('twitter:url', finalCanonical);
    updatePropertyMetaTag('twitter:title', finalTitle);
    updatePropertyMetaTag('twitter:description', finalDescription);
    updatePropertyMetaTag('twitter:image', finalOgImage);
    
    // Add structured data if provided
    if (structuredData) {
      let script = document.querySelector('script[type="application/ld+json"]');
      if (!script) {
        script = document.createElement('script');
        script.setAttribute('type', 'application/ld+json');
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(structuredData);
    }
  }, [finalTitle, finalDescription, finalKeywords, finalCanonical, finalOgImage, ogType, structuredData]);

  // Return null since we're not rendering anything
  return null;
};

export default SEOHead;
