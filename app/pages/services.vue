<script setup lang="ts">
const pricesStore = usePricesStore();

// const { error, refresh } = await useAsyncData("prices", () => {
//   return pricesStore.fetchPrices();
// });
onMounted(() => {
  pricesStore.fetchPrices();
});

const groupedPrices = computed(() => pricesStore.groupedByCategory);

console.log(groupedPrices);
</script>

<template>
  <div>
    <section class="w-full py-[10rem] max-[767px]:pt-0">
      <div class="flex flex-col items-center px-[1.6rem] md:px-[3.2rem]">
        <Heading
          level="h1"
          align="center"
          class="text-[--accent] max-[767px]:mt-[4.8rem]"
          >Наши услуги</Heading
        >

        <div class="mt-[6.4rem] w-full">
          <div class="flex flex-col gap-[10rem]">
            <div
              v-if="pricesStore.isLoading && pricesStore.items.length === 0"
              class="flex flex-col gap-4"
            >
              <div
                v-for="i in 5"
                :key="i"
                class="h-24 bg-gray-200 animate-pulse rounded"
              ></div>
            </div>

            <div v-for="(items, category) in groupedPrices">
              <Heading level="h3" align="start">{{ category }}</Heading>

              <div
                class="flex flex-col gap-[1.2rem] mt-[6.4rem] max-[767px]:mt-[4.8rem]"
              >
                <PriceItem
                  v-for="price in items"
                  :key="price.id"
                  :price="price"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <FormSection />
    <ContactsSection />
    <FaqSection />
  </div>
</template>
