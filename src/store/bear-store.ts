import { create } from 'zustand';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';
import type {} from '@redux-devtools/extension'; // required for devtools typing

interface BearState {
    numBears: number;
    increaseBears: (by: number) => void;
}

export const useBearStore = create<BearState>()(
    devtools(
        persist(
            (set) => ({
                numBears: 0,
                increaseBears: () => set((state) => ({ numBears: state.numBears + 1 })),
            }),
            {
                name: 'bear-storage',
                storage: createJSONStorage(() => sessionStorage),
            }
        )
    )
);
