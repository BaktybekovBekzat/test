<template>
    <block-item title="Рекомендации" button_name="Сохранить назначения">
        <div class="recomendation">
            <div class="recomendation-input items-center q-mb-md">
                <q-input
                    v-model="newRecomendation"
                    placeholder="Текст рекомендации пациенту"
                    outlined
                />
                <div
                    class="recomendation-input__btn"
                    @click="addNewRecomendation"
                >
                    <q-icon name="add" size="25px" />
                </div>
            </div>
            <div
                v-show="recomendations.length > 0"
                class="recomendation-list row items-center q-pa-sm q-mb-md"
            >
                <p
                    class="recomendation-list__item"
                    v-for="recom in recomendations"
                    :key="recom"
                >
                    {{ recom }}
                </p>
            </div>
            <div class="recomendation-info row items-center">
                <div
                    class="recomendation-info__item recomendation-info__date row items-center"
                >
                    <q-icon name="calendar_month" size="25px" />
                    {{ formateDate.formatDate(date, "DD:MM:YYYY HH:m") }}
                </div>
                <div
                    class="recomendation-info__item recomendation-info__author row items-center"
                >
                    <q-icon name="person" size="25px" />
                    {{ recomendationStore.getName }}
                    <p>{{ recomendationStore.getPosition }}</p>
                </div>
            </div>
        </div>
    </block-item>
</template>

<script lang="ts" setup>
import BlockItem from "../BlockItem.vue";
import { useRecomendation } from "src/stores/modules/recomendation";
import { storeToRefs } from "pinia";
import { ref } from "vue";
import { date as formateDate } from "quasar";

const recomendationStore = useRecomendation();

const { recomendations, date } = storeToRefs(recomendationStore);

const newRecomendation = ref();

const addNewRecomendation = (): void => {
    const value = newRecomendation.value;

    if (value) {
        recomendationStore.addRecomendation(value);
        newRecomendation.value = "";
    }
};
</script>

<style lang="scss">
.recomendation {
    p {
        margin: 0;
    }

    &-input {
        display: grid;
        grid-template-columns: 93% 5%;
        justify-content: space-between;

        &__btn {
            border: 1px solid #ccc;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;
        }
    }

    &-list {
        gap: 10px 15px;
        flex-wrap: wrap;
        border: 1px solid #ccc;

        p {
            font-size: 16px;
            margin: 0;
        }
    }

    &-info {
        gap: 20px;

        &__item {
            gap: 10px;
        }

        &__author {
            p {
                font-weight: 600;
            }
        }
    }
}
</style>
