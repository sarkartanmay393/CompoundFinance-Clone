import Head from "next/head";
import MoreOfCoin from "./components/MoreOfCoin";
import OtherCoinsInfo from "./components/OtherCoinsInfo";
import CoinDashboard from "./components/CoinDashboard";
import { Modal } from "@mui/material";
import NavBar from "./components/Navbar";
import React from "react";
import ModalContent from "./components/ModalContent";

export default function Home() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Head>
        <title>Unreal Finance</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col ">
        <Modal
          open={open}
          onClose={handleClose}
          className="flex items-center justify-center"
        >
          <ModalContent handleClose={handleClose} />
        </Modal>
        <NavBar isDark showModal={setOpen} />
        <CoinDashboard isDark />
        <MoreOfCoin isDark />
        <OtherCoinsInfo isDark />
      </main>
    </>
  );
}
