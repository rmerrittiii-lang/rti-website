import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
        <body>
        {/* ===== GLOBAL HEADER / NAV ===== */}
        <header className="topNav">
            <div className="topNavInner">
                <Link href="/" className="logoLink" aria-label="Home">
              <span className="brandLockup">
                <Image
                    src="/logo.png"
                    alt="Refined Textile Industries"
                    width={140}
                    height={70}
                    priority
                />
                <span className="brandNameInline">Refined Textile Industries.</span>
              </span>
                </Link>

                <nav className="nav" aria-label="Primary">
                    <Link href="/" className="navPill">Home</Link>
                    <Link href="/what-we-do" className="navPill">What We Do</Link>
                    <Link href="/get-a-quote" className="navPill">Get a Quote</Link>
                    <Link href="/contact" className="navPill">Contact</Link>
                </nav>
            </div>
        </header>

        {/* ===== PAGE CONTENT ===== */}
        <main>{children}</main>

        {/* GLOBAL INFO BAND (no contact info) */}
        <section className="infoBand">
            <div className="infoBandInner">
                <span className="infoBrand">Refined Textile Industries</span>
                <span className="infoSep">•</span>
                <span>Wholesale Apparel</span>
                <span className="infoSep">•</span>
                <span>Uniforms</span>
                <span className="infoSep">•</span>
                <span>Custom Branding</span>
            </div>
        </section>

        {/* ===== GLOBAL FOOTER ===== */}
        <footer className="siteFooter">
            <div className="siteFooterInner">
                <div>
                    <strong>Refined Textile Industries</strong>
                    <div className="footerTagline">
                        Wholesale Apparel · Uniforms · Custom Branding
                    </div>
                </div>
            </div>
        </footer>
        </body>
        </html>
    );
}