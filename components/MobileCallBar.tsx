"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/site.config";
import { Icon } from "./ui";

/**
 * Fixed bottom bar on phones only. This demographic calls, and a
 * thumb-reachable tap-to-call is the single highest-converting
 * element on a mobile contractor site. Hidden on /contact, where
 * the form is already the whole page.
 */
export default function MobileCallBar() {
  const pathname = usePathname();
  if (pathname === "/contact") return null;

  return (
    <>
      {/* Spacer so the bar never covers the end of the footer */}
      <div className="h-[72px] xl:hidden" aria-hidden="true" />

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-ink/10 bg-white/95 backdrop-blur xl:hidden">
        <div className="mx-auto flex max-w-lg gap-3 px-4 py-3">
          {site.showPhone && (
            <a
              href={`tel:${site.phoneHref}`}
              className="flex flex-1 items-center justify-center gap-2 rounded-full bg-brand-700 px-4 py-3.5 text-sm font-semibold text-white"
            >
              <Icon name="phone" className="h-4 w-4" />
              Call now
            </a>
          )}
          <Link
            href="/contact"
            className="flex flex-1 items-center justify-center gap-2 rounded-full bg-copper-600 px-4 py-3.5 text-sm font-semibold text-white"
          >
            Free consultation
          </Link>
        </div>
      </div>
    </>
  );
}
