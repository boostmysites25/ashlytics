import React from "react";
import banner from "../../assets/images/banners/aboutus.png";
import { Link } from "react-router-dom";

const Blogs = () => {
  return (
    <>
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
        <div className="wrapper">
          <div className="space-y-2 min-h-[40vh] flex justify-center items-center">
            <h3 className="text3 text-center">No blogs available yet</h3>
            {/* <div className="grid grid-cols-3 gap-7"></div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;
