<template>
    <div class="home-treatment__result">
        <h5 class="text-h5 q-mb-sm">Лечение на дому</h5>
        <div class="home-treatment__result-block q-pa-md row items-center">
            <p>{{ props.data.preparation }}</p>
            <p>{{ props.data.pathway }}</p>
            <p>{{ props.data.dosage }}</p>
            <p>{{ props.data.frequency }}</p>
            <p>
                с {{ (props.data.start, "DD.MM.YYYY") }} до
                {{ (props.data.end, "DD.MM.YYYY") }}
            </p>
            <p>
                {{ props.data.end.getDate() - props.data.start.getDate() }} дней
            </p>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { IHomeTreatmentResult } from "stores/home-treatment";

interface IProps {
    data: IHomeTreatmentResult;
}

const props = defineProps<IProps>();
</script>

<style lang="scss" scoped>
.home-treatment__result {
    &-block {
        border: 1px solid #ccc;
        gap: 15px;
        max-width: 600px;

        p {
            margin: 0;
        }
    }
}
</style>
