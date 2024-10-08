"use client"
import Link from "next/link"
import {
  Activity,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  CreditCard,
  DollarSign,
  Users,
} from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useEffect, useState } from "react"
import { fetchAccountsData } from "../services/accountsService"
import { fetchTransactionData } from "../services/transactionService"
import { Skeleton } from "@nextui-org/react"
import { fetchSubscriptionData } from "../services/subscriptionService"
import { HeaderNav } from "@/components/ui/header-nav"

export default function Dashboard() {

  enum transaction_type {
    withdrawal,
    deposit,
    transer
  }

  type User = {
    customer_id: number;
    email: string;
    password: string;
    firstname: string;
    lastname: string;
    street: string;
    plz: string;
    city: string;
    income: string;
  };

  type Account = {
    account_id: number;
    customer_id: number;
    account_type: string;
    balance: number;
  };
  type Subscription = {
    subscription_id: number;
    customer_id: number;
    service_name: string;
    monthly_fee: number;
    start_date: Date;
    end_date: Date;
    active: number;
  }
  type Transaction = {
    transaction_id: number;
    sender_account_id: number;
    receiver_account_id: number;
    amount: number;
    transaction_type: transaction_type;
    timestamp: Date;
    description: string;
    sender_first_name: string;
    sender_last_name: string;
    sender_email: string;
    receiver_first_name?: string;
    receiver_last_name?: string;
    receiver_email?: string;
  }


  const [accounts, setAccounts] = useState<Account[]>([]);
  const [subscription, setSubscription] = useState<Subscription[]>([]);

  const [incomeTransactions, setIncomeTransactions] = useState<Transaction[]>([]);
  const [expenseTransactions, setExpenseTransactions] = useState<Transaction[]>([]);

  const [loading, setLoading] = useState<boolean>(true);


  const itemsPerPage = 3;

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(expenseTransactions.length / itemsPerPage);

  const paginatedData = expenseTransactions.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );


  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const token = localStorage.getItem("token");
      if (token) {
        const decodedToken = atob(token.split('.')[1]);
        const parsedToken = JSON.parse(decodedToken);
        const id = parsedToken["customer_id"];

        if (id) {
          try {
            // Abrufen der Konten
            const accountsData = await fetchAccountsData(id);
            console.log(accountsData);

            // Abrufen der Transaktionen
            const transactionsData = await fetchTransactionData(id);

            // Abrufen aller Konto-IDs des Benutzers
            const userAccountIds = accountsData.map((account: { account_id: any }) => account.account_id);

            // Filtern der eingehenden Transaktionen
            const incoming = transactionsData.filter((tr: { receiver_account_id: any; transaction_type: string }) =>
              userAccountIds.includes(tr.receiver_account_id) &&
              (tr.transaction_type === "deposit" || tr.transaction_type === "transfer")
            );


            const outgoing = transactionsData.filter((tr: { sender_account_id: any; transaction_type: string }) =>
              userAccountIds.includes(tr.sender_account_id) &&
              (tr.transaction_type === "withdrawal" || tr.transaction_type === "transfer")
            );

            setIncomeTransactions(incoming);
            setExpenseTransactions(outgoing);
            setAccounts(accountsData);


            const subscriptionData = await fetchSubscriptionData(id);
            if (subscriptionData.length > 0) {
              const highestSubscription = subscriptionData.reduce((prev: { monthly_fee: number }, current: { monthly_fee: number }) =>
                (prev.monthly_fee > current.monthly_fee) ? prev : current
              );
              setSubscription([highestSubscription]);
            } else {
              setSubscription([]);
            }

          } catch (error) {
            console.error("Error fetching data:", error);
          }
        } else {
          console.error("Customer ID is not available.");
        }
      } else {
        console.error("Token is not available.");
      }
      setLoading(false);
    };

    getData();
  }, []);

  return (
    <div className="flex min-h-screen w-full flex-col">
      <HeaderNav page="dashboard"></HeaderNav>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
          <Card x-chunk="dashboard-01-chunk-0">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Balance
              </CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {loading ? (
                  <div>
                    <Skeleton className="h-4 w-[250px]" />
                  </div>
                ) : (
                  accounts.length > 0 ? (
                    accounts
                      .filter((account) => account.account_type === "Girokonto")
                      .map((account) => (
                        <div key={account.account_id}>
                          €{account.balance.toFixed(2)}
                        </div>
                      ))
                  ) : (
                    <div>No balance available</div>
                  )
                )}
              </div>

              <div className="text-xs text-muted-foreground">
                +20.1% from last month
              </div>
            </CardContent>
          </Card>
          <Card x-chunk="dashboard-01-chunk-1">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                <Link href="/subscriptions">
                  Balance
                </Link>
              </CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">

                {loading ? (
                  <div>
                    <Skeleton className="h-4 w-[250px]" />
                  </div>
                ) : (
                  subscription.length > 0 ? (
                    subscription.map((sub) => (
                      <div key={sub.subscription_id}>
                        €{sub.monthly_fee !== undefined ? sub.monthly_fee : "Loading..."}
                      </div>
                    ))
                  ) : (
                    <div>No subscriptions available</div>
                  )
                )}

              </div>

              {loading ? (
                // <div className="text-xs text-muted-foreground">Loading...</div>
                <div className="flex items-center space-x-4">
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-[250px]" />
                    <Skeleton className="h-4 w-[200px]" />
                  </div>
                </div>
              ) : (
                subscription.length > 0 ? (
                  subscription.map((sub) => (
                    <div className="text-xs text-muted-foreground" key={sub.subscription_id}>
                      Service: {sub.service_name}
                    </div>
                  ))
                ) : (
                  <div>No subscriptions available</div>
                )
              )}

            </CardContent>
          </Card>
          <Card x-chunk="dashboard-01-chunk-2">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Sparbuch</CardTitle>
              <CreditCard className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+12,234</div>
              <p className="text-xs text-muted-foreground">
                +19% from last month
              </p>
            </CardContent>
          </Card>
          <Card x-chunk="dashboard-01-chunk-3">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Quick Transfer</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+573</div>
              <p className="text-xs text-muted-foreground">
                +201 since last hour
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
          <Card
            className="xl:col-span-2" x-chunk="dashboard-01-chunk-4"
          >
            <CardHeader className="flex flex-row items-center">
              <div className="grid gap-2">
                <CardTitle>Transactions</CardTitle>
                <CardDescription>
                  Recent transactions you have made.
                </CardDescription>
              </div>
              <Button asChild size="sm" className="ml-auto gap-1">
                <Link href="#">
                  View All
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Customer</TableHead>
                    <TableHead className="hidden xl:table-column">Type</TableHead>
                    <TableHead className="hidden xl:table-column">Status</TableHead>
                    <TableHead className="hidden xl:table-column">Date</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {loading ? (
                    // Ensure that a consistent number of rows are rendered during loading
                    Array.from({ length: itemsPerPage }).map((_, index) => (
                      <TableRow key={index}>
                        <TableCell>
                          <Skeleton className="h-4 w-[150px]" />
                        </TableCell>
                        <TableCell className="hidden xl:table-column">
                          <Skeleton className="h-4 w-[100px]" />
                        </TableCell>
                        <TableCell className="hidden xl:table-column">
                          <Skeleton className="h-4 w-[80px]" />
                        </TableCell>
                        <TableCell className="hidden xl:table-column">
                          <Skeleton className="h-4 w-[120px]" />
                        </TableCell>
                        <TableCell className="text-right">
                          <Skeleton className="h-4 w-[50px]" />
                        </TableCell>
                      </TableRow>
                    ))
                  ) : paginatedData.length > 0 ? (
                    paginatedData.map((tr) => (
                      <TableRow key={tr.transaction_id}>
                        <TableCell>
                          <div className="font-medium">
                            {tr.receiver_first_name} {tr.receiver_last_name}
                          </div>
                          <div className="hidden text-sm text-muted-foreground md:inline">
                            {tr.receiver_email}
                          </div>
                        </TableCell>
                        <TableCell className="hidden xl:table-column">
                          {tr.transaction_type === transaction_type.withdrawal
                            ? "Withdrawal"
                            : "Transfer"}
                        </TableCell>
                        <TableCell className="hidden xl:table-column">
                          <Badge className="text-xs" variant="outline">
                            Approved
                          </Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
                          {new Date(tr.timestamp).toDateString()}
                        </TableCell>
                        <TableCell className="text-right">-€{tr.amount}</TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={5} className="text-center">
                        No transactions available
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>

              <div className="flex justify-between items-center mt-4">
                <Button disabled={currentPage === 1}
                  onClick={() => setCurrentPage(currentPage - 1)} variant="outline" size="icon">
                  <ChevronLeft className="h-4 w-4" />
                </Button>

                <span>
                  Page {currentPage} of {totalPages}
                </span>


                <Button disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage(currentPage + 1)} variant="outline" size="icon">
                  <ChevronRight className="h-4 w-4" />
                </Button>

              </div>
            </CardContent>
          </Card>

          <Card x-chunk="dashboard-01-chunk-5">
            <CardHeader>
              <CardTitle>Recent Sales</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-8">
              {loading ? (
                <div>
                  <Skeleton className="h-4 w-[200px]" />
                </div>
              ) : (
                incomeTransactions.length > 0 ? (
                  incomeTransactions.map((tr) => (
                    <div key={tr.transaction_id} className="flex items-center gap-4">
                      <Avatar className="hidden h-9 w-9 sm:flex">
                        
                        <AvatarFallback>{tr.sender_first_name[0]}{tr.sender_last_name[0]}</AvatarFallback>
                      </Avatar>
                      <div className="grid gap-1">
                        <p className="text-sm font-medium leading-none">
                          {tr.sender_first_name} {tr.sender_last_name}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {tr.sender_email}
                        </p>
                      </div>
                      <div className="ml-auto font-medium">+${tr.amount}€</div>
                    </div>
                  ))
                ) : (
                  <div>Keine Income verfügbar</div>
                )
              )}
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
