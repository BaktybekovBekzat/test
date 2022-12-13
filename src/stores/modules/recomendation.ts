import { IAuthor } from "./../models/IAuthorl";
import { defineStore } from "pinia";

export const useRecomendation = defineStore("recomendation", {
    state: () => ({
        recomendations: [] as string[],
        author: {
            first_name: "Иса",
            last_name: "Ахунбаев",
            middle_name: "Коноевич",
            position: "Senior Хирург",
        } as IAuthor,
        date: new Date(),
    }),
    getters: {
        getName: ({ author }): string =>
            `${author.first_name} ${author.last_name} ${author.middle_name}`,
        getPosition: (state): string => state.author.position,
    },
    actions: {
        addRecomendation(value: string): void {
            this.$state.recomendations.push(value);
        },
    },
});
