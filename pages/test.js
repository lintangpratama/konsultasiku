import Card from "components/Card";
import MenuBar from "components/MenuBar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex flex-col min-h-screen max-h-full bg-gray-200">
        <div className="bg-main h-jumbotron">
          <div className="mx-4 my-5">
            <div className="flex justify-between">
              <Image src="/img/logo.png" alt="logo" width={61} height={14} />
              <Link href="/login">
                <p className="text-white hover:underline cursor-pointer">
                  Login
                </p>
              </Link>
            </div>
            <div className="flex w-full mt-5 bg-white rounded-search">
              <div className="flex w-full mx-4 my-2">
                <Image
                  src="/icon/search-icon.svg"
                  alt="logo"
                  width={17}
                  height={17}
                />
                <input
                  type="search"
                  placeholder='Cari "Backend Engineer"'
                  className="w-full ml-3 text-search text-black placeholder:text-search placeholder:text-black"
                />
              </div>
            </div>

            <Link href="/search" passHref={true}>
              <div className="flex items-center mt-3 hover:underline text-white cursor-pointer">
                <Image
                  src="/icon/location-icon-white.svg"
                  width={16}
                  height={16}
                  alt="location-icon"
                />
                <p className="text-white ml-1 mr-1">Cari berdasarkan lokasi</p>
                <Image
                  src="/icon/chevron-right.svg"
                  width={12}
                  height={12}
                  alt="down-icon"
                />
              </div>
            </Link>
            <div className="flex mt-5 bg-white rounded-search">
              <div className="mx-4 my-5 w-full">
                <h3 className="mb-4">Kategori</h3>
                <div className="grid grid-cols-4 justify-between gap-5 tablet:gap-9 mt-1 mb-2">
                  <div className="cursor-pointer hover:underline">
                    <div className="flex w-11 h-11 tablet:w-14 tablet:h-14 justify-center align-center shadow-lg rounded-search mx-auto">
                      <div className="my-auto mx-auto">
                        <div className="flex justify-center rounded-box">
                          <Image
                            src="/icon/money-icon.svg"
                            alt="language icon"
                            width={23}
                            height={23}
                            className="mx-auto"
                          />
                        </div>
                      </div>
                    </div>
                    <p className="flex mt-1.5 justify-center">Keuangan</p>
                  </div>
                  <div className="cursor-pointer hover:underline">
                    <div className="flex w-11 h-11 tablet:w-14 tablet:h-14 justify-center align-center shadow-lg rounded-search mx-auto">
                      <div className="my-auto mx-auto">
                        <div className="flex justify-center rounded-box">
                          <Image
                            src="/icon/manufacture-icon.svg"
                            alt="manufacture icon"
                            width={23}
                            height={23}
                            className="mx-auto"
                          />
                        </div>
                      </div>
                    </div>
                    <p className="flex mt-1.5 justify-center">Manufaktur</p>
                  </div>
                  <div className="cursor-pointer hover:underline">
                    <div className="flex w-11 h-11 tablet:w-14 tablet:h-14 justify-center align-center shadow-lg rounded-search mx-auto">
                      <div className="my-auto mx-auto">
                        <div className="flex justify-center rounded-box">
                          <Image
                            src="/icon/engineering-icon.svg"
                            alt="engineering icon"
                            width={23}
                            height={23}
                            className="mx-auto"
                          />
                        </div>
                      </div>
                    </div>
                    <p className="flex mt-1.5 justify-center">Teknik</p>
                  </div>
                  <div className="cursor-pointer hover:underline">
                    <div className="flex w-11 h-11 tablet:w-14 tablet:h-14 justify-center align-center shadow-lg rounded-search mx-auto">
                      <div className="my-auto mx-auto">
                        <div className="flex justify-center rounded-box">
                          <Image
                            src="/icon/tech-icon.svg"
                            alt="tech icon"
                            width={23}
                            height={23}
                            className="mx-auto"
                          />
                        </div>
                      </div>
                    </div>
                    <p className="flex mt-1.5 justify-center">Teknologi</p>
                  </div>
                  <div className="cursor-pointer hover:underline">
                    <div className="flex w-11 h-11 tablet:w-14 tablet:h-14 justify-center align-center shadow-lg rounded-search mx-auto">
                      <div className="my-auto mx-auto">
                        <div className="flex justify-center rounded-box">
                          <Image
                            src="/icon/school-icon.svg"
                            alt="school icon"
                            width={23}
                            height={23}
                            className="mx-auto"
                          />
                        </div>
                      </div>
                    </div>
                    <p className="flex mt-1.5 justify-center">Pendidikan</p>
                  </div>
                  <div className="cursor-pointer hover:underline">
                    <div className="flex w-11 h-11 tablet:w-14 tablet:h-14 justify-center align-center shadow-lg rounded-search mx-auto">
                      <div className="my-auto mx-auto">
                        <div className="flex justify-center rounded-box">
                          <Image
                            src="/icon/hobby-icon.svg"
                            alt="hobby icon"
                            width={23}
                            height={23}
                            className="mx-auto"
                          />
                        </div>
                      </div>
                    </div>
                    <p className="flex mt-1.5 justify-center">Media</p>
                  </div>
                  <div className="cursor-pointer hover:underline">
                    <div className="flex w-11 h-11 tablet:w-14 tablet:h-14 justify-center align-center shadow-lg rounded-search mx-auto">
                      <div className="my-auto mx-auto">
                        <div className="flex justify-center rounded-box">
                          <Image
                            src="/icon/marketing-icon.svg"
                            alt="marketing icon"
                            width={23}
                            height={23}
                            className="mx-auto"
                          />
                        </div>
                      </div>
                    </div>
                    <p className="flex mt-1.5 justify-center">Marketing</p>
                  </div>
                  <div className="cursor-pointer hover:underline">
                    <div className="flex w-11 h-11 tablet:w-14 tablet:h-14 justify-center align-center shadow-lg rounded-search mx-auto">
                      <div className="my-auto mx-auto">
                        <div className="flex justify-center rounded-box">
                          <Image
                            src="/icon/hr-icon.svg"
                            alt="hr icon"
                            width={23}
                            height={23}
                            className="mx-auto"
                          />
                        </div>
                      </div>
                    </div>
                    <p className="flex mt-1.5 justify-center">SDM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-4 my-5 mb-20 mt-60">
          <div className="flex justify-between mt-5">
            <h3 className="mb-2">Feeds</h3>
            <p className="text-main underline">View All</p>
          </div>
          <Card />
          <MenuBar />
        </div>
      </div>
    </>
  );
}
