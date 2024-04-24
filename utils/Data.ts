const filters = [
  {
    id: 1,
    name: "All",
  },
  {
    id: 2,
    name: "Design",
  },
  {
    id: 3,
    name: "Art",
  },
  {
    id: 4,
    name: "Membership",
  },
  {
    id: 5,
    name: "Gaming",
  },
  {
    id: 6,
    name: "Photography",
  },
  {
    id: 7,
    name: "Music",
  },
  {
    id: 8,
    name: "Tech",
  },
];

const nfts = [
  {
    id: 1,
    name: "Bored Ape",
    price: 0.3,
    creator: "Yuga Labs",
    creator_image: require("../assets/images/c2.jpeg"),
    creator_address: "0x1234567890",
    chain: "Ethereum",
    chain_logo: "../assets/images/eth.png",
    description:
      "Bored Ape Yacht Club is a collection of 10,000 unique Bored Ape NFTs— unique digital collectibles living on the Ethereum blockchain. Your Bored Ape doubles as your Yacht Club membership card, and grants access to members-only benefits, the first of which is access to THE BATHROOM, a collaborative graffiti board. Future areas and perks can be unlocked by the community through roadmap activation. The Bored Ape Yacht Club is a community of like-minded individuals who value creativity, collaboration, and a good old-fashioned laugh. The club is home to the Bored Ape series of NFTs, which have been carefully crafted and thoughtfully designed by our team of artists and developers.",
    nft_image: require("../assets/images/hape2.jpeg"),
    owner: "0x12zx34njo567hhd89we0qqw",
    attributes: [
      {
        trait_type: "Background",
        value: "Red",
      },
      {
        trait_type: "Clothes",
        value: "Blue",
      },
    ],
    overlay_color: "#FF0000",
  },
  {
    id: 2,
    name: "CryptoPunk",
    price: 10.88,
    creator: "Larva Labs",
    creator_image: require("../assets/images/c1.jpeg"),
    creator_address: "0xnawc2tj4jvneno031gx",
    chain: "Ethereum",
    chain_logo: "../assets/images/eth.png",
    description:
      "CryptoPunks is a collection of 10,000 unique characters as 24x24 pixel art images. Each character is unique and generated algorithmically. Ownership of a character is verified on the Ethereum blockchain. CryptoPunks are considered the first NFTs and have inspired many subsequent projects. The project was created by Matt Hall and John Watkinson of Larva Labs in 2017. The project was inspired by the Dada movement and the punk culture of the 1970s.",
    nft_image: require("../assets/images/hape.jpeg"),
    owner: "0xnbx2ij8jsnqns912oq",
    attributes: [
      {
        trait_type: "Type",
        value: "Alien",
      },
      {
        trait_type: "Clothes",
        value: "Black",
      },
    ],
    overlay_color: "#000000",
  },
  {
    id: 3,
    name: "Art Blocks",
    price: 0.5,
    creator: "Art Blocks",
    creator_image: require("../assets/images/c3.png"),
    creator_address: "0xpsc2mj5cseqrs714uq",
    chain: "Ethereum",
    chain_logo: "../assets/images/eth.png",
    description:
      "Art Blocks is a platform that allows artists to create generative art projects. Each project is a collection of unique pieces that are generated algorithmically. The platform was created by Snowfro in 2021. The platform has been used by many artists to create unique and innovative art projects. The platform has been used by many artists to create unique and innovative art projects. The platform has been used by many artists to create unique and innovative art projects. The platform has been used by many artists to create unique and innovative art projects. ",
    nft_image: require("../assets/images/ape1.jpeg"),
    owner: "0xqev7o0jhsa9a3dl",
    attributes: [
      {
        trait_type: "Type",
        value: "Art",
      },
      {
        trait_type: "Color",
        value: "Green",
      },
    ],
    overlay_color: "#00FF00",
  },
  {
    id: 4,
    name: "Penguins",
    price: 0.2,
    creator: "Pudgy Penguins",
    creator_image: require("../assets/images/c4.webp"),
    creator_address: "0xqwe2j5cseqrs714uq",
    chain: "Ethereum",
    chain_logo: "../assets/images/eth.png",
    description:
      "Pudgy Penguins is a collection of 8,888 unique Pudgy Penguin NFTs living on the Ethereum blockchain. Each Pudgy Penguin is unique and programmatically generated from over 170 possible traits, including body, face, eyes, mouth, headwear, clothing, and more. Pudgy Penguins are a community-driven project with a focus on utility, community, and long-term value. The project was created by the Pudgy Penguins team in 2021. The project was inspired by the success of other NFT projects and the desire to create a fun and engaging community-driven project. The project has been well-received by the NFT community and has gained a large following on social media.",
    nft_image: require("../assets/images/hape3.jpeg"),
    owner: "0xqev7o0jhsa9a3dl",
    attributes: [
      {
        trait_type: "Type",
        value: "Penguin",
      },
      {
        trait_type: "Color",
        value: "Blue",
      },
    ],
    overlay_color: "#0000FF",
  },
];

interface Attribute {
  trait_type: string;
  value: string;
}

interface TNFT {
  id: number;
  name: string;
  price: number;
  creator: string;
  creator_address: string;
  chain: string;
  chain_logo: string;
  description: string;
  nft_image: string; // Assuming nft1 is a string. Adjust the type as needed.
  owner: string;
  attributes: Attribute[];
  overlay_color: string;
}

export { filters, nfts, TNFT };
