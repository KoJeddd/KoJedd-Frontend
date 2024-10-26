import CustomFormField from "@/components/CustomFormField";
import { DialogHeader } from "@/components/ui/dialog";
import {
  getBrand,
  getBrands,
  getUser,
  getUserData,
  getUsers,
} from "@/lib/actions/chats";

import React, { useEffect, useState } from "react";
import { currentUserId } from "@/contexts/useChats";
import { useParams } from "react-router-dom";

const CollaborationProposal = () => {
  const [user, setUser] = useState({});
  const [receiver, setReceiver] = useState({});
  const { chatId: brandId } = useParams();

  function handleRemoveCollaborator() {}

  useEffect(() => {
    async function fetchUser() {
      try {
        const user = await getUser(currentUserId);
        setUser(user);
      } catch (error) {
        console.log(error);
      }
    }
    fetchUser();

    async function fetchBrand() {
      try {
        const brand = await getBrand(brandId);
        setReceiver(brand);
      } catch (error) {
        console.log(error);
      }
    }
    fetchBrand();
  }, [brandId]);
  return (
    <div className="px-4">
      <div className="bg-neutral-900 py-12 text-white">
        <div className="py-5 text-center">
          <h1 className="text-3xl font-extrabold">
            Collaboration Proposal Form
          </h1>
          <p>Please fill the form with the appropriate info</p>
        </div>
        <div className="mx-auto mb-10 max-w-3xl py-3">
          <h2 className="mb-3 text-center text-xl font-bold">Collaborators</h2>
          <div className="items-center">
            <div className="flex-wrap justify-between gap-8 rounded-xl bg-neutral-800 px-8 py-6 md:flex">
              <div className="space-y-5">
                <div className="flex">
                  <div className="flex w-28 flex-col font-semibold">
                    <span>From:</span>
                    <span className="ml-2 mt-3 opacity-55">Sender:</span>
                  </div>
                  <div className="flex flex-col justify-between">
                    {true ? (
                      <button
                        // onClick={handleListCollaborators}
                        className="w-fit rounded-lg bg-neutral-500 bg-opacity-30 p-[5px] px-2 text-sm leading-3"
                      >
                        Click here to select
                      </button>
                    ) : (
                      <button
                        onClick={handleRemoveCollaborator}
                        className="w-fit rounded-lg bg-neutral-500 bg-opacity-30 p-[5px] px-2 text-sm leading-3"
                      >
                        Click here to select
                      </button>
                    )}
                    <span className="w-fit rounded-lg bg-neutral-950 bg-opacity-30 p-[5px] px-2 text-sm leading-3">
                      {user?.name}
                    </span>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex w-28 flex-col font-semibold">
                    <span>To:</span>
                    <span className="ml-2 mt-3 opacity-55">Receiver:</span>
                  </div>
                  <div className="flex flex-col justify-between">
                    <button className="w-fit rounded-lg bg-neutral-500 bg-opacity-30 p-[5px] px-2 text-sm leading-3">
                      Click here to select
                    </button>
                    <span className="w-fit rounded-lg bg-neutral-950 bg-opacity-30 p-[5px] px-2 text-sm leading-3">
                      {receiver.name}{" "}
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-10 flex items-center justify-center md:mt-0">
                <div className="z-10 mr-[-55px] grid h-40 w-40 place-items-center overflow-hidden rounded-full border-2 border-yellow-500 bg-neutral-900">
                  <img
                    className="h-full w-full"
                    src="/assests/images/Brands/Okay Bears Black.png"
                    alt="brand"
                  />
                </div>
                <div className="grid h-40 w-40 place-items-center overflow-hidden rounded-full border-2 border-yellow-500 bg-neutral-900">
                  <img
                    className="h-full w-full"
                    src="/assests/images/Brands/DeMitchy.png"
                    alt="brand"
                  />
                </div>
                <button className="ml-3 flex h-5 w-5 items-center justify-center rounded-full border-2 border-yellow-500 font-extrabold">
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
        <form className="container mx-auto max-w-5xl">
          <h2 className="mb-3 text-center text-xl font-bold">Collab details</h2>
          <form>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <div className="flex flex-col gap-2 rounded-lg bg-neutral-800 p-4">
                <label htmlFor="collabType" className=" font-bold">
                  Collab Type
                </label>
                <select
                  className="rounded-lg border-2 border-neutral-700 bg-transparent px-3 py-2"
                  id="collabType"
                >
                  <option value="Partnership">Partnership</option>
                </select>
              </div>
              <div className="flex flex-col gap-2 rounded-lg bg-neutral-800 p-4">
                <label htmlFor="collabType" className=" font-bold">
                  Collab Title
                </label>
                <input
                  type="text"
                  placeholder="Title"
                  className="rounded-lg border-2 border-neutral-700 bg-transparent px-3 py-2"
                  id="collabType"
                />
              </div>
              <div className="flex flex-col gap-2 rounded-lg bg-neutral-800 p-4">
                <label htmlFor="attachFile" className=" font-bold">
                  Attach a file
                </label>
                <label
                  htmlFor="attachFile"
                  className="relative flex cursor-pointer items-center justify-center gap-2 rounded-lg border-2 border-neutral-700 bg-transparent p-2"
                >
                  <div className=" h-5 w-5 rounded-full bg-neutral-600"></div>
                  <span>Add file</span>
                  <input
                    type="file"
                    id="attachFile"
                    className="absolute inset-0 hidden "
                  />
                </label>
              </div>
              <div className="col-[1/-1] flex flex-col gap-2 rounded-lg bg-neutral-800 p-4">
                <label htmlFor="description" className=" font-bold">
                  Description
                </label>
                <textarea
                  rows={5}
                  className="rounded-lg border-2 border-neutral-700 bg-transparent px-3 py-2"
                  id="description"
                  placeholder="Description"
                ></textarea>
              </div>
              <div className="col-[1/-1] flex flex-col gap-2 rounded-lg bg-neutral-800 p-4">
                <label htmlFor="description" className=" font-bold">
                  Description
                </label>
                <textarea
                  rows={5}
                  className="rounded-lg border-2 border-neutral-700 bg-transparent px-3 py-2"
                  id="description"
                  placeholder="Description"
                ></textarea>
              </div>
            </div>
            <div className="mt-6 flex flex-col gap-5 sm:flex-row sm:justify-end">
              <button className="rounded-md bg-yellow-500 px-6 py-4 font-bold leading-4 text-neutral-900">
                Send Proposal
              </button>
              <button className="rounded-md border-2 border-yellow-500 bg-transparent px-6 py-4 font-bold leading-4 text-yellow-500">
                Discard
              </button>
            </div>
          </form>
        </form>
      </div>
    </div>
  );
};

export default CollaborationProposal;
