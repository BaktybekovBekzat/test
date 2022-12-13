<template>
    <q-dialog
        v-if="isVisible"
        :model-value="modalVisible"
        @update:model-value="
            modalVisible = true;
            isVisible = !isVisible;
        "
    >
        <q-card class="handbook-modal" v-memo="[data]">
            <q-card-section>
                <div class="text-h6">{{ data?.name }}</div>
            </q-card-section>

            <q-card-section class="q-bg-gray q-pt-none">
                <q-btn label="Закрыть" @click="closeModal" />
            </q-card-section>

            <q-card-section
                class="handbook-modal__action q-bg-gray q-pt-none row items-center"
            >
                <q-input
                    outlined
                    v-model="searchValue"
                    placeholder="Поиск позиции по первым символам"
                />
                <div
                    class="handbook-modal__action-btn q-pa-10 q-bg-gray"
                    @click="search(searchValue)"
                >
                    <q-icon name="search" size="25px" />
                </div>
            </q-card-section>

            <q-card-section
                class="handbook-modal__action q-bg-gray q-pt-none row items-center"
            >
                <q-input
                    outlined
                    v-model="newNote"
                    placeholder="Добавить новую запись"
                />
                <div
                    class="handbook-modal__action-btn q-pa-10 q-bg-gray"
                    @click="addNewNote(newNote)"
                >
                    <q-icon name="add" size="25px" />
                </div>
            </q-card-section>

            <q-card-section>
                <handbook-modal-options
                    :list="searchOptions"
                    :set-handbook-value="setHandbookValue"
                    :remove-note="removeNote"
                />
            </q-card-section>
        </q-card>
    </q-dialog>
</template>

<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useHandbookModal } from "src/stores/modules/handbooks-modal";
import HandbookModalOptions from "./HandbookModalOptions.vue";
import { ref, watch } from "vue";

const handbookModalStore = useHandbookModal();
const { isVisible, data } = storeToRefs(handbookModalStore);

const closeModal = (): void => {
    handbookModalStore.toggleIsVisible(null);
};

const setOptionsArray = (): string[] =>
    data.value?.handbook_options ? data.value?.handbook_options : [];

const modalVisible = ref(true);
const searchValue = ref<string>("");
const newNote = ref<string>("");
const searchOptions = ref<string[]>(setOptionsArray());

const search = (value: string): void => {
    searchOptions.value = searchOptions.value.filter((item) => {
        for (let i = 0; i < value.length; i++) {
            if (value[i] !== item[i]) {
                return;
            }
        }

        return item;
    });
};

const addNewNote = (value: string): void => {
    handbookModalStore.addOption(data.value, value);
    newNote.value = "";
};

const removeNote = (value: string): void => {
    handbookModalStore.removeOption(data.value, value);
};

const setHandbookValue = (value: string): void => {
    handbookModalStore.setHandbookValue(data.value, value);
    handbookModalStore.toggleIsVisible(null);
};

watch(
    data,
    () => {
        searchOptions.value = setOptionsArray();
    },
    { deep: true }
);

watch(searchValue, () => {
    if (searchValue.value === "") {
        searchOptions.value = setOptionsArray();
    }
});
</script>

<style lang="scss">
.handbook-modal {
    width: 100%;

    &__action {
        display: grid;
        justify-content: space-between;
        grid-template-columns: calc(100% - 40px - 10px) 40px;

        .q-field {
            &__control {
                height: 40px;
            }
        }

        &-btn {
            border: 1px solid #ccc;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }

    &__list {
        border-left: 1px solid #ccc;
        border-right: 1px solid #ccc;

        &-item {
            display: grid;
            grid-template-columns: calc(100% - 40px) 40px;
            border-top: 1px solid #ccc;
            padding: 0;
            padding-left: 10px;

            &:last-child {
                border-bottom: 1px solid #ccc;
            }

            &__left {
                flex-direction: row;
                justify-content: space-between;
                border-right: 1px solid #ccc;

                .q-icon {
                    margin-right: 10px;
                }
            }

            &__right {
                width: 40px;
            }

            p {
                margin: 0;
            }
        }
    }
}
</style>
