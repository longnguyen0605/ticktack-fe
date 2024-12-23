import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const HeadsetHelp = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G stroke={props.stroke?props.stroke:"#131927"} strokeWidth="1.5">
        <Path
          d="M20 11a8 8 0 1 0-16 0"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path d="M2 15.438v-1.876a2 2 0 0 1 1.515-1.94l1.74-.436a.6.6 0 0 1 .745.582v5.464a.6.6 0 0 1-.746.582l-1.74-.435A2 2 0 0 1 2 15.439ZM22 15.438v-1.876a2 2 0 0 0-1.515-1.94l-1.74-.436a.6.6 0 0 0-.745.582v5.464a.6.6 0 0 0 .745.582l1.74-.435A2 2 0 0 0 22 15.439ZM20 18v.5a2 2 0 0 1-2 2h-3.5" />
        <Path d="M13.5 22h-3a1.5 1.5 0 0 1 0-3h3a1.5 1.5 0 0 1 0 3Z" />
      </G>
    </Svg>
  );
};
