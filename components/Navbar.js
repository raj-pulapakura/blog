import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center fixed top-0 w-full py-5 px-10 bg-sky-100 opacity-95">
            <section>
            <Link href="/"><h1 className="text-4xl font-bold mb-3">Rablog</h1></Link>
            <p>A blog about AI and self-development made by Raj Pulapakura</p>
            </section>
            <section>
                <Link href="/about"><p>About Me</p></Link>
            </section>
            </nav>
  );
}