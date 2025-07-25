import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { ThemeProvider } from "@/providers/theme-provider";
import "./globals.css";
import { cn } from "@/lib/utils";

const dmSans = DM_Sans({
    subsets: ["latin"]
});
export const metadata: Metadata = {
    title: "Fuzzie.",
    description: "Automate Your Work With Fuzzie."
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            suppressHydrationWarning
            className="relative">
            <body className={cn("relative antialiased", dmSans.className)}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem
                    disableTransitionOnChange>
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}

