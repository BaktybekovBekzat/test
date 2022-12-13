import { defineStore } from "pinia";
import { IHandbook } from "src/models/IHandbook";
import { IMeasure } from "src/models/IMeasure";

export interface SessionAssigmentResult {
    apparatus: string;
    dialyzer: string;
    concentrator: string;
    injection_type: string;
    bicarbonate: string;
    anticoagulation: string;
    patientWeight: string;
    concentratorСapacity: string;
    anticoagulationСapacity: string;
}

export const useSessionAssigment = defineStore("session-assigment", {
    state: () => ({
        apparatus: "HD",
        dialyzer: {
            title: "Диализатор",
            name: "Диализатор",
            value: null,
            is_twin: false,
            handbook_options: [],
        } as IHandbook,
        concentrator: {
            title: "Концентратор",
            name: "Концентратор",
            value: null,
            is_twin: false,
            handbook_options: [],
        } as IHandbook,
        concentratorСapacity: {
            measure_name: "Объем л.",
            measure: "л.",
            value: 10,
        } as IMeasure,
        injection_type: "Игла",
        needle: {
            name: "Игла",
            value: null,
            is_twin: false,
            handbook_options: [
                "Игла Размер 1",
                "Игла Размер 2",
                "Игла Размер 3",
                "Игла Размер 4",
            ],
        } as IHandbook,
        needle_type: {
            name: "Тип Иглы",
            value: null,
            is_twin: false,
            handbook_options: ["Венозная", "Артериальная"],
        } as IHandbook,
        catheter: {
            name: "Катетер",
            value: null,
            is_twin: false,
            handbook_options: [
                "Катетер Размер 1",
                "Катетер Размер 2",
                "Катетер Размер 3",
                "Катетер Размер 4",
            ],
        } as IHandbook,
        catheter_type: {
            name: "Типы Катереров",
            value: null,
            is_twin: true,
            handbook_options: [
                "Катетер Фолея",
                "Катетер Малеко",
                "Катетер Пеццера",
                "Катетер Тиманна",
                "Катетер Нелатона",
            ],
            measure: null,
        } as IHandbook,
        bicarbonate: {
            title: "Бикарбонат",
            name: "Бикарбонат",
            value: null,
            is_twin: true,
            handbook_options: ["граммов", "литров"],
            inputValue: "XXX",
            isInput: true,
            inputDefaultMeasure: "гр / л",
        } as IHandbook,
        patientWeight: {
            value: "XXX",
            measure_name: "Сухой вес пациента",
            measure: "кг",
        } as IMeasure,
        anticoagulation: {
            title: "Антикоагуляция",
            name: "Наименование",
            value: null,
            is_twin: true,
            handbook_options: ["Антикоагуляция 1", "Антикоагуляция 2"],
        } as IHandbook,
        anticoagulationСapacity: {
            measure_name: "Объем",
            measure: "ед",
            value: "XXX",
        } as IMeasure,
        result: null as SessionAssigmentResult | null,
    }),
    getters: {},
    actions: {
        setPick(name: string, value: string): void {
            switch (name) {
                case "injection_type":
                    this.$state.injection_type = value;
                    return;
                case "apparatus":
                    this.$state.apparatus = value;
                    return;

                default:
                    return;
            }
        },
        formData(): void {
            const {
                apparatus,
                dialyzer,
                concentrator,
                injection_type,
                bicarbonate,
                anticoagulation,
                patientWeight,
                concentratorСapacity,
                anticoagulationСapacity,
            } = this.$state;

            if (
                apparatus &&
                dialyzer.value &&
                concentrator.value &&
                injection_type &&
                bicarbonate.value &&
                bicarbonate.inputValue &&
                anticoagulation.value &&
                concentratorСapacity.value
            ) {
                this.$state.result = {
                    anticoagulationСapacity: `${anticoagulation.value} ${anticoagulationСapacity.value} ${anticoagulationСapacity.measure}`,
                    concentratorСapacity: `${concentratorСapacity.value} ${concentratorСapacity.measure}`,
                    apparatus: apparatus,
                    dialyzer: dialyzer.value,
                    concentrator: concentrator.value,
                    injection_type: injection_type,
                    bicarbonate: `${bicarbonate.inputValue} ${bicarbonate.value}`,
                    anticoagulation: anticoagulation.value,
                    patientWeight: `${patientWeight.value} ${patientWeight.measure}`,
                };
            }
        },
    },
});
