'use client';
import { usePathname, useRouter } from 'next/navigation';

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  const changeLanguage = (lang: string) => {
    const segments = pathname.split('/');
    segments[1] = lang;
    router.push(segments.join('/'));
  };

  return (
    <div className="flex items-center gap-2 text-sm">
      <span
        className="hover:underline cursor-pointer"
        onClick={() => changeLanguage('en')}
      >
        EN
      </span>
      <span>|</span>
      <span
        className="hover:underline cursor-pointer"
        onClick={() => changeLanguage('de')}
      >
        DE
      </span>
    </div>
  );
}
