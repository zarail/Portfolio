import Navbar from '../components/Navbar';

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: 'en' | 'de' }>;
}) {
  const { locale } = await params;

  return (
    <section className="flex flex-col min-h-screen">
      <Navbar locale={locale} />
      {children}
    </section>
  );
}
