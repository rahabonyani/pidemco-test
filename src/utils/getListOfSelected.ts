export const getListData = (date: string, list: { date: string; content: string; type: string }[]) => {
    const listOfTasks = list.filter((item) => item.date === date)
    return listOfTasks || []
};