import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Basketball = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10M12 22V2" />
        <Path d="M21.95 11c-6.47 2.667-12.254 2.667-19.901 0" />
        <Path d="M18.572 4.462c-2.666 4.53-2.666 9.723 0 15.076M5.428 4.462c2.666 4.53 2.667 9.723 0 15.076" />
      </G>
    </Svg>
  );
};
