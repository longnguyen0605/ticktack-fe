import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const MultiplePagesDelete = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M2.871 21.121 4.993 19m2.121-2.121L4.993 19m0 0L2.87 16.879M4.993 19l2.121 2.121M7 2h9.5L21 6.5V19" />
        <Path d="M11 22h5.5a1.5 1.5 0 0 0 1.5-1.5V8.749a.6.6 0 0 0-.176-.425l-3.148-3.148A.6.6 0 0 0 14.25 5H4.5A1.5 1.5 0 0 0 3 6.5V13" />
        <Path d="M14 5v3.4a.6.6 0 0 0 .6.6H18" />
      </G>
    </Svg>
  );
};
