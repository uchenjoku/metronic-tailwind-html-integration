import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html className="h-full light" data-theme="true" lang="en-au" data-theme-mode="light">
        <Head />
        <body className="antialiased flex h-full text-base text-gray-700 [--tw-page-bg:var(--tw-light)] [--tw-page-bg-dark:var(--tw-coal-500)] [--tw-header-height-default:100px] [[data-sticky-header=on]&amp;]:[--tw-header-height:60px] [--tw-header-height:--tw-header-height-default] bg-[--tw-page-bg] dark:bg-[--tw-page-bg-dark]">
            <Main/>
            <NextScript/>
        </body>
    </Html>
  );
}
