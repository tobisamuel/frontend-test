import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-10 px-4 py-12 tracking-[-0.05em] lg:grid-cols-4 lg:px-0">
        <div>
          <div>
            <Image
              src="/logo-black.svg"
              alt="Risevest logo"
              width={50}
              height={16}
            />
          </div>

          <ul className="mt-8 space-y-4">
            <li>
              <Link className="inline-flex items-center gap-1" href="/about-us">
                About Us
              </Link>
            </li>
            <li>
              <Link className="inline-flex items-center gap-1" href="/careers">
                Careers
              </Link>
            </li>
            <li>
              <Link className="inline-flex items-center gap-1" href="/faqs">
                FAQs
              </Link>
            </li>
            <li>
              <Link
                className="inline-flex items-center gap-1"
                href="/contact-info"
              >
                Contact Info
              </Link>
            </li>
            <li>
              <Link className="inline-flex items-center gap-1" href="/press">
                Press
              </Link>
            </li>
            <li>
              <Link
                className="inline-flex items-center gap-1"
                href="/rise-impact"
              >
                Rise Impact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold">Explore</h2>
          <ul className="mt-8 space-y-4">
            <li>
              <Link className="inline-flex items-center gap-1" href="#">
                Investment Club{" "}
                <span>
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </Link>
            </li>
            <li>
              <Link className="inline-flex items-center gap-1" href="#">
                Blog{" "}
                <span>
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold">Products</h2>
          <ul className="mt-8 space-y-4">
            <li>
              <Link className="inline-flex items-center gap-1" href="#">
                Rise App
              </Link>
            </li>
            <li>
              <Link className="inline-flex items-center gap-1" href="#">
                Wallets
              </Link>
            </li>
            <li>
              <Link className="inline-flex items-center gap-1" href="#">
                Asset Classes
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold">Contact Us</h2>
          <ul className="mt-8 space-y-4">
            <li>
              <Link
                className="inline-flex items-center gap-1"
                href="tel:08187147405"
              >
                0818 714 7405{" "}
                <span>
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </Link>
            </li>
            <li>
              <Link
                className="inline-flex items-center gap-1"
                href="mailto:hello@rise.capital"
              >
                hello@rise.capital{" "}
                <span>
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </Link>
            </li>
            <li>
              <Link className="inline-flex items-center gap-1" href="#">
                Newsletter{" "}
                <span>
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </Link>
            </li>
            <li>
              <Link
                className="inline-flex items-center gap-1"
                href="https://www.instagram.com/risevest"
              >
                Instagram{" "}
                <span>
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </Link>
            </li>
            <li>
              <Link
                className="inline-flex items-center gap-1"
                href="https://twitter.com/risevest"
              >
                Twitter{" "}
                <span>
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
