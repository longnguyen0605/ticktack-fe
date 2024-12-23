import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Trello = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2" />
        <Path d="M10.4 6H6.6a.6.6 0 0 0-.6.6v10.8a.6.6 0 0 0 .6.6h3.8a.6.6 0 0 0 .6-.6V6.6a.6.6 0 0 0-.6-.6M17.4 6h-3.8a.6.6 0 0 0-.6.6v6.8a.6.6 0 0 0 .6.6h3.8a.6.6 0 0 0 .6-.6V6.6a.6.6 0 0 0-.6-.6" />
      </G>
    </Svg>
  );
};
