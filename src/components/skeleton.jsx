import React from "react";
import { Skeleton } from "@nextui-org/react";

const SkeletonComponent = () => {
    return (
        <div className="flex items-center gap-4">
            <div>
                <Skeleton className="flex rounded-full w-12 h-12" />
            </div>
            <div className="flex flex-col gap-2">
                <Skeleton className="h-3 w-3/5 rounded-lg" />
                <Skeleton className="h-3 w-4/5 rounded-lg" />
            </div>
        </div>
    );
};

export default SkeletonComponent;
