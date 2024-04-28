import { Button } from '@/components/ui/button';
import { useBearStore } from '@/store/bear-store';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/global-state/path2')({
    component: GlobalStatePath2,
});

function GlobalStatePath2() {
    const increaseBears = useBearStore((state) => state.increaseBears);

    return (
        <>
            <div>Hello /global-state/path2!</div>
            <Button onClick={increaseBears}>Increase number of bears</Button>
        </>
    );
}
