<template>
    <div class="measure column items-center" v-show="props.data.measure">
        <h5 class="text-h5 text-center q-ma-none">
            {{ props.data.measure_name }}
        </h5>
        <div class="measure-input row inline items-center">
            <q-input v-model="inputValue" borderless />
            {{ props.data.measure }}
        </div>
    </div>
</template>

<script lang="ts" setup>
import { IMeasure } from "src/models/IMeasure";
import { ref, defineProps, watch } from "vue";

interface IProps {
    data: IMeasure;
}

const props = defineProps<IProps>();

const inputValue = ref<string>(props.data.value as string);

watch(inputValue, () => {
    props.data.value = inputValue.value;
});
</script>

<style lang="scss">
.measure {
    margin: 0px 20px;
    max-width: 150px;

    &-input {
        border: 1px solid #ccc;
        height: max-content;
        padding: 3px 5px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;

        .q-field {
            width: max-content;
            max-width: 30px;

            &__control {
                height: 28px;
            }

            &__native {
                height: auto;

                text-align: right;
            }
        }
    }
}
</style>
