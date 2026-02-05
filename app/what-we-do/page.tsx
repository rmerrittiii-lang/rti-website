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
                        Wholesale apparel supply and customization — built for bulk orders,
                        consistent quality, and clean execution.
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

                    <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                        <Link href="/get-a-quote" className="btnPrimary">
                            Get a Quote
                        </Link>
                        <Link href="/contact" className="btnGhost">
                            Contact
                        </Link>
                    </div>
                </div>

                {/* RIGHT: square image */}
                <div className="whatWeDoMedia">
                    <div className="photoCard">
                        <Image
                            src="/apparel2.jpg"
                            alt="Bulk apparel production"
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