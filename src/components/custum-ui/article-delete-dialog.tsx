import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { useToast } from "@/components/ui/use-toast"
import { Button } from "@/components/ui/button"
import { useDeleteArticleMutation } from "@/services/api/ArticleApi/ArticleApi"

interface Props {
    id: string | undefined
    refetch: () => any
}
export function ArticleDeleteDialog({ id, refetch }: Props) {

    const { toast } = useToast()
    const [deleteArticle] = useDeleteArticleMutation()

    const onDelete = () => {
        deleteArticle({ id : id ?? ''}).unwrap()
        .then(() => {
            refetch()
            toast({ description: "Article deleted." })
        }).catch(() => {
            toast({ variant: "destructive", title: "Uh oh! Error.", description: "Impossible" })
        })
    }

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button className="text-red-700" variant="ghost">Delete</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Can you really want delete this item ?</AlertDialogTitle>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={()=> onDelete()}>Confirm</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}