import tw from 'twin.macro';

const FooterStyles = tw.footer`
  text-center
  text-primary
  absolute
  bottom-0
  p-6
  text-sm
  lg:text-base
  tracking-wider
  uppercase
  font-thin`;

const Footer = () => (
  <FooterStyles>
    &copy; 2021 by Inanis Umbra Development.
    <a href="https://github.com/inanisumbra/umbra-folio">Github Repository</a>.
    Made by <a href="https://github.com/inanisumbra">Inanis Umbra Development</a>
    .
  </FooterStyles>
);

export default Footer;
