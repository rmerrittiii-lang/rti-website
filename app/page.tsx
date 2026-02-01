export default function Home() {
    return (
        <main className="shell">

            {/* Top Bar */}
            <header className="topbar">
                <div className="brand">
                    <img
                        src="/logo.png"
                        alt="Refined Textile Industries"
                        className="brandLogo"
                    />
                </div>

                <nav className="nav" aria-label="Primary">
                    <a href="#services">Services</a>
                    <a href="#supply">What We Supply</a>
                    <a className="btn" href="#contact">Contact</a>
                </nav>
            </header>

            {/* Hero */}
            <section className="hero">
                <div>
                    <p className="eyebrow">Reliable Supply • Clean Execution</p>

                    <h1>Apparel supply and customization for businesses.</h1>

                    <p className="lead">
                        We provide wholesale apparel and uniforms, plus embroidery and screen printing—
                        built for bulk orders, consistent quality, and on-time delivery.
                    </p>

                    <div className="ctaRow">
                        <a className="btn" href="#contact">Get a Quote</a>
                        <a className="btnGhost" href="#services">What We Do</a>
                    </div>

                    <div className="metaRow">
                        <span className="pill">Polos</span>
                        <span className="pill">Uniforms</span>
                        <span className="pill">Embroidery</span>
                        <span className="pill">Screen Print</span>
                        <span className="pill">Bulk Orders</span>
                    </div>
                </div>

                {/* Right panel */}
                <aside className="panel refinedBox">
                    <div className="panelBadge">Refined Textiles</div>

                    <img
                        className="panelImage"
                        src="/apparel1.jpg"
                        alt="Garment production line"
                    />

                    <img
                        className="panelImage"
                        src="/apparel2.jpg"
                        alt="Finished apparel racks"
                    />

                    <p className="panelText">
                        Modern, minimal, industrial.
                        <br />
                        Built for business.
                    </p>
                </aside>
            </section>

            {/* About */}
            <section id="about" className="grid aboutWrap">
                <div className="aboutTextCol">
                    <h2>About Us</h2>

                    <p className="aboutText">
                        Refined Textile Industries is built on discipline, precision, and execution.
                        Founded by a U.S. military veteran with over 8 years of fabric sourcing and
                        production experience, we specialize in wholesale apparel, uniforms, and
                        custom branding for businesses that demand consistency at scale.
                    </p>

                    <p className="aboutText">
                        From sourcing to final delivery, every project is handled with structure,
                        accountability, and attention to detail.
                    </p>

                    <div className="aboutTag">
                        Modern. Minimal. Industrial. Built for business.
                    </div>
                </div>

                <div className="aboutLogoWrap">
                    <img
                        src="/logo.png"
                        alt="RTI logo"
                        className="aboutLogo"
                    />
                </div>
            </section>

            {/* Services */}
            <section id="services" className="grid">
                <h2>Services</h2>

                <div className="cards">
                    <div className="card">
                        <h3>Wholesale Apparel Supply</h3>
                        <p>Polos, tees, uniforms, workwear, outerwear, and branded merchandise.</p>
                    </div>

                    <div className="card">
                        <h3>Embroidery</h3>
                        <p>Clean logo placement, consistent stitching, and bulk-ready production.</p>
                    </div>

                    <div className="card">
                        <h3>Screen Printing</h3>
                        <p>Durable prints with consistent color and clean finishes for large runs.</p>
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section id="contact" className="grid">
                <h2>Contact</h2>

                <div className="quoteBox">
                    <p className="quoteText">
                        Tell us what you need (items, qty, decoration, deadline) and we’ll quote it fast.
                    </p>
                    <a className="btn" href="mailto:quotes@refinedtextileindustries.com">
                        Email for Quote
                    </a>
                </div>
            </section>

            <footer className="footer">
                <span>© {new Date().getFullYear()} Refined Textile Industries</span>
                <span>Wholesale • Uniforms • Custom Branding</span>
            </footer>

        </main>
    );
}