"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const Client = () => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
  };

  return (
    <div className="container mx-auto max-w-[90%] overflow-hidden">
      <Slider {...settings}>
        <div className="">
          <div className="slide-container bg-white text-center p-4 lg:p-6 rounded-lg mt-10 relative">
            <div
              className="rounded-full bg-white md:w-20 md:h-20 h-14 w-14 flex items-center justify-center absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-2"
              style={{ boxShadow: "0px 12px 24px 0px rgba(0, 0, 0, 0.15)" }}
            >
              <Image
                src="/images/image 9.png"
                height={28}
                width={60}
                className="w-full"
                alt=""
              />
            </div>
            <Image
              src="/images/Group.png"
              height={40}
              width={40}
              className="w-[40px] max-md:w-4 mx-auto mt-6 md:mt-11"
              alt=""
            />
            <p className=" max-md:text-lg text-xl leading-[30px] font-semibold font-atma">
              Mind-blowing Services
            </p>
            <p className="font-dm-sans max-md:text-base leading-[32px] text-[#424242]">
              Viverra vel vitae libero iaculis. Tellus vel volutpat sem sit
              egestas aliquam. Pharetra dictum volutpat non velit lorem vitae
              amet.
            </p>
            <div className="flex items-center justify-center mt-2">
              <div>
                <h1 className="text-lg max-md:text-base leading-[32px] font-semibold font-atma">
                  Elezabeth Sarian
                </h1>
                <p className="text-[#424242] max-md:text-sm leading-[24px] mt-[5px] font-dm-sans text-sm">
                  Student at University of Connecticut
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="slide-container text-center bg-white p-4 lg:p-6 rounded-lg mt-10 relative">
            <div
              className="rounded-full bg-white md:w-20 md:h-20 h-14 w-14 flex items-center justify-center absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-2"
              style={{ boxShadow: "0px 12px 24px 0px rgba(0, 0, 0, 0.15)" }}
            >
              <Image
                src="/images/image 8.png"
                height={28}
                width={60}
                className="w-full"
                alt=""
              />
            </div>
            <Image
              src="/images/Group.png"
              height={40}
              width={40}
              className="w-[40px] max-md:w-4 mx-auto mt-6 md:mt-11"
              alt=""
            />
            <p className=" max-md:text-lg text-xl leading-[30px] font-semibold font-atma">
              Mind-blowing Services
            </p>
            <p className="font-dm-sans max-md:text-base leading-[32px] text-[#424242]">
              Viverra vel vitae libero iaculis. Tellus vel volutpat sem sit
              egestas aliquam. Pharetra dictum volutpat non velit lorem vitae
              amet.
            </p>
            <div className="flex items-center justify-center mt-2">
              <div>
                <h1 className="text-lg max-md:text-base leading-[32px] font-semibold font-atma">
                  Elezabeth Sarian
                </h1>
                <p className="text-[#424242] max-md:text-sm leading-[24px] mt-[5px] font-dm-sans text-sm">
                  Student at University of Connecticut
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="slide-container text-center bg-white p-4 lg:p-6 rounded-lg mt-10 relative">
            <div
              className="rounded-full bg-white md:w-20 md:h-20 h-14 w-14 flex items-center justify-center absolute  top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-2"
              style={{ boxShadow: "0px 12px 24px 0px rgba(0, 0, 0, 0.15)" }}
            >
              <Image
                src="/images/image 11.png"
                height={28}
                width={60}
                className="w-full"
                alt=""
              />
            </div>
            <Image
              src="/images/Group.png"
              height={40}
              width={40}
              className="w-[40px] max-md:w-4 mx-auto mt-6 md:mt-11"
              alt=""
            />
            <p className=" max-md:text-lg text-xl leading-[30px] font-semibold font-atma">
              Mind-blowing Services
            </p>
            <p className="font-dm-sans max-md:text-base leading-[32px] text-[#424242]">
              Viverra vel vitae libero iaculis. Tellus vel volutpat sem sit
              egestas aliquam. Pharetra dictum volutpat non velit lorem vitae
              amet.
            </p>
            <div className="flex items-center justify-center mt-2">
              <div>
                <h1 className="text-lg max-md:text-base leading-[32px] font-semibold font-atma">
                  Elezabeth Sarian
                </h1>
                <p className="text-[#424242] max-md:text-sm leading-[24px] mt-[5px] font-dm-sans text-sm">
                  Student at University of Connecticut
                </p>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Client;
