import Link from "next/link";
export default function Footer() {
  return (
    <div className="btm-nav -pt-8">
      <div className="flex flex-wrap items-center md:justify-between justify-center">
        <div className="w-full px-4">
          <div className="text-sm text-primary-100 font-semibold py-2 text-center">
            Copyright ©{new Date().getFullYear()}
            <Link
              href="https://lexingtontech.us"
              target="_blank"
              className="font-bold text-primary uppercase px-1"
            >
              0x<span className="text-white">dweb</span>
            </Link>
            <Link
              href="/terms"
              className="font-bold text-primary uppercase px-2"
            >
              Terms
            </Link>
            <Link
              href="/privacy"
              className="font-bold text-primary uppercase px-2"
            >
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
