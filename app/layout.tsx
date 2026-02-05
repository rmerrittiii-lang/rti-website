import "./globals.css";
import Link from "next/link";
import Image from "next/image";

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body>

        {/* ===== TOP NAV / LOGO BANNER ===== */}
        <header className="topNav">
            <div className="topNavInner">

                {/* Logo + Brand */}
                <Link href="/" className="logoLink" aria-label="Home">
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <Image
                            src="/logo.png"
                            alt="Refined Textile Industries"
                            width={160}
                            height={80}
                            priority
                        />
                        <span>Refined Textile Industries.</span>
                    </div>
                </Link>

                {/* Navigation */}
                <nav className="nav">
                    <Link href="/" className="navPill">Home</Link>
                    <Link href="/what-we-do" className="navPill">What We Do</Link>
                    <Link href="/get-a-quote" className="navPill">Get a Quote</Link>
                    <Link href="/contact" className="navPill">Contact</Link>
                </nav>
            </div>
        </header>

        {/* ===== PAGE CONTENT ===== */}
        {children}

        {/* ===== GLOBAL FOOTER ===== */}
        <footer
            style={{
                marginTop: 80,
                padding: "32px 20px",
                borderTop: "1px solid rgba(255,255,255,0.12)",
                background: "rgba(8,10,14,0.85)",
                color: "rgba(255,255,255,0.85)",
            }}
        >
            <div
                style={{
                    maxWidth: 1100,
                    margin: "0 auto",
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                    gap: 16,
                }}
            >
                <div>
                    <strong>Refined Textile Industries</strong>
                    <div style={{ fontSize: 14, opacity: 0.8 }}>
                        Wholesale Apparel · Uniforms · Custom Branding
                    </div>
                </div>

                <div style={{ fontSize: 14 }}>
                    <div>
                        📧{" "}
                        <a
                            href="mailto:R.T.Indstrs@gmail.com"
                            style={{ color: "#fff", textDecoration: "none" }}
                        >
                            R.T.Indstrs@gmail.com
                        </a>
                    </div>
                    <div>
                        📞{" "}
                        <a
                            href="tel:+15128431331"
                            style={{ color: "#fff", textDecoration: "none" }}
                        >
                            (512) 843-1331
                        </a>
                    </div>
                </div>
            </div>
        </footer>

        </body>
        </html>
    );
}