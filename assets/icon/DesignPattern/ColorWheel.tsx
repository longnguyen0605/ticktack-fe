import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const ColorWheel = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10" />
        <Path d="M12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8M12 2v6M12 16v6M2 12h6M16 12h6M4.93 4.929l4.242 4.243M14.828 14.828l4.243 4.243M4.93 19.071l4.242-4.243M14.828 9.172l4.243-4.243" />
      </G>
    </Svg>
  );
};
