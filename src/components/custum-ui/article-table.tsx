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
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    TabsContent
} from "@/components/ui/tabs"
import ArticleTableRow from "./article-table-row"
import { ArticleModel } from "@/models"

interface Props {
    data: ArticleModel[]
    onEdit: (id?: string | undefined) => void
    refetch: () => any
}
export default function ArticleTable({ data, onEdit, refetch }: Props) {

    return (
        <TabsContent value="all">
            <Card x-chunk="dashboard-06-chunk-0">
                <CardHeader>
                    <CardTitle>Article</CardTitle>
                    <CardDescription>
                        Manage your articles.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>

                                <TableHead>Name</TableHead>
                                <TableHead className="hidden md:table-cell">
                                    Price
                                </TableHead>
                                <TableHead className="hidden md:table-cell">
                                    Description
                                </TableHead>
                                <TableHead>
                                    <span className="sr-only">Actions</span>
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {data.map((item, key) => <ArticleTableRow key={key} item={item} onEdit={onEdit} refetch={refetch} />)}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </TabsContent>
    )
}
