import React from "react";

import { download } from "../assets";
import { downloadImage } from "../utils";

const Card = ({ _id, name, photo, prompt }) => {
  return (
    <div className="rounded-xl relative group shadow-card hover:shadow-cardhover card">
      <img
        src={photo}
        alt={prompt}
        className="w-full h-auto rounded-xl object-cover"
      />

      <div className="group-hover:flex flex-col max-h-[94.5%] absolute bottom-0 left-0 right-0 bg-[#10131f] hidden m-2 p-4 rounded-md">
        <p className="text-white text-md overflow-y-auto prompt first-letter:capitalize">
          {prompt}
        </p>

        <div className="mt-5 flex justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-green-700 object-cover flex justify-center items-center text-white text-xs font-bold">
              {name[0]}
            </div>

            <p className="text-white text-sm capitalize">{name}</p>
          </div>

          <button
            type="button"
            onClick={() => downloadImage(_id, photo)}
            className="outline-none bg-transparent border-none "
          >
            <img
              src={download}
              alt="download"
              className="w-6 h-6 rounded-full object-contain invert"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
