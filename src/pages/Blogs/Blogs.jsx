import React from "react";
import banner from "../../assets/images/banners/aboutus.png";
import { Link } from "react-router-dom";
import SEOHead from "../../components/common/SEOHead";

const Blogs = () => {
  const blogsPageSEO = {
    title: "Web Development & Mobile App Development Blog | Ashlytics",
    description:
      "Stay updated with the latest trends in web development and mobile app development. Read expert insights, tutorials, and industry news from Ashlytics.",
    keywords:
      "web development blog, mobile app development blog, React Native blog, Flutter blog, e-commerce development blog, technology blog Mumbai",
    canonical: "https://ashlytics.com/blogs",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Blog",
      name: "Ashlytics Blog",
      description: "Web Development & Mobile App Development Blog",
      url: "https://ashlytics.com/blogs",
      publisher: {
        "@type": "Organization",
        name: "Ashlytics",
        logo: {
          "@type": "ImageObject",
          url: "https://ashlytics.com/logo.png",
        },
      },
      blogPost: [
        {
          "@type": "BlogPosting",
          headline:
            "Essential Web Development Trends That Will Shape 2024 and Beyond",
          url: "https://ashlytics.blogspot.com/2024/12/web-development-trends-2024-future.html",
        },
        {
          "@type": "BlogPosting",
          headline:
            "Building High-Performance Progressive Web Apps: A Complete Guide",
          url: "https://ashlytics.blogspot.com/2025/01/progressive-web-apps-performance-guide.html",
        },
        {
          "@type": "BlogPosting",
          headline:
            "E-commerce Development Strategies: Creating the Perfect Online Store",
          url: "https://ashlytics.blogspot.com/2025/01/ecommerce-development-strategies-guide.html",
        },
      ],
    },
  };

  return (
    <>
      <SEOHead {...blogsPageSEO} />
      <section className="relative w-full aspect-video min-h-[60vh] max-h-[80vh]">
        <div className="absolute inset-0 h-full w-full bg-black/30 z-[-1]"></div>
        <img
          src={banner}
          className="object-cover w-full h-full absolute inset-0 z-[-2]"
          alt="Banner"
        />
        <div className="wrapper flex h-full py-[6rem] md:pt-[8rem] pb-16 items-end">
          <h1 data-aos="fade-right" className="text_xl text-white">
            Blogs
          </h1>
        </div>
      </section>
      <section className="py-14">
        <div className="wrapper space-y-[3rem]">
          <div className="space-y-2">
            <div className="h-[40vh] flex items-center justify-center">
              <h3 className="text3">No blogs found</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;
