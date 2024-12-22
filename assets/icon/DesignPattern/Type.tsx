import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Type = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G stroke={props.stroke?props.stroke:"#131927"} strokeWidth="1.5">
        <Path d="M7 16.249a.6.6 0 0 0-.176-.425l-3.648-3.648A.6.6 0 0 1 3 11.75V4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v7.752a.6.6 0 0 1-.176.424l-3.648 3.648a.6.6 0 0 0-.176.425V20a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2z" />
        <Path
          d="m9.5 11.5.5-1.1m4.5 1.1-.5-1.1m0 0L12 6l-2 4.4m4 0h-4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  );
};
