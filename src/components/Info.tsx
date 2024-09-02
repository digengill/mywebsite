import React from 'react'

function Info() {
    return (
        <div className='h-screen/90 w-screen bg-slate-800 flex flex-row justify-evenly justify-items-center content-center text-center items-center"'>
            <div className="text-purple-300 font-mono mt-40">
                <div className="text-xl mb-5">Experience </div>
                <ol className="relative border-s border-gray-200 dark:border-gray-700">
                    <li className="mb-10 ms-4">
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                            August 2023 - Present
                        </time>
                        <h3 className="text-lg font-semibold text-lime-400 dark:text-white">
                            Associate Software Engineer
                        </h3>
                        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                            Full Stack Development. ETL, Microservices, IaC, etc. 
                        </p>
                    </li>
                    <li className="mb-10 ms-4">
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                            June 2022 - August 2023
                        </time>
                        <h3 className="text-lg font-semibold text-lime-400 dark:text-white">
                            Associate Backend Software Engineer
                        </h3>
                        <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                            Focusing mainly on Production Engineering & SRE. 
                        </p>
                    </li>
                    <li className="mb-10 ms-4">
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                            May 2021 - December 2021
                        </time>
                        <h3 className="text-lg font-semibold text-lime-400 dark:text-white">
                            Service Specialist Student
                        </h3>
                        <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                            8-month intern at a Large Tech Company. 
                        </p>
                    </li>
                </ol>
            </div>
            <div className="text-purple-300 font-mono mt-40">
                <div className="text-xl mb-5">Skills</div>
                <div>
                    <div className="mb-1 text-sm font-normal leading-none text-gray-400">
                        Front-end
                    </div>
                    <div className="mb-10 ms-4 text-lg font-semibold text-lime-400">
                        <div>React</div>
                        <div>Next.js</div>
                    </div>
                    <div className="mb-1 text-sm font-normal leading-none text-gray-400">
                        Back-end
                    </div>
                    <div className="mb-10 ms-4 text-lg font-semibold text-lime-400">
                        <div>Javascript/Typescript</div>
                        <div>Python</div>
                        <div>Java</div>
                        <div>TSQL</div>
                    </div>
                    <div className="mb-1 text-sm font-normal leading-none text-gray-400">
                        Data Engineering
                    </div>
                    <div className="mb-10 ms-4 text-lg font-semibold text-lime-400">
                        <div>Azure Data Factory</div>
                        <div>Apache NiFi</div>
                        <div>Mulesoft</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info
