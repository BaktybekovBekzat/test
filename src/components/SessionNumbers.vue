<template>
    <div class="session-numbers">
        <h5 class="session-number__title text-h5 q-ma-none">Номера сеансов:</h5>
        <ul class="session-numbers__list row items-center">
            <li
                class="session-numbers__list-item"
                :class="{
                    'session-numbers__list-item__active':
                        sessions.includes(item),
                }"
                v-for="item in arr"
                :key="item"
                @click="setSessions(item)"
            >
                {{ item }}
            </li>
        </ul>
    </div>
</template>

<script lang="ts" setup>
import { useSessionAfter } from "src/stores/modules/session-after";
import { ref, watch } from "vue";

const arr: string[] = ["1", "2", "3", "4", "5", "6", "7"];

const sessions = ref<string[]>([]);
const store = useSessionAfter();

const setSessions = (value: string): void => {
    if (!sessions.value.includes(value)) {
        sessions.value = [...sessions.value, value];
        return;
    }

    sessions.value = [...sessions.value].filter((session) => session !== value);
};

watch(sessions, () => {
    store.sessions = sessions.value;
});
</script>

<style lang="scss" scoped>
.session-numbers {
    &__title {
    }

    &__list {
        gap: 10px;

        &-item {
            border: 1px solid #ccc;
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.25s;

            &:hover {
                opacity: 0.7;
                cursor: pointer;
            }

            &__active {
                background-color: aqua;
                color: #fff;
            }
        }
    }
}
</style>
