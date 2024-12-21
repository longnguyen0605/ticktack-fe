import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const AppleWallet = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G stroke={props.stroke?props.stroke:"#131927"} strokeWidth="1.5">
        <Path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2Z" />
        <Path d="M3 15h6.4c.331 0 .605.278.75.576.206.423.694.924 1.85.924s1.644-.5 1.85-.924c.145-.298.419-.576.75-.576H21M3 7h18M3 11h18" />
      </G>
    </Svg>
  );
};
