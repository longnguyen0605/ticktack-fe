import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Tunnel = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G stroke="#131927" strokeLinecap="round" strokeWidth="1.5">
        <Path d="M21 20 3 14" strokeLinejoin="round" />
        <Path d="M16 10v1M12 9v1M8 8v1" />
        <Path d="M3 21h18v-9a9 9 0 1 0-18 0z" strokeLinejoin="round" />
      </G>
    </Svg>
  );
};
