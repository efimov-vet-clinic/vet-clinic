import type { PriceItem } from "~/interfaces/PriceItem.interface";

export const usePricesStore = defineStore("prices", () => {
  const items = ref<PriceItem[]>([]);
  const isLoading = ref<boolean>();
  const error = ref<string | null>(null);
  const lastFetched = ref<Date | null>(null);

  const fetchPrices = async () => {
    if (items.value.length > 0 && lastFetched.value) {
      const diff = Date.now() - lastFetched.value.getTime();
      if (diff < 5 * 60 * 1000) {
        return;
      }
    }

    isLoading.value = true;
    error.value = null;

    try {
      const data = await $fetch<PriceItem[]>("/api/prices");
      items.value = data;
      lastFetched.value = new Date();
    } catch (error: any) {
      error.value = error.message || "Ошибка загрузки цен";
      console.error("Failed to fetch prices ->", error);
    } finally {
      isLoading.value = false;
    }
  };

  const refreshPrices = async () => {
    items.value = [];
    lastFetched.value = null;
    await fetchPrices();
  };

  const allServices = computed(() => {
    return [...items.value].sort((a, b) => {
      return a.title.localeCompare(b.title, "ru");
    });
  });

  const categories = computed(() => {
    const seen = new Set<string>();
    return items.value
      .map((item) => item.category)
      .filter((cat) => {
        if (seen.has(cat)) return false;
        seen.add(cat);
        return true;
      });
  });

  const getServicesByCategory = (category: string) => {
    return computed(() => {
      return items.value
        .filter((item) => item.category === category)
        .sort((a, b) => a.title.localeCompare(b.title, "ru"));
    });
  };

  const groupedByCategory = computed(() => {
    const map = new Map<string, PriceItem[]>();

    for (const item of items.value) {
      if (!map.has(item.category)) {
        map.set(item.category, []);
      }
      map.get(item.category)!.push(item);
    }
    return Object.fromEntries(map);
  });

  return {
    items,
    isLoading,
    error,

    fetchPrices,
    refreshPrices,

    allServices,
    categories,
    getServicesByCategory,
    groupedByCategory,
  };
});
