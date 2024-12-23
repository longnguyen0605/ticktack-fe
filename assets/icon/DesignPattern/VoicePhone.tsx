import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const VoicePhone = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="m8 17.01.01-.011M8 5H3.6a.6.6 0 0 0-.6.6v14.8a.6.6 0 0 0 .6.6h8.8a.6.6 0 0 0 .6-.6V16M16 3v10M13 5v6M22 7v2M10 7v2M19 4v8" />
      </G>
    </Svg>
  );
};
