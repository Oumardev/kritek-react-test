import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle
} from "@/components/ui/dialog"
import { ArticleForm } from "./article-form"

interface Props {
    setEditId: React.Dispatch<React.SetStateAction<string | undefined>>
    editId: string | undefined
    refetch: () => any
    modalOpen: boolean
    setModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}
export default function ArticleDialog({ refetch, modalOpen, setModalOpen, editId, setEditId }: Props) {

    const dialogClose = () => {
        document.getElementById('closeDialog')?.click();
        setModalOpen(false)
        setEditId(undefined)
    };

    const onOpenChange = (value: boolean) => {
        setModalOpen(value)
        setEditId(undefined)
    }

    return (
        <Dialog onOpenChange={(value) => onOpenChange(value)} defaultOpen={modalOpen}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{editId ? 'Edit' : 'Save'} Article</DialogTitle>
                    <DialogDescription>
                        Saisissez les informations relative a votre charge
                    </DialogDescription>
                </DialogHeader>
                <ArticleForm editId={editId} refetch={refetch} dialogClose={dialogClose} />
            </DialogContent>
        </Dialog>
    )
}
