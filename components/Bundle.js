import React from "react";
import Image from "next/image";

export default function Bundle() {
  return (
    <div className="bg-[#fffbda] w-full mt-5 rounded-2xl">
      <div className="flex py-4 px-5">
        <div>
          <h2 className="text-gray-800 text-sm font-bold">
            Paket Konseling Individu
          </h2>
          <p className="text-gray-400 font-bold text-[11px] mt-0.5">
            Dengan paket ini kamu bisa mendapatkan sesi konseling dengan total
            harga yang lebih murah Iho!
          </p>
          <button className="right-4 flex justify-center items-center mt-2 bg-[#5a83fe] hover:bg-main rounded-full cursor-pointer px-8">
            <p className="text-white text-xs font-bold my-[6px]">Lihat Paket</p>
          </button>
        </div>
        <div className="flex items-center">
          <Image
            src="/img/choose-conselor.png"
            width={170}
            height={170}
            alt="consultation"
          />
        </div>
      </div>
    </div>
  );
}
