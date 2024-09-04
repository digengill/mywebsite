import React from "react";
import axios from "axios";
import msg_logo from "../images/messenger.png";
import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";


function Email() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = React.useState(false);
  const [sendDisabled, disableSend] = React.useState(false);
  const [sendSuccess, setSendSuccess] = React.useState(false);
  //const [sendFail, setSendFail] = React.useState(false);
  const mail_url: string = process.env.REACT_APP_MAIL_URL
    ? process.env.REACT_APP_MAIL_URL
    : "url_missing";

  const submitMsg = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    disableSend(true);
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries((formData as any).entries());
    //const email = formJson.user_email;
    const name = formJson.name;
    const message = formJson.user_message;
    setLoading(true);
    axios
      .post(
        mail_url,
        {
          subject: `Message from ${name}`,
          message: message,
        },
        {
          headers: {
            "Ocp-Apim-Subscription-Key": process.env.REACT_APP_MAIL_API_KEY,
          },
        },
      )
      .then(function (response) {
        console.log(response);
        setLoading(false);
        //setSendFail(false);
        setSendSuccess(true);
      })
      .catch(function (error) {
        console.log(error);
        disableSend(false);
        //setSendFail(true);
      });
    //handleClose();
  };
  return (
    <div>
      <button
        onClick={() => {
          setOpen(true);
        }}
      >
        <div className="fixed rounded-full bg-blue-500 hover:bg-blue-700 bottom-4 right-4 opacity-50 hover:opacity-100 size-16 flex justify-center items-center border-20 align-middle">
          <img className="p-2" alt="message logo" src={msg_logo} />
        </div>
      </button>
      <Dialog open={open} onClose={setOpen} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
            >
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 w-full">
                <div className="sm:flex sm:items-start w-full">
                  <div className="mx-auto flex h-12 w-full flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10"></div>
                  <div className="w-full text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <DialogTitle
                      as="h3"
                      className="text-base font-semibold leading-6 text-gray-900"
                    >
                      Contact
                    </DialogTitle>
                    <div className="">
                      <form onSubmit={submitMsg}>
                        <div>
                          <label className="block text-gray-700 text-sm font-bold">
                            Name
                          </label>
                          <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="user_name"
                            name="user_name"
                            type="text"
                            placeholder="John Doe"
                          />
                        </div>
                        <div>
                          <label className="block text-gray-700 text-sm font-bold">
                            Your Email
                          </label>
                          <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="user_email"
                            name="user_email"
                            type="text"
                            placeholder="me@example.com"
                          />
                        </div>
                        <div>
                          <label className="block text-gray-700 text-sm font-bold">
                            Message
                          </label>
                          <textarea
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="user_message"
                            name="user_message"
                            placeholder="Your message"
                          />
                        </div>
                        {sendSuccess && (
                          <div
                            className="flex items-center p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
                            role="alert"
                          >
                            <svg
                              className="flex-shrink-0 inline w-4 h-4 me-3"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                            </svg>
                            <span className="sr-only">Info</span>
                            <div>
                              <span className="font-medium">
                                Message sent successfully!
                              </span>
                            </div>
                          </div>
                        )}
                        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                          {!sendDisabled && (
                            <button
                              type="submit"
                              className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                            >
                              Send
                            </button>
                          )}
                          {sendDisabled && loading && (
                            <button
                              disabled
                              type="button"
                              className="py-2.5 px-5 me-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 inline-flex items-center"
                            >
                              <svg
                                aria-hidden="true"
                                role="status"
                                className="inline w-4 h-4 me-3 text-gray-200 animate-spin dark:text-gray-600"
                                viewBox="0 0 100 101"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                  fill="currentColor"
                                />
                                <path
                                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                  fill="#1C64F2"
                                />
                              </svg>
                              Loading...
                            </button>
                          )}
                          <button
                            type="button"
                            data-autofocus
                            onClick={() => setOpen(false)}
                            className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                          >
                            Cancel
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
}

export default Email;
