import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const BehanceTag = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M21 8v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5" />
        <Path d="M9.099 11.826c2.535 0 2.535 4.174 0 4.174H6v-4.174m3.099 0H6m3.099 0c2.535 0 2.535-3.826 0-3.826H6v3.826M15.5 11a2.5 2.5 0 0 0-2.5 2.5h5a2.5 2.5 0 0 0-2.5-2.5M13 13.5a2.5 2.5 0 0 0 2.5 2.5c.928 0 1.49-.322 1.813-.62M17 8.5h-3" />
      </G>
    </Svg>
  );
};
