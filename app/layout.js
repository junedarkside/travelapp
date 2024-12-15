import { Noto_Sans_Thai } from "next/font/google";
import "./globals.css";
import Mainheader from "@/components/main-header";
import Mainfooter from "@/components/main-footer";
import MainNav from "@/components/main-nav";


const notoSansThai = Noto_Sans_Thai({
  subsets: ["thai", "latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-noto-sans-thai",
});

export const metadata = {
  title: "TravelApp จองทัวร์ออนไลน์ เที่ยวทั่วโลก สะดวก ปลอดภัย",
  description: "TravelAppทัวร์ต่างประเทศ เชื่อถือได้ เที่ยวจีน ญี่ปุ่น เวียดนาม ยุโรป และอีกมากมาย จัดกรุ๊ปส่วนตัวได้ รีวิวดี ไปเที่ยวครบ บินจริง ไม่เท มั่นใจ 100%",
  keyword: "หน้าแรก, Travelzeed, บริษัททัวร์, โปรแกรมทัวร์, จัดกรุ๊ปทัวร์, ทัวร์ญี่ปุ่น, เที่ยวญี่ปุ่น, ทริปญี่ปุ่น, ทัวร์เกาหลี, เที่ยวเกาหลี, ทัวร์ไต้หวัน, ทัวร์ยุโรป, ทัวร์อินเดีย, ทัวร์อังกฤษ, ทัวร์จีน, ทัวร์ฮอกไกโด, ทัวร์โอซาก้า, ทัวร์โตเกียว, ทัวร์ปูซาน, ทัวร์เกาหลี โซล, ทัวร์ญี่ปุ่น ราคาถูก"
};

export default function RootLayout({ children }) {
  return (
    <html lang="th" className={notoSansThai.variable}>
      <body className="mx-auto w-full flex flex-col min-h-screen">
        <div className="sticky top-0 z-10">
          <Mainheader />
          <MainNav />
        </div>
        <main className="flex-grow">{children}</main>
        <Mainfooter />
      </body>
    </html>
  );
}
