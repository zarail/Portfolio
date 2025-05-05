import Navbar from '../components/Navbar';

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <section>
      <Navbar locale={params.locale} />
      {children}
    </section>
  );
}
