import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const HalfCookie = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M21.8 14c-.927 4.564-4.962 8-9.8 8-5.523 0-10-4.477-10-10 0-5.185 3.947-9.449 9-9.95" />
        <Path d="M6.5 10a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1M20.5 4a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1M12 19a1 1 0 1 1 0-2 1 1 0 0 1 0 2M7 15.01l.01-.011M17 15.01l.01-.011M11 12.01l.01-.011M21 9.01l.01-.011M17 6.01l.01-.011M11 2c-.5 1.5.5 3 2.086 3-2.085 3.5-.085 7 4.915 6.5 0 2.5 2.5 3 3.7 2.514" />
      </G>
    </Svg>
  );
};
