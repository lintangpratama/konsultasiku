/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import Router from "next/router";

export default function Login() {
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
            <h1 className="text-main">Hello Again!</h1>
            <h1 className="text-main">Welcome</h1>
            <h1 className="text-main">Back</h1>
          </div>
          <div className="flex flex-col mt-6">
            <div className="flex shadow rounded-search w-full mb-3">
              <input
                type="email"
                className="mx-5 my-4 w-full placeholder:text-search text-search"
                placeholder="Email"
              />
            </div>
            <div className="flex shadow rounded-search w-full mb-3">
              <input
                type="password"
                className="mx-5 my-4 w-full placeholder:text-search text-search"
                placeholder="Password"
              />
            </div>
          </div>
          <button className="flex justify-center items-center mt-6 bg-main rounded-search cursor-pointer w-full">
            <p className="text-white bold my-3">Login</p>
          </button>
          <div className="flex justify-center">
            <p className="mt-3 font-normal">
              Don't have an account yet?{" "}
              <Link href="/register" passHref={true}>
                <span className="underline cursor-pointer">Sign Up</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
