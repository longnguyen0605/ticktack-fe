import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const UserCrown = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8" />
        <Path d="M5 20v-1a7 7 0 0 1 10-6.326M21 22l1-6-3.5 1.8L17 16l-1.5 1.8L12 16l1 6z" />
      </G>
    </Svg>
  );
};
