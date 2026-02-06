import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <>
            {/* ================= HERO ================= */}
            <main className="hero">
                <div className="heroBg" aria-hidden>
                    <Image src="/bg.jpg" alt="" fill priority className="heroBgImg" />
                </div>

                <div className="heroOverlay" aria-hidden />

                <div className="heroInner">
                    {/* HERO GRID: text left, logo right */}
                    <section className="heroGrid">
                        <div className="heroCopy">
                            <div className="heroKicker">RELIABLE SUPPLY · CLEAN EXECUTION</div>

                            <h1 className="heroTitle">
                                Apparel supply and customization for businesses.
                            </h1>

                            <p className="heroSubtitle">
                                We provide wholesale apparel and uniforms, plus embroidery and screen
                                printing—built for bulk orders, consistent quality, and on-time delivery.
                            </p>

                            <div className="heroCtas">
                                <Link className="btnPrimary" href="/get-a-quote">
                                    Get a Quote
                                </Link>
                                <Link className="btnGhost" href="/what-we-do">
                                    What We Do
                                </Link>
                                <Link className="btnGhost" href="/contact">
                                    Contact
                                </Link>
                            </div>

                            <div className="heroChips">
                                <span className="chip">Uniforms</span>
                                <span className="chip">Embroidery</span>
                                <span className="chip">Screen Print</span>
                            </div>
                        </div>

                        {/* Right-side logo ONLY */}
                        <div className="heroLogoRight" aria-hidden>
                            <Image
                                src="/logo.png"
                                alt=""
                                width={300}
                                height={300}
                                priority
                                className="heroLogoImg"
                            />
                        </div>
                    </section>
                </div>
            </main>

            {/* ================= ABOUT ================= */}
            <section className="about">
                <div className="aboutInner">
                    <div className="aboutTop">
                        <div className="aboutGallery">
                            <div className="aboutPhoto tall">
                                <Image
                                    src="/apparel-1.jpg"
                                    alt="Apparel production"
                                    fill
                                    className="aboutFill"
                                    priority
                                />
                            </div>

                            <div className="aboutPhoto tall">
                                <Image
                                    src="/apperal2.jpg"
                                    alt="Garment finishing"
                                    fill
                                    className="aboutFill"
                                    priority
                                />
                            </div>
                        </div>

                        <div className="aboutCopy">
                            <h2>About Us</h2>

                            <p>
                                Refined Textile Industries brings precision, reliability, and modern sourcing to the
                                uniform and apparel supply market. As a veteran-owned business, we partner with trusted
                                domestic manufacturers to deliver contract-compliant garments for businesses and
                                government agencies. Our mission is simple: provide dependable quality, transparent
                                pricing, and on-time delivery. Whether you need standardized uniforms, branded apparel,
                                or bulk contract supply, Refined Textile Industries is built to serve at scale.
                            </p>

                            <div className="aboutBtns">
                                <Link className="btnPrimary" href="/services">
                                    View Services
                                </Link>
                                <Link className="btnGhost" href="/get-a-quote">
                                    Get a Quote
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="aboutGrid">
                        <div className="aboutCard">
                            <strong>What We Do</strong>
                            <span>Wholesale apparel, uniforms, and branded programs</span>
                        </div>
                        <div className="aboutCard">
                            <strong>How We Work</strong>
                            <span>Streamlined, transparent, and production-ready</span>
                        </div>
                        <div className="aboutCard">
                            <strong>Who We Serve</strong>
                            <span>Businesses, schools, teams, and organizations</span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}