import Footer from "@/components/footer";
import { Navbar } from "@/components/navbar";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center ">
      {/* <Navbar/> */}
      <div className="inline-block min-h-screen text-center justify-center">
        {children}
      </div>
      {/* <Footer/> */}
    </section>
  );
}
