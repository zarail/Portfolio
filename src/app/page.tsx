import Image from 'next/image';

export default function Home() {
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
          Hello! My name is{' '}
          <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
            &lt;Zara /&gt;
          </code>{' '}
          and I&apos;m a full stack software engineer.
        </h1>
        <h2 className="mb-2">Welcome to my portfolio!</h2>
      </main>
    </div>
  );
}
