import MenuBar from "components/MenuBar";
import React from "react";
import Image from "next/image";
import Offering from "components/Offering";
import Link from "next/link";
import Bundle from "components/Bundle";
import ConselorSplide from "components/ConselorSplide";

export default function index() {
  return (
    <div>
      <div className="flex flex-col min-h-screen max-h-full">
        <div style={{ width: "100%", height: "200px", position: "relative" }}>
          <Image
            src="/img/bg-main.jpg"
            alt="bg-main"
            layout="fill"
            objectFit="cover"
            style={{
              filter: "brightness(60%)",
            }}
          />
          <div className="mx-4 my-5 text-center w-full">
            <div className="absolute my-8 w-full left-0">
              <h2 className="text-white font-bold text-xl">
                Hi, Selamat Pagi!
              </h2>
              <p className="text-white text-xs my-1 max-w-xs mx-auto">
                Curahkan isi hatimu, melangkah keluar dari permasalahan dengan
                Konsultasiku
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-t-2xl -mt-10 z-50">
          <div className="mx-4 my-5">
            <h2 className="mt-8 text-sm font-bold">Layanan Konseling</h2>
            <Offering />
            <h2 className="mt-8 text-sm font-bold">Spesial untuk kamu!</h2>
            <Bundle />
            <h2 className="mt-8 text-sm font-bold">Rekomendasi Psikolog</h2>
            <p className="mt-0.5 text-[11px] text-gray-400">
              Konseling dengan psikolog terpercaya
            </p>
            <ConselorSplide />
            <div className="h-[80px]"></div>
            <MenuBar currentPage="/" />
          </div>
        </div>
      </div>
    </div>
  );
}
