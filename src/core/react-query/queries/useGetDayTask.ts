import { useQuery } from "react-query";

const fetchGetDay = async () => {
    const res = await fetch('/api/tasks/get-day');
    return res.json();
};

export function useGetDayTask() {
    return useQuery(['dayTask'], () => fetchGetDay());
}