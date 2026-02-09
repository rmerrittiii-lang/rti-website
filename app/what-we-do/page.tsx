import Image from "next/image";
import Link from "next/link";

export default function WhatWeDoPage() {
    return (
        <main className="whatWeDoPage">
            <div className="whatWeDoInner">
                {/* LEFT: text */}
                <div className="whatWeDoCopy">
                    <h1>What We Do</h1>

                    <p>
                        We partner with trusted domestic manufacturers to deliver contract-compliant
                        garments for businesses and government agencies. Our mission is simple:
                        dependable quality, transparent pricing, and on-time delivery—without the
                        noise and delays of traditional distributors.
                    </p>

                    <ul className="whatWeDoList">
                        <li>
                            <strong>Wholesale Supply</strong> — tees, polos, uniforms, outerwear
                        </li>
                        <li>
                            <strong>Customization</strong> — embroidery &amp; screen printing
                        </li>
                        <li>
                            <strong>Bulk Programs</strong> — consistent sizing &amp; delivery
                        </li>
                        <li>
                            <strong>Contract-Ready</strong> — documentation &amp; reliability
                        </li>
                    </ul>

                    <div className="whatWeDoBtns">
                        <Link href="/get-a-quote" className="btnPrimary">
                            Get a Quote
                        </Link>
                        <Link href="/contact" className="btnGhost">
                            Contact
                        </Link>
                    </div>
                </div>

                {/* RIGHT: boxed image */}
                <div className="whatWeDoMedia">
                    <div className="photoCard">
                        <Image
                            src="/apparel2.jpg"
                            alt="Apparel production"
                            fill
                            priority
                            className="photoImg"
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}