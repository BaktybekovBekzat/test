<template>
    <div class="handbook-item row items-end" v-if="!data.isInput">
        <div class="handbook-item__label">
            <h5
                v-show="props.data.title ? true : false"
                class="handbook-item-label__name text-h5 q-ma-none"
            >
                {{ props.data.title }}
            </h5>
            <q-select
                class="handbook-item__label-select"
                v-if="props.data.is_twin"
                outlined
                v-model="selectValue"
                :options="props.data.is_twin ? props.data.handbook_options : []"
            >
                <template v-slot:append v-if="props.data.is_twin">
                    <div
                        class="handbook-item__button handbook-item__button-custom"
                        @click="openModal"
                    >
                        <q-icon name="list" size="25px" color="black" />
                    </div> </template
            ></q-select>
            <div v-else class="handbook-item__label-value" @click="openModal">
                {{
                    props.data.value
                        ? props.data.value
                        : ` Спр. "${props.data.name}"`
                }}
            </div>
        </div>
        <div
            v-if="!props.data.is_twin"
            class="handbook-item__button"
            @click="openModal"
        >
            <q-icon name="list" size="25px" />
        </div>
    </div>
    <handbook-input v-else :select-value="selectValue" :data="props.data" />
</template>

<script lang="ts" setup>
import { IHandbook } from "src/models/IHandbook";
import { useHandbookModal } from "src/stores/modules/handbooks-modal";
import { ref, watch } from "vue";
import HandbookInput from "./HandbookInput.vue";

interface IProps {
    data: IHandbook;
}

const props = defineProps<IProps>();
const handbookModalStore = useHandbookModal();

const selectValue = ref<string | null>(`Спр. ${props.data.name}`);

watch(selectValue, () => {
    props.data.value = selectValue.value;
});

const openModal = (): void => {
    if (!props.data.is_twin) {
        handbookModalStore.toggleIsVisible(props.data);
    }
};
</script>

<style lang="scss">
.handbook-item {
    gap: 5px;
    transition: all 0.25s;

    &-select {
        .q-field__control {
            min-width: 200px;
            border: 1px solid #ccc;

            &::before,
            &::after {
                border: none;
            }
        }
    }

    .handbook-item__button-custom {
        position: absolute;
        right: -50px;
    }

    .q-field__control,
    .q-field__native {
        height: 40px;
        min-height: auto;

        .q-field__append {
            height: 40px;

            &:last-child {
                display: none;
            }
        }
    }

    &:hover {
        opacity: 0.7;
        cursor: pointer;
    }

    &__label {
        &-value {
            padding: 5px 10px 5px 0px;
            min-width: 200px;
            border: 1px solid #ccc;
            width: 100%;
            height: 40px;
            display: flex;
            align-items: center;
        }

        &-select {
            max-width: 250px;
            margin-right: 50px;
        }
    }

    &__button {
        border: 1px solid #ccc;
        height: max-content;
        padding: 3px 5px;
        gap: 3px;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
}
</style>
