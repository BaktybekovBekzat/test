<template>
    <div>
        <h4 class="text-h5 q-ma-none">{{ data.title }}</h4>
        <div class="row items-center">
            <div class="handbook-input row inline items-center">
                <q-input v-model="props.data.inputValue" borderless />
                {{
                    props.data.value
                        ? props.data.value
                        : props.data.inputDefaultMeasure
                }}
            </div>
            <div class="handbook-item__button">
                <q-icon name="list" size="25px" />
            </div>
        </div>
        <q-menu>
            <q-list style="width: 150px">
                <q-item
                    v-for="option in props.data.handbook_options"
                    clickable
                    v-close-popup
                    :key="option"
                    @click="selectValue = option"
                >
                    <q-item-section>{{ option }}</q-item-section>
                </q-item>
            </q-list>
        </q-menu>
    </div>
</template>

<script lang="ts" setup>
import { IHandbook } from "src/models/IHandbook";
import { ref, watch } from "vue";

interface IProps {
    data: IHandbook;
}

const props = defineProps<IProps>();
const input = ref<string | number>(props.data.inputValue as string);
const selectValue = ref<string>("");

watch(input, () => {
    props.data.inputValue = input.value;
});

watch(selectValue, () => {
    props.data.value = selectValue.value;
});
</script>

<style lang="scss">
.handbook-input {
    border: 1px solid #ccc;
    margin-right: 10px;
    height: max-content;
    padding: 3px 5px;
    padding-right: 10px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .q-field {
        width: max-content;
        max-width: 100px;

        &__control {
            height: 28px;
        }

        &__native {
            height: auto;
        }
    }
}

.handbook-item__button {
    transition: all 0.25s;

    &:hover {
        opacity: 0.7;
        cursor: pointer;
    }
}
</style>
