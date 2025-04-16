import React from "react";
import Marquee from "react-fast-marquee";
const ContactForm: React.FC = () => {
  return (
    <div id="ContactForm" className="flex items-center min-h-screen bg-transparent">
      <div className="container mx-auto">
        <div className="max-w-2xl mx-auto my-10 bg-transparent p-5 rounded-md shadow-sm">
          <div className="text-center">
            <p className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-pink-500 py-10 ">
              Fill up the form below to send us a message.
            </p>
          </div>
          <div className="m-7">
            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              id="form"
            >
              <input
                type="hidden"
                name="access_key"
                value="222e866f-6f9f-40d8-ae89-6f10762037e3"
              />
              <input
                type="hidden"
                name="subject"
                value="New Submission from Web3Forms"
              />
              <input
                type="hidden"
                name="redirect"
                value="https://web3forms.com/success"
              />
              <input
                type="checkbox"
                name="botcheck"
                style={{ display: "none" }}
              />
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="font-bold block mb-2 text-sm text-orange-600 dark:text-orange-600"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your Name"
                  required
                  className="w-full px-3 py-2 placeholder-black-300 border border-black-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-black-700 dark:text-black dark:placeholder-black-500 dark:border-black-600 dark:focus:ring-black-900 dark:focus:border-black-500"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="font-bold block mb-2 text-sm text-orange-600 dark:text-orange-600"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="your@gmail.com"
                  required
                  className="w-full px-3 py-2 placeholder-black-300 border border-black-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-black-700 dark:text-black dark:placeholder-black-500 dark:border-black-600 dark:focus:ring-black-900 dark:focus:border-black-500"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="phone"
                  className="font-bold text-sm text-orange-600 dark:text-orange-600"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="+1 (555) 1234-567"
                  required
                  className="w-full px-3 py-2 placeholder-black-300 border border-black-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-black-700 dark:text-black dark:placeholder-black-500 dark:border-black-600 dark:focus:ring-black-900 dark:focus:border-black-500"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="font-bold block mb-2 text-sm text-orange-600 dark:text-orange-600"
                >
                  Your Message
                </label>
                <textarea
                  rows={5}
                  name="message"
                  id="message"
                  placeholder="Your Message"
                  required
                  className="w-full px-3 py-2 placeholder-black-300 border border-black-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-black-700 dark:text-black dark:placeholder-black-500 dark:border-black-600 dark:focus:ring-black-900 dark:focus:border-black-500"
                ></textarea>
              </div>
              <div className="mb-6">
                <button
                  type="submit"
                  className="w-full px-3 py-4 text-white font-bold transition ease-in-out delay-150 border border-orange-600 bg-orange-600 hover:-translate-y-1 hover:scale-110 hover:bg-gray-800 duration-300 focus:outline-none"
                >
                  Send Message
                </button>
              </div>
              <p
                className="text-base text-center text-black-400"
                id="result"
              ></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
