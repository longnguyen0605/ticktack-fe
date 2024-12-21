import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Archery = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M8 12h9m-9 0-2-2H2l2 2-2 2h4zm9 0-2-2m2 2-2 2M16 22.5c2.761 0 5-4.701 5-10.5S18.761 1.5 16 1.5 11 6.201 11 12s2.239 10.5 5 10.5" />
      </G>
    </Svg>
  );
};
