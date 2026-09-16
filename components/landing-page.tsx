"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";
import { useLocale } from "@/components/locale-provider";
import {
  IconPhone,
  IconPin,
  serviceIcons,
} from "@/components/icons";
import type { Locale } from "@/lib/copy";

const NAV = [
  { href: "#services", key: "services" },
  { href: "#zone", key: "area" },
  { href: "#confiance", key: "trust" },
  { href: "#urgence", key: "urgent" },
  { href: "#contact", key: "contact" },
] as const;

function CallLink({
  className,
  children,
}: {
  className: string;
  children: ReactNode;
}) {
  return (
    <a href={PHONE_TEL} className={className}>
      {children}
    </a>
  );
}

function LanguageToggle() {
  const { locale, setLocale, t } = useLocale();

  const btn = (code: Locale, label: string) => (
    <button
      type="button"
      lang={code}
      aria-pressed={locale === code}
      onClick={() => setLocale(code)}
      className={`rounded px-1.5 py-0.5 text-sm font-semibold tracking-wide transition-colors ${
        locale === code
          ? "bg-brand text-white"
          : "text-neutral-600 hover:text-brand"
      }`}
    >
      {label}
    </button>
  );

  return (
    <div
      role="group"
      aria-label={t.nav.langGroup}
      className="flex items-center gap-0.5 rounded-md border border-neutral-200 bg-white p-0.5"
    >
      {btn("fr", "FR")}
      <span className="text-neutral-300" aria-hidden="true">
        |
      </span>
      {btn("en", "EN")}
    </div>
  );
}

function Header() {
  const { t } = useLocale();

  return (
    <header className="sticky top-0 z-40 border-b border-neutral-200/80 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-2.5 sm:px-6">
        <a href="#accueil" className="shrink-0 rounded-sm focus-visible:outline-brand">
          <Image
            src="/logo.png"
            alt="Plomberie D.Langevin"
            width={160}
            height={163}
            className="h-14 w-auto sm:h-16"
            priority
          />
        </a>

        <nav
          className="ml-2 hidden items-center gap-1 lg:flex"
          aria-label="Primary"
        >
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-2.5 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-100 hover:text-brand"
            >
              {t.nav[item.key]}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2 sm:gap-3">
          <LanguageToggle />
          <CallLink className="inline-flex items-center gap-2 rounded-md bg-brand px-3 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand sm:px-4">
            <IconPhone className="size-4" />
            <span className="hidden sm:inline">{PHONE_DISPLAY}</span>
            <span className="sm:hidden">{t.headerCta}</span>
          </CallLink>
        </div>
      </div>
      <nav
        className="flex gap-1 overflow-x-auto border-t border-neutral-100 px-3 py-1.5 lg:hidden"
        aria-label="Sections"
      >
        {NAV.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="shrink-0 rounded-full px-3 py-1 text-xs font-medium text-neutral-600 hover:bg-brand-soft hover:text-brand"
          >
            {t.nav[item.key]}
          </a>
        ))}
      </nav>
    </header>
  );
}

function StickyCallBar() {
  const { t } = useLocale();

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-neutral-200 bg-white/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-[0_-8px_24px_rgba(0,0,0,0.06)] md:hidden">
      <CallLink className="flex w-full items-center justify-center gap-2 rounded-md bg-brand px-4 py-3.5 text-base font-semibold text-white hover:bg-brand-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand">
        <IconPhone className="size-5" />
        {t.callWithNumber}
      </CallLink>
    </div>
  );
}

export function LandingPage() {
  const { t } = useLocale();

  return (
    <>
      <a
        href="#accueil"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-3 focus:py-2 focus:text-sm focus:font-semibold focus:text-brand focus:shadow"
      >
        {t.skip}
      </a>
      <Header />
      <main id="contenu" className="flex-1 pb-24 md:pb-0">
        <section
          id="accueil"
          className="border-b border-neutral-200 bg-[linear-gradient(180deg,#f4f6fa_0%,#ffffff_100%)]"
        >
          <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:py-20">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand">
                {t.hero.kicker}
              </p>
              <h1 className="mt-3 max-w-xl text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl">
                {t.hero.title}
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-neutral-600">
                {t.hero.lead}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <CallLink className="inline-flex items-center justify-center gap-2 rounded-md bg-brand px-5 py-3.5 text-base font-semibold text-white shadow-sm hover:bg-brand-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand">
                  <IconPhone className="size-5" />
                  {t.callWithNumber}
                </CallLink>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center rounded-md border border-neutral-300 bg-white px-5 py-3.5 text-base font-semibold text-neutral-800 hover:border-brand hover:text-brand"
                >
                  {t.hero.secondary}
                </a>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-sm rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-8">
                <Image
                  src="/logo.png"
                  alt="Plomberie D.Langevin"
                  width={640}
                  height={653}
                  className="mx-auto h-auto w-full"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
            <div className="flex flex-wrap items-center gap-3">
              <h2 className="text-3xl font-bold tracking-tight text-neutral-900">
                {t.services.title}
              </h2>
              <span className="rounded-full border border-amber-300 bg-amber-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-amber-900">
                {t.services.badge}
              </span>
            </div>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-neutral-600">
              {t.services.note}
            </p>
            <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {t.services.items.map((item, index) => {
                const Icon = serviceIcons[index];
                return (
                  <li
                    key={item.title}
                    className="rounded-xl border border-neutral-200 bg-neutral-50/60 p-5"
                  >
                    <div className="flex size-10 items-center justify-center rounded-lg bg-brand-soft text-brand">
                      <Icon className="size-5" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-neutral-900">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                      {item.text}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        <section id="zone" className="border-y border-neutral-200 bg-neutral-50">
          <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[auto_1fr] lg:items-start">
            <div className="flex size-14 items-center justify-center rounded-xl bg-brand-soft text-brand">
              <IconPin className="size-7" />
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-neutral-900">
                {t.area.title}
              </h2>
              <p className="mt-4 max-w-2xl text-lg text-neutral-800">
                {t.area.lead}
              </p>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-neutral-600">
                {t.area.body}
              </p>
            </div>
          </div>
        </section>

        <section id="confiance" className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900">
              {t.trust.title}
            </h2>
            <ul className="mt-10 grid gap-6 sm:grid-cols-2">
              {t.trust.items.map((item, i) => (
                <li key={item.title} className="flex gap-4">
                  <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-base leading-relaxed text-neutral-600">
                      {item.text}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="urgence" className="bg-brand-soft">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
            <div className="max-w-3xl rounded-2xl border border-brand/15 bg-white p-6 sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand">
                {t.nav.urgent}
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-neutral-900">
                {t.urgent.title}
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-neutral-700">
                {t.urgent.lead}
              </p>
              <p className="mt-3 text-base leading-relaxed text-neutral-600">
                {t.urgent.note}
              </p>
              <CallLink className="mt-8 inline-flex items-center gap-2 rounded-md bg-brand px-5 py-3.5 text-base font-semibold text-white hover:bg-brand-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand">
                <IconPhone className="size-5" />
                {t.callWithNumber}
              </CallLink>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6 sm:py-20">
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900">
              {t.contact.title}
            </h2>
            <p className="mt-4 text-xl text-neutral-800">{t.contact.lead}</p>
            <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-neutral-600">
              {t.contact.body}
            </p>
            <CallLink className="mt-8 inline-flex items-center gap-3 rounded-md bg-brand px-6 py-4 text-xl font-bold text-white hover:bg-brand-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand sm:text-2xl">
              <IconPhone className="size-6" />
              {PHONE_DISPLAY}
            </CallLink>
          </div>
        </section>
      </main>

      <footer className="border-t border-neutral-200 bg-neutral-50">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div className="flex items-center gap-4">
            <Image
              src="/logo.png"
              alt=""
              width={120}
              height={122}
              className="h-14 w-auto"
            />
            <div>
              <p className="font-semibold text-neutral-900">{t.footer.rights}</p>
              <a
                href={PHONE_TEL}
                className="text-sm font-medium text-brand hover:underline"
              >
                {PHONE_DISPLAY}
              </a>
            </div>
          </div>
          <p className="max-w-sm text-sm text-neutral-500">{t.footer.langNote}</p>
        </div>
      </footer>
      <StickyCallBar />
    </>
  );
}
