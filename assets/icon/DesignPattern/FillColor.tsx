import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const FillColor = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="m2.636 10.293 7.071-7.071 8.485 8.485-7.07 7.071a2 2 0 0 1-2.83 0l-5.656-5.657a2 2 0 0 1 0-2.828M8.293 1.808l1.414 1.414" />
        <Path
          d="M20 15s3 2.993 3 4.887c0 1.655-1.345 3-3 3s-2.988-1.345-3-3C17.01 17.992 20 15 20 15"
          clipRule="evenodd"
          strokeMiterlimit="1.5"
        />
      </G>
    </Svg>
  );
};
