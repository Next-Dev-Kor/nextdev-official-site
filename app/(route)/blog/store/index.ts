import { create } from "zustand";

type BlogTab = "activity" | "article";

interface BlogStore {
  activeTab: BlogTab;
  setActiveTab: (tab: BlogTab) => void;
}

export const useBlogStore = create<BlogStore>((set) => ({
  activeTab: "activity",
  setActiveTab: (tab) => set({ activeTab: tab }),
}));
