import { create } from 'zustand'

export const FormStore = create((set) => ({
    isVisible: false,
    toggleVisibility: () => set((state: any) => ({ isVisible: !state.isVisible })),
}))
