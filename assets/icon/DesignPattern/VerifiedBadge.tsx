import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const VerifiedBadge = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G stroke={props.stroke?props.stroke:"#131927"} strokeWidth="1.5">
        <Path d="M11.528 1.6a.6.6 0 0 1 .944 0l1.809 2.3a.6.6 0 0 0 .635.207l2.815-.798a.6.6 0 0 1 .764.554l.11 2.925a.6.6 0 0 0 .393.54l2.747 1.01a.6.6 0 0 1 .292.897l-1.63 2.431a.6.6 0 0 0 0 .668l1.63 2.431a.6.6 0 0 1-.292.897l-2.747 1.01a.6.6 0 0 0-.392.54l-.111 2.925a.6.6 0 0 1-.764.554l-2.815-.798a.6.6 0 0 0-.636.206L12.473 22.4a.6.6 0 0 1-.944 0L9.72 20.1a.6.6 0 0 0-.635-.207l-2.815.798a.6.6 0 0 1-.764-.554l-.11-2.925a.6.6 0 0 0-.393-.54l-2.747-1.01a.6.6 0 0 1-.292-.897l1.63-2.431a.6.6 0 0 0 0-.668l-1.63-2.431a.6.6 0 0 1 .292-.897l2.747-1.01a.6.6 0 0 0 .392-.54l.111-2.925a.6.6 0 0 1 .764-.554l2.815.798A.6.6 0 0 0 9.72 3.9z" />
        <Path d="m9 12 2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
      </G>
    </Svg>
  );
};
