import Image from 'next/image';
import { getDictionary } from '@/utils/getDictionary';
import { Metadata } from 'next';

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
  const dict = getDictionary(params.locale);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[16px] row-start-2 sm:items-start tracking-wider">
        <Image
          className="mb-2 mx-auto"
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
        </h1>{' '}
        <h2 className="mb-2">{dict.home.mainText}</h2>
      </main>
    </div>
  );
}
