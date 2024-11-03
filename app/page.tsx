import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { FaContao, FaHome, FaUser } from "react-icons/fa";

export default function Home() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <FaHome />,
    },
    {
      name: "About",
      link: "/about",
      icon: <FaUser />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: <FaContao />,
    },
  ];

  return (
    <>
      <main className="relative bg-black-100 overflow-hidden mx-auto flex flex-col items-center justify-center px-5 sm:px-10">
        <div className="max-w-7xl w-full">
          <FloatingNav navItems={navItems}/>
          <Hero />
        </div>
      </main>
    </>
  );
}
