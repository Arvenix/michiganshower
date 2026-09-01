import Link from "next/link";
import { Button, Container, Icon } from "@/components/ui";
import { nav } from "@/site.config";

export default function NotFound() {
  return (
    <section className="bg-cream-100 py-28">
      <Container>
        <div className="mx-auto max-w-xl text-center">
          <p className="eyebrow">404</p>
          <h1 className="h-display mt-3 text-4xl text-ink sm:text-5xl">
            That page went down the drain.
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-ink-soft">
            The page you were after doesn&apos;t exist any more. Here&apos;s
            everywhere else you can go.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Button href="/">
              Back to home
              <Icon name="arrowRight" className="h-4 w-4" />
            </Button>
            <Button href="/contact" variant="secondary">
              Contact us
            </Button>
          </div>
          <nav className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-ink-soft underline underline-offset-4 hover:text-brand-700"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </Container>
    </section>
  );
}
