import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(/0xdwebbackground.png)",
      }}
    >
      <div className="hero-content text-right align-right">
        <div className="max-w-lg">
          <h1 className="text-6xl">0x DWEB</h1>
          <h2 className="py-4 text-4xl text-secondary">decentralized dapps</h2>
          <p className="py-4 text-sm text-info">Building WEB3 Communities.</p>
        </div>
      </div>
    </div>
  );
}
