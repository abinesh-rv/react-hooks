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
      <body className={`${font.className} bg-black text-xl`}>
        <App children={children} />
      </body>
    </html>
  );
}
