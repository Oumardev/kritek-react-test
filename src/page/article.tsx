import {
    PlusCircle
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    Tabs
} from "@/components/ui/tabs"
import { ArticleTable, ArticleDialog } from "@/components/custum-ui"
import { useGetArticleQuery } from "@/services/api/ArticleApi/ArticleApi"
import { MainWrapper } from "@/components/layout"
import React from "react"

export default function Article() {

    const [editId, setEditId] = React.useState<string>()
    const [modalOpen, setModalOpen] = React.useState<boolean>(false)

    const { data, isSuccess, refetch } = useGetArticleQuery()

    const onEdit = (id?: string | undefined) => {
        setEditId(id)
        setModalOpen(true)
    }

    return (
        <MainWrapper>
            <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
                <Tabs defaultValue="all">
                    <div className="flex items-center">
                        <div className="ml-auto flex items-center gap-2">
                            <Button onClick={() => setModalOpen(true)} size="sm" className="h-8 gap-1">
                                <PlusCircle className="h-3.5 w-3.5" />
                                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                                    Add article
                                </span>
                            </Button>
                        </div>
                    </div>
                    {
                        modalOpen &&
                        <ArticleDialog
                            setEditId={setEditId}
                            editId={editId}
                            modalOpen={modalOpen}
                            setModalOpen={setModalOpen}
                            refetch={refetch}
                        />
                    }
                    {isSuccess && <ArticleTable data={data} refetch={refetch} onEdit={onEdit} />}
                </Tabs>
            </main>
        </MainWrapper>
    )
}
