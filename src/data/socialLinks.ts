export interface SocialLink {
  name: string;
  url?: string;
  iconName: "github" | "linkedin" | "codechef" | "leetcode" | "email";
}

export const socialLinksData: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/SuyashBorse",
    iconName: "github",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/suyash-borse",
    iconName: "linkedin",
  },
  {
    name: "Email",
    url: "mailto:suyash.a.borse@gmail.com",
    iconName: "email",
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
