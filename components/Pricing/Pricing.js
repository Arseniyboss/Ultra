import { useThemeContext } from "../../contexts/ThemeContext";
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
} from "./Styles";
import cards from "../../data/cards";
import Card from "./Card";

const Pricing = () => {
  const { theme } = useThemeContext();
  return (
    <PricingSection id="services">
      <PricingWrapper>
        <PricingHeading>Our Services</PricingHeading>
        <PricingContainer>
          {cards.map((card) => (
            <Card key={card.id} theme={theme} {...card} />
          ))}
        </PricingContainer>
      </PricingWrapper>
    </PricingSection>
  );
};
export default Pricing;
