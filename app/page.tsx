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
                    <div className="heroGrid">
                        {/* LEFT */}
                        <section className="heroCopy">
                            <div className="heroKicker">RELIABLE SUPPLY · CLEAN EXECUTION</div>

                            <h1 className="heroTitle">Apparel supply and customization for businesses.</h1>

                            <p className="heroSubtitle">
                                Refined Textile Industries delivers industrial-grade apparel and uniform supply built
                                for reliability and scale.
                            </p>

                            <div className="heroCtas">
                                <Link href="/get-a-quote" className="btnPrimary">
                                    Get a Quote
                                </Link>
                            </div>

                            <div className="heroChips">
                                <span className="chip">Uniforms</span>
                                <span className="chip">Embroidery</span>
                                <span className="chip">Screen Print</span>
                            </div>

                            {/* ✅ About Us directly under hero content */}
                            <section className="aboutHero">
                                <h2 className="aboutHeroTitle">About Us</h2>
                                <p className="aboutHeroText">
                                    We are a veteran-owned small business specializing in wholesale apparel and uniform
                                    supply for commercial, institutional, and government clients. With over a decade of
                                    experience, our focus is reliable sourcing, consistent quality, and practical
                                    customization to meet operational needs.
                                </p>

                                <div className="aboutHeroBtns">
                                    <Link href="/get-a-quote" className="btnGhost">
                                        Get a Quote
                                    </Link>
                                </div>
                            </section>
                        </section>

                        {/* RIGHT (photo stack) */}
                        <div className="heroMedia" aria-hidden>
                            <div className="heroPhoto tall">
                                <Image
                                    src="/apperal-2.jpg"
                                    alt="Production line"
                                    fill
                                    className="heroPhotoImg"
                                    priority={false}
                                />
                            </div>

                            <div className="heroPhoto">
                                <Image
                                    src="/apparel-1.jpg"
                                    alt="Apparel production"
                                    fill
                                    className="heroPhotoImg"
                                    priority={false}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* ✅ FULL-WIDTH WHITE BANNER — GOES HERE */}
            <section className="fullWidthBanner">
                <div className="fullWidthBannerInner">
                    <span className="bannerBrand">Refined Textile Industries</span>
                    <span className="dot">•</span>
                    <span>Wholesale Apparel</span>
                    <span className="dot">•</span>
                    <span>Uniforms</span>
                    <span className="dot">•</span>
                    <span>Custom Branding</span>
                    <span className="dot">•</span>
                    <span>rti.indstrs@gmail.com</span>
                    <span className="dot">•</span>
                    <span>(512) 843-1331</span>
                </div>
            </section>

            {/* ================= FEATURE STRIP ================= */}
            <section className="reactStrip">
                <div className="reactInner">
                    <p className="reactText">
                        Refined Textile Industries brings precision, reliability, and modern sourcing to the
                        uniform and apparel supply market. Whether you need standardized uniforms, branded
                        apparel, or bulk contract supply, we are built to serve at scale.
                    </p>
                </div>
            </section>
        </>
    );
}
<section className="infoBand">
    <div className="infoBandInner">
        <span className="infoBrand">Refined Textile Industries</span>
        <span className="infoSep">•</span>
        <span>Wholesale Apparel</span>
        <span className="infoSep">•</span>
        <span>Uniforms</span>
        <span className="infoSep">•</span>
        <span>Custom Branding</span>
        <span className="infoSep">•</span>
        <a href="mailto:rti.indstrs@gmail.com">rti.indstrs@gmail.com</a>
        <span className="infoSep">•</span>
        <a href="tel:15128431331">(512) 843-1331</a>
    </div>
</section>