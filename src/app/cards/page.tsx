"use client"

import { Chip, Image } from "@nextui-org/react";
import {
    ChevronLeft,
    ChevronRight,
    Copy,
    CreditCard,
    File,
    Home,
    LineChart,
    ListFilter,
    MoreVertical,
    Package,
    Package2,
    PanelLeft,
    Plus,
    Search,
    Settings,
    ShoppingCart,
    Truck,
    Users2,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@nextui-org/react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
    Pagination,
    PaginationContent,
    PaginationItem,
} from "@/components/ui/pagination"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"


import { HeaderNav } from "@/components/ui/header-nav"
import { PieChartDonutText } from "@/components/ui/PieChartDonutText"
import TransactionsBalance from "@/components/TransactionsBalance"
import { BalanceChart } from "@/components/ui/balance-chart"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

export default function Cards() {
    return (
        <div className="flex min-h-screen w-full flex-col">
            <HeaderNav page="cards"></HeaderNav>
            <main className="mt-[1em] grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
                <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
                    <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-2">
                        <PieChartDonutText></PieChartDonutText>
                        <TransactionsBalance></TransactionsBalance>
                    </div>
                    <BalanceChart></BalanceChart>
                </div>
                <div>
                    <Card className="overflow-hidden" x-chunk="dashboard-05-chunk-4">
                        <CardHeader className="items-center flex flex-row">
                            <ChevronLeft size={60} />
                            <Image
                                src="https://www.mastercard.us/content/dam/public/mastercardcom/na/us/en/large-enterprises/images/mastercard-corporate-multi-card-1280x720.jpg"
                                alt="Picture of your card"
                            />
                            <ChevronRight size={60} />
                        </CardHeader>
                        <CardContent className="p-6 text-sm">
                            <div className="grid gap-3">
                                <div className="font-semibold">Card Information</div>
                                <ul className="grid gap-3">
                                    <li className="flex items-center justify-between">
                                        <span className="text-muted-foreground">
                                            Card balance
                                        </span>
                                        <span>
                                            <div className="text-lg font-semibold">
                                                $2.500
                                            </div>
                                        </span>
                                    </li>
                                    <li className="flex items-center justify-between">
                                        <span className="text-muted-foreground">
                                            Credit limit
                                        </span>
                                        <span>$49.00</span>
                                    </li>
                                </ul>
                                <Separator className="my-2" />
                                <ul className="grid gap-3">
                                    <li className="flex items-center justify-between">
                                        <span className="text-muted-foreground">Status</span>
                                        <span>
                                            <Chip color="success" size="sm" variant="flat">
                                                Active
                                            </Chip>
                                        </span>
                                    </li>
                                    <li className="flex items-center justify-between">
                                        <span className="text-muted-foreground">Type card</span>
                                        <span>
                                            <div className="text-lg font-semibold">
                                                Mastercard
                                            </div>
                                        </span>
                                    </li>
                                    <li className="flex items-center justify-between">
                                        <span className="text-muted-foreground">Currency</span>
                                        <div className="text-lg font-semibold">
                                            EUR
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </CardContent>
                    </Card>
                    <CardFooter className="flex flex-row items-center mt-[0.5em] px-6 py-3">
                        <div className="m-auto">
                            <Button radius="full" color="primary" variant="shadow">
                                <Plus />New Card
                            </Button>
                        </div>
                    </CardFooter>
                </div>
            </main>
        </div >
    )
}

