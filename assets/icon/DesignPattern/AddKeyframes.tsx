import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const AddKeyframes = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M2 12h3m3 0H5m0 0V9m0 3v3M6.25 6l.245-.28a2 2 0 0 1 3.01 0l4.343 4.963a2 2 0 0 1 0 2.634L9.505 18.28a2 2 0 0 1-3.01 0L6.25 18" />
        <Path d="m13 19 4.884-5.698a2 2 0 0 0 0-2.604L13 5" />
        <Path d="m17 19 4.884-5.698a2 2 0 0 0 0-2.604L17 5" />
      </G>
    </Svg>
  );
};
