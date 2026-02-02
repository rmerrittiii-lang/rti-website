import Image from "next/image";
import "./globals.css";

export default function Home() {
    return (
        <>
            {/* HERO */}
            <main className="hero">
                <div className="heroBg" aria-hidden>
                    <Image src="/bg.jpg" alt="" fill priority className="heroBgImg" />
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
                        <div className="heroKicker">RELIABLE SUPPLY · CLEAN EXECUTION</div>

                        <h1 className="heroTitle">
                            Apparel supply and customization for businesses.
                        </h1>

                        <p className="heroSubtitle">
                            We provide wholesale apparel and uniforms, plus embroidery and
                            screen printing—built for bulk orders, consistent quality, and
                            on-time delivery.
                        </p>

                        <div className="heroCtas">
                            <button className="btnPrimary">Get a Quote</button>
                            <button className="btnGhost">What We Do</button>
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

            {/* ABOUT */}
            <section className="about">
                <div className="aboutInner">
                    <div className="aboutTop">
                        <div className="aboutCopy">
                            <h2>About Us</h2>
                            <p>
                                Refined Textile Industries is a wholesale apparel and uniform
                                supply company focused on reliable production, clean execution,
                                and long-term partnerships.
                            </p>

                            <p>
                                From sourcing and customization to packaging and delivery, we
                                simplify the process so your team can focus on what matters.
                            </p>
                        </div>

                        <div className="aboutGallery">
                            <div className="aboutPhoto tall">
                                <Image
                                    src="/apparel1.jpg"
                                    alt="Apparel example 1"
                                    fill
                                    className="aboutFill"
                                    priority
                                />
                            </div>

                            <div className="aboutPhoto tall">
                                <Image
                                    src="/apparel2.jpg"
                                    alt="Apparel example 2"
                                    fill
                                    className="aboutFill"
                                    priority
                                />
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

            {/* SERVICES */}
            <section className="services">
                <div className="servicesInner">
                    <div className="servicesHeader">
                        <div className="servicesLogo">
                            <Image
                                src="/logo.png"
                                alt="Refined Textile Industries logo"
                                width={72}
                                height={72}
                                className="servicesLogoImg"
                                priority
                            />
                        </div>

                        <div>
                            <h2>Services Offered</h2>
                            <p className="servicesLead">
                                Wholesale apparel and uniform supply for commercial and
                                government clients.
                            </p>
                        </div>
                    </div>

                    <p className="servicesBody">
                        We source, customize, and fulfill contract-ready garments including
                        polos, T-shirts, workwear, outerwear, and branded merchandise. We
                        specialize in bulk orders, compliance-ready sourcing, and fast
                        fulfillment for institutional buyers.
                    </p>

                    <div className="servicesGrid">
                        <div className="servicesCard">
                            <strong>Wholesale Supply</strong>
                            <span>Polos, tees, workwear, outerwear, merch</span>
                        </div>
                        <div className="servicesCard">
                            <strong>Customization</strong>
                            <span>Embroidery, screen print, brand placement</span>
                        </div>
                        <div className="servicesCard">
                            <strong>Contract-Ready</strong>
                            <span>Institutional buyers, organized documentation</span>
                        </div>
                        <div className="servicesCard">
                            <strong>Fast Fulfillment</strong>
                            <span>Bulk programs with consistent quality</span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}