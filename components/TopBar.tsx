import Link from "next/link";
import { site } from "@/site.config";
import { Container, Icon } from "./ui";

/**
 * The national chains run a discount and a countdown here. We run the
 * thing that is actually true: the consultation is free and the quote
 * holds for thirty days.
 */
export default function TopBar() {
  return (
    <div className="bg-brand-950 text-white">
      <Container>
        <div className="flex h-11 items-center justify-between gap-4 text-[0.82rem]">
          <p className="truncate font-medium text-brand-100">
            {site.topBarMessage}
          </p>
          <div className="flex shrink-0 items-center gap-4">
            {site.showPhone && (
              <a
                href={`tel:${site.phoneHref}`}
                className="inline-flex items-center gap-1.5 font-bold text-white hover:text-copper-300"
              >
                <Icon name="phone" className="h-3.5 w-3.5" />
                {site.phone}
              </a>
            )}
            <Link
              href="/contact"
              className="hidden font-semibold text-copper-300 underline underline-offset-4 hover:text-copper-200 sm:inline"
            >
              Book a consultation
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
