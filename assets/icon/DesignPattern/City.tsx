import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const City = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="m7 9.01.01-.011M11 9.01l.01-.011M7 13.01l.01-.011M11 13.01l.01-.011M7 17.01l.01-.011M11 17.01l.01-.011M15 21H3.6a.6.6 0 0 1-.6-.6V5.6a.6.6 0 0 1 .6-.6H9V3.6a.6.6 0 0 1 .6-.6h4.8a.6.6 0 0 1 .6.6V9m0 12h5.4a.6.6 0 0 0 .6-.6V9.6a.6.6 0 0 0-.6-.6H15m0 12v-4m0-8v4m0 0h2m-2 0v4m0 0h2" />
      </G>
    </Svg>
  );
};
