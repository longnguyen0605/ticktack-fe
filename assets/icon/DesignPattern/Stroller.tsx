import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Stroller = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M11.5 3a8.5 8.5 0 0 0-7.212 13M18.713 16A8.46 8.46 0 0 0 20 11.5v-2h2.5M8 21a2 2 0 1 1 0-4 2 2 0 0 1 0 4M15 21a2 2 0 1 1 0-4 2 2 0 0 1 0 4M11.5 3v9M3.5 12h16" />
      </G>
    </Svg>
  );
};
