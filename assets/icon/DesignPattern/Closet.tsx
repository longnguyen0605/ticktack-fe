import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Closet = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G stroke={props.stroke?props.stroke:"#131927"} strokeWidth="1.5">
        <Path
          d="M9 14H8M16 14h-1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path d="M12 2h8.4a.6.6 0 0 1 .6.6v18.8a.6.6 0 0 1-.6.6H12m0-20H3.6a.6.6 0 0 0-.6.6v18.8a.6.6 0 0 0 .6.6H12m0-20v20" />
      </G>
    </Svg>
  );
};
