import Svg, { Path, Circle, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const HandBrake = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G stroke="#131927" strokeWidth="1.5">
        <Path
          d="M12 16v-4M12 9V8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Circle cx="12" cy="12" r="8" />
        <Path
          d="M3.953 4.5A10.96 10.96 0 0 0 1 12c0 2.899 1.121 5.535 2.953 7.5M20.047 4.5A10.96 10.96 0 0 1 23 12c0 2.899-1.121 5.535-2.953 7.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  );
};
