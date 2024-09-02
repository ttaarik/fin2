"use client"

import { BalanceChart } from "@/components/ui/balance-chart"
import BankCard from "@/components/ui/bankcard"
import { HeaderNav } from "@/components/ui/header-nav"

export default function Balance() {


    return (
        <div className="flex min-h-screen w-full flex-col">
            <HeaderNav page="balance"></HeaderNav>
            <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
                {/* <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">

          <Card x-chunk="dashboard-01-chunk-0">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Balance
              </CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent >


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
                Subscriptions
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
        </div> */}
                {/* <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
          <Card className="xl:col-span-2" x-chunk="dashboard-01-chunk-4"
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
                    <TableHead>Recipient</TableHead>
                    <TableHead className="hidden xl:table-column">
                      Type
                    </TableHead>
                    <TableHead className="hidden xl:table-column">
                      Status
                    </TableHead>
                    <TableHead className="hidden xl:table-column">
                      Date
                    </TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {loading ? (
                    <Skeleton className="h-4 w-[200px]" />
                  ) : (
                    paginatedData.length > 0 ? (
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
                            {tr.transaction_type === transaction_type.withdrawal ? 'Withdrawal' : 'Transfer'}
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
                      <div>No transactions available</div>
                    )
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
              <CardTitle>Bank income</CardTitle>
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
                        <AvatarImage src="/avatars/01.png" alt="Avatar" />
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
        </div> */}
                <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
                    <BankCard></BankCard>
                </div>

                <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
                    <BalanceChart></BalanceChart>
                </div>
            </main >
        </div >
    )
}
