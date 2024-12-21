import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const UserCart = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="m22 12.5-.833 2.5m0 0L20 18.5h-4.5l-1-3.5zM16.5 20.51l.01-.011M19.5 20.51l.01-.011M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8" />
        <Path d="M2 18a7 7 0 0 1 11.33-5.5" />
      </G>
    </Svg>
  );
};
