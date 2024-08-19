import Title from "antd/es/typography/Title"
import Link from "next/link";
import { ReactNode } from "react"
import { BsChevronLeft } from "react-icons/bs";

const layout = ({ children }: { children: ReactNode }) => {
    return (
        <div>
            <div className="flex justify-between items-center w-full py-4 shadow px-4">
                <Link href='/calendar' className="flex flex-row items-center gap-2">
                    <span><BsChevronLeft /></span>
                    <span>Back</span>
                </Link>
                <Title level={2}>Add New Task</Title>
                <div></div>
            </div>
            <div>{children}</div>
        </div>
    )
}
export default layout