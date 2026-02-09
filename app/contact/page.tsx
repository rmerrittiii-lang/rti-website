export default function ContactPage() {
    return (
        <main className="formPage">
            <div className="formInner">
                <h1>Contact Us</h1>

                <p>
                    Have a question or need more information? Reach out and we’ll
                    respond promptly.
                </p>

                <form>
                    <div className="field">
                        <label>Name</label>
                        <input type="text" />
                    </div>

                    <div className="field">
                        <label>Email</label>
                        <input type="email" />
                    </div>

                    <div className="field">
                        <label>Message</label>
                        <textarea rows={5} />
                    </div>

                    <button className="btnPrimary">
                        Send Message
                    </button>
                </form>
            </div>
        </main>
    );
}