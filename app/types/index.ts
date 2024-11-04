import type { LucideIcon } from "lucide-react";

export type MainNavItem = NavItem;

// Use LucideIcon as the type for icons
export type Icon = LucideIcon;

export interface MarketingConfig {
  mainNav: MainNavItem[];
}

export interface NavItem {
  title: string;
  href: string;
  disabled?: boolean;
  icon?: Icon; // Use the Icon type here
}

export type SidebarNavItem = {
  title: string;
  disabled?: boolean;
  external?: boolean;
  icon?: Icon; // Use the Icon type here
} & (
  | {
      href: string;
      items?: never;
    }
  | {
      href?: string;
      items: NavLink[];
    }
);

export interface NavLink {
  title: string;
  href: string;
  icon: any;
  disabled?: boolean;
}

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  mailSupport: string;
  links: {
    twitter: string;
    github: string;
  };
}

export interface MediaData {
  data: string;
  mimeType: string;
}
export interface NavLink {
  title: string;
  href: string;
  icon: any;
  disabled?: boolean;
}

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  mailSupport: string;
  links: {
    twitter: string;
    github: string;
  };
}

export interface ImageInfo {
  id: string; // Adjust the type as necessary
  description: string; // Adjust the type as necessary
  previewUrl: string; // Adjust the type as necessary
}

export interface NavItem {
  title: string;
  href: string;
  disabled?: boolean;
}

export interface DocsConfig {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
}

export interface MarketingConfig {
  mainNav: MainNavItem[];
}

export interface DashboardConfig {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
}

export interface SubscriptionPlan {
  title: string;
  description: string;
  benefits: string[];
  limitations: string[];
  prices: {
    monthly: number;
    yearly: number;
  };
  stripeIds: {
    monthly: string | null;
    yearly: string | null;
  };
}

// export type UserSubscriptionPlan = SubscriptionPlan &
//   Pick<User, "stripeCustomerId" | "stripeSubscriptionId" | "stripePriceId"> & {
//     stripeCurrentPeriodEnd: number;
//     isPaid: boolean;
//     interval: "month" | "year" | null;
//     isCanceled?: boolean;
//   };

export interface InfoList {
  icon: any;
  title: string;
  description: string;
}

export interface InfoLdg {
  title: string;
  image: string;
  description: string;
  list: InfoList[];
}

export interface MediaData {
  data: string;
  mimeType: string;
}

export interface GeneralSettings {
  temperature: number;
  maxLength: number;
  topP: number;
  topK: number;
  FrequencyPenalty?: number;
  PresencePenalty?: number;
}

export interface SafetySettings {
  harassment: number;
  hateSpeech: number;
  sexuallyExplicit: number;
  dangerousContent: number;
}

export interface GeneratedImage {
  id: string;
  imageUrl: string;
  prompt: string;
  isFavorite: boolean;
  style?: string;
  createdAt: Date;
  steps: number | null;
  seed?: number | null;
  model?: string;
  collection?: {
    id: string;
    name: string;
  };
}

export interface Collection {
  id: string;
  name: string;
  description?: string;
  createdAt?: string;
  updatedAt?: string;
  userId?: string;
  images?: {
    id?: string;
    createdAt?: string;
    collectionId?: string;
    imageUrl?: string;
    userId?: string;
    prompt?: string;
    style?: string;
  }[];
}
