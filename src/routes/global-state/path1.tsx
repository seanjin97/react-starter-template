import { useBearStore } from '@/store/bear-store';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/global-state/path1')({
    component: GlobalStatePath1,
});

function GlobalStatePath1() {
    const numBears = useBearStore((state) => state.numBears);

    return (
        <>
            <div>Hello /global-state/path1!</div>
            <div>We have {numBears} bears</div>
        </>
    );
}
