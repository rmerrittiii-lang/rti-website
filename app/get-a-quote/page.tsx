import Link from "next/link";

export default function GetAQuotePage() {
    return (
        <main className="formPage">
            <div className="formInner">
                <h1>Get a Quote</h1>

                <p>
                    Tell us what you need and we’ll get back to you quickly with
                    pricing, timelines, and next steps.
                </p>

                <form>
                    <div className="field">
                        <label>Company Name</label>
                        <input type="text" />
                    </div>

                    <div className="field">
                        <label>Email</label>
                        <input type="email" />
                    </div>

                    <div className="field">
                        <label>Phone</label>
                        <input type="tel" />
                    </div>

                    <div className="field">
                        <label>Items & Quantities</label>
                        <textarea rows={4} />
                    </div>

                    <button className="btnPrimary">
                        Request Quote
                    </button>
                </form>
            </div>
        </main>
    );
}