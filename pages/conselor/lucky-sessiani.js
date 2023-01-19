import React, { useEffect } from "react";
import Image from "next/image";
import { useTransition, animated } from "react-spring";
import { useState } from "react";
import Swal from "sweetalert2";
import Router from "next/router";
import {
  MdClose,
  MdInfoOutline,
  MdOutlineDomainVerification,
  MdVerified,
  MdVerifiedUser,
} from "react-icons/md";
import checkout from "api/checkout";
import validateEmail from "utils/validateEmail";

export default function Lucky() {
  const [showForm, setShowForm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [payload, setPayload] = useState({
    name: "",
    phone: "",
    email: "",
    psycolog_name: "Lucky Ade Sessiani, M.Psi, Psikolog",
    amount: 99000,
    consultation_date: "",
    complaint: "",
  });

  useEffect(() => {
    try {
      const konsultasiku_user = JSON.parse(
        localStorage.getItem("konsultasiku_user")
      );
      if (
        konsultasiku_user.name &&
        konsultasiku_user.phone &&
        konsultasiku_user.email
      ) {
        setPayload({
          ...payload,
          name: konsultasiku_user.name || "",
          phone: konsultasiku_user.phone || "",
          email: konsultasiku_user.email || "",
        });
      }
    } catch (err) {
      console.log(err);
    }
  }, []);

  const handleSubmit = () => {
    if (
      payload.name === "" ||
      payload.phone === "" ||
      payload.email === "" ||
      payload.consultation_date === "" ||
      payload.complaint === ""
    ) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Harap isi semua data terlebih dahulu!",
      });
    } else if (validateEmail(payload.email) === null) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Format email tidak valid!",
      });
    } else {
      setIsLoading(true);
      checkout(payload)
        .then((res) => {
          setIsLoading(false);
          localStorage.setItem("konsultasiku_user", JSON.stringify(payload));
          window.location.href = res.data.data.payment_link;
        })
        .catch((err) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
          });
          setIsLoading(false);
          console.error(err);
        });
    }
  };

  const handleInput = (e) => {
    setPayload({
      ...payload,
      [e.target.name]: e.target.value,
    });
  };

  const handleDateInput = (e) => {
    let date = new Date(e.target.value);
    setPayload({
      ...payload,
      [e.target.name]: date.toISOString(),
    });
  };

  const taskTransitions = useTransition(showForm, {
    from: { opacity: 1, transform: "translateY(100%)" },
    enter: { opacity: 1, transform: "translateY(0%)" },
    leave: { opacity: 1, transform: "translateY(100%)" },
  });
  return (
    <div className="flex flex-col min-h-screen max-h-full">
      <div className="mx-4 my-5">
        <div onClick={() => setShowForm(false)}>
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
                src="/img/lucky.png"
                className="rounded-2xl"
                width={100}
                height={140}
                alt="Image 1"
              />
            </div>
            <h1 className="text-base font-bold mt-4 flex text-center">
              Lucky Ade Sessiani, M.Psi, Psikolog
              <MdVerified className="ml-2" color="#476edc" size={22} />
            </h1>
            <div className="flex justify-center flex-wrap">
              <button className="right-4 flex mt-2 mr-2 justify-center items-center bg-[#ecf0fb]  rounded-full cursor-pointer px-[8px]">
                <p className="text-[#5a83fe] text-xs font-bold my-[2px]">
                  Dosen UIN Walisongo
                </p>
              </button>
              <button className="right-4 flex mt-2 mr-2 justify-center items-center bg-[#ecf0fb]  rounded-full cursor-pointer px-[8px]">
                <p className="text-[#5a83fe] text-xs font-bold my-[2px]">
                  Psikolog Anak
                </p>
              </button>
              <button className="right-4 flex mt-2 mr-2 justify-center items-center bg-[#ecf0fb]  rounded-full cursor-pointer px-[8px]">
                <p className="text-[#5a83fe] text-xs font-bold my-[2px]">
                  Psikolog Keluarga
                </p>
              </button>
              <button className="right-4 flex mt-2 mr-2 justify-center items-center bg-[#ecf0fb]  rounded-full cursor-pointer px-[8px]">
                <p className="text-[#5a83fe] text-xs font-bold my-[2px]">
                  Psikolog Pendidikan
                </p>
              </button>
            </div>
          </div>
          <div className="mt-12">
            <h1 className="font-bold text-[20px]">Profil Lucky Sessiani</h1>
            <div className="h-2 w-[50px] bg-secondary rounded-full mt-2"></div>
            <p className="text-gray-400 mt-5 text-[13px]">
              Lucky merupakan Psikolog yang memiliki ketertarikan dalam membantu
              individu dewasa muda untuk lebih mengenal dirinya sendiri dan juga
              mengembangkan potensi dalam dirinya. Lucky memiliki misi untuk
              membantu klien mengenal dan juga mengembangkan dirinya.
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
              <p className="text-gray-400 mt-0.5 text-[13px]">SIK: 20130046</p>
            </div>
          </div>
          <div className="mt-2 flex">
            <MdOutlineDomainVerification color="#476edc" size={24} />
            <div className="ml-3">
              <h1 className="text-base font-bold">Nomor Izin Praktik</h1>
              <p className="text-gray-400 mt-0.5 text-[13px]">
                SIPP: 0542-18-2-2
              </p>
            </div>
          </div>
          <div className="h-20"></div>
        </div>
        <div className="flex bg-white fixed bottom-0 justify-center right-1/2 translate-x-1/2 z-30 max-w-md w-full border-gray-icon border-t-[1px]">
          <button
            onClick={() => setShowForm(true)}
            className="flex justify-center items-center my-3 mx-4 bg-blue-500 hover:bg-main-hover rounded-search cursor-pointer w-full"
          >
            <p className="text-white font-bold my-2.5">
              Konseling dengan Lucky
            </p>
          </button>
        </div>
        {taskTransitions(
          (style, item) =>
            item && (
              <animated.div
                style={style}
                className="flex rounded-t-3xl bg-white fixed bottom-0 h-4/5 z-30 max-w-md w-full -ml-4 mr-10 border-gray-icon border-t-[1px] shadow-2xl"
              >
                <div className="mx-4 my-5 w-full overflow-y-scroll">
                  <MdClose
                    className="ml-auto cursor-pointer"
                    onClick={() => setShowForm(false)}
                  />
                  <h2 className="text-gray-800 text-base font-bold mt-2 mb-4">
                    Isi Data Diri
                  </h2>
                  <label className="text-sm">Nama Lengkap</label>
                  <div className="flex shadow rounded-search w-full mb-3">
                    <input
                      type="text"
                      name="name"
                      className="mx-5 my-4 w-full placeholder:text-sm text-sm bg-white"
                      placeholder="Ex: Wahyu Saputra"
                      value={payload.name}
                      onChange={(e) => handleInput(e)}
                      required={true}
                    />
                  </div>
                  <label className="text-sm">Email</label>
                  <div className="flex shadow rounded-search w-full mb-3">
                    <input
                      type="email"
                      name="email"
                      className="mx-5 my-4 w-full placeholder:text-sm text-sm bg-white"
                      placeholder="Ex: wahyusaputra@gmail.com"
                      value={payload.email}
                      onChange={(e) => handleInput(e)}
                      required={true}
                    />
                  </div>
                  <label className="text-sm">Nomor WhatsApp</label>
                  <div className="flex shadow rounded-search w-full mb-3">
                    <input
                      type="number"
                      name="phone"
                      className="mx-5 my-4 w-full placeholder:text-sm text-sm bg-white"
                      placeholder="Ex: 0855xxxxxxxxxx"
                      value={payload.phone}
                      onChange={(e) => handleInput(e)}
                      required={true}
                    />
                  </div>
                  <label className="text-sm">Ajukan Jadwal Konsultasi</label>
                  <div className="flex shadow rounded-search w-full">
                    <input
                      type="datetime-local"
                      name="consultation_date"
                      className="mx-5 my-4 w-full placeholder:text-sm text-sm bg-white"
                      onChange={(e) => handleDateInput(e)}
                      required={true}
                    />
                  </div>
                  <div className="flex mt-1 mb-3">
                    <MdInfoOutline
                      color="rgb(59 130 246)"
                      size={15}
                      className="mr-0.5"
                    />
                    <p className="text-[11px] text-gray-500">
                      Setelah pemesanan, jadwal konsultasi akan disesuaikan
                      dengan Psikolog
                    </p>
                  </div>
                  <label className="text-sm">Keluhan</label>
                  <div className="flex shadow rounded-search w-full mb-3">
                    <textarea
                      className="mx-5 my-4 w-full placeholder:text-sm text-sm bg-white"
                      name="complaint"
                      placeholder="Kamu dapat jelaskan secara singkat keluhan yang kamu alami"
                      onChange={(e) => handleInput(e)}
                      required={true}
                    />
                  </div>
                  <div className="h-16"></div>
                </div>
                <div className="flex bg-white fixed bottom-0 justify-center right-1/2 translate-x-1/2 z-30 max-w-md w-full border-gray-icon border-t-[1px]">
                  <button
                    onClick={() => handleSubmit(payload)}
                    className="flex justify-center items-center my-3 mx-4 bg-blue-500 hover:bg-main-hover rounded-search cursor-pointer w-full"
                  >
                    <p className="text-white font-bold my-2.5">Checkout</p>
                    {!isLoading ? null : (
                      <Image
                        src="/icon/loading.svg"
                        width={24}
                        height={24}
                        alt="loading_icon"
                        style={{ marginLeft: "6px" }}
                      />
                    )}
                  </button>
                </div>
              </animated.div>
            )
        )}
      </div>
    </div>
  );
}
