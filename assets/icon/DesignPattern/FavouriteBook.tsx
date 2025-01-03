import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const FavouriteBook = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G stroke={props.stroke?props.stroke:"#131927"} strokeWidth="1.5">
        <Path
          d="M4 19V5a2 2 0 0 1 2-2h13.4a.6.6 0 0 1 .6.6v13.114"
          strokeLinecap="round"
        />
        <Path
          d="M16 8.78a2.28 2.28 0 0 1-.662 1.606c-.976.984-1.923 2.01-2.936 2.958a.597.597 0 0 1-.822-.017l-2.918-2.94a2.28 2.28 0 0 1 0-3.214 2.277 2.277 0 0 1 3.232 0L12 7.28l.106-.107A2.276 2.276 0 0 1 16 8.78Z"
          strokeLinejoin="round"
        />
        <Path d="M6 17h14M6 21h14" strokeLinecap="round" />
        <Path
          d="M6 21a2 2 0 1 1 0-4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  );
};
