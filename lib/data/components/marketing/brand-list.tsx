import { IconBuildingStore } from '@tabler/icons-react';
import { ComponentType } from '../types';

export const brand_list: ComponentType = {
  slug: 'brand-list',
  name: 'Brand List',
  icon: <IconBuildingStore stroke={1.5} />,
  description: 'A collection of brand logos presented in various stylish layouts.',
  variants: [
    {
      id: 'simple-grid',
      name: 'Simple Grid',
      code: `<section class="bg-white py-12 dark:bg-gray-900">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="text-center">
      <h2 class="text-sm font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
        Trusted by leading companies
      </h2>
    </div>
    
    <div class="mt-8 grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-6">
      <div class="col-span-1 flex items-center justify-center">
        <img class="h-12 grayscale transition hover:grayscale-0" src="https://cdn.simpleicons.org/github/374151" alt="Transistor" />
      </div>
      <div class="col-span-1 flex items-center justify-center">
        <img class="h-12 grayscale transition hover:grayscale-0" src="https://cdn.simpleicons.org/github/374151" alt="Reform" />
      </div>
      <div class="col-span-1 flex items-center justify-center">
        <img class="h-12 grayscale transition hover:grayscale-0" src="https://cdn.simpleicons.org/github/374151" alt="Tuple" />
      </div>
      <div class="col-span-1 flex items-center justify-center">
        <img class="h-12 grayscale transition hover:grayscale-0" src="https://cdn.simpleicons.org/github/374151" alt="SavvyCal" />
      </div>
      <div class="col-span-1 flex items-center justify-center">
        <img class="h-12 grayscale transition hover:grayscale-0" src="https://cdn.simpleicons.org/github/374151" alt="Statamic" />
      </div>
      <div class="col-span-1 flex items-center justify-center">
        <img class="h-12 grayscale transition hover:grayscale-0" src="https://cdn.simpleicons.org/github/374151" alt="Laravel" />
      </div>
    </div>
  </div>
</section>`,
      contributor: 'yuxxeun',
    },
    {
      id: 'bordered-cards',
      name: 'Bordered Cards',
      code: `<section class="bg-gray-50 py-16 dark:bg-gray-950">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="text-center">
      <p class="text-sm font-semibold uppercase tracking-wide text-lime-600 dark:text-lime-400">
        Our Clients
      </p>
      <h2 class="mt-2 text-3xl font-bold text-gray-900 dark:text-white">
        Trusted by industry leaders
      </h2>
    </div>
    
    <div class="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
      <div class="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-6 transition hover:border-lime-500 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900 dark:hover:border-lime-400">
        <div class="flex h-16 items-center justify-center">
          <img class="h-10 grayscale transition group-hover:grayscale-0" src="https://cdn.simpleicons.org/github/374151" alt="Transistor" />
        </div>
      </div>
      <div class="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-6 transition hover:border-lime-500 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900 dark:hover:border-lime-400">
        <div class="flex h-16 items-center justify-center">
          <img class="h-10 grayscale transition group-hover:grayscale-0" src="https://cdn.simpleicons.org/github/374151" alt="Reform" />
        </div>
      </div>
      <div class="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-6 transition hover:border-lime-500 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900 dark:hover:border-lime-400">
        <div class="flex h-16 items-center justify-center">

            <!-- logo for light mode --> 
            <img
                class="h-10 dark:hidden"
                src="https://cdn.simpleicons.org/github/374151"
                alt="GitHub"
            />

            <!-- logo for dark mode -->
            <img
                class="hidden h-10 dark:block"
                src="https://cdn.simpleicons.org/github/D1D5DB"
                alt="GitHub"
            />
        </div>
      </div>
      <div class="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-6 transition hover:border-lime-500 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900 dark:hover:border-lime-400">
        <div class="flex h-16 items-center justify-center">
          
        <!-- logo for light mode --> 
            <img
                class="h-10 dark:hidden"
                src="https://cdn.simpleicons.org/vercel/374151"
                alt="GitHub"
            />

            <!-- logo for dark mode -->
            <img
                class="hidden h-10 dark:block"
                src="https://cdn.simpleicons.org/vercel/D1D5DB"
                alt="GitHub"
            />

        </div>
      </div>
      <div class="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-6 transition hover:border-lime-500 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900 dark:hover:border-lime-400">
        <div class="flex h-16 items-center justify-center">
          
            <!-- logo for light mode --> 
            <img
                class="h-10 dark:hidden"
                src="https://cdn.simpleicons.org/tailwindcss/374151"
                alt="GitHub"
            />

            <!-- logo for dark mode -->
            <img
                class="hidden h-10 dark:block"
                src="https://cdn.simpleicons.org/tailwindcss/D1D5DB"
                alt="GitHub"
            />

        </div>
      </div>
      <div class="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-6 transition hover:border-lime-500 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900 dark:hover:border-lime-400">
        <div class="flex h-16 items-center justify-center">

            <!-- logo for light mode --> 
            <img
                class="h-10 dark:hidden"
                src="https://cdn.simpleicons.org/python/374151"
                alt="GitHub"
            />

            <!-- logo for dark mode -->
            <img
                class="hidden h-10 dark:block"
                src="https://cdn.simpleicons.org/python/D1D5DB"
                alt="GitHub"
            />
        </div>
      </div>
    </div>
  </div>
</section>`,
      contributor: 'rayasabari',
    },
    {
      id: 'minimal-centered',
      name: 'Minimal Centered',
      code: `<section class="bg-white py-20 dark:bg-gray-900">
  <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
    <div class="text-center">
      <h2 class="text-base font-semibold text-gray-600 dark:text-gray-300">
        Join 100+ companies already growing
      </h2>
    </div>
    
    <div class="mt-12 flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
      <img class="h-12 opacity-50 grayscale transition hover:opacity-100 hover:grayscale-0" src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-400.svg" alt="Transistor" />
      <img class="h-12 opacity-50 grayscale transition hover:opacity-100 hover:grayscale-0" src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-400.svg" alt="Reform" />
      <img class="h-12 opacity-50 grayscale transition hover:opacity-100 hover:grayscale-0" src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-400.svg" alt="Tuple" />
      <img class="h-12 opacity-50 grayscale transition hover:opacity-100 hover:grayscale-0" src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-400.svg" alt="SavvyCal" />
      <img class="h-12 opacity-50 grayscale transition hover:opacity-100 hover:grayscale-0" src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-400.svg" alt="Statamic" />
    </div>
  </div>
</section>`,
      contributor: 'yuxxeun',
    },
    {
      id: 'gradient-background',
      name: 'Gradient Background',
      code: `<section class="relative overflow-hidden bg-gradient-to-br from-lime-50 to-white py-16 dark:from-gray-900 dark:to-gray-950">
  <div class="absolute inset-0 bg-grid-gray-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-gray-800"></div>
  
  <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="text-center">
      <span class="inline-flex items-center gap-2 rounded-full bg-lime-100 px-4 py-1.5 text-sm font-medium text-lime-700 dark:bg-lime-900/50 dark:text-lime-300">
        <svg class="size-4" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
        </svg>
        Trusted Partners
      </span>
      <h2 class="mt-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
        Powering the world's best teams
      </h2>
    </div>
    
    <div class="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
      <div class="col-span-1 flex items-center justify-center rounded-2xl bg-white/50 p-8 backdrop-blur-sm transition hover:bg-white dark:bg-gray-900/50 dark:hover:bg-gray-900">
        <img class="h-12 grayscale transition hover:grayscale-0" src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-400.svg" alt="Transistor" />
      </div>
      <div class="col-span-1 flex items-center justify-center rounded-2xl bg-white/50 p-8 backdrop-blur-sm transition hover:bg-white dark:bg-gray-900/50 dark:hover:bg-gray-900">
        <img class="h-12 grayscale transition hover:grayscale-0" src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-400.svg" alt="Reform" />
      </div>
      <div class="col-span-1 flex items-center justify-center rounded-2xl bg-white/50 p-8 backdrop-blur-sm transition hover:bg-white dark:bg-gray-900/50 dark:hover:bg-gray-900">
        <img class="h-12 grayscale transition hover:grayscale-0" src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-400.svg" alt="Tuple" />
      </div>
      <div class="col-span-1 flex items-center justify-center rounded-2xl bg-white/50 p-8 backdrop-blur-sm transition hover:bg-white dark:bg-gray-900/50 dark:hover:bg-gray-900">
        <img class="h-12 grayscale transition hover:grayscale-0" src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-400.svg" alt="SavvyCal" />
      </div>
      <div class="col-span-1 flex items-center justify-center rounded-2xl bg-white/50 p-8 backdrop-blur-sm transition hover:bg-white dark:bg-gray-900/50 dark:hover:bg-gray-900">
        <img class="h-12 grayscale transition hover:grayscale-0" src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-400.svg" alt="Statamic" />
      </div>
      <div class="col-span-1 flex items-center justify-center rounded-2xl bg-white/50 p-8 backdrop-blur-sm transition hover:bg-white dark:bg-gray-900/50 dark:hover:bg-gray-900">
        <img class="h-12 grayscale transition hover:grayscale-0" src="https://tailwindui.com/img/logos/158x48/laravel-logo-gray-400.svg" alt="Laravel" />
      </div>
    </div>
  </div>
</section>`,
      contributor: 'yuxxeun',
    },
    {
      id: 'floating-cards',
      name: 'Floating Cards',
      code: `<section class="bg-white py-20 dark:bg-gray-900">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="mb-12 text-center">
      <p class="text-sm font-semibold uppercase tracking-widest text-lime-600 dark:text-lime-400">
        Trusted Globally
      </p>
      <h2 class="mt-3 text-3xl font-bold text-gray-900 dark:text-white">
        Partner brands we work with
      </h2>
      <p class="mt-4 text-lg text-gray-600 dark:text-gray-300">
        Join thousands of companies using our platform
      </p>
    </div>
    
    <div class="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
      <div class="group relative">
        <div class="absolute -inset-1 rounded-2xl bg-gradient-to-r from-lime-600 to-lime-400 opacity-0 blur transition group-hover:opacity-100"></div>
        <div class="relative flex h-32 items-center justify-center rounded-xl border border-gray-200 bg-white p-6 transition group-hover:border-transparent dark:border-gray-800 dark:bg-gray-900">
          <img class="h-10 grayscale transition group-hover:grayscale-0" src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-400.svg" alt="Transistor" />
        </div>
      </div>
      <div class="group relative">
        <div class="absolute -inset-1 rounded-2xl bg-gradient-to-r from-lime-600 to-lime-400 opacity-0 blur transition group-hover:opacity-100"></div>
        <div class="relative flex h-32 items-center justify-center rounded-xl border border-gray-200 bg-white p-6 transition group-hover:border-transparent dark:border-gray-800 dark:bg-gray-900">
          <img class="h-10 grayscale transition group-hover:grayscale-0" src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-400.svg" alt="Reform" />
        </div>
      </div>
      <div class="group relative">
        <div class="absolute -inset-1 rounded-2xl bg-gradient-to-r from-lime-600 to-lime-400 opacity-0 blur transition group-hover:opacity-100"></div>
        <div class="relative flex h-32 items-center justify-center rounded-xl border border-gray-200 bg-white p-6 transition group-hover:border-transparent dark:border-gray-800 dark:bg-gray-900">
          <img class="h-10 grayscale transition group-hover:grayscale-0" src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-400.svg" alt="Tuple" />
        </div>
      </div>
      <div class="group relative">
        <div class="absolute -inset-1 rounded-2xl bg-gradient-to-r from-lime-600 to-lime-400 opacity-0 blur transition group-hover:opacity-100"></div>
        <div class="relative flex h-32 items-center justify-center rounded-xl border border-gray-200 bg-white p-6 transition group-hover:border-transparent dark:border-gray-800 dark:bg-gray-900">
          <img class="h-10 grayscale transition group-hover:grayscale-0" src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-400.svg" alt="SavvyCal" />
        </div>
      </div>
      <div class="group relative">
        <div class="absolute -inset-1 rounded-2xl bg-gradient-to-r from-lime-600 to-lime-400 opacity-0 blur transition group-hover:opacity-100"></div>
        <div class="relative flex h-32 items-center justify-center rounded-xl border border-gray-200 bg-white p-6 transition group-hover:border-transparent dark:border-gray-800 dark:bg-gray-900">
          <img class="h-10 grayscale transition group-hover:grayscale-0" src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-400.svg" alt="Statamic" />
        </div>
      </div>
      <div class="group relative">
        <div class="absolute -inset-1 rounded-2xl bg-gradient-to-r from-lime-600 to-lime-400 opacity-0 blur transition group-hover:opacity-100"></div>
        <div class="relative flex h-32 items-center justify-center rounded-xl border border-gray-200 bg-white p-6 transition group-hover:border-transparent dark:border-gray-800 dark:bg-gray-900">
          <img class="h-10 grayscale transition group-hover:grayscale-0" src="https://tailwindui.com/img/logos/158x48/laravel-logo-gray-400.svg" alt="Laravel" />
        </div>
      </div>
    </div>
  </div>
</section>`,
      contributor: 'yuxxeun',
    },
    {
      id: 'marquee-scroll',
      name: 'Marquee Scroll',
      code: `<section class="bg-gray-50 py-12 dark:bg-gray-950">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="mb-8 text-center">
      <h2 class="text-sm font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
        Trusted by the best
      </h2>
    </div>
    
    <div class="relative overflow-hidden">
      <div class="flex animate-marquee gap-16">
        <div class="flex min-w-full shrink-0 items-center justify-around gap-16">
          <img class="h-12 grayscale opacity-70 transition hover:opacity-100 hover:grayscale-0" src="https://cdn.simpleicons.org/github" alt="Transistor" />
          <img class="h-12 grayscale opacity-70 transition hover:opacity-100 hover:grayscale-0" src="https://cdn.simpleicons.org/github" alt="Reform" />
          <img class="h-12 grayscale opacity-70 transition hover:opacity-100 hover:grayscale-0" src="https://cdn.simpleicons.org/github" alt="Tuple" />
          <img class="h-12 grayscale opacity-70 transition hover:opacity-100 hover:grayscale-0" src="https://cdn.simpleicons.org/github" alt="SavvyCal" />
          <img class="h-12 grayscale opacity-70 transition hover:opacity-100 hover:grayscale-0" src="https://cdn.simpleicons.org/github" alt="Statamic" />
          <img class="h-12 grayscale opacity-70 transition hover:opacity-100 hover:grayscale-0" src="https://cdn.simpleicons.org/github" alt="Laravel" />
        </div>
        <div class="flex min-w-full shrink-0 items-center justify-around gap-16" aria-hidden="true">
          <img class="h-12 grayscale opacity-70 transition hover:opacity-100 hover:grayscale-0" src="https://cdn.simpleicons.org/github" alt="Transistor" />
          <img class="h-12 grayscale opacity-70 transition hover:opacity-100 hover:grayscale-0" src="https://cdn.simpleicons.org/github" alt="Reform" />
          <img class="h-12 grayscale opacity-70 transition hover:opacity-100 hover:grayscale-0" src="https://cdn.simpleicons.org/github" alt="Tuple" />
          <img class="h-12 grayscale opacity-70 transition hover:opacity-100 hover:grayscale-0" src="https://cdn.simpleicons.org/github" alt="SavvyCal" />
          <img class="h-12 grayscale opacity-70 transition hover:opacity-100 hover:grayscale-0" src="https://cdn.simpleicons.org/github" alt="Statamic" />
          <img class="h-12 grayscale opacity-70 transition hover:opacity-100 hover:grayscale-0" src="https://cdn.simpleicons.org/github" alt="Laravel" />
        </div>
      </div>
    </div>
  </div>
  
  <style>
    @keyframes marquee {
      0% { transform: translateX(0); }
      100% { transform: translateX(-100%); }
    }
    .animate-marquee {
      animation: marquee 30s linear infinite;
    }
    .animate-marquee:hover {
      animation-play-state: paused;
    }
  </style>
</section>`,
      contributor: 'yuxxeun',
    },
    {
      id: 'bento-grid',
      name: 'Bento Grid Layout',
      code: `<section class="bg-white py-16 dark:bg-gray-900">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="mb-12 text-center">
      <h2 class="text-3xl font-bold text-gray-900 dark:text-white">
        Brands that trust us
      </h2>
      <p class="mt-4 text-lg text-gray-600 dark:text-gray-300">
        From startups to Fortune 500 companies
      </p>
    </div>
    
    <div class="grid auto-rows-fr grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      <div class="col-span-2 row-span-2 flex items-center justify-center rounded-2xl border border-gray-200 bg-gradient-to-br from-lime-50 to-white p-12 transition hover:border-lime-500 dark:border-gray-800 dark:from-gray-900 dark:to-gray-950 dark:hover:border-lime-400">
        <img class="h-16 grayscale transition hover:grayscale-0" src="https://cdn.simpleicons.org/github" alt="Transistor" />
      </div>
      <div class="flex items-center justify-center rounded-2xl border border-gray-200 bg-white p-8 transition hover:border-lime-500 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900 dark:hover:border-lime-400">
        <img class="h-10 grayscale transition hover:grayscale-0" src="https://cdn.simpleicons.org/github" alt="Reform" />
      </div>
      <div class="flex items-center justify-center rounded-2xl border border-gray-200 bg-white p-8 transition hover:border-lime-500 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900 dark:hover:border-lime-400">
        <img class="h-10 grayscale transition hover:grayscale-0" src="https://cdn.simpleicons.org/github" alt="Tuple" />
      </div>
      <div class="flex items-center justify-center rounded-2xl border border-gray-200 bg-white p-8 transition hover:border-lime-500 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900 dark:hover:border-lime-400">
        <img class="h-10 grayscale transition hover:grayscale-0" src="https://cdn.simpleicons.org/github" alt="SavvyCal" />
      </div>
      <div class="flex items-center justify-center rounded-2xl border border-gray-200 bg-white p-8 transition hover:border-lime-500 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900 dark:hover:border-lime-400">
        <img class="h-10 grayscale transition hover:grayscale-0" src="https://cdn.simpleicons.org/github" alt="Statamic" />
      </div>
      <div class="col-span-2 flex items-center justify-center rounded-2xl border border-gray-200 bg-white p-8 transition hover:border-lime-500 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900 dark:hover:border-lime-400">
        <img class="h-12 grayscale transition hover:grayscale-0" src="https://cdn.simpleicons.org/github" alt="Laravel" />
      </div>
    </div>
  </div>
</section>`,
      contributor: 'yuxxeun',
    },
  ],
};