<template>
    <div class="session-date row items-center">
        <div class="session-date__item" @click="openCalendar('start')">
            <p class='text-h5 q-mb-none'>Начало приема</p>
            <q-btn>
                <span>{{
                    props.date.start
                        ? formateDate.formatDate(
                              props.date.start,
                              "DD:MM:YYYY HH:m"
                          )
                        : "DD.MM.XXXX"
                }}</span>
                <q-icon name="calendar_month" size="25px" />
            </q-btn>
        </div>
        <div class="session-date__item" @click="openCalendar('end')">
            <p class='text-h5 q-mb-none'>Конец приема</p>
            <q-btn>
                <span>{{
                    props.date.end
                        ? formateDate.formatDate(
                              props.date.end,
                              "DD:MM:YYYY HH:m"
                          )
                        : "DD.MM.XXXX"
                }}</span>
                <q-icon name="calendar_month" size="25px" />
            </q-btn>
        </div>

        <q-dialog class="row items-center" v-model="isCalendarVisible">
            <q-time class="q-mr-md" v-model="currentTime" format24h />
            <q-date
                v-if="currentTime"
                subtitle="Сеанс"
                :title="
                    calendarName === 'start' ? 'Начало приема' : 'Конец приема'
                "
                :disable="!currentTime"
                v-model="currentCalendar"
            />
        </q-dialog>
    </div>
</template>

<script lang="ts" setup>
import { IDate } from "src/models/IDate";
import { ref, watch } from "vue";
import { date as formateDate } from "quasar";

interface IProps {
    date: IDate;
}

const props = defineProps<IProps>();

const calendarName = ref<"start" | "end" | null>(null);
const currentCalendar = ref<Date | null>(null);
const currentTime = ref<string | null>(null);
const isCalendarVisible = ref<boolean>(false);

const openCalendar = (calendar: "start" | "end"): void => {
    calendarName.value = calendar;
    isCalendarVisible.value = true;
};

const resetAll = (): void => {
    isCalendarVisible.value = false;
    currentCalendar.value = null;
    currentTime.value = null;
};

watch(
    currentCalendar,
    () => {
        if (!currentCalendar.value) return;

        switch (calendarName.value) {
            case "start":
                props.date.start = new Date(
                    `${currentCalendar.value} ${currentTime.value}`
                );
                resetAll();
                return;
            case "end":
                props.date.end = new Date(
                    `${currentCalendar.value} ${currentTime.value}`
                );

                resetAll();
                return;

            default:
                return;
        }
    },
    { deep: true }
);
</script>

<style lang="scss">
.session-date {
    gap: 10px;

    .q-btn {
        padding: 0 10px;
        min-width: 150px;

        &__content {
            display: flex;
            justify-content: space-between;
            gap: 10px;
        }
    }
}
</style>
