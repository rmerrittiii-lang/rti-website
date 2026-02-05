import Image from "next/image";
import Link from "next/link";

export default function GetAQuotePage() {
    return (
        <main className="page">
            <div className="pageInner">

                {/* LEFT: COPY + FORM */}
                <div className="pageCopy">
                    <h1>Get a Quote</h1>

                    <p className="pageLead">
                        Tell us what you need and we’ll get back fast with pricing,
                        timelines, and next steps.
                    </p>

                    <form className="quoteForm">
                        <div className="field">
                            <label>Company Name</label>
                            <input placeholder="Company Name" />
                        </div>

                        <div className="field">
                            <label>Email</label>
                            <input type="email" placeholder="Email" />
                        </div>

                        <div className="field">
                            <label>Phone</label>
                            <input placeholder="Phone" />
                        </div>

                        <div className="field">
                            <label>Items & Quantities</label>
                            <input placeholder="e.g. 250 polos, 120 tees" />
                        </div>

                        <div className="field">
                            <label>Decoration</label>
                            <select>
                                <option>Embroidery</option>
                                <option>Screen Print</option>
                                <option>Heat Transfer</option>
                                <option>Not Sure</option>
                            </select>
                        </div>

                        <div className="field">
                            <label>Notes</label>
                            <textarea placeholder="Details..." />
                        </div>

                        <button className="btnPrimary submitBtn">
                            Request Quote
                        </button>

                        <div className="pageLinks">
                            <Link href="/" className="btnGhost">Home</Link>
                            <Link href="/what-we-do" className="btnGhost">What We Do</Link>
                            <Link href="/contact" className="btnGhost">Contact</Link>
                        </div>
                    </form>
                </div>

                {/* RIGHT: PHOTO */}
                <div className="photoCard">
                    <Image
                        src="/factory3.jpg"
                        alt="Bulk apparel production"
                        fill
                        priority
                        className="photoImg"
                    />
                </div>

            </div>
        </main>
    );
}