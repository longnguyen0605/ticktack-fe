import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const MailOpened = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G stroke={props.stroke?props.stroke:"#131927"} strokeWidth="1.5">
        <Path
          d="m7 12 5 3.5 5-3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path d="M2 20V9.132a2 2 0 0 1 .971-1.715l8-4.8a2 2 0 0 1 2.058 0l8 4.8A2 2 0 0 1 22 9.132V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2Z" />
      </G>
    </Svg>
  );
};
