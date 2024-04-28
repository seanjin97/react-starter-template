import { getShopItems } from '@/api';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { createFileRoute, useNavigate } from '@tanstack/react-router';

export const Route = createFileRoute('/api-data/')({
    component: ApiData,
    loader: getShopItems,
});

function ApiData() {
    const items = Route.useLoaderData();

    const navigate = useNavigate({ from: Route.path });

    return (
        <>
            <h1 className="font-bold text-2xl mb-4 underline">Shop Items</h1>
            <div className="md:grid md:grid-cols-3 lg:grid-cols-5 gap-4">
                {items.map((item) => {
                    return (
                        <Card
                            key={item.id}
                            className="mb-4 cursor-pointer hover:bg-gray-100 max-h-96 overflow-y-auto"
                            onClick={() =>
                                navigate({
                                    to: `/api-data/${item.id}`,
                                })
                            }
                        >
                            <CardHeader>
                                <CardTitle className="truncate">{item.title}</CardTitle>
                                <CardDescription>
                                    <Badge variant="secondary">
                                        <p className="text-xs truncate md:text-md">{item.category}</p>
                                    </Badge>
                                    <div className="flex justify-between mt-2">
                                        <Badge>
                                            <p>${item.price}</p>
                                        </Badge>
                                        <Badge variant="outline">
                                            <p>
                                                {item.rating?.count} Sold / {item.rating?.rate} ⭐
                                            </p>
                                        </Badge>
                                    </div>
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="flex justify-center mb-4">
                                    <img width={'150px'} height="auto" src={item.image} />
                                </div>
                                <p className="text-sm text-slate-800">{item.description}</p>
                            </CardContent>
                        </Card>
                    );
                })}
            </div>
        </>
    );
}
