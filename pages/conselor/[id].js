import React, { useEffect } from "react";
import Image from "next/image";
import { useTransition, animated } from "react-spring";
import { useState } from "react";
import axios from "axios";
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
import Bundle from "components/Bundle";
import { useRouter } from "next/router";

export default function Hikmatun() {
  const router = useRouter();
  const { id } = router.query;
  const [conselorData, setConselorData] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [payload, setPayload] = useState({
    name: "",
    phone: "",
    email: "",
    psycolog_name: "",
    amount: "",
    consultation_date: "",
    complaint: "",
  });

  useEffect(() => {
    try {
      const fetchData = () => {
        axios
          .get(`https://api.andil.id/konsultasiku/conselor/${id}`)
          .then((res) => {
            setConselorData(res.data.conselors.ResponseConselor[0]);
          })
          .then(() => {
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
          });
      };
      fetchData();
    } catch (err) {
      console.log(err);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = () => {
    if (
      payload.name === "" ||
      payload.phone === "" ||
      payload.email === "" ||
      payload.consultation_date.length < 23 ||
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
      console.log(payload);
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
      psycolog_name: conselorData.nama_conselor,
      amount: conselorData.harga,
    });
  };

  const handleDateInput = (e) => {
    const date = document.getElementsByName("date")[0].value;
    const time = document.getElementsByName("time")[0].value;
    const datetime = `${date}T${time}:00.000Z`;
    setPayload({
      ...payload,
      consultation_date: datetime,
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
                src={`/img/${
                  conselorData?.nama_conselor ===
                  "Lucky Ade Sessiani, M.Psi., Psikolog"
                    ? "lucky"
                    : conselorData?.nama_conselor ===
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
            <h1 className="text-base font-bold mt-4 flex text-center">
              {conselorData?.nama_conselor}
              <MdVerified className="ml-2" color="#476edc" size={22} />
            </h1>
            <div className="flex justify-center flex-wrap">
              {conselorData?.jabatan_conselor.map((data) => (
                <>
                  <button className="right-4 flex mt-2 mr-2 justify-center items-center bg-[#ecf0fb]  rounded-full cursor-pointer px-[8px]">
                    <p className="text-[#5a83fe] text-xs font-bold my-[2px]">
                      {data}
                    </p>
                  </button>
                </>
              ))}
            </div>
          </div>
          <div className="mt-12">
            <h1 className="font-bold text-[20px]">Profil Konselor</h1>
            <div className="h-2 w-[50px] bg-secondary rounded-full mt-2"></div>
            <p className="text-gray-400 mt-5 text-[13px]">
              {conselorData?.description}
            </p>
          </div>
          <Bundle />
          <div className="mt-5 flex">
            <MdVerifiedUser color="#476edc" size={24} />
            <div className="ml-3">
              <h1 className="text-base font-bold">Nomor HIMPSI</h1>
              <p className="text-gray-400 mt-0.5 text-[13px]">
                {" "}
                {conselorData?.no_himpsi}
              </p>
            </div>
          </div>
          <div className="mt-2 flex">
            <MdOutlineDomainVerification color="#476edc" size={24} />
            <div className="ml-3">
              <h1 className="text-base font-bold">Nomor Izin Praktik</h1>
              <p className="text-gray-400 mt-0.5 text-[13px]">
                {conselorData?.no_izin}
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
            <p className="text-white font-bold my-2.5">Konseling Sekarang</p>
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
                  <label className="text-sm">Ajukan Tanggal Konsultasi</label>
                  <div className="flex shadow rounded-search w-full mb-3">
                    <input
                      type="date"
                      name="date"
                      className="mx-5 my-4 w-full placeholder:text-sm text-sm bg-white"
                      onChange={(e) => handleDateInput(e)}
                      required={true}
                    />
                  </div>
                  <label className="text-sm">Ajukan Jam Konsultasi</label>
                  <div className="flex shadow rounded-search w-full">
                    <input
                      type="time"
                      name="time"
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
                  <div className="h-28"></div>
                </div>
                <div className="flex flex-col bg-white fixed bottom-0 justify-center right-1/2 translate-x-1/2 z-30 max-w-md w-full border-gray-icon border-t-[1px]">
                  <div className="mt-2 text-right mx-4">
                    <p className="text-[12px] text-gray-500">
                      Total Harga (Sesi 60 menit)
                    </p>
                    <p className="text-sm font-bold">
                      {"Rp" + conselorData?.harga}
                    </p>
                  </div>
                  <button
                    onClick={() => handleSubmit(payload)}
                    className="flex justify-center items-center my-3 mx-4 bg-blue-500 hover:bg-main-hover rounded-search cursor-pointer"
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

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}
