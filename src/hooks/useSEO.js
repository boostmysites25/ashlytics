import { useEffect } from 'react';

const useSEO = ({
  title,
  description,
  keywords,
  canonical,
  ogTitle,
  ogDescription,
  ogImage,
  ogUrl,
  twitterTitle,
  twitterDescription,
  twitterImage,
  structuredData,
  noindex = false
}) => {
  useEffect(() => {
    // Update document title
    if (title) {
      document.title = title;
    }

    // Update meta description
    if (description) {
      updateMetaTag('name', 'description', description);
    }

    // Update meta keywords
    if (keywords) {
      updateMetaTag('name', 'keywords', keywords);
    }

    // Update canonical URL
    if (canonical) {
      updateLinkTag('canonical', canonical);
    }

    // Update Open Graph tags
    if (ogTitle) {
      updateMetaTag('property', 'og:title', ogTitle);
    }
    if (ogDescription) {
      updateMetaTag('property', 'og:description', ogDescription);
    }
    if (ogImage) {
      updateMetaTag('property', 'og:image', ogImage);
    }
    if (ogUrl) {
      updateMetaTag('property', 'og:url', ogUrl);
    }

    // Update Twitter tags
    if (twitterTitle) {
      updateMetaTag('name', 'twitter:title', twitterTitle);
    }
    if (twitterDescription) {
      updateMetaTag('name', 'twitter:description', twitterDescription);
    }
    if (twitterImage) {
      updateMetaTag('name', 'twitter:image', twitterImage);
    }

    // Update robots meta tag
    if (noindex) {
      updateMetaTag('name', 'robots', 'noindex, nofollow');
    } else {
      updateMetaTag('name', 'robots', 'index, follow');
    }

    // Add structured data
    if (structuredData) {
      addStructuredData(structuredData);
    }

    // Cleanup function
    return () => {
      // Reset to default values if needed
      if (title) {
        document.title = 'Ashlytics - Web Development & Mobile App Development Services';
      }
    };
  }, [
    title,
    description,
    keywords,
    canonical,
    ogTitle,
    ogDescription,
    ogImage,
    ogUrl,
    twitterTitle,
    twitterDescription,
    twitterImage,
    structuredData,
    noindex
  ]);
};

const updateMetaTag = (attribute, name, content) => {
  let metaTag = document.querySelector(`meta[${attribute}="${name}"]`);
  if (!metaTag) {
    metaTag = document.createElement('meta');
    metaTag.setAttribute(attribute, name);
    document.head.appendChild(metaTag);
  }
  metaTag.setAttribute('content', content);
};

const updateLinkTag = (rel, href) => {
  let linkTag = document.querySelector(`link[rel="${rel}"]`);
  if (!linkTag) {
    linkTag = document.createElement('link');
    linkTag.setAttribute('rel', rel);
    document.head.appendChild(linkTag);
  }
  linkTag.setAttribute('href', href);
};

const addStructuredData = (data) => {
  // Remove existing structured data script
  const existingScript = document.querySelector('script[type="application/ld+json"]');
  if (existingScript) {
    existingScript.remove();
  }

  // Add new structured data
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);
};

export default useSEO;
