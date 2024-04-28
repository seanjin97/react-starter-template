import { getShopItemById } from '@/api';
import { Badge } from '@/components/ui/badge';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/api-data/$itemId')({
    component: ShopItemId,
    loader: ({ params: { itemId } }) => getShopItemById(itemId as string),
});

function ShopItemId() {
    const item = Route.useLoaderData();
    return (
        <>
            <div>
                <h1 className="text-xl font-bold">{item.title}</h1>

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
                <div className="flex justify-center">
                    <img src={item.image} />
                </div>

                <div>
                    <p>{item.description}</p>
                </div>
            </div>
        </>
    );
}
