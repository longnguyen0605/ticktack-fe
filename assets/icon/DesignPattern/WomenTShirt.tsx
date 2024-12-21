import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const WomenTShirt = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M18 21H6s1.66-4.825 1.5-8c-.1-1.989-1.524-3.079-1-5 .23-.842 1-2 1-2S9 7 12 7s4.5-1 4.5-1 .77 1.158 1 2c.524 1.921-.9 3.011-1 5-.16 3.175 1.5 8 1.5 8M7.5 6V3M16.5 6V3" />
      </G>
    </Svg>
  );
};
