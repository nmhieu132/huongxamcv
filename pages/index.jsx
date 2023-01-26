import Head from "next/head";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsTelephone } from "react-icons/bs";
import { RxEnvelopeClosed } from "react-icons/rx";
import Header from "../components/Header";
import { CgFileDocument } from "react-icons/cg";
const Home = () => {
  const settings = {
    dots: false,
    autoplay: true,
    infinite: false,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <div className=" min-h-screen py-2 bg-[#FDF9F2]">
      <Head>
        <title>Huong Xam</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div
        className="max-w-[1280px] 1920:max-w-[1420px] py-5
         mx-auto px-4 768:px-[30px] 1440:px-0"
      >
        <div className="flex ">
          <div className="mt-[99px]">
            <div className="uppercase font-Poppins text-[#333333] text-[24px] leading-[30px] tracking-[8px]">
              huong nguyen
            </div>
            <div className="text-primary font-Poppins font-black text-[131.54px] leading-[92px] mt-[60px] ">
              UI/UX
            </div>
            <div className="flex mt-11">
              <div className="w-[242px] h-[93px] rounded-tr-full rounded-br-full bg-gradient-to-r from-[#ff7ea4a6] to-[#ff7ea4]"></div>
              <p className="text-primary font-Poppins font-black text-[131.54px] leading-[92px] ml-2">
                esigner
              </p>
            </div>
            <div className="mt-[60px]">
              <div className="text-[40px] text-primary leading-[54px] font-extrabold border-b-[1px] border-b-primary w-fit">
                Xin chào,
              </div>
              <div className="max-w-[669px] font-Poppins text-primary">
                <p className="mt-6">
                  Tôi là Kỹ sư Công Nghệ Đa Phương Tiện, có 1+ năm kinh nghiệm
                  trong lĩnh vực UI/UX. Đã tham gia thiết kế cho hơn 10 dự án về
                  Web/App{" "}
                </p>
                <p>
                  Tôi mong muốn được đóng góp một phần công sức cho quý công ty
                  để cùng đưa ra giải pháp thiết kế, khắc phục những vấn đề của
                  người dùng.
                </p>
              </div>
              <div>
                <div className="flex mt-9 max-w-[212px] px-5 py-3 bg-secondary font-Poppins font-semibold text-[16px] leading-[26px] text-[#fff] rounded-3xl">
                  <CgFileDocument
                    className="self-center mr-2"
                    color="white"
                    size={24}
                  />{" "}
                  <p>Xem Resume pdf</p>
                </div>
              </div>
            </div>
          </div>

          <Image
            src="/static/images/xamiu.png"
            width={597}
            height={735}
            alt="xamiu.png"
            className="mt-[16px] ml-[56px]"
          ></Image>
        </div>
      </div>
      <div className="flex flex-col gap-y-[216px] max-w-[1280px] 1920:max-w-[1420px] mx-auto px-4 768:px-[30px] 1280:px-0 mt-[269px]">
        <div className="flex ">
          <div className="mr-[65px]">
            <Image
              src="/static/images/project-example.png"
              alt="project-example"
              width={812}
              height={534}
            ></Image>
          </div>
          <div className="max-w-[547px]">
            <div className="font-Poppins text-[48px] leading-[50.4px] text-[#000000] font-extrabold  text-end">
              01.
            </div>
            <div className="max-w-[547px] mt-[177px]">
              <div className="text-[#57ADF5] max-w-[122px] text-[17px] leading-[17.85px] font-medium px-3 py-2 rounded-3xl border-[#57ADF5] border-[1px]">
                Mobile App
              </div>
              <p className="text-primary font-extrabold font-Poppins text-[36px] leading-[48px]  mt-4">
                PIGGYPOT -
              </p>
              <p className="text-primary font-extrabold font-Poppins text-[36px] leading-[48px] mb-[88px]">
                Dạy con cách quản lý tài chính thông minh
              </p>
              <Link
                href="/#"
                className=" text-primary text-[16px] leading-[16.8px] font-semibold font-Poppins border-b-[1px] border-b-primary"
              >
                Xem chi tiết
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-row-reverse">
          <div className="ml-[65px]">
            <Image
              src="/static/images/project-example.png"
              alt="project-example"
              width={812}
              height={534}
            ></Image>
          </div>
          <div className="max-w-[547px]">
            <div className="font-Poppins text-[48px] leading-[50.4px] text-[#000000] font-extrabold  text-start">
              02.
            </div>
            <div className="max-w-[547px] mt-[177px]">
              <div className="text-[#43D1BE] max-w-[200px] text-[17px] leading-[17.85px] font-medium px-3 py-2 rounded-3xl border-[#43D1BE] border-[1px]">
                Responsive Website
              </div>
              <p className="text-primary font-extrabold font-Poppins text-[36px] leading-[48px]  mt-4">
                BAABABY -
              </p>
              <p className="text-primary font-extrabold font-Poppins text-[36px] leading-[48px] mb-[88px]">
                Thương hiệu thời trang trẻ em tại Việt Nam
              </p>
              <Link
                href="/#"
                className=" text-primary text-[16px] leading-[16.8px] font-semibold font-Poppins border-b-[1px] border-b-primary"
              >
                Xem chi tiết
              </Link>
            </div>
          </div>
        </div>
        <div className="flex ">
          <div className="mr-[65px]">
            <Image
              src="/static/images/project-example.png"
              alt="project-example"
              width={812}
              height={534}
            ></Image>
          </div>
          <div className="max-w-[547px]">
            <div className="font-Poppins text-[48px] leading-[50.4px] text-[#000000] font-extrabold  text-end">
              03.
            </div>
            <div className="max-w-[547px] mt-[175px]">
              <div className="text-[#5D5FEF] max-w-[97px] text-[17px] leading-[17.85px] font-medium px-3 py-2 rounded-3xl border-[#5D5FEF] border-[1px]">
                Website
              </div>
              <p className="text-primary font-extrabold font-Poppins text-[36px] leading-[48px]  mt-4">
                GLEEFOODS
              </p>
              <p className="text-primary font-extrabold font-Poppins text-[36px] leading-[48px] mb-[88px]">
                Đơn vị cung cấp thực phẩm nhập khẩu cao cấp
              </p>
              <Link
                href="/#"
                className=" text-primary text-[16px] leading-[16.8px] font-semibold font-Poppins border-b-[1px] border-b-primary"
              >
                Xem chi tiết
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-row-reverse">
          <div className="ml-[65px]">
            <Image
              src="/static/images/project-example.png"
              alt="project-example"
              width={812}
              height={534}
            ></Image>
          </div>
          <div className="max-w-[547px]">
            <div className="font-Poppins text-[48px] leading-[50.4px] text-[#000000] font-extrabold  text-start">
              04.
            </div>
            <div className="max-w-[547px] mt-[177px]">
              <div className="text-[#43D1BE] max-w-[200px] text-[17px] leading-[17.85px] font-medium px-3 py-2 rounded-3xl border-[#43D1BE] border-[1px]">
                Responsive Website
              </div>
              <p className="text-primary font-extrabold font-Poppins text-[36px] leading-[48px]  mt-4">
                BAABABY -
              </p>
              <p className="text-primary font-extrabold font-Poppins text-[36px] leading-[48px] mb-[88px]">
                Thương hiệu thời trang trẻ em tại Việt Nam
              </p>
              <Link
                href="/#"
                className=" text-primary text-[16px] leading-[16.8px] font-semibold font-Poppins border-b-[1px] border-b-primary"
              >
                Xem chi tiết
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1280px] 1920:max-w-[1440px] mx-auto px-4 768:px-[30px] 1024:px-0 mt-[260px]">
        <Slider {...settings} className="mx-auto">
          <div>
            <Image
              src="/static/images/behance-slide.png"
              alt="behance"
              width={325}
              height={60}
            ></Image>
          </div>
          <div>
            <Image
              src="/static/images/dribble-slide.png"
              alt="behance"
              width={325}
              height={81}
            ></Image>
          </div>
          <div>
            <Image
              src="/static/images/linkd-slide.png"
              alt="behance"
              width={325}
              height={81}
            ></Image>
          </div>
          <div>
            <Image
              src="/static/images/behance-slide.png"
              alt="behance"
              width={325}
              height={60}
            ></Image>
          </div>
          <div>
            <Image
              src="/static/images/dribble-slide.png"
              alt="behance"
              width={325}
              height={81}
            ></Image>
          </div>
          <div>
            <Image
              src="/static/images/linkd-slide.png"
              alt="behance"
              width={325}
              height={81}
            ></Image>
          </div>
          <div>
            <Image
              src="/static/images/behance-slide.png"
              alt="behance"
              width={325}
              height={60}
            ></Image>
          </div>
          <div>
            <Image
              src="/static/images/linkd-slide.png"
              alt="behance"
              width={325}
              height={81}
            ></Image>
          </div>
        </Slider>
      </div>
      <div className="flex flex-col items-center max-w-[1280px] 1920:max-w-[1440px] mx-auto mt-[158px] px-4 768:px-[30px] 1024:px-0">
        <div className="text-primary  font-Poppins">
          <p className="text-[20px] leading-[30px] text-center tracking-[2.56px] uppercase">
            nếu bạn cần tôi ?
          </p>
          <p className="text-[48px] leading-[64px] text-center  font-extrabold mt-[5px]">
            Liên hệ ngay qua
          </p>
        </div>
        <div className="text-primary font-semibold text-[18px] leading-[26px] font-Poppins text-center  mt-12">
          <div className="font-semibold text-[18px] leading-[26px] flex items-center justify-center font-Poppins">
            <BsTelephone size={22} className="mr-[10px]" /> <p>082 332 9205</p>
          </div>
          <div className="flex items-center justify-center ml-7 pb-5 border-b-[1px] mt-[14px] border-b-[#FF7EA4] px-4 font-Poppins">
            <RxEnvelopeClosed size={22} className="mr-[10px]" />
            <p>huongnguyen5202@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="bg-primary mt-[108px] flex items-center justify-center text-[#fff] font-Poppins text-[16px] leading-[18px] py-[20px]">
        © 2022 Huong Nguyen, Ha Noi - Viet Nam.
      </div>
    </div>
  );
};

export default Home;
