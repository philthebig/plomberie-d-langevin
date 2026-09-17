"use client";

import type { CSSProperties, ReactNode } from "react";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";
import { useLocale } from "@/components/locale-provider";
import { Logo } from "@/components/logo";
import { useScrollReveal } from "@/components/scroll-reveal";
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

const primaryBtn =
  "inline-flex items-center justify-center gap-2 rounded-xl bg-amber-500 text-white shadow-sm transition duration-200 hover:-translate-y-px hover:bg-amber-600 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600";

const secondaryBtn =
  "inline-flex items-center justify-center rounded-xl border border-neutral-300 bg-white text-brand shadow-sm transition duration-200 hover:-translate-y-px hover:border-brand hover:bg-brand-soft hover:shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand";

function revealDelay(ms: number): CSSProperties {
  return { "--reveal-delay": `${ms}ms` } as CSSProperties;
}

function CallLink({
  className,
  children,
}: {
  className: string;
  children: ReactNode;
}) {
  return (
    <a href={PHONE_TEL} className={`touch-manipulation ${className}`}>
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
      className={`rounded px-1.5 py-0.5 text-sm font-semibold tracking-wide transition-colors duration-200 ${
        locale === code
          ? "bg-brand text-white"
          : "text-brand/70 hover:text-brand"
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
      <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-2 sm:px-6">
        <a
          href="#accueil"
          className="min-w-0 shrink rounded-sm focus-visible:outline-brand"
        >
          <Logo
            className="h-[5.5rem] w-auto object-contain object-left sm:h-[6.25rem]"
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
              className="rounded-md px-2.5 py-2 text-sm font-semibold text-brand transition-colors duration-200 hover:bg-brand-soft hover:text-brand-hover"
            >
              {t.nav[item.key]}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2 sm:gap-3">
          <LanguageToggle />
          <CallLink className={`${primaryBtn} px-3 py-2 text-sm font-semibold sm:px-4`}>
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
            className="shrink-0 rounded-full px-3 py-1 text-xs font-semibold text-brand transition-colors duration-200 hover:bg-brand-soft hover:text-brand-hover"
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
    <div className="fixed inset-x-0 bottom-0 z-40 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-2 md:hidden">
      <div className="relative">
        <span className="cta-pulse-ring" aria-hidden="true" />
        <CallLink
          className={`${primaryBtn} relative w-full px-4 py-3.5 text-base font-semibold shadow-lg shadow-amber-500/25`}
        >
          <IconPhone className="size-5" />
          {t.callWithNumber}
        </CallLink>
      </div>
    </div>
  );
}

export function LandingPage() {
  const { locale, t } = useLocale();
  useScrollReveal(locale);

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
        <section id="accueil" className="hero-surface border-b border-neutral-200">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:py-20">
            <div className="relative">
              <p className="hero-enter text-sm font-semibold uppercase tracking-[0.14em] text-brand">
                {t.hero.kicker}
              </p>
              <h1
                className="hero-enter mt-3 max-w-xl bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text pb-1 text-4xl font-bold leading-[1.15] tracking-tight text-transparent sm:text-5xl"
                style={{ animationDelay: "70ms" }}
              >
                {t.hero.title}
              </h1>
              <p
                className="hero-enter mt-5 max-w-xl text-lg leading-relaxed text-neutral-600"
                style={{ animationDelay: "130ms" }}
              >
                {t.hero.lead}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <CallLink className={`${primaryBtn} px-5 py-3.5 text-base font-semibold`}>
                  <IconPhone className="size-5" />
                  {t.callWithNumber}
                </CallLink>
                <a href="#services" className={`${secondaryBtn} px-5 py-3.5 text-base font-semibold`}>
                  {t.hero.secondary}
                </a>
              </div>
            </div>
            <div className="hero-enter flex justify-center lg:justify-end" style={{ animationDelay: "90ms" }}>
              <div className="w-full max-w-sm rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8">
                <Logo className="mx-auto h-auto w-full object-contain" priority />
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
            <div data-reveal className="flex flex-wrap items-center gap-3">
              <h2 className="text-3xl font-bold tracking-tight text-brand">
                {t.services.title}
              </h2>
              <span className="rounded-full border border-amber-300 bg-amber-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-amber-900">
                {t.services.badge}
              </span>
            </div>
            <p data-reveal className="mt-4 max-w-3xl text-base leading-relaxed text-neutral-600">
              {t.services.note}
            </p>
            <ul className="mt-10 grid auto-rows-fr grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {t.services.items.map((item, index) => {
                const Icon = serviceIcons[index];
                return (
                  <li
                    key={index}
                    data-reveal
                    style={revealDelay(index * 70)}
                    className="h-full rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md"
                  >
                    <div className="inline-flex rounded-full bg-blue-50 p-3 text-blue-900">
                      <Icon className="size-7" />
                    </div>
                    <h3 className="mt-5 text-lg font-semibold text-brand">
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
          <div
            data-reveal
            className="mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[auto_1fr] lg:items-start"
          >
            <div className="flex size-14 items-center justify-center rounded-full bg-blue-50 p-3 text-blue-900">
              <IconPin className="size-7" />
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-brand">
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
            <h2 data-reveal className="text-3xl font-bold tracking-tight text-brand">
              {t.trust.title}
            </h2>
            <ul className="mt-10 grid gap-6 sm:grid-cols-2">
              {t.trust.items.map((item, i) => (
                <li
                  key={i}
                  data-reveal
                  style={revealDelay(i * 110)}
                  className="flex gap-4"
                >
                  <span className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-full bg-blue-50 text-sm font-bold tabular-nums text-blue-900 ring-1 ring-blue-100">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-brand">
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
            <div
              data-reveal
              className="max-w-3xl rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-10"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand">
                {t.nav.urgent}
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-brand">
                {t.urgent.title}
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-neutral-700">
                {t.urgent.lead}
              </p>
              <p className="mt-3 text-base leading-relaxed text-neutral-600">
                {t.urgent.note}
              </p>
              <CallLink className={`${primaryBtn} mt-8 px-5 py-3.5 text-base font-semibold`}>
                <IconPhone className="size-5" />
                {t.callWithNumber}
              </CallLink>
            </div>
          </div>
        </section>

        <section id="contact" className="border-t border-neutral-200 bg-white">
          <div data-reveal className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6 sm:py-20">
            <Logo
              decorative
              className="mx-auto mb-8 h-24 w-auto object-contain sm:h-28"
            />
            <h2 className="text-3xl font-bold tracking-tight text-brand">
              {t.contact.title}
            </h2>
            <p className="mt-4 text-xl text-neutral-800">{t.contact.lead}</p>
            <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-neutral-600">
              {t.contact.body}
            </p>
            <CallLink className={`${primaryBtn} mt-8 gap-3 px-6 py-4 text-xl font-bold sm:text-2xl`}>
              <IconPhone className="size-6" />
              {PHONE_DISPLAY}
            </CallLink>
          </div>
        </section>
      </main>

      <footer className="border-t border-neutral-200 bg-neutral-50">
        <div
          data-reveal
          className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-6"
        >
          <div className="flex items-center gap-4">
            <Logo decorative className="h-16 w-auto object-contain" />
            <div>
              <p className="font-semibold text-brand">{t.footer.rights}</p>
              <a
                href={PHONE_TEL}
                className="text-sm font-medium text-brand transition-colors duration-200 hover:underline"
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
