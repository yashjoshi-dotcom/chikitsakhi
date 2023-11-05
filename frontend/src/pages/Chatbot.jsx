import React from "react";
import { useState, useEffect } from "react";
import "./Chat.css";
const Chatbot = () => {
  const [dat, setdat] = useState([]);
  const [datata, setdatata] = useState();
  var i = 1;

  const handleChange = (event) => {
    setdatata(event.target.value);

    console.log("value is:", event.target.value);
  };

  const postData = async (e) => {
    e.preventDefault();
    setdat((oldArray) => [...oldArray, data]);
    console.log(data);
    var data=datata;
    setdatata("");
    const res = await fetch("/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        datata,
      }),
    });
    
    const da = await res.json();
    // console.log(da.candidates[0].output);
    // console.log("hell");
    
    setdat((oldArray) => [...oldArray, da.candidates[0].output]);
    // console.log(dat);
    
  };

  useEffect(() => {
    // This code will run whenever myArray is updated.
    console.log("myArray has been updated:", dat);
  }, [dat]);

  return (
    <div className="flex">
      <div className="w-1/5 bg-black p-4">
        <div class="flex items-center justify-between">
          <span class="text-gray-400 text-sm">2d ago</span>
          <span class="text-emerald-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
              />
            </svg>
          </span>
        </div>
        <div class="mt-6 w-fit mx-auto">
          <img
            src="https://preview.redd.it/bhupendra-jogi-v0-8kgh4uxwqxwb1.jpg?width=640&crop=smart&auto=webp&s=6d9b3ad91fe1e5a7111e5fd6aa163cc4012d1a9d"
            class="rounded-full w-28 "
            alt="profile picture"
            srcset=""
          />
        </div>

        <div class="mt-8 ">
          <h2 class="text-white font-bold text-2xl tracking-wide">
            Bhupendra Jogi{" "}
          </h2>
        </div>
        <p class="text-emerald-400 font-semibold mt-2.5">Active</p>

        <div class="h-1 w-full bg-black mt-8 rounded-full">
          <div class="h-1 rounded-full w-[30%] bg-emerald-400"></div>
        </div>
        <div class="mt-3 text-white text-sm">
          <span class="text-gray-400 font-semibold">Colestrol:</span>
          <span>200 mg/dL</span>
        </div>
        <div class="h-1 w-full bg-black mt-8 rounded-full">
          <div class="h-1 rounded-full w-[90%] bg-red-600"></div>
        </div>
        <div class="mt-3 text-white text-sm">
          <span class="text-gray-400 font-semibold">Sugar Level:</span>
          <span>140 mg/dL</span>
        </div>
        <div class="h-1 w-full bg-black mt-8 rounded-full">
          <div class="h-1 rounded-full w-[60%] bg-orange-500 "></div>
        </div>
        <div class="mt-3 text-white text-sm">
          <span class="text-gray-400 font-semibold">Blood Pressure:</span>
          <span>80/140 mmHg</span>
        </div>
        <div class="h-1 w-full bg-black mt-8 rounded-full">
          <div class="h-1 rounded-full w-[20%] bg-emerald-400"></div>
        </div>
        <div class="mt-3 text-white text-sm">
          <span class="text-gray-400 font-semibold">Haemoglobin:</span>
          <span>14.7 g/100mL</span>
        </div>
      </div>
      <div className="flex h-[100vh] w-4/5 flex-col bg-black p-2">
        <div className="flex-1 space-y-6 overflow-y-auto rounded-xl bg-slate-200 p-4 text-sm leading-6 text-slate-900 shadow-sm dark:bg-slate-900 dark:text-slate-300 sm:text-base sm:leading-7">
          {dat.map((dataa) => {
            return (
              <>
                {i++ % 2 == 0 ? (
                  <div className="flex items-start">
                    <img
                      className="mr-2 h-8 w-8 rounded-full"
                      src="https://dummyimage.com/128x128/363536/ffffff&text=J"
                    />
                    <div className="flex rounded-b-xl rounded-tr-xl bg-slate-50 p-4 dark:bg-slate-800 sm:max-w-md md:max-w-2xl">
                      <p>{dataa}</p>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-row-reverse items-start">
                    <img
                      className="ml-2 h-8 w-8 rounded-full"
                      src="https://dummyimage.com/128x128/354ea1/ffffff&text=G"
                    />

                    <div className="flex min-h-[85px] rounded-b-xl rounded-tl-xl bg-slate-50 p-4 dark:bg-slate-800 sm:min-h-0 sm:max-w-md md:max-w-2xl">
                      <p>{dataa}</p>
                    </div>
                    <div className="mr-2 mt-1 flex flex-col-reverse gap-2 text-slate-500 sm:flex-row">
                      <button className="hover:text-blue-600" type="button">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path
                            stroke="none"
                            d="M0 0h24v24H0z"
                            fill="none"
                          ></path>
                          <path d="M8 8m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z"></path>
                          <path d="M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2"></path>
                        </svg>
                      </button>
                      <button className="hover:text-blue-600" type="button">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path
                            stroke="none"
                            d="M0 0h24v24H0z"
                            fill="none"
                          ></path>
                          <path d="M7 13v-8a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v7a1 1 0 0 0 1 1h3a4 4 0 0 1 4 4v1a2 2 0 0 0 4 0v-5h3a2 2 0 0 0 2 -2l-1 -5a2 3 0 0 0 -2 -2h-7a3 3 0 0 0 -3 3"></path>
                        </svg>
                      </button>
                      <button className="hover:text-blue-600">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path
                            stroke="none"
                            d="M0 0h24v24H0z"
                            fill="none"
                          ></path>
                          <path d="M7 11v8a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-7a1 1 0 0 1 1 -1h3a4 4 0 0 0 4 -4v-1a2 2 0 0 1 4 0v5h3a2 2 0 0 1 2 2l-1 5a2 3 0 0 1 -2 2h-7a3 3 0 0 1 -3 -3"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                )}
              </>
            );
          })}
        </div>
        <form className="">
          <label htmlFor="chat-input" className="sr-only">
            Enter prompt
          </label>
          <div className="flex gap-x-2">
            <input
              id="chat-input"
              type="text"
              className="w-full rounded-lg border border-slate-300 bg-slate-200 p-3 text-sm text-slate-800 shadow-md focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 dark:border-slate-200/10 dark:bg-slate-800 dark:text-slate-200 dark:placeholder-slate-400 dark:focus:border-blue-600 sm:text-base"
              placeholder="Enter prompt"
              onChange={handleChange}
              value={datata}
              rows="1"
              required
            />
            <button
              type="submit"
              onClick={postData}
              className="rounded-lg border border-transparent bg-blue-600 px-3 py-1 text-slate-200 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M10 14l11 -11"></path>
                <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5"></path>
              </svg>
              <span className="sr-only">Enter prompt</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Chatbot;
