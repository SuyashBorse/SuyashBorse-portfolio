export interface SocialLink {
  name: string;
  url?: string;
  iconName: "github" | "linkedin" | "codechef" | "leetcode";
}

export const socialLinksData: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/SuyashBorse",
    iconName: "github",
  },
  {
    name: "LinkedIn",
    url: undefined, // To be filled by Suyash
    iconName: "linkedin",
  },
  {
    name: "CodeChef",
    url: undefined, // To be filled by Suyash
    iconName: "codechef",
  },
  {
    name: "LeetCode",
    url: undefined, // To be filled by Suyash
    iconName: "leetcode",
  },
];
