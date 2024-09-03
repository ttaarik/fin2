"use client"

import * as React from "react"
import { TrendingUp } from "lucide-react"
import { Label, Pie, PieChart } from "recharts"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

export const description = "A donut chart with text"

const chartData = [
    { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
    { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
    { browser: "firefox", visitors: 287, fill: "var(--color-firefox)" },
    { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
    { browser: "other", visitors: 190, fill: "var(--color-other)" },
]

const chartConfig = {
    visitors: {
        label: "Visitors",
    },
    chrome: {
        label: "Chrome",
        color: "hsl(var(--chart-1))",
    },
    safari: {
        label: "Safari",
        color: "hsl(var(--chart-2))",
    },
    firefox: {
        label: "Firefox",
        color: "hsl(var(--chart-3))",
    },
    edge: {
        label: "Edge",
        color: "hsl(var(--chart-4))",
    },
    other: {
        label: "Other",
        color: "hsl(var(--chart-5))",
    },
} satisfies ChartConfig

const TransactionsBalance = () => {
    const totalVisitors = React.useMemo(() => {
        return chartData.reduce((acc, curr) => acc + curr.visitors, 0)
    }, [])
    return (
        <Card x-chunk="dashboard-01-chunk-5">
            <CardHeader>
                <CardTitle>Transactions</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-8">
                <div className="flex items-center gap-4">
                    <Avatar className="hidden h-9 w-9 sm:flex">
                        <AvatarImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStOB26e6FqhS8YWtkvN0L3cbFpupGF5VN8XA&s" alt="Avatar" />
                        {/* <AvatarFallback>T K</AvatarFallback> */}
                    </Avatar>
                    <div className="grid gap-1">
                        <p className="text-sm font-medium leading-none">
                            Tarik Kadric
                        </p>
                        <p className="text-sm text-muted-foreground">
                            kadric.tarik@hotmail.com
                        </p>
                    </div>
                    <div className="ml-auto font-medium">+22€</div>
                </div>
                <div className="flex items-center gap-4">
                    <Avatar className="hidden h-9 w-9 sm:flex">
                        <AvatarImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStOB26e6FqhS8YWtkvN0L3cbFpupGF5VN8XA&s" alt="Avatar" />
                        {/* <AvatarFallback>T K</AvatarFallback> */}
                    </Avatar>
                    <div className="grid gap-1">
                        <p className="text-sm font-medium leading-none">
                            Max Mustermann
                        </p>
                        <p className="text-sm text-muted-foreground">
                            max.mustermann@gamil.com
                        </p>
                    </div>
                    <div className="ml-auto font-medium">+12€</div>
                </div>
                <div className="flex items-center gap-4">
                    <Avatar className="hidden h-9 w-9 sm:flex">
                        <AvatarImage src="https://media.istockphoto.com/id/1366767841/vector/monthly-subscription-automatic-subscription-flat-design.jpg?s=612x612&w=0&k=20&c=FoO_t-dXfwCNfpOZtnRDsORAxgqiCNI7XCvk903IQBE=" alt="Avatar" />
                        
                        {/* <AvatarFallback>T K</AvatarFallback> */}
                    </Avatar>
                    <div className="grid gap-1">
                        <p className="text-sm font-medium leading-none">
                            NETFLIX
                        </p>
                        <p className="text-sm text-muted-foreground">
                            net.flix@subs.com
                        </p>
                    </div>
                    <div className="ml-auto font-medium">- 19€</div>
                </div>
                <div className="flex items-center gap-4">
                    <Avatar className="hidden h-9 w-9 sm:flex">
                        <AvatarImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0wh01OwG0PRqWu3Fr6Lo18tRQ0tQ6gu5Z4A&s" alt="Avatar" />
                        {/* <AvatarFallback>T K</AvatarFallback> */}
                    </Avatar>
                    <div className="grid gap-1">
                        <p className="text-sm font-medium leading-none">
                            Fitinn Wien
                        </p>
                        <p className="text-sm text-muted-foreground">
                            fitinn.wien@gamil.com
                        </p>
                    </div>
                    <div className="ml-auto font-medium">- 55€</div>
                </div>
            </CardContent>
        </Card>
    );
};

export default TransactionsBalance;
