"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-gray-800">
            <Header />
            <Hero />
            <Features />
            <QuickStart />
            <Deployment />
            <Footer />
        </div>
    )
}

function Header() {
    return (
        <header className="p-4 md:p-6">
            <nav className="container mx-auto flex items-center justify-between">
                <Image src="/logo.png" alt="LobeChat Tavily AI Search Plugin Logo" width={64} height={64} />
                <Button asChild>
                    <Link href="https://github.com/dielect/lobechat-tavily-plugin">GitHub</Link>
                </Button>
            </nav>
        </header>
    )
}

function Hero() {
    return (
        <section className="container mx-auto px-4 py-12 text-center md:py-24">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-6 text-4xl font-bold md:text-6xl"
            >
                LobeChat Tavily AI Search Plugin
            </motion.h1>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-8 text-xl text-gray-600 dark:text-gray-300"
            >
                Enhance LobeChat with Real-Time AI-Powered Web Search
            </motion.p>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
            >
                <Button asChild size="lg">
                    <Link href="https://github.com/dielect/lobechat-tavily-plugin?tab=readme-ov-file#-quick-start">Get Started</Link>
                </Button>
            </motion.div>
        </section>
    )
}

function Features() {
    const features = [
        {
            title: "Real-Time Search",
            description: "Get up-to-date information from the web for your AI applications.",
        },
        {
            title: "Tailored for LLMs",
            description: "Optimized search results for large language models.",
        },
        {
            title: "Fast & Accurate",
            description: "Deliver quick and precise results for better decision-making.",
        },
        {
            title: "Free Tier",
            description: "1,000 free searches per month without credit card requirement.",
        },
    ]

    return (
        <section className="bg-gray-50 py-12 dark:bg-gray-800 md:py-24">
            <div className="container mx-auto px-4">
                <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">Why Choose Tavily AI Search Plugin</h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card>
                                <CardHeader>
                                    <CardTitle>{feature.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription>{feature.description}</CardDescription>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

function QuickStart() {
    const steps = [
        { title: "Get API Key", description: "Register at Tavily and create an API key." },
        { title: "Install Plugin", description: "Add the plugin to LobeChat using the provided URL." },
        { title: "Start Searching", description: "Enjoy enhanced AI-powered search in your chats." },
    ]

    return (
        <section id="quick-start" className="py-12 md:py-24">
            <div className="container mx-auto px-4">
                <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">Quick Start Guide</h2>
                <div className="grid gap-6 md:grid-cols-3">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <Card>
                                <CardHeader>
                                    <CardTitle>
                                        Step {index + 1}: {step.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription>{step.description}</CardDescription>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

function Deployment() {
    return (
        <section className="bg-gray-50 py-12 dark:bg-gray-800 md:py-24">
            <div className="container mx-auto px-4">
                <h2 className="mb-6 text-center text-3xl font-bold md:text-4xl">Private Deployment</h2>
                <p className="mb-8 text-center text-lg text-gray-600 dark:text-gray-300">
                    Deploy your own instance for enhanced security and customization.
                </p>
                <div className="flex justify-center">
                    <Button asChild size="lg">
                        <Link href="https://github.com/dielect/lobechat-tavily-plugin?tab=readme-ov-file#%EF%B8%8F-private-deployment">Learn More</Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}

function Footer() {
    return (
        <footer className="bg-gray-100 py-6 dark:bg-gray-900">
            <div className="container mx-auto px-4 text-center">
                <p className="text-gray-600 dark:text-gray-300">Made with ❤️ for the LobeChat community</p>
            </div>
        </footer>
    )
}

