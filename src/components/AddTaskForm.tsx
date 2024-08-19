'use client'

import { useAddNewDayTask } from "@/core/react-query/mutations/useAddDayTask";
import { useAddNewMonthTask } from "@/core/react-query/mutations/useAddMonthTask";
import { useGetDayTask } from "@/core/react-query/queries/useGetDayTask";
import { useGetMonthTask } from "@/core/react-query/queries/useGetMonthTask";
import { tasksInDay, tasksInMonth } from "@/core/store/tasksList";
import { Badge, BadgeProps, Button, Form, Input, Space } from "antd";
import { useEffect } from "react";
import { useRecoilState } from "recoil";

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

const AddTaskForm = ({ params }: { params: { [key: string]: string } }) => {
    const datePattern1 = /^\d{2}-\d{2}-\d{4}$/;
    const [form] = Form.useForm();
    const [TasksDay, setTasksDay] = useRecoilState(tasksInDay);
    const [TasksMonth, setTasksMonth] = useRecoilState(tasksInMonth);
    const { data: dayTasks } = useGetDayTask();
    const { data: monthTasks } = useGetMonthTask();
    const { mutate: addNewDayTask } = useAddNewDayTask();
    const { mutate: addNewMonthTask } = useAddNewMonthTask();

    const onFinish = async (values: any) => {
        if (datePattern1.test(params.date)) {
            console.log('day')
            addNewDayTask({ date: params.date, type: 'success', content: values.task }, {
                onSuccess: resp => {
                    setTasksDay((prev) => [...prev, { date: params.date, type: 'success', content: values.task }])
                },
            });
        } else {
            console.log('month')
            addNewMonthTask({ date: params.date, type: 'success', content: values.task }, {
                onSuccess: resp => {
                    setTasksMonth((prev) => [...prev, { date: params.date, type: 'success', content: values.task }])
                },
            });
        }
        form.resetFields();
    };

    useEffect(() => {
        if (dayTasks?.data && monthTasks?.data) {
            setTasksDay(dayTasks.data)
            setTasksMonth(monthTasks.data)
        }
    }, [dayTasks, monthTasks, setTasksDay, setTasksMonth])

    return (
        <div className="container max-w-screen-md mx-auto my-4 border border-neutral-100 p-4 rounded-md shadow">
            <Form
                {...layout}
                form={form}
                name="control-hooks"
                onFinish={onFinish}
                className="max-w-xl flex flex-row w-full "
                autoFocus
            >
                <Form.Item name="task" label="Task" rules={[{ required: true }]} className="w-full" >
                    <Input />
                </Form.Item>
                <Form.Item {...tailLayout}>
                    <Space>
                        <Button type="primary" htmlType="submit">
                            Save
                        </Button>
                    </Space>
                </Form.Item>
            </Form>
            <div className="max-w-xl w-full flex flex-col gap-4 mx-auto">
                {datePattern1.test(params.date) ?
                    <ul className="events">
                        {TasksDay.filter((item) => item.date === params.date).map((item, index) => (
                            <li key={item.date + index}>
                                <Badge status={item.type as BadgeProps['status']} text={item.content} />
                            </li>
                        ))}
                    </ul>
                    :
                    <ul className="events">
                        {TasksMonth.filter((item) => item.date === params.date).map((item, index) => (
                            <li key={item.date + index}>
                                <Badge status={item.type as BadgeProps['status']} text={item.content} />
                            </li>
                        ))}
                    </ul>
                }
            </div>
        </div >
    )
}
export default AddTaskForm