import Image from 'next/image';
import { getDictionary } from '@/utils/getDictionary';
import { Metadata } from 'next';
import Link from 'next/link';

type Props = {
  params: {
    locale: 'en' | 'de';
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const dict = getDictionary(params.locale);
  return {
    title: dict.home.title,
  };
}

export default async function Page({ params }: Props) {
  const locale = params.locale;
  const dict = getDictionary(locale);

  return (
    <div className="grid grid-rows-[8px_1fr_20px] items-center justify-items-center min-h-screen pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[16px] row-start-2 sm:items-start tracking-wider">
        <Image
          className="mb-2 mx-auto invert dark:invert-0"
          src="\logo.svg"
          alt="ZI logo"
          width={150}
          height={38}
          priority
        />
        <h1 className="mb-1 text-xl font-bold">
          {dict.home.introPart1}{' '}
          <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-mono font-semibold">
            &lt;Zara /&gt;
          </code>{' '}
          {dict.home.introPart2}
        </h1>
        <h2 className="mb-2">{dict.home.mainText}</h2>
        <p className="mb-2">{dict.home.aboutMe}</p>
        <Link href={`/${locale}/about`} className="mt-4 btn">
          {dict.home.aboutMeBtn}
        </Link>
      </main>
    </div>
  );
}
