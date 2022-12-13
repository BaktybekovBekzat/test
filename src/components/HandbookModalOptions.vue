<template>
    <q-list class="handbook-modal__list" v-memo="[list]">
        <q-item
            v-for="option in props.list"
            :key="option"
            bordered
            clickable
            class="handbook-modal__list-item"
            @click="props.setHandbookValue(option)"
        >
            <q-item-section
                class="handbook-modal__list-item__left items-center"
            >
                <p>{{ option }}</p>
                <div @click="props.removeNote(option)">
                    <!-- <q-icon name="delete" size="20px" /> -->
                </div>
            </q-item-section>
            <q-item-section class="handbook-modal__list-item__right">
                <!-- <q-icon name="east" size="25px" color="blue" /> -->
            </q-item-section>
        </q-item>
    </q-list>
</template>

<script lang="ts" setup>
interface IProps {
    list: string[];
    setHandbookValue: (option: string) => void;
    removeNote: (option: string) => void;
}

const props = withDefaults(defineProps<IProps>(), {
    list: () => [],
});
</script>

<style lang="scss" scoped></style>
