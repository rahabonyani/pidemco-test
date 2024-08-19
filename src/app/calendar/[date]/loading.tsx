'use client'

import Lottie from "lottie-react";
import loading from "@/utils/json/loading.json";
export default function Loading() {
    return (
        <div className='h-dvh  flex items-center justify-center'>
            <Lottie
                className="max-w-64"
                animationData={loading}
                loop={true}
            />
        </div>
    );
}