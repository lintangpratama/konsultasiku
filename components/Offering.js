import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Offering() {
  return (
    <div className="flex w-full justify-evenly mt-6">
      <Link href="/conselor">
        <div className="cursor-pointer hover:underline">
          <div className="flex justify-center mx-auto items-center rounded-xl bg-blue-100 w-[50px] h-[50px]">
            <Image
              src="/img/konsultasiku-illustration.png"
              width={40}
              height={40}
              alt="consultation"
            />
          </div>
          <p className="text-center text-[11px] mt-1 max-w-[75px]">
            Janji Tatap Muka
          </p>
        </div>
      </Link>
      <Link href="/conselor">
        <div className="cursor-pointer hover:underline">
          <div className="flex justify-center mx-auto items-center rounded-xl bg-blue-100 w-[50px] h-[50px]">
            <Image
              src="/img/vidcall.png"
              width={40}
              height={40}
              alt="consultation"
            />
          </div>
          <p className="text-center text-[11px] mt-1 max-w-[75px]">
            Voice/Video Call
          </p>
        </div>
      </Link>
      <div className="cursor-pointer hover:underline">
        <div className="flex justify-center mx-auto items-center rounded-xl bg-blue-100 w-[50px] h-[50px]">
          <Image
            src="/img/choose-conselor.png"
            width={40}
            height={40}
            alt="consultation"
          />
        </div>
        <p className="text-center text-[11px] mt-1 max-w-[75px]">
          Paket Konseling
        </p>
      </div>
    </div>
  );
}
