"use client";
import React from "react";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const TestimonialSlider = () => {
  return (
    <section id="testimonial" className="bg-tranasprent">
      <div className="max-w-6xl mx-8 md:mx-10 lg:mx-20 xl:mx-auto py-20">
        <div className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
          <div className="mb-12 md:mb-16 md:text-center">
            <div className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] text-center mx-auto ">
              <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
              <h1 className="Welcome-text text-[13px] ">Words from Others</h1>
            </div>
            <h1 className="mb-5 text-5xl font-semibold bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent  text-center md:text-center md:text-5xl">
              It&apos;s not just us.
            </h1>
            <p className="text-xl text-gray-100 text-center md:text-center md:text-2xl">
              Heres what others have to say about us.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          <ul className="space-y-8">
            <li className="text-sm leading-6">
              <div className="relative group">
                <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-amber-500 to-pink-500 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                <a
                  href="https://twitter.com/MdReanAhmed1"
                  className="cursor-pointer"
                >
                  <div className="relative p-6 space-y-6 leading-none rounded-lg bg-black ring-1 ring-gray-900/5">
                    <div className="flex items-center space-x-4">
                      {" "}
                      <img
                        src="https://pbs.twimg.com/profile_images/1608505649662681088/Zj3txNWo_400x400.jpg"
                        className="w-12 h-12 bg-center bg-cover border rounded-full"
                        alt="rean"
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                        Dr Rean Ahmed 
                        </h3>
                        <p className="text-gray-500 text-md">
                          Doctor
                        </p>
                      </div>
                    </div>
                    <p className="leading-normal text-gray-300 text-md">
                    UPthrift has transformed our online presence with their exceptional Content Marketing services. Our brand now speaks volumes, thanks to their strategic approach and creative content!
                    </p>
                  </div>
                </a>
              </div>
            </li>
            <li className="text-sm leading-6">
              <div className="relative group">
                <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-amber-500 to-pink-500 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                <a
                  href="https://twitter.com/Bullback2025"
                  className="cursor-pointer"
                >
                  <div className="relative p-6 space-y-6 leading-none rounded-lg bg-black ring-1 ring-gray-900/5">
                    <div className="flex items-center space-x-4">
                      <img
                        src="https://pbs.twimg.com/profile_images/1721809225423454208/A8u6cEtT_400x400.jpg"
                        className="w-12 h-12 bg-center bg-cover border rounded-full"
                        alt="Shakil Khan"
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                        Shakil Khan
                        </h3>
                        <p className="text-gray-500 text-md">CEO of Rekto</p>
                      </div>
                    </div>
                    <p className="leading-normal text-gray-300 text-md">
                    Web Development excellence at its best! UPthrift delivered a website that not only looks stunning but also functions flawlessly. Their expertise in creating user-friendly interfaces is truly commendable.
                    </p>
                  </div>
                </a>
              </div>
            </li>
            <li className="text-sm leading-6">
              <div className="relative group">
                <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-amber-500 to-pink-500 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                <a
                  href=""
                  className="cursor-pointer"
                >
                  <div className="relative p-6 space-y-6 leading-none rounded-lg bg-black ring-1 ring-gray-900/5">
                    <div className="flex items-center space-x-4">
                      <img
                        src="https://pbs.twimg.com/profile_images/1754745467387232256/MsY_M5wL_400x400.jpg"
                        className="w-12 h-12 bg-center bg-cover border rounded-full"
                        alt="Kanye West"
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                        Asibur Rahman
                        </h3>
                        <p className="text-gray-500 text-md">
                          Run a local business
                        </p>
                      </div>
                    </div>
                    <p className="leading-normal text-gray-300 text-md">
                    UPthrift&apos;s Graphic Design team turned our ideas into visually stunning realities. The creativity and professionalism they brought to our marketing collateral were beyond our expectations.
                    </p>
                  </div>
                </a>
              </div>
            </li>
            <li className="text-sm leading-6">
              <div className="relative group">
                <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-amber-500 to-pink-500 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                <a
                  href=""
                  className="cursor-pointer"
                >
                  <div className="relative p-6 space-y-6 leading-none rounded-lg bg-black ring-1 ring-gray-900/5">
                    <div className="flex items-center space-x-4">
                      <img
                        src="https://pbs.twimg.com/profile_images/1670905743619268609/pYItlWat_400x400.jpg"
                        className="w-12 h-12 bg-center bg-cover border rounded-full"
                        alt="Mr Ryan"
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                        Mr Ryan
                        </h3>
                        <p className="text-gray-500 text-md">CEO of bento</p>
                      </div>
                    </div>
                    <p className="leading-normal text-gray-300 text-md">
                    UPthrift&apos;s Web Development expertise is unparalleled. They not only built a website that reflects our brand identity but also ensured it is responsive and user-friendly. A top-notch service!
                    </p>
                  </div>
                </a>
              </div>
            </li>
          </ul>

          <ul className="hidden space-y-8 sm:block">
            <li className="text-sm leading-6">
              <div className="relative group">
                <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-amber-500 to-pink-500 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                <a href="" className="cursor-pointer">
                  <div className="relative p-6 space-y-6 leading-none rounded-lg bg-black ring-1 ring-gray-900/5">
                    <div className="flex items-center space-x-4">
                      <img
                        src="https://pbs.twimg.com/profile_images/1669663135417110528/p8fRLHNR_400x400.jpg"
                        className="w-12 h-12 bg-center bg-cover border rounded-full"
                        alt="Parag Agrawal"
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          Agrawal
                        </h3>
                        <p className="text-gray-500 text-md">Restaurant Owner</p>
                      </div>
                    </div>
                    <p className="leading-normal text-gray-300 text-md">
                    Choosing UPthrift for Content Marketing was a game-changer for our business. Their strategic approach and engaging content helped us build a strong online presence and connect with our target audience effectively
                    </p>
                  </div>
                </a>
              </div>
            </li>
            <li className="text-sm leading-6">
              <div className="relative group">
                <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-amber-500 to-pink-500 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                <a
                  href=""
                  className="cursor-pointer"
                >
                  <div className="relative p-6 space-y-6 leading-none rounded-lg bg-black ring-1 ring-gray-900/5">
                    <div className="flex items-center space-x-4">
                      <img
                        src="https://pbs.twimg.com/profile_images/1733406256105177088/VboDuWfl_400x400.jpg"
                        className="w-12 h-12 bg-center bg-cover border rounded-full"
                        alt="Timothy D. Cook"
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          Timothy D. Cook
                        </h3>
                        <p className="text-gray-500 text-md">Run Vendor Business</p>
                      </div>
                    </div>
                    <p className="leading-normal text-gray-300 text-md">
                    UPthrifts Graphic Design team has the Midas touch! Our marketing materials now have a modern and polished look, thanks to their creativity and attention to detail. Highly recommended!
                    </p>
                  </div>
                </a>
              </div>
            </li>
            <li className="text-sm leading-6">
              <div className="relative group">
                <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-amber-500 to-pink-500 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                <a href="" className="cursor-pointer">
                  <div className="relative p-6 space-y-6 leading-none rounded-lg bg-black ring-1 ring-gray-900/5">
                    <div className="flex items-center space-x-4">
                      <img
                        src="https://pbs.twimg.com/profile_images/1375285353146327052/y6jeByyD_400x400.jpg"
                        className="w-12 h-12 bg-center bg-cover border rounded-full"
                        alt="Nazmul Hossen"
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          Nazmul Hossen
                        </h3>
                        <p className="text-gray-500 text-md">Owner of Buying House </p>
                      </div>
                    </div>
                    <p className="leading-normal text-gray-300 text-md">
                    UPthrift&apos;s Video Editing added dynamism to our campaigns, creating compelling stories that resonated with our audience.
                    </p>
                  </div>
                </a>
              </div>
            </li>
            <li className="text-sm leading-6">
              <div className="relative group">
                <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-amber-500 to-pink-500 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                <a
                  href=""
                  className="cursor-pointer"
                >
                  <div className="relative p-6 space-y-6 leading-none rounded-lg bg-black ring-1 ring-gray-900/5">
                    <div className="flex items-center space-x-4">
                      <img
                        src="https://pbs.twimg.com/profile_images/1724687865471455232/-rc2ShfE_400x400.jpg"
                        className="w-12 h-12 bg-center bg-cover border rounded-full"
                        alt="Mr Hassan"
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          Mr Hassan
                        </h3>
                        <p className="text-gray-500 text-md">Real Estate Agent</p>
                      </div>
                    </div>
                    <p className="leading-normal text-gray-300 text-md">
                    UPthrift&apos;s Web Development team built us a top-notch website - modern, responsive, and user-friendly.
                    </p>
                  </div>
                </a>
              </div>
            </li>
          </ul>

          <ul className="hidden space-y-8 lg:block">
            <li className="text-sm leading-6">
              <div className="relative group">
                <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-amber-500 to-pink-500 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                <a
                  href=""
                  className="cursor-pointer"
                >
                  <div className="relative p-6 space-y-6 leading-none rounded-lg bg-black ring-1 ring-gray-900/5">
                    <div className="flex items-center space-x-4">
                      <img
                        src="https://pbs.twimg.com/profile_images/1689012008472195072/lSKb0P7X_400x400.jpg"
                        className="w-12 h-12 bg-center bg-cover border rounded-full"
                        alt="Satya Nadella"
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          Zahid Khan
                        </h3>
                        <p className="text-gray-500 text-md">
                          Run a Exchange Business
                        </p>
                      </div>
                    </div>
                    <p className="leading-normal text-gray-300 text-md">
                     Awsome works
                    </p>
                  </div>
                </a>
              </div>
            </li>
            <li className="text-sm leading-6">
              <div className="relative group">
                <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-amber-500 to-pink-500 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                <a
                  href=""
                  className="cursor-pointer"
                >
                  <div className="relative p-6 space-y-6 leading-none rounded-lg bg-black ring-1 ring-gray-900/5">
                    <div className="flex items-center space-x-4">
                      <img
                        src="https://pbs.twimg.com/profile_images/516916920482672641/3jCeLgFb_400x400.jpeg"
                        className="w-12 h-12 bg-center bg-cover border rounded-full"
                        alt="Adam Neumann"
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                        Adam Neumann
                        </h3>
                        <p className="text-gray-500 text-md">Agency Owner</p>
                      </div>
                    </div>
                    <p className="leading-normal text-gray-300 text-md">
                    UPthrift&apos;s Graphic Design team turned our ideas into visually stunning realities. The creativity and professionalism they brought to our marketing collateral were beyond our expectations.
                    </p>
                  </div>
                </a>
              </div>
            </li>
            <li className="text-sm leading-6">
              <div className="relative group">
                <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-amber-500 to-pink-500 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                <a
                  href=""
                  className="cursor-pointer"
                >
                  <div className="relative p-6 space-y-6 leading-none rounded-lg bg-black ring-1 ring-gray-900/5">
                    <div className="flex items-center space-x-4">
                      <img
                        src="https://pbs.twimg.com/profile_images/1250275834444701704/9L7QwQCq_400x400.jpg"
                        className="w-12 h-12 bg-center bg-cover border rounded-full"
                        alt="Sarah Joyce Franklin"
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                        Sarah Joyce Franklin
                        </h3>
                        <p className="text-gray-500 text-md">
                        CEO of latticeHQ
                        </p>
                      </div>
                    </div>
                    <p className="leading-normal text-gray-300 text-md">
                    UPthrift&apos;s Content Marketing services - strategic, engaging, and effective. Our online presence has never been stronger.
                    </p>
                  </div>
                </a>
              </div>
            </li>
            <li className="text-sm leading-6">
              <div className="relative group">
                <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-amber-500 to-pink-500 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
                <a
                  href=""
                  className="cursor-pointer"
                >
                  <div className="relative p-6 space-y-6 leading-none rounded-lg bg-black ring-1 ring-gray-900/5">
                    <div className="flex items-center space-x-4">
                      <img
                        src="https://pbs.twimg.com/profile_images/1259558245/vala_300dpi_400x400.jpg"
                        className="w-12 h-12 bg-center bg-cover border rounded-full"
                        alt="Vala Afshar"
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                        Vala Afshar
                        </h3>
                        <p className="text-gray-500 text-md">Chief Digital Evangelist</p>
                      </div>
                    </div>
                    <p className="leading-normal text-gray-300 text-md">
                    super work I&apos;m satisfied with their work
                    </p>
                  </div>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
