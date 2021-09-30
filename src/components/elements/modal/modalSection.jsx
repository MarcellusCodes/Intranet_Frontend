import SecondaryTitle from "../typography/secondaryTitle";
import PrimaryText from "../typography/primaryText";
import CtaButton from "../btn/ctaButton";

const ModalSection = ({ title, text, cta, href }) => {
  return (
    <>
      <SecondaryTitle>{title}</SecondaryTitle>
      <PrimaryText>{text}</PrimaryText>
      <CtaButton cta={cta} href={href} />
    </>
  );
};

export default ModalSection;
