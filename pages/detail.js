/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Router from "next/router";

export default function detail() {
  const func = (e) => {
    // const applyBtn = document.getElementById("applyButton");
    // applyBtn.addEventListener("click", function (e) {
    e.preventDefault();
    const toggleMore = document.getElementById("toggleMore");
    if (toggleMore.classList.contains("hidden")) {
      toggleMore.classList.remove("hidden");
    } else {
      toggleMore.classList.add("hidden");
    }
    // });
  };

  const toggleDonation = (e) => {
    e.preventDefault();
    const toggleDonation = document.getElementById("toggleDonation");
    if (toggleDonation.classList.contains("hidden")) {
      toggleDonation.classList.remove("hidden");
    } else {
      toggleDonation.classList.add("hidden");
    }
    // });
  }

  const copyToClipboard = () => {
    /* Get the text field */
    const copyText = document.getElementById("emailCopy").classList.value;
    const alert = document.getElementById("alert");

    /* Copy the text inside the element */
    navigator.clipboard.writeText(copyText);

    /* Alert the copied text */
    alert.classList.remove("hidden");

    setTimeout(() => {
      alert.classList.add("hidden");
    }, 1500);
  };

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

          <div className="flex flex-col mt-10">
            <div className="flex">
              <div className="flex jusify-center items-center rounded-search mr-3">
                <img
                  src="https://www.lokersemar.id/wp-content/uploads/2022/03/Lowongan-Kerja-Junior-Web-Graphic-Designer-di-Workbite-100x87.png"
                  alt="Job Company"
                  height="40"
                  width="40"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h3>Web and Graphic Design Intern</h3>
                <p>Workbite</p>
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
                <p className="ml-1">Kota Semarang, Indonesia</p>
                <span className="w-1 h-1 ml-1 bg-black rounded-full" />
                <p className="text-success ml-1">Internship</p>
              </div>
              <div className="text-justify light mt-3">
                Workbite is a boutique digital consultancy and outsourcing
                company established in 2007. We offer personalised consultancy
                services and staffing to fulfill your custom digital, business
                process, and transformation requirements. Within our three
                business pillars: Digital Marketing, Consultancy and
                Outsourcing, we are committed to serving and adding value to our
                customers.
              </div>
            </div>

            <div className="mt-5">
              <h3>Job Poster</h3>
              <img
                className="mt-2 rounded-search"
                src="/img/job-poster.png"
                alt="Job Poster"
              />
            </div>

            <div className="mt-5">
              <h3>Ringkasan</h3>
              <div className="mt-2">
                <div className="flex items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-black mr-1"></div>
                  <p className="w-24">Tingkat Pendidikan</p>
                  <p>: D3, S1</p>
                </div>
                <div className="flex items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-black mr-1"></div>
                  <p className="w-24">Status Kerja</p>
                  <p>: Magang</p>
                </div>
                <div className="flex items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-black mr-1"></div>
                  <p className="w-24">Tipe Pekerjaan</p>
                  <p>: Full-Time</p>
                  <p>: Remote, Freelaance, Internship, Part-Time</p>
                </div>
                <div className="flex items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-black mr-1"></div>
                  <p className="w-24">Besaran Gaji</p>
                  <p>: Kompetitif</p>
                </div>
                <div className="flex items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-black mr-1"></div>
                  <p className="w-24">Bidang Pekerjaan</p>
                  <p>: Accounting</p>
                </div>
                <div className="flex items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-black mr-1"></div>
                  <p className="w-24">Industri</p>
                  <p>: Perbankan</p>
                </div>
                <div className="flex items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-black mr-1"></div>
                  <p className="w-24">Lokasi Kerja</p>
                  <p>: Kota Semarang, Jawa Tengah</p>
                </div>
              </div>
            </div>

            <div className="mt-5">
              <h3>Deskripsi Pekerjaan</h3>
              <div className="mt-2">
                <div className="flex items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-black mr-1"></div>
                  <p className="w-full">
                    Assist Web and Graphic Design team with design and update
                    requirements.
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-black mr-1"></div>
                  <p className="w-full">
                    Able to start on both print and digital materials.
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-black mr-1"></div>
                  <p className="w-full">
                    Assist in digital marketing activities such as EDM,
                    advertising and social media marketing
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-black mr-1"></div>
                  <p className="w-full">
                    Come up with attractive layouts and designs with marketing
                    in mind.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-5">
              <h3>Benefits</h3>
              <div className="mt-2">
                <div className="flex items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-black mr-1"></div>
                  <p className="w-full">Paid Internship</p>
                </div>
                <div className="flex items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-black mr-1"></div>
                  <p className="w-full">Certificate</p>
                </div>
                <div className="flex items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-black mr-1"></div>
                  <p className="w-full">Experience working at startup</p>
                </div>
              </div>
            </div>

            <div className="mt-5">
              <h3>Syarat Pekerjaan</h3>
              <div className="mt-2">
                <div className="flex items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-black mr-1"></div>
                  <p className="w-full">
                    Final year student / fresh graduate in a related field
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-black mr-1"></div>
                  <p className="w-full">High initiative and commitment</p>
                </div>
                <div className="flex items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-black mr-1"></div>
                  <p className="w-full">Have a personal laptop</p>
                </div>
                <div className="flex items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-black mr-1"></div>
                  <p className="w-full">Good skills in web and graphics</p>
                </div>
                <div className="flex items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-black mr-1"></div>
                  <p className="w-full">Location in Semarang</p>
                </div>
              </div>
            </div>

            <div className="flex justify-between mt-5 relative">
              <div id="toggleMore" className="hidden">
                {/* Copied */}
                <div
                  id="alert"
                  className="bg-green-200 px-3 py-1 rounded-3xl max-w-max mb-1 right-0 bottom-22 absolute transition-all duration-150 hidden"
                >
                  <p className="text-green-600">Copied!</p>
                </div>

                <div
                  id="toggleMore"
                  className="bg-white shadow-lg rounded-full bottom-10 right-0 absolute"
                >
                  <div className="flex mx-3 my-3">
                    <a
                      href="https://google.com"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="hover:underline cursor-pointer flex items-center mr-2"
                    >
                      <Image
                        src="/icon/internet-icon.svg"
                        height={23}
                        width={23}
                        alt="web"
                      />
                      <p className="ml-1">Via Web</p>
                    </a>
                    <a
                      href="mailto:hr@jobspot.id"
                      className="hover:underline cursor-pointer flex items-center mr-2"
                    >
                      <Image
                        src="/icon/mail-icon.svg"
                        height={23}
                        width={23}
                        alt="web"
                      />
                      <p className="ml-1">Via Email</p>
                    </a>
                    <a
                      onClick={copyToClipboard}
                      className="hover:underline cursor-pointer flex items-center mr-2"
                    >
                      <Image
                        src="/icon/copy-icon.svg"
                        height={23}
                        width={23}
                        alt="web"
                      />
                      <p id="emailCopy" className="hr@jobspot.id">
                        Copy Email
                      </p>
                    </a>
                  </div>
                </div>
              </div>
              <div className="hidden" id="toggleDonation">
                <div
                  className="bg-white shadow-lg rounded-full bottom-10 left-0 absolute"
                >
                  <div className="flex mx-3 my-3">
                    <a
                      href="https://google.com"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="hover:underline cursor-pointer flex items-center mr-2"
                    >
                      <Image
                        src="/icon/click-icon.svg"
                        height={23}
                        width={23}
                        alt="web"
                      />
                      <p className="ml-1">Donasi Klik</p>
                    </a>
                    <a
                      href="mailto:hr@jobspot.id"
                      className="hover:underline cursor-pointer flex items-center mr-2"
                    >
                      <Image
                        src="/icon/coffee-icon.svg"
                        height={23}
                        width={23}
                        alt="web"
                      />
                      <p className="ml-1">Donasi Kopi</p>
                    </a>
                  </div>
                </div>
              </div>
              <button
                className="rounded-full border border-black w-1/5 mr-2"
                onClick={toggleDonation}
              >
                <p className="my-2 mx-auto">Donasi</p>
              </button>
              <button
                id="applyButton"
                onClick={func}
                className="rounded-full border bg-main border-main w-full"
              >
                <p className="my-2 mx-auto text-white font-bold">Apply</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
