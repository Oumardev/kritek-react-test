import { zodResolver } from "@hookform/resolvers/zod"
import { useToast } from "@/components/ui/use-toast"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useAddArticleMutation, useGetArticleByIdQuery, usePatchArticleMutation } from "@/services/api/ArticleApi/ArticleApi"
import { ArticleModel } from "@/models"

const formSchema = z.object({
    title: z.string().min(2, {
        message: "title must be at least 2 characters.",
    }),
    desc: z.string().min(2, {
        message: "desc must be at least 2 characters.",
    }),
    amount: z.string({})
})

interface Props {
    editId: string | undefined
    refetch: () => any
    dialogClose: () => void
}
export function ArticleForm({ refetch, dialogClose, editId }: Props) {

    const { toast } = useToast()

    const [addArticle] = useAddArticleMutation()
    const [patchArticle] = usePatchArticleMutation()

    const { data: editData } = useGetArticleByIdQuery({ id: editId ?? '' })

    function onSubmit(values: z.infer<typeof formSchema>) {
        if (editId) {
            patchArticle({ data: values, id: editId }).unwrap()
                .then(() => {
                    refetch()
                    toast({ description: "Article patched" })
                    dialogClose()
                }).catch(() => {
                    toast({ variant: "destructive", title: "Uh oh! Someting appended.", description: "Impossible contact the support " })
                })
        } else {
            addArticle(values).unwrap()
                .then(() => {
                    refetch()
                    toast({ description: "Article added" })
                    dialogClose()
                }).catch(() => {
                    toast({ variant: "destructive", title: "Uh oh! Someting appended.", description: "Impossible contact the support " })
                })
        }
    }

    return (
        editData ? <Edit editData={editData} onSubmit={onSubmit} /> : <Save onSubmit={onSubmit} />
    )
}

interface PropsEdit {
    editData: ArticleModel
    onSubmit(values: z.infer<typeof formSchema>): void
}
const Edit = ({ editData, onSubmit }: PropsEdit) => {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: editData ? editData.title : '',
            desc: editData ? editData.desc : '',
            amount: editData ? editData.amount : ''
        }
    })

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Title</FormLabel>
                            <FormControl>
                                <Input placeholder="title" {...field} />
                            </FormControl>
                            <FormDescription>
                                Product title.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="desc"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>desc</FormLabel>
                            <FormControl>
                                <Input placeholder="desc" {...field} />
                            </FormControl>
                            <FormDescription>
                                Product description.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="amount"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Amount</FormLabel>
                            <FormControl>
                                <Input placeholder="0" {...field} />
                            </FormControl>
                            <FormDescription>
                                Product amount.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    )
}


interface PropsSave {
    onSubmit(values: z.infer<typeof formSchema>): void
}
const Save = ({ onSubmit }: PropsSave) => {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: '',
            desc: '',
            amount: ''
        }
    })

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Title</FormLabel>
                            <FormControl>
                                <Input placeholder="title" {...field} />
                            </FormControl>
                            <FormDescription>
                                Product title.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="desc"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>desc</FormLabel>
                            <FormControl>
                                <Input placeholder="desc" {...field} />
                            </FormControl>
                            <FormDescription>
                                Product description.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="amount"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Amount</FormLabel>
                            <FormControl>
                                <Input placeholder="0" {...field} />
                            </FormControl>
                            <FormDescription>
                                Product amount.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    )
}
