import { create } from 'zustand'

type BugSliceT = {
  bugs: number | undefined;
  releaseBugs: (amountBugs: number) => void,
  catchBug: () => void,
  renewGame: () => void,
}

export const useBugs = create<BugSliceT>((set) => ({
  bugs: undefined,
  releaseBugs: (amountBugs: number) => set(() => ({ bugs: amountBugs })),
  catchBug: () => set((state) => ({ bugs: state.bugs ? state.bugs - 1 : undefined })),
  renewGame: () => set(() => ({ bugs: undefined }))
}))