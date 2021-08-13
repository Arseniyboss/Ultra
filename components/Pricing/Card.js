import {
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardPrice,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature,
} from "./Styles";
import { Button } from "../../globalStyles";

const Card = ({ id, icon, plan, price, features, theme }) => {
  return (
    <PricingCard
      key={id}
      activeClass="active"
      to="signup"
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
      theme={theme}
    >
      <PricingCardInfo theme={theme}>
        <PricingCardIcon>{icon}</PricingCardIcon>
        <PricingCardPlan>{plan}</PricingCardPlan>
        <PricingCardPrice>{price}</PricingCardPrice>
        <PricingCardLength>per month</PricingCardLength>
        <PricingCardFeatures>
          {features.map((feature) => (
            <PricingCardFeature key={feature.id}>
              {feature.name}
            </PricingCardFeature>
          ))}
        </PricingCardFeatures>
        <Button primary>Choose Plan</Button>
      </PricingCardInfo>
    </PricingCard>
  );
};

export default Card;
