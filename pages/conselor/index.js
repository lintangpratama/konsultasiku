import React from "react";
import Router from "next/router";
import Image from "next/image";
import Link from "next/link";
import MenuBar from "components/MenuBar";

export default function index() {
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
        <h2 className="mt-5 text-sm font-bold">Psikolog Pilihan</h2>
        <p className="mt-0.5 text-[11px] text-gray-400">
          Konseling dengan psikolog terpercaya
        </p>
        <Link href="/conselor/lucky-sessiani">
          <div className="flex mt-5 cursor-pointer">
            <div className="w-[100px] h-[140px]">
              <Image
                src="/img/lucky.png"
                className="rounded-2xl"
                width={100}
                height={140}
                alt="Image 1"
              />
            </div>
            <div className="ml-4">
              <h2 className="text-gray-900 text-sm font-bold">
                Lucky Ade Sessiani, M.Psi., Psikolog
              </h2>
              <div className="flex flex-wrap">
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
                  <p className="text-[#5a83fe] text-xs font-bold my-[2px]">
                    +6 lainnya
                  </p>
                </button>
              </div>
              <button className="right-4 flex justify-center items-center mt-4 bg-[#5a83fe]  rounded-full cursor-pointer px-8">
                <p className="text-white text-xs font-bold my-[6px]">
                  Konseling
                </p>
              </button>
            </div>
          </div>
        </Link>
        <Link href="/conselor/hikmatun-balighoh">
          <div className="flex mt-3 cursor-pointer">
            <div className="w-[100px] h-[140px]">
              <Image
                src="/img/atun.png"
                className="rounded-2xl"
                width={100}
                height={140}
                alt="Image 1"
              />
            </div>
            <div className="ml-4">
              <h2 className="text-gray-900 text-sm font-bold">
                Hikmatun Balighoh, M.Psi., Psikolog
              </h2>
              <div className="flex flex-wrap">
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
                  <p className="text-[#5a83fe] text-xs font-bold my-[2px]">
                    +6 lainnya
                  </p>
                </button>
              </div>
              <button className="right-4 flex justify-center items-center mt-4 bg-[#5a83fe]  rounded-full cursor-pointer px-8">
                <p className="text-white text-xs font-bold my-[6px]">
                  Konseling
                </p>
              </button>
            </div>
          </div>
        </Link>
        <MenuBar currentPage="/conselor" />
      </div>
    </div>
  );
}
