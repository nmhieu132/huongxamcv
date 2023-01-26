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
    <div className=" bg-[#FDF9F2]">
      <Head>
        <title>Huong Xam</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div
        className="max-w-[1280px] 1920:max-w-[1420px] mt-[118px] mb-[142px]
         mx-auto px-4 768:px-[30px] 1440:px-0 "
      >
        <div className="flex items-center">
          <div>
            <div className="text-primary font-Poppins font-extrabold text-[28px] leading-[18px] ">
              Xin chào,
            </div>
            <div className="text-primary font-Poppins font-extrabold text-[28px] leading-[18px] mt-4">
              tôi là Nguyễn Thị Hương
            </div>

            <div className="mt-[28px] grid grid-cols-2 gap-x-[52px] max-w-[690px]">
              <div className=" font-Poppins text-primary">
                <p className="mt-6">
                  Kỹ sư Công Nghệ Đa Phương Tiện, có 1+ năm kinh nghiệm trong
                  lĩnh vực UI/UX. Đã tham gia thiết kế cho hơn 10 dự án về
                  Web/App, giúp công ty thuyết phục các nhãn hàng cùng hợp tác.
                </p>
              </div>
              <div className=" font-Poppins text-primary">
                <p className="mt-6">
                  Tôi mong muốn được đóng góp một phần công sức cho quý công ty
                  để cùng đưa ra giải pháp thiết kế, khắc phục những vấn đề của
                  người dùng.
                </p>
              </div>
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

          <Image
            src="/static/images/cv-banner.png"
            width={644}
            height={543}
            alt="cv-banner.png"
            className="mt-[16px] ml-[85px]"
          ></Image>
        </div>
      </div>
      <div className="bg-[#262626] pt-[112px] pb-[93px]">
        <div className="flex max-w-[1280px] 1920:max-w-[1420px] mx-auto px-4 768:px-[30px] 1280:px-0 justify-between">
          <div className="max-w-[320px] font-extrabold text-[48px] leading-[64px] text-[#FFFFFF] font-Poppins">
            Kinh nghiệm làm việc{" "}
          </div>
          <div>
            <div className="flex border-b-[1px] border-b-[#666666] pb-8 max-w-[852px] justify-between">
              <div className="font-Poppins text-[20px] leading-[21px] text-[#fff] mr-[245px]">
                <div>Công ty Cổ phần công nghệ A.I Soft</div>
                <div className="mt-4">2021 - 2022</div>
              </div>
              <div className="font-Poppins text-[32px] leading-[34px] text-[#fff] font-medium">
                UI/UX DESIGN
              </div>
            </div>
            <div className="flex border-b-[1px] border-b-[#666666] pb-8 max-w-[852px] mt-[72px] justify-between">
              <div className="font-Poppins text-[20px] leading-[21px] text-[#fff] mr-[245px]">
                <div>Công ty cổ phần OkHub Việt Nam</div>
                <div className="mt-4">2021 - 2022</div>
              </div>
              <div className="font-Poppins text-[32px] leading-[34px] text-[#fff] font-medium">
                UI/UX DESIGN
              </div>
            </div>
            <div className="flex border-b-[1px] border-b-[#666666] pb-8 max-w-[852px] mt-[72px] justify-between">
              <div className="font-Poppins text-[20px] leading-[21px] text-[#fff] mr-[245px]">
                <div>Công ty Cổ phần công nghệ A.I Soft</div>
                <div className="mt-4">2021 - 2022</div>
              </div>
              <div className="font-Poppins text-[32px] leading-[34px] text-[#fff] font-medium">
                UI/UX DESIGN
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[100px] grid grid-cols-2 gap-y-[252px] max-w-[1280px] 1920:max-w-[1440px] mx-auto px-4 768:px-[30px] 1024:px-0">
        <div>
          <div className="font-Poppins font-extrabold text-[48px] leading-[64px] text-primary ">
            Học vấn
          </div>
          <div className="mt-[50px] border-l-[2px] border-l-[#686868] pl-7">
            <p className="mb-6 font-Poppins text-[20px] leading-[21px] text-primary">
              2021-2022
            </p>
            <p className="mb-[14px] font-Poppins text-[20px] leading-[21px] text-primary">
              Học viện công nghệ bưu chính viễn thông
            </p>
            <p className="font-Poppins font-bold  text-[20px] leading-[21px] text-primary">
              Chuyên ngành Thiết kế Đa phương tiện
            </p>
          </div>
          <div className="mt-[62px] border-l-[2px] border-l-[#686868] pl-7">
            <p className="mb-6 font-Poppins text-[20px] leading-[21px] text-primary">
              2019 - 2021
            </p>
            <p className="mb-[14px] font-Poppins text-[20px] leading-[21px] text-primary uppercase">
              ARENA MULTIMEDIA
            </p>
            <p className="font-Poppins font-bold  text-[20px] leading-[21px] text-primary">
              Diploma of Digital Product Design
            </p>
          </div>
        </div>
        <div>
          <div className="font-Poppins font-extrabold text-[48px] leading-[64px] text-primary ">
            Kỹ năng
          </div>
          <div className="mt-[50px]  pl-7">
            <p className="mb-[18px] font-Poppins font-bold text-[20px] leading-[21px] text-primary">
              Kỹ năng chuyên môn
            </p>
            <p className="font-Poppins text-[20px] leading-[32px] text-primary uppercase max-w-[566px]">
              Website Design | REsponsive Design | app design | Design System
            </p>
          </div>
          <div className="mt-[62px]  pl-7">
            <p className="mb-6 font-Poppins font-bold text-[20px] leading-[21px] text-primary">
              Kỹ năng mềm
            </p>
            <p className="mb-[14px] font-Poppins text-[20px] leading-[32px] text-primary uppercase max-w-[566px]">
              lẮNG NGHE, HỌC HỎI | LÀM VIỆC NHÓM | app design | Design System
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-[1280px] 1920:max-w-[1440px] mx-auto px-4 768:px-[30px] 1024:px-0 mt-[234px]">
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
