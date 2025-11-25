import { FACTS } from "src/constants/constants";
import { create } from "zustand";

type BugSliceT = {
  bugs: number | undefined;
  releaseBugs: (amountBugs: number) => void;
  catchBug: () => void;
  renewGame: () => void;
};

export const useBugs = create<BugSliceT>((set) => ({
  bugs: undefined,
  releaseBugs: (amountBugs: number) => set(() => ({ bugs: amountBugs })),
  catchBug: () =>
    set((state) => ({ bugs: state.bugs ? state.bugs - 1 : undefined })),
  renewGame: () => set(() => ({ bugs: undefined })),
}));

type DiceSliceT = {
  notWatchedFacts: string[];
  currentFact: undefined | string;
  diceResult: undefined | number;
  watchFact: (factInd: number, diceResult: number) => void;
  clearDiceResult: () => void;
};

export const useDice = create<DiceSliceT>((set) => ({
  notWatchedFacts: FACTS,
  currentFact: undefined,
  diceResult: undefined,
  clearDiceResult: () => set({ diceResult: undefined }),
  watchFact: (factInd: number, diceResult: number) =>
    set((state) => ({
      diceResult: diceResult,
      currentFact:
        state.notWatchedFacts[factInd] ?? "Now you know EVERYTHING about me!",
      notWatchedFacts: state.notWatchedFacts.filter(
        (_, index) => index !== factInd
      ),
    })),
}));

type TooltipDataT = {
  img: string;
  subtitle: string;
  title: string;
};

type TooltipCommonT = {
  openTooltip: (tooltipData: TooltipDataT) => void;
  closeTooltip: () => void;
};

type TooltipT = TooltipCommonT &
  (
    | {
        needShowTooltip: true;
        tooltipData: TooltipDataT;
      }
    | {
        needShowTooltip: false;
        tooltipData: undefined;
      }
  );

export const useTooltip = create<TooltipT>((set) => ({
  needShowTooltip: false,
  tooltipData: undefined,
  openTooltip: (tooltipData: TooltipDataT) =>
    set({ needShowTooltip: true, tooltipData: tooltipData }),
  closeTooltip: () => set({ needShowTooltip: false, tooltipData: undefined }),
}));
