import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const AtSignCircle = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M16.278 17.541A7 7 0 1 1 19 12c0 4.278-5 3.722-5 1V8.5" />
        <Path d="M14 12v-.5a2.5 2.5 0 0 0-5 0v.5M14 12v.5a2.5 2.5 0 0 1-5 0V12" />
        <Path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10" />
      </G>
    </Svg>
  );
};
