import React from "react";
import Image from "next/image";
import Router from "next/router";
import {
  MdOutlineDomainVerification,
  MdVerified,
  MdVerifiedUser,
} from "react-icons/md";

export default function hikmatun() {
  return (
    <div className="flex flex-col min-h-screen max-h-full">
      <div className="mx-4 my-5">
        <div
          onClick={() => Router.back()}
          className="flex justify-center items-center bg-blue-50 w-9 h-9 rounded-search cursor-pointer"
        >
          <Image
            src="/icon/arrow-back-icon.svg"
            alt="Back"
            width={17.5}
            height={17.5}
          />
        </div>
        <div className="flex flex-col items-center justify-center mt-5">
          <div className="w-[100px] h-[140px]">
            <Image
              src="/img/atun.png"
              className="rounded-2xl"
              width={100}
              height={140}
              alt="Image 1"
            />
          </div>
          <h1 className="text-base font-bold mt-4 flex text-center">
            Hikmatun Balighoh, M.Psi., Psikolog
            <MdVerified className="ml-2" color="#476edc" size={22} />
          </h1>
          <div className="flex justify-center flex-wrap">
            <button className="right-4 flex mt-2 mr-2 justify-center items-center bg-[#ecf0fb]  rounded-full cursor-pointer px-[8px]">
              <p className="text-[#5a83fe] text-xs font-bold my-[2px]">
                Keluarga
              </p>
            </button>
            <button className="right-4 flex mt-2 mr-2 justify-center items-center bg-[#ecf0fb]  rounded-full cursor-pointer px-[8px]">
              <p className="text-[#5a83fe] text-xs font-bold my-[2px]">
                Kecemasan
              </p>
            </button>
            <button className="right-4 flex mt-2 mr-2 justify-center items-center bg-[#ecf0fb]  rounded-full cursor-pointer px-[8px]">
              <p className="text-[#5a83fe] text-xs font-bold my-[2px]">
                Percintaan
              </p>
            </button>
            <button className="right-4 flex mt-2 mr-2 justify-center items-center bg-[#ecf0fb]  rounded-full cursor-pointer px-[8px]">
              <p className="text-[#5a83fe] text-xs font-bold my-[2px]">Stres</p>
            </button>
            <button className="right-4 flex mt-2 mr-2 justify-center items-center bg-[#ecf0fb]  rounded-full cursor-pointer px-[8px]">
              <p className="text-[#5a83fe] text-xs font-bold my-[2px]">
                Pernikahan
              </p>
            </button>
            <button className="right-4 flex mt-2 mr-2 justify-center items-center bg-[#ecf0fb]  rounded-full cursor-pointer px-[8px]">
              <p className="text-[#5a83fe] text-xs font-bold my-[2px]">
                Pengembangan Diri
              </p>
            </button>
            <button className="right-4 flex mt-2 mr-2 justify-center items-center bg-[#ecf0fb]  rounded-full cursor-pointer px-[8px]">
              <p className="text-[#5a83fe] text-xs font-bold my-[2px]">
                +6 lainnya
              </p>
            </button>
          </div>
        </div>
        <div className="mt-12">
          <h1 className="font-bold text-[20px]">Profil Hikmatun Balighoh</h1>
          <div className="h-2 w-[50px] bg-secondary rounded-full mt-2"></div>
          <p className="text-gray-400 mt-5 text-[13px]">
            Hikmatun merupakan Psikolog yang memiliki ketertarikan dalam
            membantu individu dewasa muda untuk lebih mengenal dirinya sendiri
            dan juga mengembangkan potensi dalam dirinya. Hikmatun memiliki misi
            untuk membantu klien mengenal dan juga mengembangkan dirinya.
          </p>
        </div>
        <div className="bg-[#fffbda] w-full mt-5 rounded-2xl">
          <div className="flex py-4 px-5">
            <div>
              <h2 className="text-gray-800 text-sm font-bold">
                Paket Konseling Individu
              </h2>
              <p className="text-gray-400 font-bold text-[11px] mt-0.5">
                Dengan paket ini kamu bisa mendapatkan sesi konseling dengan
                total harga yang lebih murah Iho!
              </p>
              <button className="right-4 flex justify-center items-center mt-2 bg-[#5a83fe] hover:bg-main rounded-full cursor-pointer px-8">
                <p className="text-white text-xs font-bold my-[6px]">
                  Lihat Paket
                </p>
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
        <div className="mt-5 flex">
          <MdVerifiedUser color="#476edc" size={24} />
          <div className="ml-3">
            <h1 className="text-base font-bold">Nomor HIMPSI</h1>
            <p className="text-gray-400 mt-0.5 text-[13px]">SIK: 20170374</p>
          </div>
        </div>
        <div className="mt-2 flex">
          <MdOutlineDomainVerification color="#476edc" size={24} />
          <div className="ml-3">
            <h1 className="text-base font-bold">Nomor Izin Praktik</h1>
            <p className="text-gray-400 mt-0.5 text-[13px]">
              SIPP: 0880-20-2-2
            </p>
          </div>
        </div>
        <div className="h-20"></div>
        <div className="flex bg-white fixed bottom-0 justify-center right-1/2 translate-x-1/2 z-30 max-w-md w-full border-gray-icon border-t-[1px]">
          <button className="flex justify-center items-center my-3 mx-4 bg-blue-500 hover:bg-main-hover rounded-search cursor-pointer w-full">
            <a
              href="https://wa.me/6287874757483"
              target="_blank"
              rel="noreferrer"
            >
              <p className="text-white font-bold my-2.5">
                Konseling dengan Hikmatun
              </p>
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
