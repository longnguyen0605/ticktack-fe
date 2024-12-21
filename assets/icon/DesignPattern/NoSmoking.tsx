import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const NoSmoking = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G stroke="#131927" strokeWidth="1.5">
        <Path
          d="M18 15v3M18 11c0-1-1-2-3-2h-1a3 3 0 0 1-3-3V2M22 11c0-6-4-6-4-6s4 1 4-3M22 15v3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path d="M2.6 18H18l-3-3H2.6a.6.6 0 0 0-.6.6v1.8a.6.6 0 0 0 .6.6Z" />
        <Path d="m3 3 18 18" strokeLinecap="round" strokeLinejoin="round" />
      </G>
    </Svg>
  );
};
