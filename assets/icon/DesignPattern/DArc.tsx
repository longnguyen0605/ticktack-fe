import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const DArc = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M22 16c0-5.523-4.477-10-10-10S2 10.477 2 16" />
        <Path
          fill="#131927"
          d="M2 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2M22 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
        />
      </G>
    </Svg>
  );
};
