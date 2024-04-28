import { createLazyFileRoute } from '@tanstack/react-router';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { createShopItem } from '@/api';
import { useState } from 'react';
import { LoadingSpinner } from '@/components/ui/loading-spinner';

export const Route = createLazyFileRoute('/form')({
    component: FormDemo,
});

const formSchema = z.object({
    title: z.string().min(2, {
        message: 'Username must be at least 2 characters.',
    }),
    price: z.coerce.number(),
    description: z.string().min(2, {
        message: 'Description must be at least 2 characters.',
    }),
    image: z.string().url(),
    category: z.string().min(2, {
        message: 'Category must be at least 2 characters.',
    }),
});

function FormDemo() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: 'Adidas Sambas',
            price: 120.0,
            description: 'A pair of adidas sambas',
            image: 'https://www.google.com',
            category: 'shoe',
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsLoading(true);
        console.log(values);
        const res = await createShopItem(values);
        console.log(res);
        setIsLoading(false);
    }

    const [isLoading, setIsLoading] = useState(false);

    return (
        <>
            <div>Hello /form!</div>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Title</FormLabel>
                                <FormControl>
                                    <Input placeholder="Title" {...field} />
                                </FormControl>
                                <FormDescription>This is your product title</FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Description</FormLabel>
                                <FormControl>
                                    <Input placeholder="Description" {...field} />
                                </FormControl>
                                <FormDescription>This is your product description</FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="price"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Price</FormLabel>
                                <FormControl>
                                    <Input {...field} type="number" />
                                </FormControl>
                                <FormDescription>This is your product price</FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="image"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Image</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormDescription>This is your product image</FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="category"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Category</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormDescription>This is your product category</FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit" disabled={isLoading}>
                        <div className="flex justify-center">{isLoading ? <LoadingSpinner className="text-center animate-spin" /> : <>Submit</>}</div>
                    </Button>
                </form>
            </Form>
        </>
    );
}
