import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const PasswordError = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="m15.121 20.364 2.121-2.121m0 0 2.122-2.122m-2.122 2.122-2.12-2.122m2.12 2.122 2.122 2.121M21 13V8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6M12 11.01l.01-.011M16 11.01l.01-.011M8 11.01l.01-.011" />
      </G>
    </Svg>
  );
};
