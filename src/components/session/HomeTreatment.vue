<template>
    <block-item
        title="Лечение на дому"
        button_name="Добавить"
        :button_click_fn="formResult"
    >
        <handbook :handbooks="[preparation]" />
        <handbook :handbooks="[pathways, dosage]" />
        <div class="home-treatment__item row items-center">
            <handbook :handbooks="[frequency]" />
            <session-date :date="date" />
        </div>
        <home-treatment-result v-if="result" :data="result" />
    </block-item>
</template>

<script lang="ts" setup>
import BlockItem from "../BlockItem.vue";
import Handbook from "../Handbook.vue";
import HomeTreatmentResult from "./HomeTreatmentResult.vue";
import { storeToRefs } from "pinia";
import { useHomeTreatmentStore } from "stores/modules/home-treatment";
import SessionDate from "../SessionDate.vue";

const store = useHomeTreatmentStore();
const { preparation, pathways, dosage, frequency, date, result } =
    storeToRefs(store);

const formResult = (): void => {
    store.formData();
};
</script>

<style lang="scss" scoped>
.home-treatment__item {
    gap: 20px;
}
</style>
