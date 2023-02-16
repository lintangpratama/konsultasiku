import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";

export default function ConselorSplide() {
  const [conselorData, setConselorData] = useState(null);
  useEffect(() => {
    const fetchData = () => {
      axios.get("https://api.andil.id/konsultasiku/conselors").then((res) => {
        setConselorData(res.data.conselors.ResponseConselor);
      });
    };
    fetchData();
  }, []);
  return (
    <div className="mt-5">
      <Splide aria-label="My Favorite Images">
        {conselorData === null
          ? null
          : conselorData.map((data) => (
              <SplideSlide key={data.id_conselor} className="flex">
                <Link href={`/conselor/${data.id_conselor}`}>
                  <div className="flex cursor-pointer">
                    <div className="w-[100px] h-[140px]">
                      <Image
                        src={`/img/${
                          data.nama_conselor ===
                          "Lucky Ade Sessiani, M.Psi., Psikolog"
                            ? "lucky"
                            : data.nama_conselor ===
                              "Hikmatun Balighoh, M.Psi., Psikolog"
                            ? "atun"
                            : "logo"
                        }.png`}
                        className="rounded-2xl"
                        width={100}
                        height={140}
                        alt="Image 1"
                      />
                    </div>
                    <div className="ml-4">
                      <h2 className="text-gray-900 text-sm font-bold">
                        {data.nama_conselor}
                      </h2>
                      <div className="flex flex-wrap">
                        <button className="right-4 flex mt-2 mr-2 justify-center items-center bg-[#ecf0fb]  rounded-full cursor-pointer px-[8px]">
                          <p className="text-[#5a83fe] text-xs font-bold my-[2px]">
                            Klinis
                          </p>
                        </button>
                        <button className="right-4 flex mt-2 mr-2 justify-center items-center bg-[#ecf0fb]  rounded-full cursor-pointer px-[8px]">
                          <p className="text-[#5a83fe] text-xs font-bold my-[2px]">
                            Keluarga
                          </p>
                        </button>
                        <button className="right-4 flex mt-2 mr-2 justify-center items-center bg-[#ecf0fb]  rounded-full cursor-pointer px-[8px]">
                          <p className="text-[#5a83fe] text-xs font-bold my-[2px]">
                            Pendidikan
                          </p>
                        </button>
                        <button className="right-4 flex mt-2 mr-2 justify-center items-center bg-[#ecf0fb]  rounded-full cursor-pointer px-[8px]">
                          <p className="text-[#5a83fe] text-xs font-bold my-[2px]">
                            Anak
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
              </SplideSlide>
            ))}
      </Splide>
    </div>
  );
}
