import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const IntersectAlt = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="m15.01 3-.01.011M11.01 3l-.01.011M7.01 3 7 3.011M3.01 3 3 3.011M3.01 7 3 7.011M3.01 11l-.01.011M3.01 15l-.01.011M9 21.01l.01-.011M13 21.01l.01-.011M17 21.01l.01-.011M21 21.01l.01-.011M21 17.01l.01-.011M21 13.01l.01-.011M21 9.01l.01-.011M9 17v-7a1 1 0 0 1 1-1h7" />
        <Path d="M15 7v7a1 1 0 0 1-1 1H7" />
      </G>
    </Svg>
  );
};
