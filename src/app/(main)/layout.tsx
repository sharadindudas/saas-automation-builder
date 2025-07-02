import Sidebar from "@/components/sidebar";

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex overflow-hidden min-h-screen">
            <Sidebar />
            <div className="w-full">{children}</div>
        </div>
    );
}

