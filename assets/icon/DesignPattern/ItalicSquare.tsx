import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const ItalicSquare = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G stroke={props.stroke?props.stroke:"#131927"} strokeWidth="1.5">
        <Path
          d="M12 6h2m2 0h-2m0 0-4 12m0 0H8m2 0h2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path d="M3 20.4V3.6a.6.6 0 0 1 .6-.6h16.8a.6.6 0 0 1 .6.6v16.8a.6.6 0 0 1-.6.6H3.6a.6.6 0 0 1-.6-.6Z" />
      </G>
    </Svg>
  );
};
