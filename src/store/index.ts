import { create, StoreApi, UseBoundStore } from 'zustand'
interface MacBookState {
    color: string
    scale: number
}
interface MacBookActions {
    setColor: (color: string) => void
    setScale: (scale: number) => void
    reset: () => void
}
type MacBookType = MacBookState & MacBookActions
const useMacBookStore: UseBoundStore<StoreApi<MacBookType>> = create((set) => ({
    color: '#2e2c2e',
    setColor: (color: string) => set({ color }),

    scale: 0.08,
    setScale: (scale: number) => set({ scale }),

    reset: () => ({ color: '#2e2c2e', scale: 0.08 }),
}))

export default useMacBookStore
