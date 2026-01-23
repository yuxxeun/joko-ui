import { IconTable } from '@tabler/icons-react';
import { ComponentType } from '../types';

export const table: ComponentType = {
  slug: 'table',
  name: 'Table',
  icon: <IconTable stroke={1.5} />,
  description: 'Table component for efficiently displaying large datasets.',
  variants: [
    {
      id: 'table-basic',
      name: 'Basic',
      code: `<div class="overflow-x-auto rounded-lg border border-lime-200 bg-white shadow-sm dark:border-lime-900/40 dark:bg-slate-900">
  <table class="min-w-full text-xs sm:text-sm">
    <!-- Head -->
    <thead class="bg-lime-50 text-lime-900 dark:bg-slate-800 dark:text-lime-200">
      <tr>
        <th class="px-2 py-2 text-left font-semibold sm:px-3 sm:py-2.5 md:px-4 md:py-3 lg:px-6 lg:py-3.5">Nama</th>
        <th class="hidden px-3 py-2.5 text-left font-semibold sm:table-cell md:px-4 md:py-3 lg:px-6 lg:py-3.5">Deskripsi</th>
        <th class="px-2 py-2 text-left font-semibold sm:px-3 sm:py-2.5 md:px-4 md:py-3 lg:px-6 lg:py-3.5">Kategori</th>
        <th class="px-2 py-2 text-center font-semibold sm:px-3 sm:py-2.5 md:px-4 md:py-3 lg:px-6 lg:py-3.5">Kontrol</th>
      </tr>
    </thead>

    <!-- Body -->
    <tbody class="divide-y divide-lime-100 dark:divide-slate-800">
      <tr class="transition hover:bg-lime-50 dark:hover:bg-slate-800/70">
        <td class="px-2 py-2 sm:px-3 sm:py-2.5 md:px-4 md:py-3 lg:px-6 lg:py-3.5">
            <div class="font-medium text-slate-800 dark:text-slate-100">JokoUI</div>
            <div class="mt-0.5 text-xs text-slate-500 dark:text-slate-400 sm:hidden">
                Komponen UI berbasis Tailwind CSS
            </div>
        </td>
        <td class="hidden px-3 py-2.5 text-slate-600 dark:text-slate-400 sm:table-cell md:px-4 md:py-3 lg:px-6 lg:py-3.5">Komponen UI berbasis Tailwind CSS</td>
        <td class="px-2 py-2 text-slate-700 dark:text-slate-300 sm:px-3 sm:py-2.5 md:px-4 md:py-3 lg:px-6 lg:py-3.5">
          <span class="inline-block rounded-full px-2 py-0.5 text-xs font-medium text-lime-800 dark:text-lime-300 sm:bg-transparent sm:px-0 sm:py-0 sm:font-normal sm:text-slate-700 sm:dark:text-slate-300">UI Component</span>
        </td>
        <td class="px-2 py-2 text-right sm:px-3 sm:py-2.5 md:px-4 md:py-3 lg:px-6 lg:py-3.5">
          <div class="flex flex-col gap-1 sm:flex-row sm:justify-end sm:gap-1.5">
            <button class="rounded-lg bg-lime-100 px-2 py-1 text-xs font-medium text-lime-700 transition hover:bg-lime-200 dark:bg-lime-900/40 dark:text-lime-300 dark:hover:bg-lime-900/60 sm:px-3 sm:py-1.5 sm:text-sm">Edit</button>
            <button class="rounded-lg bg-rose-100 px-2 py-1 text-xs font-medium text-rose-700 transition hover:bg-rose-200 dark:bg-rose-900/40 dark:text-rose-300 dark:hover:bg-rose-900/60 sm:px-3 sm:py-1.5 sm:text-sm">Delete</button>
          </div>
        </td>
      </tr>
      
      <tr class="transition hover:bg-lime-50 dark:hover:bg-slate-800/70">
        <td class="px-2 py-2 sm:px-3 sm:py-2.5 md:px-4 md:py-3 lg:px-6 lg:py-3.5">
          <div class="font-medium text-slate-800 dark:text-slate-100">Prabogo</div>
          <div class="mt-0.5 text-xs text-slate-500 dark:text-slate-400 sm:hidden">Go Framework</div>
        </td>
        <td class="hidden px-3 py-2.5 text-slate-600 dark:text-slate-400 sm:table-cell md:px-4 md:py-3 lg:px-6 lg:py-3.5">Go Framework</td>
        <td class="px-2 py-2 text-slate-700 dark:text-slate-300 sm:px-3 sm:py-2.5 md:px-4 md:py-3 lg:px-6 lg:py-3.5">
          <span class="inline-block rounded-full px-2 py-0.5 text-xs font-medium text-lime-800 dark:text-lime-300 sm:bg-transparent sm:px-0 sm:py-0 sm:font-normal sm:text-slate-700 sm:dark:text-slate-300">Framework</span>
        </td>
        <td class="px-2 py-2 text-right sm:px-3 sm:py-2.5 md:px-4 md:py-3 lg:px-6 lg:py-3.5">
          <div class="flex flex-col gap-1 sm:flex-row sm:justify-end sm:gap-1.5">
            <button class="rounded-lg bg-lime-100 px-2 py-1 text-xs font-medium text-lime-700 transition hover:bg-lime-200 dark:bg-lime-900/40 dark:text-lime-300 dark:hover:bg-lime-900/60 sm:px-3 sm:py-1.5 sm:text-sm">Edit</button>
            <button class="rounded-lg bg-rose-100 px-2 py-1 text-xs font-medium text-rose-700 transition hover:bg-rose-200 dark:bg-rose-900/40 dark:text-rose-300 dark:hover:bg-rose-900/60 sm:px-3 sm:py-1.5 sm:text-sm">Delete</button>
          </div>
        </td>
      </tr>
      
      <tr class="transition hover:bg-lime-50 dark:hover:bg-slate-800/70">
        <td class="px-2 py-2 sm:px-3 sm:py-2.5 md:px-4 md:py-3 lg:px-6 lg:py-3.5">
          <div class="font-medium text-slate-800 dark:text-slate-100">Sawit DB</div>
          <div class="mt-0.5 text-xs text-slate-500 dark:text-slate-400 sm:hidden">Basis data dengan protokol anti-korupsi</div>
            test
          </td>
        <td class="hidden px-3 py-2.5 text-slate-600 dark:text-slate-400 sm:table-cell md:px-4 md:py-3 lg:px-6 lg:py-3.5">Basis data dengan protokol anti-korupsi</td>
        <td class="px-2 py-2 text-slate-700 dark:text-slate-300 sm:px-3 sm:py-2.5 md:px-4 md:py-3 lg:px-6 lg:py-3.5">
          <span class="inline-block rounded-full px-2 py-0.5 text-xs font-medium text-lime-800 dark:text-lime-300 sm:bg-transparent sm:px-0 sm:py-0 sm:font-normal sm:text-slate-700 sm:dark:text-slate-300">Database</span>
        </td>
        <td class="px-2 py-2 text-right sm:px-3 sm:py-2.5 md:px-4 md:py-3 lg:px-6 lg:py-3.5">
          <div class="flex flex-col gap-1 sm:flex-row sm:justify-end sm:gap-1.5">
            <button class="rounded-lg bg-lime-100 px-2 py-1 text-xs font-medium text-lime-700 transition hover:bg-lime-200 dark:bg-lime-900/40 dark:text-lime-300 dark:hover:bg-lime-900/60 sm:px-3 sm:py-1.5 sm:text-sm">Edit</button>
            <button class="rounded-lg bg-rose-100 px-2 py-1 text-xs font-medium text-rose-700 transition hover:bg-rose-200 dark:bg-rose-900/40 dark:text-rose-300 dark:hover:bg-rose-900/60 sm:px-3 sm:py-1.5 sm:text-sm">Delete</button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</div>`,
      contributor: 'yuxxeun',
    },
  ],
};
