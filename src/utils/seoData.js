// SEO Data Configuration for Ashlytics Website

export const defaultSEO = {
  title: "Ashlytics - Web Development & Mobile App Development Services",
  description: "Transform your business with cutting-edge web and mobile app development services. Ashlytics delivers exceptional digital solutions that drive growth and exceed expectations.",
  keywords: "web development, mobile app development, e-commerce development, React Native, Flutter, iOS development, Android development, website design, digital transformation, Mumbai, India",
  canonical: "https://ashlytics.com/",
  ogImage: "https://ashlytics.com/logo.png",
  ogType: "website",
  structuredData: {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Ashlytics",
    "url": "https://ashlytics.com",
    "logo": "https://ashlytics.com/logo.png",
    "description": "Web Development & Mobile App Development Services",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Flat No. 704, Wing No. 12, Swapnapurti, Jivlapada, Thakur Village, Kandivali East",
      "addressLocality": "Mumbai",
      "addressRegion": "Maharashtra",
      "postalCode": "400101",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-7738900931",
      "contactType": "customer service",
      "email": "abc@example.com"
    },
    "sameAs": [
      "https://www.instagram.com/ash_lytics",
      "https://www.linkedin.com/company/ashlytics"
    ]
  }
};

export const pageSEO = {
  home: {
    title: "Ashlytics - Web Development & Mobile App Development Services | Mumbai",
    description: "Transform your business with cutting-edge web and mobile app development services in Mumbai. Ashlytics delivers exceptional digital solutions that drive growth and exceed expectations.",
    keywords: "web development Mumbai, mobile app development Mumbai, e-commerce development, React Native, Flutter, iOS development, Android development, website design Mumbai, digital transformation, India",
    canonical: "https://ashlytics.com/",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Ashlytics",
      "url": "https://ashlytics.com",
      "description": "Web Development & Mobile App Development Services in Mumbai",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://ashlytics.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    }
  },
  about: {
    title: "About Ashlytics - Leading Web & Mobile App Development Company | Mumbai",
    description: "Learn about Ashlytics, a leading web and mobile app development company in Mumbai. Discover our journey, expertise, and commitment to delivering exceptional digital solutions.",
    keywords: "about Ashlytics, web development company Mumbai, mobile app development company, digital transformation company, software development Mumbai, IT company Mumbai",
    canonical: "https://ashlytics.com/about-us",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Ashlytics",
      "url": "https://ashlytics.com",
      "logo": "https://ashlytics.com/logo.png",
      "description": "Leading Web & Mobile App Development Company in Mumbai",
      "foundingDate": "2024",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Flat No. 704, Wing No. 12, Swapnapurti, Jivlapada, Thakur Village, Kandivali East",
        "addressLocality": "Mumbai",
        "addressRegion": "Maharashtra",
        "postalCode": "400101",
        "addressCountry": "IN"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-7738900931",
        "contactType": "customer service",
        "email": "abc@example.com"
      }
    }
  },
  services: {
    title: "Web Development & Mobile App Development Services | Ashlytics Mumbai",
    description: "Comprehensive web development and mobile app development services in Mumbai. Custom websites, e-commerce platforms, iOS & Android apps, React Native, Flutter development.",
    keywords: "web development services Mumbai, mobile app development services, custom website development, e-commerce development, React Native development, Flutter development, iOS app development, Android app development",
    canonical: "https://ashlytics.com/services",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Web Development & Mobile App Development Services",
      "description": "Comprehensive web and mobile app development services",
      "provider": {
        "@type": "Organization",
        "name": "Ashlytics",
        "url": "https://ashlytics.com"
      },
      "serviceType": ["Web Development", "Mobile App Development"],
      "areaServed": {
        "@type": "City",
        "name": "Mumbai"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Development Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Web Development"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Mobile App Development"
            }
          }
        ]
      }
    }
  },
  contact: {
    title: "Contact Ashlytics - Web & Mobile App Development Company | Mumbai",
    description: "Get in touch with Ashlytics for web development and mobile app development services in Mumbai. Call +91-7738900931 or email us for a free consultation.",
    keywords: "contact Ashlytics, web development company contact, mobile app development contact, IT company Mumbai contact, software development contact",
    canonical: "https://ashlytics.com/contact-us",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contact Ashlytics",
      "description": "Contact information for Ashlytics web and mobile app development services",
      "mainEntity": {
        "@type": "Organization",
        "name": "Ashlytics",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Flat No. 704, Wing No. 12, Swapnapurti, Jivlapada, Thakur Village, Kandivali East",
          "addressLocality": "Mumbai",
          "addressRegion": "Maharashtra",
          "postalCode": "400101",
          "addressCountry": "IN"
        },
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "telephone": "+91-7738900931",
            "contactType": "customer service",
            "availableLanguage": "English"
          },
          {
            "@type": "ContactPoint",
            "email": "abc@example.com",
            "contactType": "customer service"
          }
        ]
      }
    }
  },
  blogs: {
    title: "Web Development & Mobile App Development Blog | Ashlytics",
    description: "Stay updated with the latest trends in web development and mobile app development. Read expert insights, tutorials, and industry news from Ashlytics.",
    keywords: "web development blog, mobile app development blog, React Native blog, Flutter blog, e-commerce development blog, technology blog Mumbai",
    canonical: "https://ashlytics.com/blogs",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Blog",
      "name": "Ashlytics Blog",
      "description": "Web Development & Mobile App Development Blog",
      "url": "https://ashlytics.com/blogs",
      "publisher": {
        "@type": "Organization",
        "name": "Ashlytics",
        "logo": {
          "@type": "ImageObject",
          "url": "https://ashlytics.com/logo.png"
        }
      }
    }
  },
  thankYou: {
    title: "Thank You - Message Received | Ashlytics",
    description: "Thank you for contacting Ashlytics. Your message has been received and our team will get back to you within 24 hours.",
    keywords: "thank you, message received, contact confirmation, Ashlytics",
    canonical: "https://ashlytics.com/thank-you",
    noindex: true,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Thank You - Message Received",
      "description": "Thank you page confirming message receipt",
      "url": "https://ashlytics.com/thank-you"
    }
  }
};

// Function to get SEO data for a specific page
export const getSEOData = (pageName, customData = {}) => {
  const baseSEO = pageSEO[pageName] || defaultSEO;
  return {
    ...baseSEO,
    ...customData
  };
};

// Function to generate service-specific SEO data
export const getServiceSEO = (serviceName, serviceDescription) => {
  return {
    title: `${serviceName} Services | Ashlytics Mumbai - Professional Development`,
    description: `Professional ${serviceName.toLowerCase()} services in Mumbai. Expert development team delivering high-quality, scalable solutions for your business needs.`,
    keywords: `${serviceName.toLowerCase()}, ${serviceName.toLowerCase()} services Mumbai, professional development, custom solutions, expert team`,
    canonical: `https://ashlytics.com/services/${serviceName.toLowerCase().replace(/\s+/g, '-')}`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": serviceName,
      "description": `Professional ${serviceName.toLowerCase()} services`,
      "provider": {
        "@type": "Organization",
        "name": "Ashlytics",
        "url": "https://ashlytics.com"
      },
      "serviceType": serviceName,
      "areaServed": {
        "@type": "City",
        "name": "Mumbai"
      }
    }
  };
};
