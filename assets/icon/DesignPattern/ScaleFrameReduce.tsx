import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const ScaleFrameReduce = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G stroke="#131927" strokeLinecap="round" strokeLinejoin="round">
        <Path
          d="M11 15v-1.4a.6.6 0 0 0-.6-.6H9M6 13H3M11 18v3"
          strokeWidth="1.5"
        />
        <Path
          d="M20.4 3H3.6a.6.6 0 0 0-.6.6v16.8a.6.6 0 0 0 .6.6h16.8a.6.6 0 0 0 .6-.6V3.6a.6.6 0 0 0-.6-.6"
          strokeMiterlimit="1.5"
          strokeWidth="1.499"
        />
        <Path d="M16 11h-3V8" strokeWidth="1.5" />
      </G>
    </Svg>
  );
};
