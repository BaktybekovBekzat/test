<template>
    <block-item
        title="Назначение сеанса гемодиализа"
        button_name="Сформировать сеанс"
        :button_click_fn="formAssigment"
    >
        <pick-component
            title="Программа аппарата"
            storeName="apparatus"
            :list="apparatusList"
            :defaultValue="apparatus"
        />
        <handbook :handbooks="[dialyzer]" />
        <div class="row item-center">
            <handbook :handbooks="[concentrator]" />
            <measure :data="concentratorСapacity" />
        </div>
        <pick-component
            storeName="injection_type"
            title="Тип инъекции"
            :list="injectionList"
            :defaultValue="injection_type"
        />
        <handbook
            v-show="injection_type === 'Игла'"
            :handbooks="[needle, needle_type]"
        />
        <handbook
            v-show="injection_type === 'Катерер'"
            :handbooks="[catheter, catheter_type]"
        />
        <div class="row item-center">
            <handbook :handbooks="[bicarbonate]" />
            <measure :data="patientWeight" />
            <handbook :handbooks="[anticoagulation]" />
            <measure :data="anticoagulationСapacity" />
        </div>
        <assigment-result />
    </block-item>
</template>

<script lang="ts" setup>
import BlockItem from "components/BlockItem.vue";
import PickComponent from "components/PickComponent.vue";
import Handbook from "src/components/Handbook.vue";
import Measure from "../Measure.vue";
import AssigmentResult from "./AssigmentResult.vue";

import { useSessionAssigment } from "src/stores/modules/session-assigment";
import { storeToRefs } from "pinia";

const sessionAssigmentStore = useSessionAssigment();

const {
    apparatus,
    injection_type,
    dialyzer,
    concentrator,
    needle,
    needle_type,
    catheter,
    catheter_type,
    bicarbonate,
    anticoagulation,
    concentratorСapacity,
    patientWeight,
    anticoagulationСapacity,
} = storeToRefs(sessionAssigmentStore);

const apparatusList = [
    {
        label: "HD",
        value: "HD",
    },
    {
        label: "HDF",
        value: "HDF",
    },
    {
        label: "UF",
        value: "UF",
    },
];
const injectionList = [
    {
        label: "Игла",
        value: "Игла",
    },
    {
        label: "Катерер",
        value: "Катерер",
    },
];

const formAssigment = (): void => {
    sessionAssigmentStore.formData();
};
</script>

<style lang="scss" scoped></style>
