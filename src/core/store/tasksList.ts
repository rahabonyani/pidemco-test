import { atom } from "recoil";

export const tasksInDay = atom<{ date: string; content: string; type: string }[]>({
    key: 'TasksInDay',
    default: [],
});

export const tasksInMonth = atom<{ date: string; content: string; type: string }[]>({
    key: 'TasksInMonth',
    default: [],
});