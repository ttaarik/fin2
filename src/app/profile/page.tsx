"use client"
import Link from "next/link"
import { CircleUser, Menu, Package2, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
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
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
// import { Input } from "@/components/ui/input" //shadcn
// import { Input } from "@nextui-org/input";        //nextuis
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import '@/app/FileUpload.css';
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"



import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"









import { CheckIcon, ChevronsUpDown } from "lucide-react";


import * as RPNInput from "react-phone-number-input";

import flags from "react-phone-number-input/flags";

import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command";
import { Input, InputProps } from "@/components/ui/input";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";

import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";

import { PhoneInput } from "@/components/ui/phone-input";
import { toast } from "@/components/ui/use-toast";
import { isValidPhoneNumber } from "react-phone-number-input";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { HeaderNav } from "@/components/ui/header-nav"

const formSchema = z.object({
    vorname: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    nachname: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    email: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    tax: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    phone: z.string().refine(isValidPhoneNumber, {
        message: "Invalid phone number"
    }),
    gender: z.string().refine(isValidPhoneNumber, {
        message: "Invalid gender"
    }),
})


export default function PorfilePage() {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            vorname: "",
            nachname: "",
            email: "",
            phone: "",
            gender: "",
            tax: "",
        },
    })

    function onSubmit(data: z.infer<typeof formSchema>) {
        toast({
            title: "You submitted the following values:",
            description: (
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                    <code className="text-white">{JSON.stringify(data, null, 2)}</code>
                </pre>
            ),
        });
    }

    const [isVisible, setIsVisible] = React.useState(false);
    const toggleVisibility = () => setIsVisible(!isVisible);

    return (
        <div className="flex min-h-screen w-full flex-col">
            <HeaderNav page="profile"></HeaderNav>
            <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
                <div className="mx-auto grid w-full max-w-6xl gap-2">
                    <h1 className="text-3xl font-semibold">Profile</h1>
                </div>
                <div className="mx-auto w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">

                    <div className="grid gap-6">


                        <Card>
                            <div className="float-left">
                                <CardContent className="flex mt-[1.3em]">
                                    <div className="flex items-center z-0 space-x-4 m-auto">
                                        <Avatar className="ml-[1em] w-1/3 h-1/3">
                                            <AvatarImage src="https://github.com/shadcn.png" />
                                            <AvatarFallback className="ml-[1em] absolute w-16 h-16">CN</AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <input type="file" id="uploadBtn" className="hidden" />
                                            <label
                                                id="btnlabel"
                                                htmlFor="uploadBtn"
                                                className="cursor-pointer w-1/3 text-blue-500 hover:text-blue-700"
                                            >
                                                Upload Image
                                            </label>
                                        </div>
                                    </div>
                                </CardContent>
                            </div>
                        </Card>

                        <Card x-chunk="dashboard-04-chunk-1">
                            <CardHeader>
                                <CardTitle>General Infos</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <Form {...form}>
                                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                                        <div className="flex space-x-4">
                                            <FormField
                                                control={form.control}
                                                name="vorname"
                                                render={({ field }) => (
                                                    <FormItem className="w-full">
                                                        <FormLabel>Vorname</FormLabel>
                                                        <FormControl>
                                                            <Input placeholder="Tarik" {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <FormField
                                                control={form.control}
                                                name="nachname"
                                                render={({ field }) => (
                                                    <FormItem className="w-full">
                                                        <FormLabel>Nachname</FormLabel>
                                                        <FormControl>
                                                            <Input placeholder="Kadric" {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>
                                        <div className="flex space-x-4">
                                            <FormField
                                                control={form.control}
                                                name="email"
                                                render={({ field }) => (
                                                    <FormItem className="w-full">
                                                        <FormLabel>E-Mail</FormLabel>
                                                        <FormControl>
                                                            <Input placeholder="kadric.tarik@hotmail.com" {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <FormField
                                                control={form.control}
                                                name="phone"
                                                render={({ field }) => (
                                                    <FormItem className="w-full">
                                                        <FormLabel className="text-left">Phone Number</FormLabel>
                                                        <FormControl>
                                                            <PhoneInput placeholder="Enter a phone number" {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>
                                        <div className="flex space-x-4">
                                            <FormField
                                                control={form.control}
                                                name="gender"
                                                render={({ field }) => (
                                                    <FormItem className="w-full">
                                                        <FormLabel className="text-left">Gender</FormLabel>
                                                        <FormControl>
                                                            <RadioGroup {...field} className="w-full">
                                                                <div className="flex items-center space-x-2">
                                                                    <RadioGroupItem value="male" id="r1" />
                                                                    <Label htmlFor="r1">Male</Label>
                                                                </div>
                                                                <div className="flex items-center space-x-2">
                                                                    <RadioGroupItem value="female" id="r2" />
                                                                    <Label htmlFor="r2">Female</Label>
                                                                </div>
                                                                <div className="flex items-center space-x-2">
                                                                    <RadioGroupItem value="private" id="r3" />
                                                                    <Label htmlFor="r3">Keep it private</Label>
                                                                </div>
                                                            </RadioGroup>
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <FormField
                                                control={form.control}
                                                name="tax"
                                                render={({ field }) => (
                                                    <FormItem className="w-full">
                                                        <FormLabel>Steuernummer</FormLabel>
                                                        <FormControl>
                                                            <Input placeholder="ASKLA54 KK93" {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>

                                    </form>

                                </Form>

                            </CardContent>



                            <CardFooter className="border-t px-6 py-4">
                                <Button type="submit">Save changes</Button>
                            </CardFooter>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Contact Support</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid w-full gap-2">
                                    <Textarea placeholder="Type your message here." />
                                    <Button>Contact us</Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </main>
        </div>
    )
}
