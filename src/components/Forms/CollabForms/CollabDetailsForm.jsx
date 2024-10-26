import React from "react";

const CollabDetailsForm = () => {
  return (
    <>
      <p className="text-center text-[20px] font-bold text-[#E8E1DC]">
        Collab Details
      </p>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-3">
          <div className="m-5 rounded-xl bg-[#242222] p-3">
            <label htmlFor="type" className="mb-2 font-bold text-white">
              Collab Type:
            </label>
            <select
              id="type"
              className="mt-2 block w-full rounded border border-[#525252] bg-transparent p-2 text-base text-white focus:outline-none"
            >
              <option selected className="bg-[#0F0F0F] text-base">
                Select Industry
              </option>
              <option value="1" className="bg-[#0F0F0F] text-base">
                Tech
              </option>
              <option value="2" className="bg-[#0F0F0F] text-base">
                Entertainment
              </option>
              <option value="3" className="bg-[#0F0F0F] text-base">
                Fashion
              </option>
              <option value="4" className="bg-[#0F0F0F] text-base">
                Finance
              </option>
              <option value="5" className="bg-[#0F0F0F] text-base">
                Others
              </option>
            </select>
          </div>
          <div className="m-5 rounded-xl bg-[#242222] p-3">
            <label htmlFor="title" className="font-bold text-white">
              Collab Title:
            </label>
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Title"
              className="mt-2 w-full rounded-md border border-[#525252] bg-transparent p-2 text-white placeholder:text-sm autofill:bg-transparent focus:outline-none"
            />
          </div>
          <div className="m-5 flex flex-col rounded-xl bg-[#242222] p-3">
            <p className="mb-2 font-bold text-white">Send a File</p>
            <label
              htmlFor="file"
              className="w-full rounded-xl border border-[#525252] bg-transparent p-2 text-center text-white focus:outline-none"
            >
              Add a file
            </label>
            <input type="file" name="file" id="file" className="hidden" />
          </div>
        </div>
        <div className="mx-5 flex flex-col rounded-xl bg-[#242222] p-3">
          <label htmlFor="description" className="mb-2 font-bold text-white">
            Description
          </label>
          <textarea
            name="description"
            id="description"
            cols="30"
            rows="5"
            className="rounded-md border border-[#525252] bg-transparent p-2 text-white focus:outline-none"
            placeholder="Description"
          ></textarea>
        </div>
        <div className="mx-5 mt-5 flex flex-col rounded-xl bg-[#242222] p-3">
          <label htmlFor="agreement" className="mb-2 font-bold text-white">
            Agreement
          </label>
          <textarea
            name="agreement"
            id="agreement"
            cols="30"
            rows="5"
            className="rounded-md border border-[#525252] bg-transparent p-2 text-white focus:outline-none"
            placeholder="Agreement"
          ></textarea>
        </div>
        <div className="m-5 flex flex-col sm:flex-row sm:justify-end">
          <button
            className="button-gradient w-full rounded-md border-2 border-[#FFD21D] px-5 py-2 font-bold text-[#0f0f0f] focus:outline-none sm:w-max"
            type="submit"
          >
            Send Proposal
          </button>
          <button className="new ml-0 mt-5 w-full rounded-md border px-5 py-2 font-bold focus:outline-none sm:ml-3 sm:mt-0 sm:w-max ">
            Discard
          </button>
        </div>
      </form>
    </>
  );
};

export default CollabDetailsForm;

export const CollabContactDetails = () => {
  return (
    <>
      <p className="mb-5 text-center text-[20px] font-bold text-[#E8E1DC]">
        Collaborators
      </p>
      <div className="m-auto mb-10 flex w-[90%] flex-col items-center justify-between rounded-xl bg-[#242222] p-5 text-base text-white sm:flex-row">
        <div>
          <div>
            <div className="flex items-center justify-between">
              <p>From: </p>
              <button className="rounded-xl bg-[#333333] px-1 py-0.5 text-sm">
                Click here to select
              </button>
            </div>
            <div className="h-10 border-l-4 border-[#7F7F7F]"></div>

            <div className="flex items-center justify-between">
              <p className="text-[#7F7F7F]">Sender:</p>
              <button className="rounded-xl bg-[#0F0F0F] px-1 py-0.5 text-sm">
                Demitchy
              </button>
            </div>
          </div>
          <div className="mt-5">
            <div className="flex items-center justify-between">
              <p>To: </p>
              <button className="rounded-xl bg-[#333333] px-1 py-0.5 text-sm">
                Click here to select
              </button>
            </div>
            <div className="h-10 border-l-4 border-[#7F7F7F]"></div>
            <div className="flex items-center justify-between">
              <p className="text-[#7F7F7F]">Receiver:</p>
              <button className="rounded-xl bg-[#333333] px-1 py-0.5 text-sm">
                Select proposal receiver
              </button>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-10 flex translate-x-[40px] sm:mx-0 sm:mt-0 sm:translate-x-[0px]">
          <NoUser className={"relative z-10 w-[130px] translate-x-[-100px]"} />
          <NoUser className={"absolute w-[130px]"} />
        </div>
      </div>
    </>
  );
};

const NoUser = ({ className }) => {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle
        cx="100"
        cy="100"
        r="99"
        fill="#FEFEFE"
        stroke="url(#paint0_linear_9841_74249)"
        stroke-width="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M66.6667 58.3333C66.6667 49.4928 70.1786 41.0143 76.4298 34.7631C82.681 28.5119 91.1594 25 100 25C108.841 25 117.319 28.5119 123.57 34.7631C129.821 41.0143 133.333 49.4928 133.333 58.3333C133.333 67.1739 129.821 75.6523 123.57 81.9036C117.319 88.1548 108.841 91.6667 100 91.6667C91.1594 91.6667 82.681 88.1548 76.4298 81.9036C70.1786 75.6523 66.6667 67.1739 66.6667 58.3333ZM66.6667 108.333C55.616 108.333 45.0179 112.723 37.2039 120.537C29.3899 128.351 25 138.949 25 150C25 156.63 27.6339 162.989 32.3223 167.678C37.0107 172.366 43.3696 175 50 175H150C156.63 175 162.989 172.366 167.678 167.678C172.366 162.989 175 156.63 175 150C175 138.949 170.61 128.351 162.796 120.537C154.982 112.723 144.384 108.333 133.333 108.333H66.6667Z"
        fill="#333333"
      />
      <defs>
        <linearGradient
          id="paint0_linear_9841_74249"
          x1="200"
          y1="100.213"
          x2="-1.09658e-06"
          y2="100.213"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFDF00" />
          <stop offset="0.276042" stopColor="#F6D108" />
          <stop offset="0.541667" stopColor="#EDC211" />
          <stop offset="0.776042" stopColor="#E3B419" />
          <stop offset="1" stopColor="#DAA521" />
        </linearGradient>
      </defs>
    </svg>
  );
};
