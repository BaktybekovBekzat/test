<template>
    <div class="pick">
        <h5 class="pick-title text-h5 q-ma-none">{{ title }}</h5>
        <q-option-group
            class="pick-list"
            v-model="pickValue"
            inline
            :options="list"
            color="primary"
        />
    </div>
</template>

<script lang="ts" setup>
import { useSessionAssigment } from "src/stores/modules/session-assigment";
import { ref, watch } from "vue";

interface IOptionItem {
    label: string;
    value: string;
}

interface IProps {
    title: string;
    list: IOptionItem[];
    storeName: string;
    defaultValue: string;
}

const props = withDefaults(defineProps<IProps>(), {
    list: () => [],
});

const pickValue = ref<string>(props.defaultValue);

const sessionAssigmentStore = useSessionAssigment();

watch(pickValue, () => {
    sessionAssigmentStore.setPick(
        props.storeName,
        typeof pickValue.value === "string" ? pickValue.value : ""
    );
});
</script>

<style lang="scss">
.pick {
    &-title {
        margin-bottom: 7px;
    }

    &-list {
        display: flex;
        gap: 10px;

        .q-radio__inner {
            display: none;
        }

        .q-radio {
            border: 2px solid #ccc;
            min-width: 120px;
            padding: 5px 10px;
            transition: all 0.25s;
            display: flex;
            align-items: center;
            justify-content: center;

            &:has(.q-radio__inner--truthy) {
                border: 2px solid green;

                &:hover {
                    opacity: 1;
                }
            }

            &:hover {
                cursor: pointer;
                opacity: 0.7;
            }
        }
    }
}
</style>
