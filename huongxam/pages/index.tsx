import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div className=" min-h-screen py-2 bg-[#FDF9F2]">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className=" border-b-[0.5px] border-b-[#505050]">
        <div
          className=" 1920:max-w-[1420px] sticky top-0 pt-[16px] pb-[20px]
         mx-auto px-4 768:px-[30px] 1440:px-0"
        >
          <div className="flex justify-between items-center ">
            <div>
              <Image
                src="/static/images/logo.svg"
                alt="logo.svg"
                width={104}
                height={44}
              />
            </div>
            <div className="flex ">
              <div className="flex items-center mr-[79px] font-Poppins font-bold text-[20px] leading-[21px] text-[#454545]">
                <p className="mr-12"> Dự án</p>
                <p> Về tôi</p>
              </div>

              <div className="flex gap-x-[20px]">
                <Image
                  src="/static/images/behance.svg"
                  alt="logo.svg"
                  width={32}
                  height={32}
                ></Image>
                <Image
                  src="/static/images/dribbble.png"
                  alt="logo.svg"
                  width={32}
                  height={32}
                ></Image>
                <Image
                  src="/static/images/linkedin.png"
                  alt="logo.svg"
                  width={32}
                  height={32}
                ></Image>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className=" 1920:max-w-[1420px] sticky top-0 py-5
         mx-auto px-4 768:px-[30px] 1440:px-0"
      >
        <div className="flex py-[99px]">
          <div>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
