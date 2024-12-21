import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const BatteryWarning = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G stroke="#131927" strokeWidth="1.5">
        <Path d="M23 10v4" strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M1 16V8a2 2 0 0 1 2-2h15a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2Z" />
        <Path
          d="M10.5 9v2M10.5 15.01l.01-.011"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  );
};
