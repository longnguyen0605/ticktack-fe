import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const DbError = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="m17.121 21.364 2.122-2.121m2.121-2.122-2.121 2.122m0 0L17.12 17.12m2.122 2.122 2.121 2.121M4 6v6s0 3 7 3 7-3 7-3V6" />
        <Path d="M11 3c7 0 7 3 7 3s0 3-7 3-7-3-7-3 0-3 7-3M11 21c-7 0-7-3-7-3v-6" />
      </G>
    </Svg>
  );
};
