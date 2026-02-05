import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <>
            {/* ================= HERO ================= */}
            <main className="hero">
                <div className="heroBg" aria-hidden>
                    <Image
                        src="/bg.jpg"
                        alt=""
                        fill
                        priority
                        className="heroBgImg"
                    />
                </div>

                <div className="heroOverlay" aria-hidden />

                <div className="heroInner">
                    <header className="brandBar">
                        <div className="brandLogo">
                            <Image
                                src="/logo.png"
                                alt="Refined Textile Industries logo"
                                width={72}
                                height={72}
                                priority
                                className="brandLogoImg"
                            />
                        </div>

                        <div className="brandText">
                            <div className="brandName">Refined Textile Industries</div>
                            <div className="brandTag">
                                Wholesale Apparel · Uniforms · Custom Branding
                            </div>
                        </div>
                    </header>

                    <section className="heroCopy">
                        <div className="heroKicker">
                            RELIABLE SUPPLY · CLEAN EXECUTION
                        </div>

                        <h1 className="heroTitle">
                            Apparel supply and customization for businesses.
                        </h1>

                        <p className="heroSubtitle">
                            We provide wholesale apparel and uniforms, plus embroidery
                            and screen printing—built for bulk orders, consistent quality,
                            and on-time delivery.
                        </p>

                        <div className="heroCtas">
                            <Link className="btnPrimary" href="/get-a-quote">
                                Get a Quote
                            </Link>
                            <Link className="btnGhost" href="/services">
                                View Services
                            </Link>
                            <Link className="btnGhost" href="/contact">
                                Contact
                            </Link>
                        </div>

                        <div className="heroChips">
                            <span className="chip">Polos</span>
                            <span className="chip">Uniforms</span>
                            <span className="chip">Embroidery</span>
                            <span className="chip">Screen Print</span>
                        </div>
                    </section>
                </div>
            </main>

            {/* ================= ABOUT ================= */}
            <section className="about">
                <div className="aboutInner">

                    {/* Photos ABOVE text */}
                    <div className="aboutGallery">
                        <div className="aboutPhoto tall">
                            <Image
                                src="/apparel1.jpg"
                                alt="Garment production floor"
                                fill
                                className="aboutFill"
                                priority
                            />
                        </div>

                        <div className="aboutPhoto tall">
                            <Image
                                src="/apparel2.jpg"
                                alt="Finished apparel on racks"
                                fill
                                className="aboutFill"
                                priority
                            />
                        </div>
                    </div>

                    {/* Text BELOW photos */}
                    <div className="aboutCopy">
                        <h2>About Us</h2>

                        <p>
                            Refined Textile Industries is a wholesale apparel and uniform
                            supply company focused on reliable production, clean execution,
                            and long-term partnerships.
                        </p>

                        <p>
                            From sourcing and customization to packaging and delivery,
                            we simplify the process so your team can focus on what matters.
                        </p>

                        <div
                            style={{
                                marginTop: 18,
                                display: "flex",
                                gap: 12,
                                flexWrap: "wrap",
                            }}
                        >
                            <Link className="btnPrimary" href="/services">
                                View Services
                            </Link>
                            <Link className="btnGhost" href="/get-a-quote">
                                Get a Quote
                            </Link>
                        </div>
                    </div>

                    {/* Supporting cards */}
                    <div className="aboutGrid">
                        <div className="aboutCard">
                            <strong>What We Do</strong>
                            <span>
                                Wholesale apparel, uniforms, and branded programs
                            </span>
                        </div>
                        <div className="aboutCard">
                            <strong>How We Work</strong>
                            <span>
                                Streamlined, transparent, and production-ready
                            </span>
                        </div>
                        <div className="aboutCard">
                            <strong>Who We Serve</strong>
                            <span>
                                Businesses, schools, teams, and organizations
                            </span>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}