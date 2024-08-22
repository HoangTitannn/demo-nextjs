import Head from 'next/head'
import { MagnifyingGlassIcon, MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { useEffect, useState } from 'react'
import { Box, Button, TextField } from '@radix-ui/themes'
import VirtualizedList from '@/components/VirtualizedList'
import Image from 'next/image'

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    if (localStorage.getItem('theme') === 'dark') {
      setIsDarkMode(true)
      document.documentElement.classList.add('dark')
    } else {
      setIsDarkMode(false)
      document.documentElement.classList.remove('dark')
    }
  }, [])

  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
      setIsDarkMode(false)
    } else {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
      setIsDarkMode(true)
    }
  }

  return (
    <>
      <Head>
        <title>Stockbiz</title>
      </Head>
      <main className="bg-white h-[100vh] dark:bg-slate-900">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <header className="h-[70px] z-[150] py-4 flex justify-between">
            <Image src={'/images/logo.png'} width={150} height={80} alt="logo" />
            <div className="flex items-center gap-2">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
              >
                {isDarkMode ? (
                  <SunIcon className="h-6 w-6 text-yellow-500" />
                ) : (
                  <MoonIcon className="h-6 w-6 text-gray-900" />
                )}
              </button>
              <Box maxWidth="350px">
                <TextField.Root size="2" placeholder="Tìm kiếm...">
                  <TextField.Slot side="right">
                    <MagnifyingGlassIcon height="16" width="16" />
                  </TextField.Slot>
                </TextField.Root>
              </Box>
              <Button className="px-3 dark:text-[#e1e7ef]" color="gray" variant="outline">
                Đăng nhập
              </Button>
            </div>
          </header>
        </div>
        <div className="sticky w-full top-0 z-[49]">
          <div className="w-full h-12 bg-[#1189e5] dark:bg-slate-800 flex flex-col justify-center items-center">
            <div className="w-full max-md:w-[100vw] max-w-7xl flex h-full justify-start items-center pl-4 pr-10 sm:px-6 lg:px-8 gap-8 max-md:mr-5 max-sm:mr-1 max-sm:gap-3 max-md:justify-between overflow-x-auto no-scrollbar">
              <a className="font-semibold text-white" href="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-home"
                >
                  <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
              </a>
              <a
                className="whitespace-nowrap px-2 py-1 text-base font-semibold tracking-tight text-white rounded-lg hover:text-white transition ease-in flex items-end"
                data-state="closed"
                href="/thi-truong"
              >
                Thị trường
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="w-5 h-5"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </a>
              <a
                className="whitespace-nowrap px-2 py-1 text-base font-semibold tracking-tight text-white rounded-lg hover:text-white transition ease-in flex items-end"
                data-state="closed"
                href="/kinh-te"
              >
                Kinh tế - đầu tư
              </a>
              <a
                className="whitespace-nowrap px-2 py-1 text-base font-semibold tracking-tight text-white rounded-lg hover:text-white transition ease-in flex items-end"
                data-state="closed"
                href="/tai-chinh"
              >
                Tài chính
              </a>
              <a
                className="whitespace-nowrap px-2 py-1 text-base font-semibold tracking-tight text-white rounded-lg hover:text-white transition ease-in flex items-end"
                data-state="closed"
                href="/doanh-nghiep"
              >
                Doanh nghiệp
              </a>
              <a
                className="whitespace-nowrap px-2 py-1 text-base font-semibold tracking-tight text-white rounded-lg hover:text-white transition ease-in flex items-end"
                data-state="closed"
                href="/tien-so"
              >
                Tiền số
              </a>
              <a
                className="whitespace-nowrap px-2 py-1 text-base font-semibold tracking-tight text-white rounded-lg hover:text-white transition ease-in flex items-end"
                data-state="closed"
                href="https://fireant.vn/"
              >
                Công cụ đầu tư
              </a>
              <a
                className="max-lg:hidden whitespace-nowrap px-2 py-1 text-base font-semibold tracking-tight text-white rounded-lg hover:text-white transition ease-in flex items-end"
                data-state="closed"
                href="/"
              >
                Khác
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="w-5 h-5"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </a>
            </div>
            <div className="absolute right-0 h-12 flex items-center bg-gradient-to-l from-[#1189e5] dark:from-slate-800 from-35% to-100% to-transparent pl-12 max-md:pl-10 lg:hidden">
              <div className="w-9 h-9 flex items-center justify-center cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="w-7 h-7 text-white font-bold"
                  aria-hidden="true"
                >
                  <line x1="4" x2="20" y1="12" y2="12"></line>
                  <line x1="4" x2="20" y1="6" y2="6"></line>
                  <line x1="4" x2="20" y1="18" y2="18"></line>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <VirtualizedList />
      </main>
    </>
  )
}
