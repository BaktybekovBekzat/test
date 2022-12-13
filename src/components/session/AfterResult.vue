<template>
    <div v-if="result.length > 0" v-memo="[result]" class="after-result">
        <h5>Список назначений после сеансов</h5>
        <q-table
            :columns="columns"
            :rows="result"
            separator="cell"
            hide-bottom
            row-key="name"
        >
            <template v-slot:body-cell-actions="props">
                <q-td :props="props">
                    <q-btn @click="removeFormData(props.row.id)">
                        <q-icon name="delete" size="25px" />
                    </q-btn>
                </q-td>
            </template>
        </q-table>
    </div>
</template>

<script lang="ts" setup>
import { useSessionAfter, IResult } from "src/stores/modules/session-after";
import { storeToRefs } from "pinia";
import { date as formatDate } from "quasar";
import { ref, watch } from "vue";

const store = useSessionAfter();

const { result } = storeToRefs(store);

const columns = [
    {
        name: "preparation",
        required: true,
        label: "Лекарственный препарат",
        field: (row: IResult) => row.preparation,
        align: "left",
    },
    {
        name: "pathway",
        required: true,
        label: "Пути приема",
        field: (row: IResult) => row.pathway,
        align: "center",
    },
    {
        name: "dosage",
        required: true,
        label: "Дозировка",
        field: (row: IResult) => row.dosage,
        align: "center",
    },
    {
        name: "start",
        required: true,
        label: "Начало приема",
        field: (row: IResult) => row.start,
        format: (val: Date) => formatDate.formatDate(val, "DD.MM.YYYY"),
        align: "center",
    },
    {
        name: "end",
        required: true,
        label: "Конец приема",
        field: (row: IResult) => row.end,
        format: (val: Date) => formatDate.formatDate(val, "DD.MM.YYYY"),
        align: "center",
    },
    {
        name: "sessions",
        required: true,
        label: "Номер сеанса",
        field: (row: IResult) => [...row.sessions.join(", ")],
        align: "center",
    },
    {
        name: "days",
        required: true,
        label: "Дней",
        field: (row: IResult) => row.quantity,
        align: "center",
    },
    {
        name: "actions",
        label: "",
        field: () => "",
        align: "center",
    },
];

const removeFormData = (id: Date | number | string): void => {
    store.removeFormData(id);
};
</script>

<style lang="scss" scoped></style>
