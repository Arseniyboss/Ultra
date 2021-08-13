import Image from "next/image";
import { Link } from "react-scroll";
import { Container, Button } from "../../globalStyles";
import { useThemeContext } from "../../contexts/ThemeContext";
import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrapper,
} from "./Styles";

const InfoSection = ({
  id,
  imgStart,
  topLine,
  headline,
  description,
  buttonLabel,
  redirect,
  primary,
  start,
  img,
  alt,
}) => {
  const { theme } = useThemeContext();
  return (
    <>
      <InfoSec theme={theme} id={id}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                <TopLine theme={theme}>{topLine}</TopLine>
                <Heading theme={theme}>{headline}</Heading>
                <Subtitle theme={theme}>{description}</Subtitle>
                <Link to={redirect}>
                  <Button big fontBig primary={primary}>
                    {buttonLabel}
                  </Button>
                </Link>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start={start}>
                <Image src={img} alt={alt} width={500} height={500} />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
};

export default InfoSection;
