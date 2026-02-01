import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Refined Textile Industries",
    description: "Wholesale Apparel • Uniforms • Custom Branding",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body>
        {children}
        </body>
        </html>
    );
}