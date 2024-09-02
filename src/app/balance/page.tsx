"use client"

import { BalanceChart } from "@/components/ui/balance-chart"
import { HeaderNav } from "@/components/ui/header-nav"
import { PieChartDonutText } from "@/components/ui/PieChartDonutText"

export default function Balance() {


  return (
    <div className="flex min-h-screen w-full flex-col">
      <HeaderNav page="balance"></HeaderNav>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
        </div>
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
          {/* <BankCard></BankCard> */}
          <PieChartDonutText></PieChartDonutText>



          {/* <TableRow key={tr.transaction_id}>
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
                        </TableRow> */}

          {/* Hier andere component */}


        </div>

        <div className="">
          <BalanceChart></BalanceChart>
        </div>
      </main >
    </div >
  )
}
