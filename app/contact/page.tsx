import Image from "next/image";
import Link from "next/link";

export default function ContactPage() {
    return (
        <main className="page">
            <div className="pageInner">

                {/* LEFT: copy + form */}
                <div className="pageCopy">
                    <h1>Contact Us</h1>

                    <p className="pageLead">
                        Have a question or need help? Send us a message and we’ll respond quickly.
                    </p>

                    <form className="contactForm">
                        <div className="field">
                            <label>Name</label>
                            <input placeholder="Your name" />
                        </div>

                        <div className="field">
                            <label>Email</label>
                            <input type="email" placeholder="R.T.Indstrs@gmail.com" />
                        </div>

                        <div className="field">
                            <label>Phone</label>
                            <input placeholder="Phone (512- 843-1331)" />
                        </div>

                        <div className="field">
                            <label>Message</label>
                            <textarea placeholder="How can we help?" />
                        </div>

                        <button className="btnPrimary">Send Message</button>

                        <div className="pageLinks">
                            <Link href="/" className="btnGhost">Back Home</Link>
                            <Link href="/what-we-do" className="btnGhost">What We Do</Link>
                            <Link href="/get-a-quote" className="btnGhost">Get a Quote</Link>
                        </div>
                    </form>
                </div>

                {/* RIGHT: photo */}
                <aside className="photoCard">
                    <Image
                        src="/factory4.jpg"
                        alt="RTI operations"
                        fill
                        priority
                        className="photoImg"
                    />
                </aside>

            </div>
        </main>
    );
}