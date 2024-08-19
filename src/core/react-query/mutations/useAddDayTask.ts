import { useMutation } from 'react-query';

interface Task { date: string; content: string; type: string }

async function addNewDayTask(body: Task) {
  const res = await fetch('/api/tasks/add/day', {
    method: 'POST',
    body: JSON.stringify({ task: body })
  })
  return res;
}

export function useAddNewDayTask() {
  return useMutation((body: Task) =>
    addNewDayTask(body),
  );
}
