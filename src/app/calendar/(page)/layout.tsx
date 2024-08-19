import Title from "antd/es/typography/Title"
import { ReactNode } from "react"

const layout = ({ children }: { children: ReactNode }) => {
    return (
        <div>
            <div className="flex justify-center items-center w-full py-4 shadow">
                <Title level={2}>Calendar</Title>
            </div>
            <div>{children}</div>
        </div>
    )
}
export default layout