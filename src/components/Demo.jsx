import React, { useState, useEffect } from "react";

import { copy, linkIcon, loader, tick } from "../assets";
const Demo = () => {
  return (
    <section  className="mt-16 w-full max-w-xl">

      <div className="flex flex-col w-full gap-2">


        <form className="relative flex justify-center items-center " onSubmit={() =>{}}>


          <img
          src={linkIcon}
          alt="link_icon"

          className="absolute left-0 my-2 ml-3 w-5"/>

          <input

          type="url"
          placeholder="enter url"
          value=""
          onChange={() =>{}}

          required
          className="url_input peer"

          />

          <button
          type="submit"
          className="submit_btn">
            ↵
          </button>
          </form>

          {/*browse history*/}
          

      </div>
      coci
    </section>
  );
}

export default Demo;