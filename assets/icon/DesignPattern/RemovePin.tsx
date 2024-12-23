import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const RemovePin = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M9.5 14.5 3 21M7.675 7.89l-.979-.102L5 9.485l9.192 9.193 1.697-1.697-.101-.981m-4.303-9 3.672-4.329 5.85 5.85-4.308 3.654M3 3l18 18" />
      </G>
    </Svg>
  );
};
