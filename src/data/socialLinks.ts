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
    url: "https://www.linkedin.com/in/suyashborse/",
    iconName: "linkedin",
  },
  {
    name: "CodeChef",
    url: "https://www.codechef.com/users/rcpit251109101",
    iconName: "codechef",
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com/u/Suyashborse/",
    iconName: "leetcode",
  },
  {
    name: "Email",
    url: "mailto:suyash.a.borse@gmail.com",
    iconName: "email",
  },
];
