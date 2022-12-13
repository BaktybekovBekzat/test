<template>
    <div v-if="store.result" class="assigment-result q-pa-md">
        <h5 class="text-h5 q-ma-none">Назначение сеанса</h5>
        <div class="assigment-result-list row items-center q-mt-sm">
            <div class="assigment-result-list__item">
                <q-icon name="computer" /> - {{ store.result.apparatus }}
            </div>
            <div class="assigment-result-list__item">
                <q-icon name="science" /> - {{ store.result.dialyzer }}
            </div>
            <div class="assigment-result-list__item">
                <q-icon name="science" /> - {{ store.result.concentrator }}
            </div>
            <div class="assigment-result-list__item">
                <q-icon name="science" /> -
                {{ store.result.concentratorСapacity }}
            </div>
            <div class="assigment-result-list__item">
                <q-icon name="science" /> - {{ store.result.injection_type }}
            </div>
            <div class="assigment-result-list__item">
                <q-icon name="science" /> - {{ store.result.bicarbonate }}
            </div>
            <div class="assigment-result-list__item">
                <q-icon name="science" /> -
                {{ store.result.anticoagulationСapacity }}
            </div>
            <div class="assigment-result-list__item">
                <q-icon name="science" /> - {{ store.result.patientWeight }}
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useSessionAssigment } from "src/stores/modules/session-assigment";

const store = useSessionAssigment();
</script>

<style lang="scss" scoped>
.assigment-result {
    border: 1px solid #ccc;

    &-list {
        gap: 20px;
    }
}
</style>
