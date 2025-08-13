import banner from "../../assets/images/banners/aboutus.png";
import img1 from "../../assets/images/our-story.png";
import img2 from "../../assets/images/client-engagement-and-support.png";
import img3 from "../../assets/images/ongoing-support.png";
import img4 from "../../assets/images/Partnership Beyond Projects.png";
import { circleImg, futureGoals } from "../../content/constant";
import Testimonials from "../../components/common/Testimonials";
import ContactForm2 from "../../components/common/ContactForm2";
import SEOHead from "../../components/common/SEOHead";

const AboutUs = () => {
  const aboutPageSEO = {
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
  };

  return (
    <>
      <SEOHead {...aboutPageSEO} />
      <section className="relative w-full aspect-video min-h-[60vh] max-h-[80vh]">
        <div className="absolute inset-0 h-full w-full bg-black/20 z-[-1]"></div>
        <img
          src={banner}
          className="object-cover w-full h-full absolute inset-0 z-[-2]"
          alt="Banner"
        />
        <div className="wrapper flex h-full py-16 items-end">
          <h1 data-aos="fade-right" className="text_xl">
            About Us
          </h1>
        </div>
      </section>
      <section className="py-14 bg-white text-black relative z-0">
        <div
          data-aos="fade-up"
          className="bg-primary absolute z-[-1] right-0 top-14 w-[6rem] h-[20rem]"
        ></div>
        <div className="wrapper">
          <h2 data-aos="fade-up" className="text1 text-center">
            Our Journey
          </h2>
          <div className="grid md:grid-cols-[40%_1fr] gap-8 pt-5">
            <div className="rounded-xl overflow-hidden">
              <img
                data-aos="fade-right"
                loading="lazy"
                src={img1}
                className="w-full h-full aspect-square object-cover"
                alt=""
              />
            </div>
            <div data-aos="fade-up">
              <p className="desc">
                Ashlytics was founded with a simple yet powerful vision: to
                transform businesses through exceptional digital experiences. We
                recognized that in today's digital-first world, companies need
                more than just websites and apps – they need strategic digital
                solutions that drive growth, enhance user engagement, and create
                lasting competitive advantages. Our mission is to partner with
                forward-thinking businesses to create innovative web and mobile
                solutions that deliver measurable results and exceed expectations.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-14 relative">
        <img
          data-aos="fade-down-right"
          loading="lazy"
          src={circleImg}
          className="z-[-1] absolute top-[-4rem] left-[-3rem] w-[18rem] h-[18rem] object-contain aspect-square"
          alt=""
        />
        <img
          data-aos="fade-up-right"
          loading="lazy"
          src={circleImg}
          className="absolute bottom-0 right-[2rem] w-[11rem] h-[11rem] object-contain aspect-square z-[-1]"
          alt=""
        />
        <div className="wrapper flex flex-col-reverse md:grid grid-cols-2 gap-7">
          <div data-aos="fade-up" className="space-y-3">
            <h3 className="text2">Continuous Support & Optimization</h3>
            <p className="desc">
              Our commitment extends far beyond project delivery:
            </p>
            <ul className="space-y-5 pt-3">
              <li>
                <span className="text4 text-primary2">
                  Performance Optimization:{" "}
                </span>
                Regular updates to enhance speed, security, and functionality.
              </li>
              <li>
                <span className="text4 text-primary2">24/7 Technical Support: </span>{" "}
                Immediate assistance for any technical issues or questions.
              </li>
              <li>
                <span className="text4 text-primary2">
                  Analytics & Monitoring:{" "}
                </span>
                Continuous performance tracking and optimization recommendations.
              </li>
              <li>
                <span className="text4 text-primary2">Scalability Planning: </span>{" "}
                Strategic guidance for growth and feature expansion.
              </li>
              <li>
                <span className="text4 text-primary2">
                  Proactive Maintenance:{" "}
                </span>
                Identify and resolve potential issues before they impact users.
              </li>
            </ul>
          </div>
          <div data-aos="fade-right">
            <img
              loading="lazy"
              src={img3}
              alt="Continuous Support & Optimization"
              className="object-cover rounded-xl w-full h-full"
            />
          </div>
        </div>
      </section>
      <section className="z-[-2] bg-white text-black py-14 relative overflow-hidden">
        <div
          data-aos="fade-down-right"
          className="z-[-1] w-[8rem] h-[8rem] rounded-full bg-[radial-gradient(circle,_#FFFFFF,_#f4ad13)] absolute top-[-1.5rem] left-[-1.5rem] drop-shadow-2xl"
        ></div>
        <div
          data-aos="fade-up-right"
          className="z-[-1] w-[15rem] h-[20rem] rounded-t-[6rem] bg-gradient-to-b from-primary to-transparent absolute bottom-[-2rem] right-[-2rem] drop-shadow-2xl"
        ></div>
        <div className="wrapper grid md:grid-cols-[40%_1fr] items-center gap-7">
          <div data-aos="fade-right" className="">
            <img
              loading="lazy"
              src={img4}
              alt="Long-term Strategic Partnership"
              className="object-contain w-full"
            />
          </div>
          <div data-aos="fade-up" className="space-y-3">
            <h3 className="text2">Long-term Strategic Partnership</h3>
            <p className="desc">
              We're invested in your long-term success and growth:
            </p>
            <ul className="space-y-5 pt-3">
              <li>
                <span className="text4 font-bold">Strategic Consulting: </span>
                Expert guidance for digital transformation and growth strategies.
              </li>
              <li>
                <span className="text4 font-bold">
                  Regular Strategy Reviews:{" "}
                </span>{" "}
                Periodic assessments to ensure alignment with business goals.
              </li>
              <li>
                <span className="text4 font-bold">
                  Technology Roadmapping:{" "}
                </span>{" "}
                Plan future enhancements and technology upgrades.
              </li>
              <li>
                <span className="text4 font-bold"> Priority Support: </span>{" "}
                Expedited assistance for critical business needs.
              </li>
              <li>
                <span className="text4 font-bold">Market Insights: </span>{" "}
                Stay ahead with industry trends and competitive analysis.
              </li>
              <li>
                <span className="text4 font-bold">Growth Planning: </span>{" "}
                Strategic guidance for scaling your digital presence.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Testimonials />
      <section className="py-14 bg-white text-black relative overflow-hidden z-0">
        <div
          data-aos="fade-down"
          className="absolute z-[-1] top-[-3rem] lef-[-3rem] h-[18rem] w-[8rem] bg-primary rounded-ee-[8rem]"
        />
        <div className="wrapper relative text-center space-y-3">
          <div
            data-aos="fade-up-right"
            className="z-[-1] w-[6rem] h-[6rem] rounded-full bg-[radial-gradient(circle,_#FFFFFF,_#f4ad13)] absolute top-full right-[15%] drop-shadow-2xl"
          ></div>
          <h2 data-aos="fade-up" className="text1 text-primary2">
            Our Vision
          </h2>
          <p data-aos="fade-up" className="desc max-w-4xl mx-auto">
            To be the leading digital transformation partner for businesses
            worldwide, creating innovative web and mobile solutions that drive
            measurable growth and competitive advantage. We envision a future
            where every business has access to exceptional digital experiences
            that connect with their audience, streamline operations, and
            accelerate success. Through continuous innovation, strategic
            thinking, and unwavering commitment to excellence, we aim to
            empower businesses to thrive in the digital economy.
          </p>
        </div>
        <div className="wrapper py-16 text-center">
          <h2 data-aos="fade-up" className="text1 text-primary2">
            Strategic Objectives
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-7 pt-7">
            {futureGoals.map((item) => (
              <div key={item.title} data-aos="fade-up">
                <div className="bg-black group hover:bg-primary hover:text-black text-start text-white rounded-xl p-7 space-y-3 transition-all duration-300 h-full">
                  <div className="pb-7 text-primary group-hover:text-black">
                    {item.icon}
                  </div>
                  <h6 className="text3">{item.title}</h6>
                  <p className="desc">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ContactForm2 isDark={true} />
    </>
  );
};

export default AboutUs;
