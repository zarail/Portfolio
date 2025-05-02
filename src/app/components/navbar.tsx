import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="fixed top-0 right-0 left-0 z-50 w-full px-6 sm:px-10 bg-[#0b4f4b]">
      <div className="flex items-center justify-between py-4">
        <Link href="/">
          <Image
            src="\logo.svg"
            alt="ZI logo"
            width={50}
            height={100}
            priority
            className="block"
          />
        </Link>
        <nav className="flex items-center gap-8">
          <Link
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="/"
          >
            <Image
              aria-hidden
              src="/home.svg"
              alt="File icon"
              width={16}
              height={16}
            />
            Home
          </Link>
          <Link
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="/resume"
          >
            <Image
              aria-hidden
              src="/resume.svg"
              alt="File icon"
              width={16}
              height={16}
            />
            Resume
          </Link>
          <Link
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="/projects"
          >
            <Image
              aria-hidden
              src="/projects.svg"
              alt="Window icon"
              width={16}
              height={16}
            />
            Projects
          </Link>
          <Link
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="/contact"
          >
            <Image
              aria-hidden
              src="/contact.svg"
              alt="Globe icon"
              width={16}
              height={16}
            />
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
