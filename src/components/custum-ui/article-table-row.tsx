import {
  MoreHorizontal,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  TableCell,
  TableRow,
} from "@/components/ui/table"
import { ArticleModel } from "@/models"
import { ArticleDeleteDialog } from "./article-delete-dialog"

interface Props {
  item: ArticleModel
  onEdit: (id?: string | undefined) => void
  refetch: () => any
}
export default function ArticleTableRow({ item, onEdit, refetch }: Props) {
  return (
    <TableRow>
      <TableCell className="font-medium">
        {item.title}
      </TableCell>
      <TableCell className="hidden md:table-cell">
        ${item.amount}
      </TableCell>
      <TableCell className="hidden md:table-cell">
        {item.desc}
      </TableCell>
      <TableCell>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              aria-haspopup="true"
              size="icon"
              variant="ghost"
            >
              <MoreHorizontal className="h-4 w-4" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem onClick={() => onEdit(item.id)}>Edit</DropdownMenuItem>
            <ArticleDeleteDialog refetch={refetch} id={item.id} />
          </DropdownMenuContent>
        </DropdownMenu>
      </TableCell>
    </TableRow>
  )
}
