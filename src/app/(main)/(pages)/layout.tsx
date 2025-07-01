export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="border-l-[1px] border-t-[1px] pb-20 h-screen border-muted-foreground/20 overflow-scroll">
      {children}
    </div>
  );
}
