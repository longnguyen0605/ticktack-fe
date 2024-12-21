import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const PeopleTag = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G stroke={props.stroke?props.stroke:"#131927"} strokeWidth="1.5">
        <Path d="M3 16V8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5Z" />
        <Path
          d="M16.5 14.5s-1.5 2-4.5 2-4.5-2-4.5-2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          fill="#131927"
          d="M8.5 10a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1M15.5 10a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  );
};
