'use client'

import React, { useState } from 'react'
import { Calendar as CalendarIcon } from 'lucide-react'
import { format } from 'date-fns'

import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'

interface Subscription {
  id: number;
  name: string;
  cost: number;
  account: string;
  startDate: string;
}

const subscriptions: Subscription[] = [
  {
    id: 1,
    name: 'Netflix',
    cost: 15.99,
    account: 'Checking Account (...1234)',
    startDate: '2022-01-01',
  },
  {
    id: 2,
    name: 'Spotify',
    cost: 9.99,
    account: 'Credit Card (...5678)',
    startDate: '2021-06-15',
  },
  {
    id: 3,
    name: 'Amazon Prime',
    cost: 12.99,
    account: 'Savings Account (...9012)',
    startDate: '2022-03-10',
  },
]

function getInitials(name: string): string {
  return name.split(' ').map(word => word[0]).join('').toUpperCase().slice(0, 2);
}

export default function SubscriptionManager(): React.ReactElement {
  const [stopDates, setStopDates] = useState<Record<number, Date | null>>({})

  const handleStopSubscription = (subscriptionId: number, stopDate?: Date): void => {
    console.log(`Stopping subscription ${subscriptionId}${stopDate ? ` on ${format(stopDate, 'PP')}` : ' immediately'}`)
    // Here you would typically make an API call to stop the subscription
  }

  const handleDateSelect = (date: Date | null, subscriptionId: number): void => {
    setStopDates(prev => ({ ...prev, [subscriptionId]: date }))
  }

  const formatDate = (date: Date | null | undefined): string => {
    return date ? format(date, 'yyyy-MM-dd') : ''
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Your Subscriptions</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {subscriptions.map((subscription) => (
          <Card key={subscription.id} className="flex flex-col">
            <CardHeader>
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                  {getInitials(subscription.name)}
                </div>
                <div>
                  <CardTitle>{subscription.name}</CardTitle>
                  <CardDescription>${subscription.cost.toFixed(2)}/month</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Account: {subscription.account}</p>
              <p className="text-sm text-muted-foreground">
                Started: {format(new Date(subscription.startDate), 'PP')}
              </p>
            </CardContent>
            <CardFooter className="mt-auto">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" className="w-full">
                    Manage Subscription
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Manage {subscription.name} Subscription</DialogTitle>
                    <DialogDescription>
                      You can stop this subscription immediately or schedule it to stop on a specific date.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg">
                        {getInitials(subscription.name)}
                      </div>
                      <div>
                        <h3 className="font-semibold">{subscription.name}</h3>
                        <p className="text-sm text-muted-foreground">${subscription.cost.toFixed(2)}/month</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Account:</p>
                      <p className="text-sm text-muted-foreground">{subscription.account}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Started on:</p>
                      <p className="text-sm text-muted-foreground">
                        {format(new Date(subscription.startDate), 'PP')}
                      </p>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor={`stop-date-${subscription.id}`}>Stop Date</Label>
                      <div className="flex space-x-2">
                        <Input
                          id={`stop-date-${subscription.id}`}
                          type="date"
                          value={formatDate(stopDates[subscription.id])}
                          onChange={(e) => handleDateSelect(e.target.value ? new Date(e.target.value) : null, subscription.id)}
                          className="w-full"
                        />
                      </div>
                    </div>
                  </div>
                  <DialogFooter className="sm:justify-start">
                    <Button
                      variant="destructive"
                      onClick={() => handleStopSubscription(subscription.id)}
                    >
                      Stop Immediately
                    </Button>
                    <Button
                      variant="secondary"
                      onClick={() => handleStopSubscription(subscription.id, stopDates[subscription.id] || undefined)}
                      disabled={!stopDates[subscription.id]}
                    >
                      Stop on Selected Date
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}