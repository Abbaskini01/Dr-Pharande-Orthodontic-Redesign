import { Container } from "@/components/layout";

export default function HomePage() {
  return (
    <main>
      <section className="py-32">
        <Container>
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
            Premium Orthodontic Care
          </span>

          <h1 className="mt-8 max-w-3xl text-6xl font-bold leading-tight">
            Transforming Smiles with Precision & Care
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-slate-600">
            Personalized orthodontic treatment using modern technology,
            experienced care, and a patient-first approach.
          </p>
        </Container>
      </section>
    </main>
  );
}