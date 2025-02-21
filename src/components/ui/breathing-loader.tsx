import { cn } from "@/lib/utils"
import { Search } from "lucide-react"

interface BreathingLoaderProps {
    className?: string
}

export default function BreathingLoader({ className }: BreathingLoaderProps) {
    return (
        <div className={cn("flex flex-col items-center justify-center space-y-4", className)}>
            <div className="relative w-20 h-20 animate-breath">
                <div className="absolute inset-0 bg-blue-500 rounded-full opacity-75"></div>
                <div className="absolute inset-0 bg-blue-300 rounded-full opacity-75 animate-ping"></div>
                <Search className="absolute inset-0 m-auto text-white w-10 h-10" />
            </div>
            <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">Searching</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Finding the best results for you...</p>
            </div>
        </div>
    )
}

