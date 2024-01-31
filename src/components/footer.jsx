export default function FooterComp() {
    return (
        <footer className="bg-white dark:bg-gray-900">
            <div className="mx-auto w-full max-w-screen-xl select-none p-4 py-6 lg:py-1">
                <hr className="my-3 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8" />

                <div className="m-8 sm:flex sm:items-center sm:justify-between">
                    <span className="m-2 flex items-center justify-center space-x-5 text-center lg:my-5">
                        <a
                            href="https://www.facebook.com/#/"
                            target="_blank"
                            className="text-gray-500 hover:text-blue-500 dark:hover:text-white"
                        >
                            <svg
                                className="h-4 w-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 8 19"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">Facebook page</span>
                        </a>
                        <a
                            href="https://www.youtube.com/channel/UCzewwrLueNmJRRu-OMjGRnA"
                            target="_blank"
                            className="text-gray-500 hover:text-red-500 dark:hover:text-white"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-youtube"
                                viewBox="0 0 16 16">
                                <path
                                    d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                            </svg>
                            <span className="sr-only">Youtube</span>
                        </a>
                    </span>
                    <span className="text-center text-gray-500  dark:text-gray-400 sm:text-center">
                        <p>Copyright © <a href="https://cmru-e-sport.vercel.app/" className="text-gray-500 hover:text-red-500 dark:hover:text-white">CMRU E-Sport</a> ALL Rights Reserved 2024</p>
                    </span>
                </div>
                <div className="lg:my-5" />
            </div>
        </footer>
    );
}