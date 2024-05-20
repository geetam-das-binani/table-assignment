import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react";
export type Engineers = {
   work_year:number;
   total_jobs:number;
   average_salary:number
}

  export const columns: ColumnDef<Engineers>[] = [

    {
      accessorKey: "work_year",
      header: "Year",
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue("work_year")}</div>
      ),
    },
    {
      accessorKey: "total_jobs",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
           Total Jobs
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
      cell: ({ row }) => <div className="lowercase">{row.getValue("total_jobs")}</div>,
    },
    {
      accessorKey: "average_salary",
      header: () => <div className="text-right">Salary(USD)</div>,
      cell: ({ row }) => {
        const amount = parseFloat(row.getValue("average_salary"))
  
        // Format the amount as a dollar amount
        const formatted = new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(amount)
  
        return <div className="text-right font-medium">{formatted}</div>
      },
    },
   
  ]
  
  