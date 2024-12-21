import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const GitCherryPickCommit = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M17 11v-1a2 2 0 0 0-2-2h-3m-5 3v-1a2 2 0 0 1 2-2h3m0 0V4M12 20a3 3 0 1 0 0-6 3 3 0 0 0 0 6M9 17H3M15 17h6" />
      </G>
    </Svg>
  );
};
