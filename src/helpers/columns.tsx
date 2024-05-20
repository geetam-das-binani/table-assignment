import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react";

export type Details = {
    job_title:string;
    appearedTimes:number;
}  

export const columns: ColumnDef<Details>[] = [

    {
      accessorKey: "job_title",
      header: "Job Title",
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue("job_title")}</div>
      ),
    },
    {
      accessorKey: "appearedTimes",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Appeared Times
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
      cell: ({ row }) => <div className="lowercase">{row.getValue("appearedTimes")}</div>,
    },
   
   
  ]
  