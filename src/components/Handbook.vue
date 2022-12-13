<template>
    <div class="handbook row items-center">
        <HandbookItem
            v-for="handbook in handbooks"
            :data="handbook"
            :key="handbook.name"
        />
    </div>
</template>

<script lang="ts" setup>
import HandbookItem from "src/components/HandbookItem.vue";
import { IHandbook } from "src/models/IHandbook";

interface IProps {
    handbooks: IHandbook[];
}

withDefaults(defineProps<IProps>(), {
    handbooks: () => [],
});
</script>

<style lang="scss" scoped>
.handbook {
    gap: 20px;
}
</style>
