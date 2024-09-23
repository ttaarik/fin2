import Link from "next/link"
import { CircleUser, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import '@/app/FileUpload.css';
import React from "react";

import { useEffect } from "react"

export function HeaderNav({ page }: { page: string }) {
    useEffect(() => {
        if (page === "dashboard") {
            const element = document.getElementById("dashboard-link");
            const element2 = document.getElementById("dashboard-link-sheet");
            if (element) {
                element.classList.remove('text-muted-foreground');
                if (element2) {
                    element2.classList.remove('text-muted-foreground');
                }
            }
        } else if (page === "balance") {
            const element = document.getElementById("balance-link");
            const element2 = document.getElementById("balance-link-sheet");
            if (element) {
                element.classList.remove('text-muted-foreground');
                if (element2) {
                    element2.classList.remove('text-muted-foreground');
                }
            }
        } else if (page === "subscriptions") {
            const element = document.getElementById("subscription-link");
            const element2 = document.getElementById("subscription-link-sheet");
            if (element) {
                element.classList.remove('text-muted-foreground');
                if (element2) {
                    element2.classList.remove('text-muted-foreground');
                }
            }
        } else if (page === "transfer") {
            const element = document.getElementById("transfer-link");
            const element2 = document.getElementById("transfer-link-sheet");
            if (element) {
                element.classList.remove('text-muted-foreground');
                if (element2) {
                    element2.classList.remove('text-muted-foreground');
                }
            }
        } else if (page === "cards") {
            const element = document.getElementById("card-link");
            const element2 = document.getElementById("card-link-sheet");
            if (element) {
                element.classList.remove('text-muted-foreground');
                if (element2) {
                    element2.classList.remove('text-muted-foreground');
                }
            }
        }
    }, [page]);

    return (
        <>
            <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6 z-50">
                <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
                    <Link href="#" className="flex items-center gap-2 text-lg font-semibold md:text-base">
                    </Link>
                    <Link id="dashboard-link" href="dashboard" className="text-muted-foreground transition-colors hover:text-foreground">
                        Dashboard
                    </Link>
                    <Link id="balance-link" href="balance" className="text-muted-foreground transition-colors hover:text-foreground">
                        Balance
                    </Link>
                    <Link id="subscription-link" href="subscriptions" className="text-muted-foreground transition-colors hover:text-foreground">
                        Subscriptions
                    </Link>
                    <Link id="transfer-link" href="transfer" className="text-muted-foreground transition-colors hover:text-foreground">
                        Transfer
                    </Link>
                    <Link id="card-link" href="cards" className="text-muted-foreground transition-colors hover:text-foreground">
                        Cards
                    </Link>
                </nav>
                <Sheet>
                    <SheetTrigger asChild>
                        <Button
                            variant="outline"
                            size="icon"
                            className="shrink-0 md:hidden"
                        >
                            <Menu className="h-5 w-5" />
                            <span className="sr-only">Toggle navigation menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left">
                        <nav className="grid gap-6 text-lg font-medium">
                            <Link
                                id="dashboard-link-sheet"
                                href="dashboard"
                                className="text-muted-foreground hover:text-foreground"
                            >
                                Dashboard
                            </Link>
                            <Link
                                id="balance-link-sheet"
                                href="balance"
                                className="text-muted-foreground hover:text-foreground"
                            >
                                Balance
                            </Link>
                            <Link
                                id="subscriptions-link-sheet"
                                href="subscriptions"
                                className="text-muted-foreground hover:text-foreground"
                            >
                                Subscriptions
                            </Link>
                            <Link
                                id="transfer-link-sheet"
                                href="transfer"
                                className="text-muted-foreground hover:text-foreground"
                            >
                                Transfer
                            </Link>
                            <Link
                                id="cards-link-sheet"
                                href="cards"
                                className="text-muted-foreground hover:text-foreground"
                            >
                                Cards
                            </Link>
                        </nav>
                    </SheetContent>
                </Sheet>
                <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
                    <form className="ml-auto flex-1 sm:flex-initial">
                    </form>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="secondary" size="icon" className="rounded-full">
                                <CircleUser className="h-5 w-5" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <Link href="/profile"><DropdownMenuItem>Settings</DropdownMenuItem></Link>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Logout</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <div>
                        Max Mustermann
                    </div>
                </div>
            </header>
        </>
    )
}
