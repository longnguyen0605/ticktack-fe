import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const BorderInner = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="m4 20.01.01-.011M4 16.01l.01-.011M4 8.01l.01-.011M4 4.01l.01-.011M8 4.01l.01-.011M16 4.01l.01-.011M20 4.01l.01-.011M20 8.01l.01-.011M8 20.01l.01-.011M16 20.01l.01-.011M20 20.01l.01-.011M20 16.01l.01-.011M4 12h8m8 0h-8m0 0V4m0 8v8" />
      </G>
    </Svg>
  );
};
