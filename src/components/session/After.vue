<template>
    <block-item
        title="Назначение после сеанса"
        button_name="Сформировать"
        :button_click_fn="formResult"
    >
        <handbook :handbooks="[preparation]" />
        <handbook :handbooks="[pathways, dosage]" />
        <session-numbers />
        <div class="date-block row items-center">
            <session-date :date="date" />
            <p>
                Количество сеансов:
                <span class="text-info">{{ sessions.length }}</span>
            </p>
        </div>
        <after-result />
    </block-item>
</template>

<script lang="ts" setup>
import BlockItem from "../BlockItem.vue";
import Handbook from "../Handbook.vue";
import SessionNumbers from "../SessionNumbers.vue";
import SessionDate from "../SessionDate.vue";
import AfterResult from './AfterResult.vue';

import { useSessionAfter } from "src/stores/modules/session-after";
import { storeToRefs } from "pinia";

const sessionAfterStore = useSessionAfter();
const { preparation, pathways, dosage, date, sessions, result } =
    storeToRefs(sessionAfterStore);

const formResult = (): void => {
    sessionAfterStore.formData();
};
</script>

<style lang="scss" scoped>
.date-block {
    gap: 30px;

    p {
        margin: 0;
    }
}
</style>
