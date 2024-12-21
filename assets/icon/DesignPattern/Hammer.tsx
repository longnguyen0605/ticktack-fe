import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Hammer = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="m10.633 11.055-8.485 8.486 2.12 2.121 8.486-8.485" />
        <Path d="m10.633 11.055 1.414-1.414S12.4 6.46 8.865 2.924l1.06-1.061 8.486 5.657-1.06 1.06 1.414 1.415 1.06-1.061 2.475 2.475-4.95 4.95-2.475-2.475 1.061-1.06-1.414-1.415-1.768 1.768z" />
      </G>
    </Svg>
  );
};
