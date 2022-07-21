/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Router from "next/router";
import Link from "next/link";

import { useState } from "react";

export default function Login() {
  const [eye, setEye] = useState(true);

  const togglePassword = (e) => {
    e.preventDefault();
    setEye(!eye)
  }

  return (
    <>
      <div className="flex flex-col min-h-screen max-h-full bg-white">
        <div className="mx-4 my-5">
          <div
            onClick={() => Router.back()}
            className="flex justify-center items-center bg-main-blur w-9 h-9 rounded-search cursor-pointer"
          >
            <Image
              src="/icon/arrow-back-icon.svg"
              alt="Back"
              width={17.5}
              height={17.5}
            />
          </div>
          <div className="mt-6 leading-tight">
            <h1 className="text-main">Hello!</h1>
            <h1 className="text-main">Let's Regist</h1>
            <h1 className="text-main">Your Account</h1>
          </div>
          <div className="flex flex-col mt-6">
            <div className="flex shadow rounded-search w-full mb-3">
              <input
                type="text"
                className="mx-5 my-4 w-full placeholder:text-search text-search"
                placeholder="Nama Lengkap"
              />
            </div>
            <div className="flex shadow rounded-search w-full mb-3">
              <input
                type="email"
                className="mx-5 my-4 w-full placeholder:text-search text-search"
                placeholder="Email"
              />
            </div>
            <div className="flex shadow rounded-search w-full mb-3">
              <input
                type="number"
                className="mx-5 my-4 w-full placeholder:text-search text-search"
                placeholder="Nomor Telepon"
              />
            </div>
            <div className="flex shadow rounded-search w-full mb-3">
              <div className="mx-5 my-4 w-full flex">
                <input
                  type={eye ? "password" : "text"}
                  className="w-full placeholder:text-search text-search"
                  placeholder="Password"
                />
                <div className="h-4 w-4 cursor-pointer" onClick={togglePassword}>
                  <Image
                    src={eye ? "/icon/eye-icon.svg" : "/icon/eye-close-icon.svg"}
                    alt="eye-icon"
                    width={18}
                    height={18}
                  />
                </div>
              </div>
            </div>
          </div>
          <button className="flex justify-center items-center mt-6 bg-main rounded-search cursor-pointer w-full">
            <p className="text-white bold my-3">Sign Up</p>
          </button>
          <div className="flex justify-center">
            <p className="mt-3 font-normal">
              Have an account?{" "}
              <Link href="/login" passHref={true}>
                <span className="underline cursor-pointer">Login</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
