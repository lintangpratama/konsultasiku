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
            <div className="flex mt-5 bg-white rounded-search">
              <div className="mx-4 my-5 w-full">
                <h3 className="mb-4">Kategori</h3>
                <div className="grid grid-cols-4 justify-between gap-9 mx-5 mt-1 mb-2">
                  <div>
                    <div className="flex w-14 h-14 justify-center align-center shadow-lg rounded-search">
                      <div className="my-auto mx-auto">
                        <div className="flex justify-center rounded-box">
                          <Image
                            src="/icon/lang-icon.svg"
                            alt="language icon"
                            width={23}
                            height={23}
                            className="mx-auto"
                          />
                        </div>
                      </div>
                    </div>
                    <p className="flex mt-1.5 justify-center">Bahasa</p>
                  </div>
                  <div>
                    <div className="flex w-14 h-14 justify-center align-center shadow-lg rounded-search">
                      <div className="my-auto mx-auto">
                        <div className="flex justify-center rounded-box">
                          <Image
                            src="/icon/biz-icon.svg"
                            alt="biz icon"
                            width={23}
                            height={23}
                            className="mx-auto"
                          />
                        </div>
                      </div>
                    </div>
                    <p className="flex mt-1.5 justify-center">Bisnis</p>
                  </div>
                  <div>
                    <div className="flex w-14 h-14 justify-center align-center shadow-lg rounded-search">
                      <div className="my-auto mx-auto">
                        <div className="flex justify-center rounded-box">
                          <Image
                            src="/icon/beauty-icon.svg"
                            alt="beauty icon"
                            width={23}
                            height={23}
                            className="mx-auto"
                          />
                        </div>
                      </div>
                    </div>
                    <p className="flex mt-1.5 justify-center">Kecantikan</p>
                  </div>
                  <div>
                    <div className="flex w-14 h-14 justify-center align-center shadow-lg rounded-search">
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
                  <div>
                    <div className="flex w-14 h-14 justify-center align-center shadow-lg rounded-search">
                      <div className="my-auto mx-auto">
                        <div className="flex justify-center rounded-box">
                          <Image
                            src="/icon/service-icon.svg"
                            alt="service icon"
                            width={23}
                            height={23}
                            className="mx-auto"
                          />
                        </div>
                      </div>
                    </div>
                    <p className="flex mt-1.5 justify-center">Jasa</p>
                  </div>
                  <div>
                    <div className="flex w-14 h-14 justify-center align-center shadow-lg rounded-search">
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
                    <p className="flex mt-1.5 justify-center">Hobi</p>
                  </div>
                  <div>
                    <div className="flex w-14 h-14 justify-center align-center shadow-lg rounded-search">
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
                  <div>
                    <div className="flex w-14 h-14 justify-center align-center shadow-lg rounded-search">
                      <div className="my-auto mx-auto">
                        <div className="flex justify-center rounded-box">
                          <Image
                            src="/icon/self-icon.svg"
                            alt="self icon"
                            width={23}
                            height={23}
                            className="mx-auto"
                          />
                        </div>
                      </div>
                    </div>
                    <p className="flex mt-1.5 justify-center">Improvement</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-4 my-5 mb-20 mt-56">
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
