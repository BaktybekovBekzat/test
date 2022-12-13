import { defineStore } from "pinia";
import { IDate } from "src/models/IDate";
import { IHandbook } from "src/models/IHandbook";

export interface IResult {
    id: string | number | Date;
    preparation: string;
    pathway: string;
    dosage: string;
    start: Date;
    end: Date;
    sessions: string[];
    quantity: number;
}

export const useSessionAfter = defineStore("session-after", {
    state: () => ({
        preparation: {
            title: "Лекарственный препарат",
            name: "Препараты",
            value: null,
            is_twin: false,
            handbook_options: [
                "Лекарственный препарат 1",
                "Лекарственный препарат 2",
                "Лекарственный препарат 3",
                "Лекарственный препарат 4",
            ],
        } as IHandbook,
        pathways: {
            title: "Путь приема",
            name: "Путь приема",
            value: null,
            is_twin: true,
            handbook_options: ["Перорально", "Подкожно", "Аретириально"],
        } as IHandbook,
        dosage: {
            title: "Дозировка",
            name: "Дозы препаратов",
            value: null,
            is_twin: true,
            handbook_options: ["мкг", "мл", "мг/кг"],
        } as IHandbook,
        sessions: [] as string[],
        date: {
            start: null,
            end: null,
        } as IDate,
        result: [] as IResult[],
    }),
    getters: {},
    actions: {
        formData(): void {
            const { preparation, pathways, dosage, date } = this.$state;

            if (
                preparation.value &&
                pathways.value &&
                dosage.value &&
                date.start &&
                date.end
            ) {
                this.$state.result = [
                    ...this.$state.result,
                    {
                        id: Date.now(),
                        preparation: preparation.value,
                        pathway: pathways.value,
                        dosage: dosage.value,
                        start: date.start,
                        end: date.end,
                        sessions: this.$state.sessions,
                        quantity: this.$state.sessions.length,
                    },
                ];
            }
        },
        removeFormData(id: Date | number | string): void {
            this.$state.result = [...this.$state.result].filter(
                (item) => item.id !== id
            );
        },
    },
});
