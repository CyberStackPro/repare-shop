import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className=" z-50  h-screen w-full dark:bg-background bg-background dark:bg-grid-small-white/[0.2] bg-grid-black/[0.2] relative ">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-background bg-primary [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="bg-home-img inset-0 absolute bg-center bg-cover -z-10"></div>
      <main className=" flex relative flex-col justify-center items-center h-dvh mx-auto">
        {/* Shadow blur */}
        {/* <div className="absolute inset-0 bg-primary/50 pointer-events-none size-52 transform translate-y-56 translate-x-1/2  blur-3xl"></div> */}
        {/* Business Info Card */}
        <div className="flex flex-col gap-6 p-12 rounded-xl shadow-lg bg-background/10 backdrop-blur-sm dark:bg-background/20 dark:text-foreground text-foreground border">
          <h1 className="text-3xl font-bold">
            Yeab&aos;s Computer <br /> Repair Shop
          </h1>
          <address>
            555 Main Street <br />
            New York, NY 10001
          </address>
          <p>Open Daily: 9:00 AM - 5:00 PM</p>
          <Link href="tel:555-555-5555" className="hover:underline">
            555-555-5555
          </Link>
        </div>
      </main>
    </div>
  );
}
