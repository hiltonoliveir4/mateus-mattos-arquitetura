interface experiencesDataProps {
  company: string;
  image: string;
  description: string;
  time: string;
}
export default function experiencesData(): experiencesDataProps[] {
  return [
    {
      company: "Lorem",
      image: "/images/card.png",
      description: `
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
        enim ad minim veniam, quis nostrud exercitation ullamco laboris 
        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
        in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
        nulla pariatur.
      `,
      time: "7 meses",
    },
    {
      company: "Lorem",
      image: "/images/card.png",
      description: `
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
          enim ad minim veniam, quis nostrud exercitation ullamco laboris 
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
          in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
          nulla pariatur.
        `,
      time: "7 meses",
    },
    {
      company: "Lorem",
      image: "/images/card.png",
      description: `
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
          enim ad minim veniam, quis nostrud exercitation ullamco laboris 
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
          in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
          nulla pariatur.
        `,
      time: "7 meses",
    },
  ];
}
