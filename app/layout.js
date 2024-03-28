import { Prompt } from "next/font/google";
import "./globals.css";
import App from "./app";

const font = Prompt({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "RV Hooks",
  description: "Best react hooks Explanation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${font.className} bg-black text-lg`}>
        <div className="h-[100vh] w-[100vw] flex p-6 justify-center">
          <App children={children} />
        </div>
      </body>
    </html>
  );
}
