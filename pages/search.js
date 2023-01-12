import Card from "components/Card";
import MenuBar from "components/MenuBar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex flex-col min-h-screen max-h-full bg-gray-200">
        <div className="bg-main h-jumbotron-search">
          <div className="mx-4 my-5">
            <div
              onClick={() => Router.back()}
              className="flex justify-center items-center bg-white w-9 h-9 rounded-search cursor-pointer"
            >
              <Image
                src="/icon/arrow-back-icon.svg"
                alt="Back"
                width={17.5}
                height={17.5}
              />
            </div>
            <div className="flex w-full mt-5 bg-white rounded-search">
              <div className="flex w-full mx-4 my-2">
                <Image
                  src="/icon/search-icon.svg"
                  alt="logo"
                  width={17}
                  height={17}
                />
                <select
                  placeholder='Cari "Backend Engineer"'
                  className="w-full ml-3 text-search text-black placeholder:text-search placeholder:text-black"
                >
                  <option value="">Pilih Provinsi</option>
                </select>
              </div>
            </div>
            <div className="flex w-full mt-5 bg-white rounded-search">
              <div className="flex w-full mx-4 my-2">
                <Image
                  src="/icon/search-icon.svg"
                  alt="logo"
                  width={17}
                  height={17}
                />
                <select
                  placeholder='Cari "Backend Engineer"'
                  className="w-full ml-3 text-search text-black placeholder:text-search placeholder:text-black"
                >
                  <option value="">Pilih Kabupaten</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-4 my-5 mb-20 mt-1">
          <div className="flex justify-between mt-5">
            <h3 className="mb-2">Lowongan Kerja</h3>
            <p className="text-main underline">View All</p>
          </div>
          <Card />
          <MenuBar />
        </div>
      </div>
    </>
  );
}
