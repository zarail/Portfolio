import Image from 'next/image';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-teal-900 text-stone-50">
      <main className="flex flex-col gap-[16px] row-start-2 sm:items-start tracking-wider">
        <header className="fixed top-0 right-0 left-0 z-50 w-full px-6 sm:px-10">
          <div className="flex justify-end items-center">
            <nav className="flex gap-6 flex-wrap items-center justify-end mt-12 pr-4">
              <a
                className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                href="https://nextjs.org/learn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  aria-hidden
                  src="/file.svg"
                  alt="File icon"
                  width={16}
                  height={16}
                />
                Resume
              </a>
              <a
                className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                href="https://vercel.com/templates"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  aria-hidden
                  src="/window.svg"
                  alt="Window icon"
                  width={16}
                  height={16}
                />
                Projects
              </a>
              <a
                className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                href="https://nextjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  aria-hidden
                  src="/globe.svg"
                  alt="Globe icon"
                  width={16}
                  height={16}
                />
                Contact
              </a>
            </nav>
          </div>
        </header>
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
            &lt;Sarah /&gt;
          </code>{' '}
          and I&apos;m a full stack software engineer.
        </h1>
        <h2 className="mb-2">Welcome to my portfolio!</h2>
      </main>
    </div>
  );
}
