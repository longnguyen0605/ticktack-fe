import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Codepen = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M21 9v6M3 15V9M12 21v-6M12 3v6M12 15 3 9l9-6 9 6z" />
        <Path d="m12 21-9-6 9-6 9 6z" />
      </G>
    </Svg>
  );
};
