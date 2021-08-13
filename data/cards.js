import { GoDatabase } from "react-icons/go";
import { RiMoneyDollarCircleFill, RiCopperDiamondFill } from "react-icons/ri";

const cards = [
  {
    icon: <GoDatabase />,
    plan: "Starter Pack",
    price: "$99.99",
    features: [
      { name: "100 New Users", id: 1 },
      { name: "$10,000 Budget", id: 2 },
      { name: "Retargeting analytics", id: 3 },
    ],
    id: 1,
  },
  {
    icon: <RiMoneyDollarCircleFill />,
    plan: "Gold Rush",
    price: "$299.99",
    features: [
      { name: "1000 New Users", id: 1 },
      { name: "$50,000 Budget", id: 2 },
      { name: "Lead Gen Analytics", id: 3 },
    ],
    id: 2,
  },
  {
    icon: <RiCopperDiamondFill />,
    plan: "Diamond Kings",
    price: "$999.99",
    features: [
      { name: "Unlimited Users", id: 1 },
      { name: "Unlimited Budget", id: 2 },
      { name: "24/7 Support", id: 3 },
    ],
    id: 3,
  },
];

export default cards;
