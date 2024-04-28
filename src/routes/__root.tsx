import { createRootRoute, Outlet, ScrollRestoration } from '@tanstack/react-router';
import { Suspense } from 'react';
import { TanStackRouterDevtools } from '../utils/tanstackrouter';
import { NavMenu } from '@/components/NavMenu';

export const Route = createRootRoute({
    component: () => (
        <>
            <NavMenu />

            <div className="p-4">
                <ScrollRestoration />
                <Outlet />
            </div>

            <Suspense>
                <TanStackRouterDevtools />
            </Suspense>
        </>
    ),
});
