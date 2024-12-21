import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const ModernTv = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G stroke="#131927" strokeWidth="1.5">
        <Path d="M7 21h10" strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M2 16.4V3.6a.6.6 0 0 1 .6-.6h18.8a.6.6 0 0 1 .6.6v12.8a.6.6 0 0 1-.6.6H2.6a.6.6 0 0 1-.6-.6Z" />
      </G>
    </Svg>
  );
};