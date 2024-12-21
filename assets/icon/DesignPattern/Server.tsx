import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const Server = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G stroke={props.stroke?props.stroke:"#131927"} strokeWidth="1.5">
        <Path
          d="m6 18.01.01-.011M6 6.01l.01-.011"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path d="M2 9.4V2.6a.6.6 0 0 1 .6-.6h18.8a.6.6 0 0 1 .6.6v6.8a.6.6 0 0 1-.6.6H2.6a.6.6 0 0 1-.6-.6ZM2 21.4v-6.8a.6.6 0 0 1 .6-.6h18.8a.6.6 0 0 1 .6.6v6.8a.6.6 0 0 1-.6.6H2.6a.6.6 0 0 1-.6-.6Z" />
      </G>
    </Svg>
  );
};
