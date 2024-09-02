import React from 'react'
import axios from 'axios'
import msg_logo from '../images/messenger.png'
import { useState } from 'react'
import {
    Dialog,
    DialogBackdrop,
    DialogPanel,
    DialogTitle,
} from '@headlessui/react'

interface Props {
    children?: React.ReactNode
    popup: boolean
    popupHandler: React.Dispatch<React.SetStateAction<boolean>>
}

function Email() {
    const [open, setOpen] = useState(false)
    const [loading, setLoading] = React.useState(false)
    const [sendDisabled, disableSend] = React.useState(false)
    const [sendSuccess, setSendSuccess] = React.useState(false)
    const [sendFail, setSendFail] = React.useState(false)
    const mail_url: string = process.env.REACT_APP_MAIL_URL
        ? process.env.REACT_APP_MAIL_URL
        : 'url_missing'

    const submitMsg = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        disableSend(true)
        const formData = new FormData(event.currentTarget)
        const formJson = Object.fromEntries((formData as any).entries())
        const email = formJson.email
        const name = formJson.name
        const message = formJson.message
        console.log(email)
        console.log(name)
        console.log(message)
        setLoading(true)
        axios
            .post(
                mail_url,
                {
                    subject: `Message from ${name}`,
                    message: message,
                },
                {
                    headers: {
                        'Ocp-Apim-Subscription-Key':
                            process.env.REACT_APP_MAIL_API_KEY,
                    },
                }
            )
            .then(function (response) {
                console.log(response)
                setLoading(false)
                setSendFail(false)
                setSendSuccess(true)
            })
            .catch(function (error) {
                console.log(error)
                disableSend(false)
                setSendFail(true)
            })
        //handleClose();
    }
    return (
        <div>
            <button
                onClick={() => {
                    setOpen(true)
                }}
            >
                <div className="fixed rounded-full bg-blue-500 hover:bg-blue-700 bottom-4 right-4 opacity-50 hover:opacity-100 size-16 flex justify-center items-center border-20 align-middle">
                   <img className='p-2' src={msg_logo}/> 
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
                                    <div className="border-2 mx-auto flex h-12 w-full flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10"></div>
                                    <div className="w-full text-center sm:ml-4 sm:mt-0 sm:text-left border-2">
                                        <DialogTitle
                                            as="h3"
                                            className="text-base font-semibold leading-6 text-gray-900"
                                        >
                                            Contact
                                        </DialogTitle>
                                        <div className="">
                                            <form className="border-2">
                                                <div>
                                                    <label className="block text-gray-700 text-sm font-bold">
                                                        Your Email
                                                    </label>
                                                    <input
                                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                        id="username"
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
                                                        id="message"
                                                        placeholder="Your message"
                                                    />
                                                </div>
                                                <div className="flex items-center justify-between"></div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                <button
                                    type="button"
                                    onClick={() => setOpen(false)}
                                    className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                                >
                                    Send
                                </button>
                                <button
                                    type="button"
                                    data-autofocus
                                    onClick={() => setOpen(false)}
                                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                >
                                    Cancel
                                </button>
                            </div>
                        </DialogPanel>
                    </div>
                </div>
            </Dialog>
        </div>
    )
}

export default Email
