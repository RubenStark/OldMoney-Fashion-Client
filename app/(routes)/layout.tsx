import ModalProvider from "@/providers/modal-provider";
import ToastProvider from "@/providers/toast-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

import "@/app/globals.css";


// export const metadata = {
//   title: "Store",
//   description: "Store - The place for all your purchases.",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ToastProvider />
      <ModalProvider />
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
