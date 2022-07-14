/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
export default function Card() {
  return (
    <div className="flex flex-col rounded-search bg-white mt-4">
      <div>
        <img src="/img/job-poster.png" alt="Job Poster" />
      </div>
      <div className="flex flex-col mx-4 my-5">
        <div className="flex">
          <div className="flex jusify-center items-center rounded-search mr-3">
            <Image
              src="/img/job-company.png"
              alt="Job Company"
              height="40"
              width="40"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h3>Civil Constructor Supervisor</h3>
            <p>Harita Nickel</p>
          </div>
        </div>
        <div className="mt-5">
          <div className="flex items-center">
            <Image
              src="/icon/location-icon.svg"
              alt="Location"
              width={10}
              height={10}
            />
            <p className="ml-1">Jakarta, Indonesia</p>
            <span className="w-1 h-1 ml-1 bg-black rounded-full" />
            <p className="text-success ml-1">Fulltime</p>
          </div>
          <div className="text-justify light mt-3">
            Come work at Binar Academy, a leading firm in our industry in the
            metro area. We're pleased to have a 4.8 Jobspot rating. We are
            looking to hire an experienced Product Designer to help us keep
            growing. If you're hard-working and dedicated, Example Co. is an
            ideal place to get ahead. Apply today!
          </div>
        </div>

        <div className="flex justify-between mt-5 relative">
          {/* <div id="toggleMore" className="right-0 bg-white absolute shadow-lg rounded-full bottom-10">
            <div className="flex mx-3 my-3">
              <a className="hover:underline cursor-pointer">
                <p className="mx-1">Formulir</p>
              </a>
              <a className="hover:underline cursor-pointer">
                <p className="mx-2">Email</p>
              </a>
              <a className="hover:underline cursor-pointer">
                <p className="mx-1">WhatsApp</p>
              </a>
            </div>
          </div> */}
          <Link href="/detail">
            <button className="rounded-full border border-black w-1/5">
              <p className="my-2 mx-auto">More</p>
            </button>
          </Link>
          <button className="rounded-full border border-main w-1/4">
            <p className="my-2 mx-auto text-main">Jangan Diklik</p>
          </button>
          <Link href="/detail">
            <button className="rounded-full border bg-main border-main w-1/2">
              <p className="my-2 mx-auto text-white font-bold">Apply</p>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
