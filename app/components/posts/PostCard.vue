<script setup lang="ts">
const props = defineProps<{
  username: string;
  avatar: string;
  content: string;
  time: string;
  postImage?: string;
  ods: {
    id: number;
    color: string;
  };
}>();

// Estado reativo para o Like
const isLiked = ref(false);
const likesCount = ref(Math.floor(Math.random() * 50) + 1); // Simulação de likes iniciais

function toggleLike() {
  isLiked.value = !isLiked.value;
  isLiked.value ? likesCount.value++ : likesCount.value--;
}
</script>

<template>
  <UCard class="w-full overflow-hidden">
    <template #header>
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-3">
          <UAvatar :src="avatar" :alt="username" size="sm" />
          <div>
            <p class="text-sm font-bold text-default leading-none">
              {{ username }}
            </p>
            <p class="text-xs text-neutral-500 mt-1">
              {{ time }}
            </p>
          </div>
        </div>

        <UPopover mode="hover" :popper="{ placement: 'top-end' }">
          <UBadge
            v-if="ods"
            :style="{ backgroundColor: ods.color }"
            variant="solid"
            size="sm"
            class="font-bold text-white cursor-help"
          >
            ODS {{ ods.id }}
          </UBadge>

          <template #content>
            <div
              class="p-1 w-32 h-32 bg-white dark:bg-neutral-900 rounded-lg shadow-xl overflow-hidden border border-neutral-200 dark:border-neutral-800"
            >
              <img
                :src="`/ODS-${ods.id}.svg`"
                class="w-full h-full object-contain"
                alt="ODS Icon"
              />
            </div>
          </template>
        </UPopover>
      </div>
    </template>

    <div class="-mx-4 -mt-4 relative group">
      <img
        v-if="postImage"
        :src="postImage"
        class="w-full aspect-video object-cover cursor-pointer"
        @dblclick="toggleLike"
      />
      <div
        v-else
        class="aspect-video bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center"
      >
        <UIcon name="i-lucide-image" class="w-10 h-10 text-neutral-300" />
      </div>
    </div>

    <div class="mt-4">
      <p class="text-sm text-neutral-700 dark:text-neutral-300">
        {{ content }}
      </p>
    </div>

    <template #footer>
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2">
          <UButton
            :icon="isLiked ? 'i-lucide-heart' : 'i-lucide-heart'"
            :color="isLiked ? 'error' : 'neutral'"
            :variant="isLiked ? 'solid' : 'ghost'"
            :label="likesCount.toString()"
            size="sm"
            @click="toggleLike"
          />
        </div>

        <UButton
          icon="i-lucide-share-2"
          color="neutral"
          variant="ghost"
          size="sm"
        />
      </div>
    </template>
  </UCard>
</template>
