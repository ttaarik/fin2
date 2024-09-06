"use client"
import { Label } from "@/components/ui/label"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Pagination, PaginationContent, PaginationItem, PaginationPrevious, PaginationLink, PaginationNext } from "@/components/ui/pagination"
import { ResponsiveBar } from "@nivo/bar"
import { ResponsiveLine } from "@nivo/line"
import { HeaderNav } from "@/components/ui/header-nav"

export default function Transfer() {
  return (
    <div>
      <HeaderNav page="transfer"></HeaderNav>
      <div className="grid md:grid-cols-2 gap-6 lg:gap-12 items-start max-w-6xl px-4 mx-auto py-6">

        <div className="max-w-2xl space-y-8">
          <div className="space-y-2">
            <h1 className="text-2xl font-bold">Payment Transfer</h1>
            <p className="text-muted-foreground">
              Please provide any specific details or notes related to the payment transfer
            </p>
          </div>
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-xl font-semibold">Transfer details</h2>
              <p className="text-muted-foreground">Enter the details of the recipient</p>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="source-bank">Select Source Bank</Label>
                <Select>
                  <SelectTrigger id="source-bank" aria-label="Select Account">
                    <SelectValue placeholder="Select Account" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="account1">Account 1</SelectItem>
                    <SelectItem value="account2">Account 2</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="transfer-note">Transfer Note (Optional)</Label>
                <Textarea
                  id="transfer-note"
                  placeholder="Please provide any additional information or instructions related to the transfer"
                  defaultValue="Dear John,\n\nI hope this message finds you well. I am transferring $100 to your account for fun. Please confirm once you receive it."
                  className="min-h-[100px]"
                />
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-xl font-semibold">Bank account details</h2>
              <p className="text-muted-foreground">Enter the bank account details of the recipient</p>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="recipient-email">Recipient's Email Address</Label>
                <Input id="recipient-email" placeholder="Recipient's Email Address" defaultValue="john@gmail.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="account-number">Recipient's Bank Account Number</Label>
                <Input id="account-number" placeholder="Enter the account number" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="amount">Amount</Label>
                <Input id="amount" placeholder="Amount" defaultValue="40000" />
              </div>
            </div>
          </div>
          <div className="content-center">
            <Button className="bg-primary text-primary-foreground">Transfer Funds</Button>
          </div>
        </div>
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-xl font-semibold">Transaction History</h2>
            <p className="text-muted-foreground">View your recent payment transfers</p>
          </div>
          <Card>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Recipient</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>2023-04-15</TableCell>
                    <TableCell>$500.00</TableCell>
                    <TableCell>John Doe</TableCell>
                    <TableCell>
                      <Badge variant="secondary">Completed</Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>2023-04-10</TableCell>
                    <TableCell>$250.00</TableCell>
                    <TableCell>Jane Smith</TableCell>
                    <TableCell>
                      <Badge variant="outline">Pending</Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>2023-04-05</TableCell>
                    <TableCell>$1000.00</TableCell>
                    <TableCell>Bob Johnson</TableCell>
                    <TableCell>
                      <Badge variant="secondary">Completed</Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>2023-03-30</TableCell>
                    <TableCell>$75.00</TableCell>
                    <TableCell>Sarah Lee</TableCell>
                    <TableCell>
                      <Badge variant="outline">Pending</Badge>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter>
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" isActive>
                      2
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </CardFooter>
          </Card>
          <div className="space-y-2">
            <h2 className="text-xl font-semibold">Transaction Trends</h2>
            <p className="text-muted-foreground">Visualize your payment transfer history</p>
          </div>
          <Card>
            <CardContent>
              <BarChart className="aspect-[4/3]" />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>

  )
}

function BarChart(props: any) {
  return (
    <div {...props}>
      <ResponsiveBar
        data={[
          { name: "Jan", count: 111 },
          { name: "Feb", count: 157 },
          { name: "Mar", count: 129 },
          { name: "Apr", count: 150 },
          { name: "May", count: 119 },
          { name: "Jun", count: 72 },
        ]}
        keys={["count"]}
        indexBy="name"
        margin={{ top: 0, right: 0, bottom: 40, left: 40 }}
        padding={0.3}
        colors={["#2563eb"]}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 4,
          tickPadding: 16,
        }}
        gridYValues={4}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        tooltipLabel={({ id }) => `${id}`}
        enableLabel={false}
        role="application"
        ariaLabel="A bar chart showing data"
      />
    </div>
  )
}


function LineChart(props: any) {
  return (
    <div {...props}>
      <ResponsiveLine
        data={[
          {
            id: "Desktop",
            data: [
              { x: "Jan", y: 43 },
              { x: "Feb", y: 137 },
              { x: "Mar", y: 61 },
              { x: "Apr", y: 145 },
              { x: "May", y: 26 },
              { x: "Jun", y: 154 },
            ],
          },
          {
            id: "Mobile",
            data: [
              { x: "Jan", y: 60 },
              { x: "Feb", y: 48 },
              { x: "Mar", y: 177 },
              { x: "Apr", y: 78 },
              { x: "May", y: 96 },
              { x: "Jun", y: 204 },
            ],
          },
        ]}
        margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
        xScale={{
          type: "point",
        }}
        yScale={{
          type: "linear",
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 5,
          tickPadding: 16,
        }}
        colors={["#2563eb", "#e11d48"]}
        pointSize={6}
        useMesh={true}
        gridYValues={6}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        role="application"
      />
    </div>
  )
}
