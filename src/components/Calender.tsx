'use client';

import { useGetDayTask } from '@/core/react-query/queries/useGetDayTask';
import { useGetMonthTask } from '@/core/react-query/queries/useGetMonthTask';
import { tasksInDay, tasksInMonth } from '@/core/store/tasksList';
import { getListData } from '@/utils/getListOfSelected';
import type { BadgeProps, CalendarProps } from 'antd';
import { Badge, Calendar } from 'antd';
import type { Dayjs } from 'dayjs';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect } from 'react';
import { useRecoilState } from 'recoil';


const CalendarAnt = () => {
    const { push } = useRouter()
    const [tasksDay, setTasksDay] = useRecoilState(tasksInDay);
    const [tasksMonth, setTasksMonth] = useRecoilState(tasksInMonth);
    const { data: dayTasks } = useGetDayTask();
    const { data: monthTasks } = useGetMonthTask();

    const handleSelect = (value: Dayjs, info: { source: 'year' | 'month' | 'date' | 'customize' }) => {
        if (info.source === 'date') {
            const date = value.format('DD-MM-YYYY')
            push(`/calendar/${date}`)
        } else {
            const date = value.format('MM-YYYY')
            push(`/calendar/${date}`)
        }
    }

    const monthCellRender = useCallback((value: Dayjs) => {
        const listData = getListData(value.format('MM-YYYY'), tasksMonth)
        return (
            <ul className="events">
                {listData.map((item, index) => (
                    <li key={item.date + index}>
                        <Badge status={item.type as BadgeProps['status']} text={item.content} />
                    </li>
                ))}
            </ul>
        );
    }, [tasksMonth])

    const dateCellRender = useCallback((value: Dayjs): JSX.Element => {
        const listData = getListData(value.format('DD-MM-YYYY'), tasksDay)
        return (
            <ul className="events">
                {listData.map((item, index) => (
                    <li key={item.date + index}>
                        <Badge status={item.type as BadgeProps['status']} text={item.content} />
                    </li>
                ))}
            </ul>
        );
    }, [tasksDay]);

    const cellRender: CalendarProps<Dayjs>['cellRender'] = (current, info) => {
        if (info.type === 'date') return dateCellRender(current);
        if (info.type === 'month') return monthCellRender(current);
        return info.originNode;
    };

    useEffect(() => {
        if (dayTasks?.data && monthTasks?.data) {
            setTasksDay(dayTasks.data)
            setTasksMonth(monthTasks.data)
        }
    }, [dayTasks, monthTasks, setTasksDay, setTasksMonth])

    return <Calendar onSelect={handleSelect} cellRender={cellRender} className='small-scroll-bar' />;
};

export default CalendarAnt;