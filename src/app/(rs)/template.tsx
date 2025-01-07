export default async function Template({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="animate-appear">
      {/* Header */}
      {children}
      {/* <div className=""></div> */}
    </div>
  );
}
