"use client"
import { HeaderNav } from "@/components/ui/header-nav";
import SubscriptionManager from "@/components/ui/subscription-manager";

export default function Subscription() {
    return (
        <div className="flex min-h-screen w-full flex-col">
            <HeaderNav page="subscriptions"></HeaderNav>
            <main className="mt-[1em] gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
                <SubscriptionManager></SubscriptionManager>
            </main>
        </div>
    )
}