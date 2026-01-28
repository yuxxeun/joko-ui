import { IconTextCaption } from '@tabler/icons-react';
import { ComponentType } from '../types';

export const text: ComponentType = {
  slug: 'text',
  name: 'Text',
  icon: <IconTextCaption stroke={1.5} />,
  description: 'The Text component wraps the native paragraph element to deliver consistent typography, responsive sizing for readable content.',
  variants: [
    {
      id: 'text-basic',
      name: 'Basic',
     code: `<div class="space-y-8">
  <!-- H1 -->
  <div class="space-y-3">
    <h1 class="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">Heading 1</h1>
    <p class="text-base leading-relaxed text-gray-700 dark:text-gray-400">The Text component wraps the native paragraph element to deliver consistent typography, responsive sizing for readable content.</p>
  </div>

  <!-- H2 -->
  <div class="space-y-2.5">
    <h2 class="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">Heading 2</h2>
    <p class="text-base leading-relaxed text-gray-700 dark:text-gray-400">The Text component wraps the native paragraph element to deliver consistent typography, responsive sizing for readable content.</p>
  </div>

  <!-- H3 -->
  <div class="space-y-2">
    <h3 class="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">Heading 3</h3>
    <p class="text-sm leading-relaxed text-gray-700 dark:text-gray-400">The Text component wraps the native paragraph element to deliver consistent typography, responsive sizing for readable content.</p>
  </div>

  <!-- H4 -->
  <div class="space-y-1.5">
    <h4 class="text-xl font-medium text-zinc-900 dark:text-zinc-100">Heading 4</h4>
    <p class="text-sm text-gray-700 dark:text-gray-400">The Text component wraps the native paragraph element to deliver consistent typography, responsive sizing for readable content.</p>
  </div>

  <!-- H5 -->
  <div class="space-y-1">
    <h5 class="text-lg font-medium text-zinc-900 dark:text-zinc-100">Heading 5</h5>
    <p class="text-xs text-gray-700 dark:text-gray-400">The Text component wraps the native paragraph element to deliver consistent typography, responsive sizing for readable content.</p>
  </div>

  <!-- H6 -->
  <div class="space-y-1">
    <h6 class="text-sm font-semibold tracking-wide text-zinc-900 uppercase dark:text-zinc-100">Heading 6</h6>
    <p class="text-xs text-gray-700 dark:text-gray-400">The Text component wraps the native paragraph element to deliver consistent typography, responsive sizing for readable content.</p>
  </div>
</div>`,
      contributor: 'yuxxeun',
    },
  ],
};