import Svg, { Path, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const BrightnessWindow = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <Path
        stroke={props.stroke?props.stroke:"#131927"}
        d="M12 21H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v7"
        strokeLinecap="round"
        strokeWidth="1.5"
      />
      <Path
        stroke={props.stroke?props.stroke:"#131927"}
        d="M2 7h20M5 5.01l.01-.011M8 5.01l.01-.011M11 5.01l.01-.011"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <Path
        stroke={props.stroke?props.stroke:"#131927"}
        d="m18 14 1.225 1.044 1.603.128.128 1.603L22 18l-1.044 1.225-.128 1.603-1.603.128L18 22l-1.225-1.044-1.603-.128-.128-1.603L14 18l1.044-1.225.128-1.603 1.603-.128z"
        strokeWidth="1.5"
      />
      <Path
        fill="#131927"
        d="M16.775 20.956 18 22v-8l-1.225 1.044-1.603.128-.128 1.603L14 18l1.044 1.225.128 1.603z"
      />
    </Svg>
  );
};
