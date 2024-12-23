import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const VideoProjector = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G stroke={props.stroke?props.stroke:"#131927"} strokeWidth="1.5">
        <Path
          d="M4 19h2M18 19h2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path d="M2 16.4V7.6a.6.6 0 0 1 .6-.6h18.8a.6.6 0 0 1 .6.6v8.8a.6.6 0 0 1-.6.6H2.6a.6.6 0 0 1-.6-.6Z" />
        <Path
          d="m5 10.01.01-.011M8 10.01l.01-.011M11 10.01l.01-.011M5 14.01l.01-.011M8 14.01l.01-.011M11 14.01l.01-.011M17 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  );
};
