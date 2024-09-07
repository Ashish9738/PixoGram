import React from "react";

function HomePage() {
  return (
    <>
      <div className="w-full flex mt-8 space-x-4 px-6 md:px-[200px]">
        <div className="w-[35%] h-[200px] flex justify-center items-center mt-[6px]">
          <img
            src="https://imgs.search.brave.com/zNellKu19Nwc96VIEgcRB7czQqkgNaQvxiMswn0j28o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuY3RmYXNzZXRz/Lm5ldC9ocmx0eDEy/cGw4aHEvNE4xTmVv/SFRhVDhuSTB4N3Ax/akNHay81YTYwNTRh/NTA0NmI3NzQ5YTZi/NzhhZDNjYTFlYjU3/Zi93YXRlci1zcGxh/c2gtY2xyLXNodXR0/ZXJzdG9ja18yNTg0/MjE4MDUuanBnP2Zp/dD1maWxsJnc9NDgw/Jmg9Mjcw"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
        <div className="w-[65%] flex flex-col">
          <h1 className="text-xl font-bold md:mb-2 mb-1 md:text-2xl">
            Lorem ipsum dolor sit amet consectetur, adipisicin.
          </h1>
          <div className="flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between md:mb-4 ">
            <p> @RamHere</p>
            <div className="flex space-x-2">
              <p>12/12/1252</p>
              <p>09:34</p>
            </div>
          </div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet eos
            soluta, quos esse at similique placeat saepe sint unde nihil
            eligendi corrupti aspernatur, quisquam, itaque odio perferendis?
            Deleniti,esse at similique placeat saepe sint unde nihil eligendi
            corrupti aspernatur, quisquam, itaque odio perferendis? Deleniti,
          </p>
        </div>
      </div>
    </>
  );
}

export default HomePage;
