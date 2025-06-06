import Image from 'next/image';
import { getDictionary } from '@/utils/getDictionary';

type Props = {
  params: Promise<{
    locale: 'en' | 'de';
  }>;
};

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const about = dict.about;

  return (
    <main className="p-10 space-y-12">
      <h1 className="text-3xl font-bold mb-2">{about.title}</h1>
      <Image
        className="m-6 mx-auto"
        src="/photo.jpg"
        alt="ZI photo"
        width={150}
        height={38}
        priority
      />
      <section>
        <p className="mb-2 whitespace-pre-line text-lg">{about.text}</p>
      </section>
    </main>
  );
}
