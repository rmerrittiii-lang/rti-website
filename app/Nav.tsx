"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function isActive(pathname: string, href: string) {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
}

export default function Nav() {
    const pathname = usePathname();

    const pill = (href: string) =>
        `navPill ${isActive(pathname, href) ? "navPillActive" : ""}`;

    return (
        <nav className="nav">
            <Link href="/" className={pill("/")}>
                Home
            </Link>
            <Link href="/what-we-do" className={pill("/what-we-do")}>
                What We Do
            </Link>
            <Link href="/get-a-quote" className={pill("/get-a-quote")}>
                Get a Quote
            </Link>
            <Link href="/contact" className={pill("/contact")}>
                Contact
            </Link>
        </nav>
    );
}