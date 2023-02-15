import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>amiflow</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Image src={"logo.svg"} width={25} height={25} alt="Logo" />
        <p>test</p>
        <div className="">
          <p>da</p>
        </div>
      </main>
    </>
  );
}
