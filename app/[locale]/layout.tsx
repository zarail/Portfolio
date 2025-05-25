import Navbar from '../components/Navbar';

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: 'en' | 'de' };
}) {
  const { locale } = await Promise.resolve(params);

  return (
    <section className="flex flex-col min-h-screen">
      <Navbar locale={locale} />
      {children}
    </section>
  );
}
