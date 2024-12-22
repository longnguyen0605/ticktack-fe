import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Npm = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G stroke={props.stroke?props.stroke:"#131927"} strokeLinecap="round" strokeWidth="1.5">
        <Path
          d="M1 8h22v7H11v2H7.5v-2H1zM7.5 8v7M13.5 8v7"
          strokeLinejoin="round"
        />
        <Path d="M18 11v4M5 11v4M11 11v1M20.5 11v4" />
      </G>
    </Svg>
  );
};
