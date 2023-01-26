import React from "react";
import Image from "next/image";
function Header() {
  return (
    <div className=" border-b-[0.5px] border-b-[#505050]">
      <div
        className="max-w-[1280px] 1920:max-w-[1420px] sticky top-0 pt-[16px] pb-[20px]
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
  );
}

export default Header;
