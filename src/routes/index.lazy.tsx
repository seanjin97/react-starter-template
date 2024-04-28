import { Button } from '@/components/ui/button';
import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/')({
    component: Index,
});

function Index() {
    return (
        <div>
            <h3>Welcome Home!</h3>
            <Button variant="destructive" onClick={() => alert('hi')}>
                heloo there
            </Button>
        </div>
    );
}
