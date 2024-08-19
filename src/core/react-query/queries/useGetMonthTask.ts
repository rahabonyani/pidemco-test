import { useQuery } from "react-query";

const fetchGetMonth = async () => {
    const res = await fetch('/api/tasks/get-month');
    return res.json();
};

export function useGetMonthTask() {
    return useQuery(['monthTask'], () => fetchGetMonth());
}