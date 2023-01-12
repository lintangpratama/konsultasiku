import Link from "next/link";
import Image from "next/image";
import { MdVoiceChat, MdOutlineHistory, MdOutlineAccountCircle } from "react-icons/md";

export default function MenuBar(props) {
  const { role, currentPage } = props;
  return (
    <div className="flex bg-white fixed bottom-0 justify-around z-30 max-w-md w-full -ml-4 mr-10 border-gray-icon border-t-[1px]">
      <Link
        href={role === "pengurus" ? "/pengurus/transaksi" : "/"}
        passHref={true}
      >
        <button className="px-3 py-1 w-1/3 max-w-bar cursor-pointer mt-1">
          <MdVoiceChat color="#476edc" size={24} className="mx-auto" />
          <p className="text-main font-bold">Konseling</p>
        </button>
      </Link>

      <Link
        href={role === "pengurus" ? "/pengurus/pesan" : "/"}
        passHref={true}
      >
        <button className="px-3 py-1 w-1/3 max-w-bar cursor-pointer mt-1">
          <MdOutlineHistory color="rgba(156, 163, 175, 1)" size={24} className="mx-auto" />
          <p className="text-gray-400">Riwayat</p>
        </button>
      </Link>
      <Link
        href={role === "pengurus" ? "/pengurus/profil" : "/"}
        passHref={true}
      >
        <button className="px-3 py-1 w-1/3 max-w-bar cursor-pointer mt-1">
          <MdOutlineAccountCircle color="rgba(156, 163, 175, 1)" size={24} className="mx-auto" />
          <p className="text-gray-400">Profil</p>
        </button>
      </Link>
    </div>
  );
}
