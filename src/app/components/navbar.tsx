'use client';

import Image from 'next/image';
import Link from 'next/link';
import LanguageSwitcher from './LanguageSwitcher';

type Props = {
  locale: string;
};

export default function Navbar({ locale }: Props) {
  const navItems = [
    { href: '/', label: 'Home', icon: '/home.svg' },
    { href: '/resume', label: 'Resume', icon: '/resume.svg' },
    { href: '/projects', label: 'Projects', icon: '/projects.svg' },
    { href: '/contact', label: 'Contact', icon: '/contact.svg' },
  ];

  return (
    <header className="fixed top-0 right-0 left-0 z-50 w-full px-6 sm:px-10 bg-[#0b4f4b]">
      <div className="flex items-center justify-between py-4">
        <Link href={`/${locale}`}>
          <Image
            src="/logo.svg"
            alt="ZI logo"
            width={50}
            height={100}
            priority
            className="block"
          />
        </Link>

        <nav className="flex items-center gap-8">
          {navItems.map(({ href, label, icon }) => (
            <Link
              key={label}
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              href={`/${locale}${href}`}
            >
              <Image src={icon} alt={`${label} icon`} width={16} height={16} />
              {label}
            </Link>
          ))}
          <LanguageSwitcher />
        </nav>
      </div>
    </header>
  );
}
