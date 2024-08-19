'use client'
import { ReactNode } from "react"
import { RecoilRoot } from "recoil"

const StateWrapper = ({ children }: { children: ReactNode }) => {
    return (
        <RecoilRoot>
            {children}
        </RecoilRoot>
    )
}
export default StateWrapper