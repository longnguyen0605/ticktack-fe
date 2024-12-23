import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const VoiceLockCircle = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M14 21.8q-.97.198-2 .2C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10q0 .381-.028.755M12 6v12M9 9v6M18 11v2M6 11v2M15 7v10" />
        <Path d="M21.167 18.5h.233a.6.6 0 0 1 .6.6v2.3a.6.6 0 0 1-.6.6h-3.8a.6.6 0 0 1-.6-.6v-2.3a.6.6 0 0 1 .6-.6h.233m3.334 0v-1.75c0-.583-.334-1.75-1.667-1.75s-1.667 1.167-1.667 1.75v1.75m3.334 0h-3.334" />
      </G>
    </Svg>
  );
};
