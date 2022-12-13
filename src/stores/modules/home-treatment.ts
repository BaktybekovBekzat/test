import { defineStore } from "pinia";
import { IDate } from "src/models/IDate";
import { IHandbook } from "src/models/IHandbook";

export interface IHomeTreatmentResult {
    id: Date | string | number;
    preparation: string;
    pathway: string;
    dosage: string;
    frequency: string;
    start: Date;
    end: Date;
}

export const useHomeTreatmentStore = defineStore("home-treatment", {
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
        frequency: {
            title: "Кратность приема",
            name: "Кр-ть приема",
            value: null,
            is_twin: true,
            handbook_options: ["1 раз в день", "2 раз в день", "3 раз в день"],
        } as IHandbook,
        date: {
            start: null,
            end: null,
        } as IDate,
        result: null as IHomeTreatmentResult | null,
    }),
    getters: {},
    actions: {
        formData(): void {
            const { preparation, pathways, dosage, frequency, date } =
                this.$state;

            if (
                preparation.value &&
                pathways.value &&
                dosage.value &&
                frequency.value &&
                date.start &&
                date.end
            ) {
                this.$state.result = {
                    id: Date.now(),
                    preparation: preparation.value,
                    pathway: pathways.value,
                    dosage: dosage.value,
                    frequency: frequency.value,
                    start: date.start,
                    end: date.end,
                };
            }
        },
    },
});
