/* eslint-disable @typescript-eslint/no-explicit-any */
import { getDictionary } from '@/utils/getDictionary';

type Props = {
  params: {
    locale: 'en' | 'de';
  };
};

export default function ResumePage({ params }: Props) {
  const dict: any = getDictionary(params.locale) || {};
  const about = dict.about || {};

  return (
    <main className="p-10 space-y-12">
      <h1 className="text-3xl font-bold">{about.title}</h1>

      <section>
        <p className="mb-2 whitespace-pre-line">{about.text}</p>
      </section>
    </main>
  );
}
