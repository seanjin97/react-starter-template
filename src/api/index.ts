interface ShopItem {
    id: number;
    title: string;
    price: number;
    category: string;
    description: string;
    image: string;
    rating?: {
        rate: number;
        count: number;
    };
}

interface CreateShopItemDTO {
    title: string;
    price: number;
    description: string;
    image: string;
    category: string;
}

const FAKE_STORE_API_URL = 'https://fakestoreapi.com/products';

export async function getShopItems(): Promise<ShopItem[]> {
    const response = await fetch(FAKE_STORE_API_URL);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json() as Promise<ShopItem[]>;
}

export async function getShopItemById(id: string): Promise<ShopItem> {
    const response = await fetch(`${FAKE_STORE_API_URL}/${id}`);
    if (!response.ok) {
        throw new Error('Failed to get shop item');
    }
    return response.json() as Promise<ShopItem>;
}

export async function createShopItem(newShopItem: CreateShopItemDTO): Promise<ShopItem> {
    const response = await fetch(FAKE_STORE_API_URL, {
        method: 'POST',
        body: JSON.stringify(newShopItem),
    });

    if (!response.ok) {
        throw new Error('Failed to create new shop item');
    }

    return response.json() as Promise<ShopItem>;
}
