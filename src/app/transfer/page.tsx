"use client"
import { HeaderNav } from '@/components/ui/header-nav'
import { PaperClipIcon } from '@heroicons/react/20/solid'
import { useEffect } from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardFooter, CardTitle, CardDescription } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Combobox } from '@/components/ui/ComboBox'


export default function Transfer() {
    return (
        <div>
            <div className="flex min-h-screen w-full flex-col">
                <HeaderNav page='transfer'></HeaderNav>
                <main className="m-auto p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
                    <div className='content-center m-auto'>
                        <Card>
                            <CardHeader>
                                <CardTitle>
                                    Payment information
                                </CardTitle>
                                <CardDescription>
                                    Please provide any specific details or notes related to the payment transfer
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className='content-center m-auto'>
                                        <div>
                                            <p>Transfer Details</p>
                                            <p className="text-muted-foreground">
                                                Enter the details of the recipient
                                            </p>
                                        </div>
                                    </div>
                                    <div className='h-20'>

                                    </div>
                                    <div className='content-center m-auto'>
                                        Select Source Bank1
                                    </div>
                                    <div>
                                        <Combobox></Combobox>
                                    </div>
                                    <div className='content-center m-auto'>
                                        Transfer Note
                                    </div>
                                    <div>
                                        <Textarea></Textarea>
                                    </div>
                                </div>
                            </CardContent>
                            <CardFooter>
                                adalskd
                            </CardFooter>
                        </Card>
                    </div>



                </main>

            </div>

        </div>
    )
}
