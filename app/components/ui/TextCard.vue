<template>
  <div
    class="p-[1.6rem] rounded-[1.2rem] w-full flex flex-col justify-between bg-[--light-blue] h-full"
  >
    <HeadingH4 class="text-[--accent] text-start">
      <slot name="title"></slot>
    </HeadingH4>

    <p class="text-[1.6rem]/[130%] text-[--accent]">
      <slot name="text"></slot>
    </p>
  </div>
</template>
