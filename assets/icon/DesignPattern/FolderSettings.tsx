import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const FolderSettings = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M2.6 4h6.178a.6.6 0 0 1 .39.144l3.164 2.712a.6.6 0 0 0 .39.144H21.4a.6.6 0 0 1 .6.6v2.8a.6.6 0 0 1-.6.6H2.6a.6.6 0 0 1-.6-.6V4.6a.6.6 0 0 1 .6-.6M22 10v4" />
        <Path d="M2 10v9.4a.6.6 0 0 0 .6.6H13M19 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
        <Path d="M19 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6" strokeDasharray="0.3 2" />
      </G>
    </Svg>
  );
};
