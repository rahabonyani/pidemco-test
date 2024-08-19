import { useMutation } from 'react-query';

interface Task { date: string; content: string; type: string }

async function addNewMonthTask(body: Task) {
  const res = await fetch('/api/tasks/add/month', {
    method: 'POST',
    body: JSON.stringify({ task: body })
  })
  return res;
}

export function useAddNewMonthTask() {
  return useMutation((body: Task) =>
    addNewMonthTask(body),
  );
}
