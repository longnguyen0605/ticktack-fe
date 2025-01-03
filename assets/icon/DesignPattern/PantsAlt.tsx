import Svg, { Path, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const PantsAlt = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <Path
        stroke={props.stroke?props.stroke:"#131927"}
        d="M12 19h4.436a.6.6 0 0 0 .6-.563l.924-14.8A.6.6 0 0 0 17.361 3H6.634a.6.6 0 0 0-.599.633l.934 16.8a.6.6 0 0 0 .599.567H11.4a.6.6 0 0 0 .6-.6V8"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </Svg>
  );
};
