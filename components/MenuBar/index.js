import Link from "next/link";
import {
  MdVoiceChat,
  MdOutlineAccountCircle,
  MdPersonSearch,
} from "react-icons/md";

export default function MenuBar(props) {
  const { currentPage } = props;
  return (
    <div className="flex bg-white fixed bottom-0 justify-around z-30 max-w-md w-full -ml-4 mr-10 border-gray-icon border-t-[1px]">
      <Link href="/" passHref={true}>
        <button className="px-3 py-1 w-1/3 max-w-bar cursor-pointer mt-1">
          <MdVoiceChat
            color={currentPage === "/" ? "#476edc" : "rgba(156, 163, 175, 1)"}
            size={24}
            className="mx-auto"
          />
          <p
            className={
              currentPage === "/" ? "text-main font-bold" : "text-gray-400"
            }
          >
            Konseling
          </p>
        </button>
      </Link>

      <Link href="/conselor" passHref={true}>
        <button className="px-3 py-1 w-1/3 max-w-bar cursor-pointer mt-1">
          <MdPersonSearch
            color={
              currentPage === "/conselor" ? "#476edc" : "rgba(156, 163, 175, 1)"
            }
            size={24}
            className="mx-auto"
          />
          <p
            className={
              currentPage === "/conselor"
                ? "text-main font-bold"
                : "text-gray-400"
            }
          >
            Konselor
          </p>
        </button>
      </Link>
    </div>
  );
}
