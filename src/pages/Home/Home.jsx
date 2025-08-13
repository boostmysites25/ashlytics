import Button from "../../components/common/Button";
import aboutImg from "../../assets/images/faq.jpeg";
import { Link } from "react-router-dom";
import IndustriesSection from "../../components/common/IndustriesSection";
import ServicesSection from "./components/ServicesSection";
import WorkProcess from "../../components/common/WorkProcess";
import { useEffect } from "react";
import gsap from "gsap";
import robot from "../../assets/images/ai-robot.png";
import ContactForm2 from "../../components/common/ContactForm2";
import ReactPlayer from "react-player";

export default function Home() {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.to("#robot", {
      translateY: -80,
      duration: 2,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <>
      <section className="min-h-screen flex flex-col justify-center relative">
        <ReactPlayer
          src={require("../../assets/videos/banner.mp4")}
          loop
          playing
          muted
          playsinline
          width="100%"
          height="100%"
          pip={false}
          style={{
            objectFit: "cover",
            position: "absolute",
            inset: "0",
            height: "100%",
            width: "100%",
            filter: "brightness(0.8)",
            zIndex: -1,
          }}
          config={{
            file: {
              attributes: {
                style: {
                  objectFit: "cover",
                },
                playsInline: true,
                webkitPlaysinline: "true",
                preload: "auto",
                autoPlay: true,
              },
            },
          }}
        />
        <div className="wrapper flex flex-col-reverse lg:grid grid-cols-[65%_1fr] items-center lg:items-end gap-5">
          <div
            data-aos="fade-right"
            className="space-y-3 relative z-10 py-[6rem]"
          >
            <h1 className="text1 font-montserrat max-w-[60rem]">
              Elevate Your Business with <br />
              <span className="text-primary font-montserrat">
                Cutting-Edge Digital Solutions
              </span>
            </h1>
            <p className="desc max-w-2xl pb-3">
              At <span className="font-bold">Ashlytics</span>, we specialize in
              creating exceptional websites and mobile applications that drive
              real business results. Our expert team combines innovative
              technology with strategic thinking to deliver digital solutions
              that outperform expectations and accelerate your growth.
            </p>
            <Button to="/contact-us">Start Your Project</Button>
          </div>

          <div className="h-[38vh] lg:h-[50vh] flex justify-start translate-y-2/3 lg:translate-y-0">
            <img
              loading="lazy"
              id="robot"
              src={robot}
              srcSet={`${robot} 300w,
             ${robot} 600w,
             ${robot} 1200w`}
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
              alt="robot"
              width="600"
              height="400"
              className="h-[32vh] lg:h-[40vh] w-fit object-contain"
            />
          </div>
        </div>
      </section>
      <section className="py-14 bg-white text-black">
        <div className="wrapper flex flex-col-reverse md:grid grid-cols-[60%_1fr] gap-7">
          <div data-aos="fade-right" className="space-y-5 py-4">
            <h3 className="text2">
              <span className="text-primary1">Ashlytics:</span> Your Partner in
              Digital Innovation and Business Growth.
            </h3>
            <p className="desc hyphens-auto">
              We believe that exceptional digital solutions start with a deep
              understanding of your business goals and market challenges. Our
              approach combines strategic thinking with technical excellence to
              create websites and mobile applications that not only look
              stunning but also deliver measurable business impact. <br />
              Our expertise encompasses modern web development, mobile app
              creation, and digital strategy. We build responsive websites,
              powerful e-commerce platforms, and innovative mobile applications
              that engage users and drive conversions. <br />
              At Ashlytics, we're committed to your success. Every project we
              undertake is built on a foundation of collaboration, innovation,
              and results-driven development. We don't just build digital
              solutions – we create competitive advantages that help you thrive
              in the digital marketplace.
            </p>
            <div className="flex gap-10 pt-4">
              <Link
                to="/about-us"
                className="btn uppercase min-w-[8rem] border border-black text-black bg-transparent hover:bg-black hover:text-white"
              >
                Learn More
              </Link>
              <Link
                to="/contact-us"
                className="btn uppercase min-w-[8rem] border border-black text-black bg-transparent hover:bg-black hover:text-white"
              >
                Get Quote
              </Link>
            </div>
          </div>
          <div className="w-full flex flex-col">
            <img
              data-aos="fade-up"
              loading="lazy"
              src={aboutImg}
              width={500}
              height={600}
              alt=""
              className="max-w-[20rem] md:max-w-max mx-auto w-full h-full object-cover aspect-square"
              placeholder="blur"
            />
          </div>
        </div>
      </section>
      <IndustriesSection />
      <ServicesSection />
      <WorkProcess />
      <ContactForm2 />
    </>
  );
}
