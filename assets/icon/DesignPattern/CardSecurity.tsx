import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const CardSecurity = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M22 9V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h8M22 9H6m16 0v2" />
        <Path d="m18.992 14.125 2.556.649c.266.068.453.31.445.584C21.821 21.116 18.5 22 18.5 22s-3.321-.884-3.493-6.642a.59.59 0 0 1 .445-.584l2.556-.649c.323-.082.661-.082.984 0" />
      </G>
    </Svg>
  );
};
