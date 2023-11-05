import React from "react"
import { useState, useEffect } from "react";
import "./Chat.css"
const Chatbot = () => {

    const [dat, setdat] = useState([]);
    const [data, setdata] = useState();
    var i=1;

    const handleChange = event => {
        setdata(event.target.value);
    
        console.log('value is:', event.target.value);
      };
    

    const postData = async (e) => {
        e.preventDefault();
        setdat(oldArray => [...oldArray,data] );
        console.log(data);
        const res = await fetch("/chat", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
        data
          }),
        });
    
        const da = await res.json();
        // console.log(da.candidates[0].output);
        // console.log("hell");

        setdat(oldArray => [...oldArray,da.candidates[0].output] );	
        // console.log(dat);
      };

      useEffect(() => {
        // This code will run whenever myArray is updated.
        console.log('myArray has been updated:', dat);
      }, [dat]);

      
    return (
<div className="flex h-[100vh] w-full flex-col bg-black">
  <div
    className="flex-1 space-y-6 overflow-y-auto rounded-xl bg-slate-200 p-4 text-sm leading-6 text-slate-900 shadow-sm dark:bg-slate-900 dark:text-slate-300 sm:text-base sm:leading-7"
  >
    {dat.map((dataa) => {
              return (<>
              {i++%2==0?(
    <div className="flex items-start">
      <img
        className="mr-2 h-8 w-8 rounded-full"
        src="https://dummyimage.com/128x128/363536/ffffff&text=J"
      />
      <div
        className="flex rounded-b-xl rounded-tr-xl bg-slate-50 p-4 dark:bg-slate-800 sm:max-w-md md:max-w-2xl"
      >
        <p>{dataa}</p>
      </div>
    </div>):(
    <div className="flex flex-row-reverse items-start">
      <img
        className="ml-2 h-8 w-8 rounded-full"
        src="https://dummyimage.com/128x128/354ea1/ffffff&text=G"
      />

      <div
        className="flex min-h-[85px] rounded-b-xl rounded-tl-xl bg-slate-50 p-4 dark:bg-slate-800 sm:min-h-0 sm:max-w-md md:max-w-2xl"
      >
        <p>
        {dataa}
        </p>
      </div>
      <div
        className="mr-2 mt-1 flex flex-col-reverse gap-2 text-slate-500 sm:flex-row"
      >
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
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path
              d="M8 8m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z"
            ></path>
            <path
              d="M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2"
            ></path>
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
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path
              d="M7 13v-8a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v7a1 1 0 0 0 1 1h3a4 4 0 0 1 4 4v1a2 2 0 0 0 4 0v-5h3a2 2 0 0 0 2 -2l-1 -5a2 3 0 0 0 -2 -2h-7a3 3 0 0 0 -3 3"
            ></path>
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
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path
              d="M7 11v8a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-7a1 1 0 0 1 1 -1h3a4 4 0 0 0 4 -4v-1a2 2 0 0 1 4 0v5h3a2 2 0 0 1 2 2l-1 5a2 3 0 0 1 -2 2h-7a3 3 0 0 1 -3 -3"
            ></path>
          </svg>
        </button>
      </div>
    </div>)}
    </>
              )})}
    
  </div>
  {/* Prompt message input */}
  {/* <form className="mt-2">
    <label htmlFor="chat-input" className="sr-only">Enter your prompt</label>
    <div className="relative">
      <button
        type="button"
        className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-600"
      >
        <svg
          aria-hidden="true"
          className="h-5 w-5"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path
            d="M9 2m0 3a3 3 0 0 1 3 -3h0a3 3 0 0 1 3 3v5a3 3 0 0 1 -3 3h0a3 3 0 0 1 -3 -3z"
          ></path>
          <path d="M5 10a7 7 0 0 0 14 0"></path>
          <path d="M8 21l8 0"></path>
          <path d="M12 17l0 4"></path>
        </svg>
        <span className="sr-only">Use voice input</span>
      </button>
      <textarea
        id="chat-input"
        className="block w-full resize-none rounded-xl border-none bg-slate-200 p-4 pl-10 pr-20 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 dark:bg-slate-900 dark:text-slate-200 dark:placeholder-slate-400 dark:focus:ring-blue-600 sm:text-base"
        placeholder="Enter your prompt"
        rows="1"
        required
      ></textarea>
      <button
        type="submit"
        className="absolute bottom-2 right-2.5 rounded-lg bg-blue-700 px-4 py-2 text-sm font-medium text-slate-200 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:text-base"
      >
        Send <span className="sr-only">Send message</span>
      </button>
    </div>
  </form> */}
  <form className="">
  <label htmlFor="chat-input" className="sr-only">Enter prompt</label>
  <div className="flex gap-x-2">
    <input
      id="chat-input"
      type="text"
      className="w-full rounded-lg border border-slate-300 bg-slate-200 p-3 text-sm text-slate-800 shadow-md focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 dark:border-slate-200/10 dark:bg-slate-800 dark:text-slate-200 dark:placeholder-slate-400 dark:focus:border-blue-600 sm:text-base"
      placeholder="Enter prompt"
      onChange={handleChange}
      value={data}
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
        <path
          d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5"
        ></path>
      </svg>
      <span className="sr-only">Enter prompt</span>
    </button>
  </div>
</form>
</div>
  );
};

export default Chatbot;
