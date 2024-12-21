import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const SineWave = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M3 12c0-3.857 1.286-9 3.857-9 3.857 0 6.429 18 10.286 18C19.714 21 21 15.857 21 12M3 12h2M19 12h2M15.5 12h1M7.5 12h1" />
      </G>
    </Svg>
  );
};
