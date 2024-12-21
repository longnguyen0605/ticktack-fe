import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const BeachBag = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G stroke="#131927" strokeWidth="1.5">
        <Path d="m2.77 13-.633-3.287A.6.6 0 0 1 2.727 9h18.547a.6.6 0 0 1 .589.713L21.23 13M2.769 13h18.462M2.769 13l.616 4m17.846-4-.616 4m0 0-.537 3.491a.6.6 0 0 1-.593.509H4.515a.6.6 0 0 1-.593-.509L3.385 17m17.23 0H3.385" />
        <Path d="M8 9V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4" />
      </G>
    </Svg>
  );
};
