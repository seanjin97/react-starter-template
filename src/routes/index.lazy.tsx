import { Button } from '@/components/ui/button';
import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/')({
    component: Index,
});

function Index() {
    return (
        <div>
            <h3>Welcome Home!</h3>
            <p>Your app is running on {import.meta.env.MODE}</p>
            <p>Your app is running on {import.meta.env.BASE_URL}</p>
            <Button variant="destructive" onClick={() => alert('hi')}>
                heloo there
            </Button>
            <div>Your public env var {import.meta.env.VITE_SOME_KEY}</div>
        </div>
    );
}
