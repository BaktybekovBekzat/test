<template>
    <div class="block-item">
        <h4 class="text-h4 q-ma-none">{{ title }}</h4>
        <slot></slot>
        <q-btn
            class="block-item__button"
            color="white"
            text-color="gray"
            :label="button_name"
            no-caps
            @click="button_click_fn"
        />
    </div>
</template>

<script lang="ts" setup>
interface IProps {
    title: string;
    button_name: string;
    button_click_fn?: () => void;
}

withDefaults(defineProps<IProps>(), {});
</script>

<style lang="scss" scoped>
.block-item {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 50px;

    &__button {
        border: 2px solid #ccc;
        max-width: 245px;
    }
}
</style>
