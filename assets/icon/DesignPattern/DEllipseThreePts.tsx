import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const DEllipseThreePts = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path fill="#131927" d="M5 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
        <Path d="M5 22h8M5 22V2" />
        <Path fill="#131927" d="M5 23a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
        <Path
          d="M8 4.193C9.37 2.821 11.108 2 13 2c4.418 0 8 4.477 8 10 0 3.271-1.256 6.176-3.2 8"
          strokeDasharray="3 3"
        />
        <Path d="M8.2 20A9 9 0 0 1 7 18.615" />
        <Path fill="#131927" d="M13 23a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
      </G>
    </Svg>
  );
};
