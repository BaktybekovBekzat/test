import { defineStore } from "pinia";
import { IHandbook } from "src/models/IHandbook";

export const useHandbookModal = defineStore("handbook-modal", {
    state: () => ({
        isVisible: false as boolean,
        data: {} as IHandbook | null,
    }),
    getters: {},
    actions: {
        toggleIsVisible(handbook: IHandbook | null): void {
            this.$state.data = handbook;
            this.$state.isVisible = !this.$state.isVisible;
        },
        addOption(data: IHandbook | null, value: string): void {
            if (data) {
                data.handbook_options = [...data.handbook_options, value];
            }
        },
        removeOption(data: IHandbook | null, value: string): void {
            if (data) {
                data.handbook_options = [
                    ...data.handbook_options.filter((item) => item !== value),
                ];
            }
        },
        setHandbookValue(data: IHandbook | null, value: string): void {
            if (data) {
                data.value = value;
            }
        },
    },
});
