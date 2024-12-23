import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Jellyfish = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M12 2c4.97 0 9 4.104 9 9.167q0 .102-.002.204c-.02.954-.865 1.629-1.819 1.629H4.821c-.954 0-1.798-.675-1.819-1.629L3 11.167C3 6.104 7.03 2 12 2M6 13l1 1.125c.57.642.57 1.608 0 2.25v0a1.693 1.693 0 0 0 0 2.25v0c.57.642.57 1.608 0 2.25L6 22M11 13l1 1.125c.57.642.57 1.608 0 2.25v0a1.693 1.693 0 0 0 0 2.25v0c.57.642.57 1.608 0 2.25L11 22M16 13l1 1.125c.57.642.57 1.608 0 2.25v0a1.693 1.693 0 0 0 0 2.25v0c.57.642.57 1.608 0 2.25L16 22" />
      </G>
    </Svg>
  );
};
