import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const AlbumList = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G stroke={props.stroke?props.stroke:"#131927"} strokeWidth="1.5">
        <Path d="M2 17.4V2.6a.6.6 0 0 1 .6-.6h14.8a.6.6 0 0 1 .6.6v14.8a.6.6 0 0 1-.6.6H2.6a.6.6 0 0 1-.6-.6Z" />
        <Path
          d="M8 22h13.4a.6.6 0 0 0 .6-.6V8M11 12.5V6.6a.6.6 0 0 1 .6-.6H13m-2 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
          strokeLinecap="round"
        />
      </G>
    </Svg>
  );
};
