/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Router from "next/router";
import Link from "next/link";

import { useState } from "react";

export default function Login() {
  const [eye, setEye] = useState(true);

  const togglePassword = (e) => {
    e.preventDefault();
    setEye(!eye);
  };

  return (
    <>
      <div className="flex flex-col min-h-screen max-h-full bg-white">
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
          <div className="mt-6 leading-tight">
            <h1 className="text-main">Halo!</h1>
            <h1 className="text-gray-800">Ayo Daftarkan</h1>
            <h1 className="text-gray-800">Akunmu</h1>
          </div>
          <div className="flex flex-col mt-6">
            <div className="flex shadow rounded-search w-full mb-3">
              <input
                type="text"
                className="mx-5 my-4 w-full placeholder:text-sm text-sm"
                placeholder="Nama Lengkap"
              />
            </div>
            <div className="flex shadow rounded-search w-full mb-3">
              <input
                type="email"
                className="mx-5 my-4 w-full placeholder:text-sm text-sm"
                placeholder="Email"
              />
            </div>
            <div className="flex shadow rounded-search w-full mb-3">
              <input
                type="number"
                className="mx-5 my-4 w-full placeholder:text-sm text-sm"
                placeholder="Nomor Telepon"
              />
            </div>
            <div className="flex shadow rounded-search w-full mb-3">
              <div className="mx-5 my-4 w-full flex">
                <input
                  type={eye ? "password" : "text"}
                  className="w-full placeholder:text-sm text-sm"
                  placeholder="Password"
                />
                <div
                  className="h-4 w-4 cursor-pointer"
                  onClick={togglePassword}
                >
                  <Image
                    src={
                      eye ? "/icon/eye-icon.svg" : "/icon/eye-close-icon.svg"
                    }
                    alt="eye-icon"
                    width={18}
                    height={18}
                  />
                </div>
              </div>
            </div>
          </div>
          <button className="flex justify-center items-center mt-6 bg-blue-500 hover:bg-main-hover rounded-search cursor-pointer w-full">
            <p className="text-white font-bold my-3">Daftar</p>
          </button>
          <div className="flex justify-center">
            <p className="mt-3 font-normal">
              Sudah punya akun?{" "}
              <Link href="/login" passHref={true}>
                <span className="underline cursor-pointer">Masuk</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
