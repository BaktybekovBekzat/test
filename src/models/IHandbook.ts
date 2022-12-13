export interface IHandbook {
    title?: string;
    name: string;
    value: string | null;
    isInput?: boolean;
    inputValue?: null | string | number;
    inputDefaultMeasure?: string;
    is_twin: boolean;
    handbook_options: string[] | [];
}
