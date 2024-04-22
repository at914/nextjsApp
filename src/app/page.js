'use client'
import Image from 'next/image'
import Link from "next/link";
import Videocard from './components/videocard/videocard';
import Articlecard from "./components/articlecard/articlecard";

const Page = () => {
  return (
    <>
      <Videocard />
      <Articlecard />
    </>
  )
}
export default Page;
