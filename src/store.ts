import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type UserStore = {
  user: any;
  setUser: (data: any) => { success?: boolean };
  clearCache: () => void;
}

const taxStore = create<UserStore>()(
  persist((set, get) => ({
    user: get()?.user || undefined,
    setUser: async (data: any) => {
      if (data) {
        set({ user: data });
        return { success: true };
      } else {
        console.error("Failed to set user on store:");
        return { success: false }
      }
    },
    clearCache: async () => set({ user: {} })
  }), {
    name: "CJ's-store",
    storage: createJSONStorage(() => localStorage),
  })
);
export default taxStore;