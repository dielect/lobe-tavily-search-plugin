"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SearchResult } from "@/app/api/tavily/_types"
import Image from "next/image"

interface SearchResultsGridProps {
    results: SearchResult[]
}

export default function SearchResultsGrid({ results }: SearchResultsGridProps) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {results.map((result, index) => (
                <motion.div
                    key={result.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                    <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow duration-300">
                        <CardHeader className="flex flex-row items-center gap-4 p-4">
                            <Image
                                src={result.icon || "/placeholder.svg"}
                                alt={`${result.title} icon`}
                                width={24}
                                height={24}
                                className="w-6 h-6"
                                onError={(e) => {
                                    e.currentTarget.src = "/placeholder.svg"
                                    e.currentTarget.onerror = null
                                }}
                            />
                            <CardTitle className="text-lg font-semibold line-clamp-1">
                                <a href={result.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                                    {result.title}
                                </a>
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-4 pt-0">
                            <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3">{result.content}</p>
                            <a
                                href={result.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs text-blue-500 hover:underline mt-2 block truncate"
                            >
                                {result.url}
                            </a>
                        </CardContent>
                    </Card>
                </motion.div>
            ))}
        </div>
    )
}

