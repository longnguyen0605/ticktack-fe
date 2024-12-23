import Svg, { Path, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const PanoramaReduce = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <Path
        stroke={props.stroke?props.stroke:"#131927"}
        d="M21 6.862v10.276a.615.615 0 0 1-.811.58C18.546 17.165 14.749 16 12 16s-6.546 1.166-8.189 1.717a.615.615 0 0 1-.811-.58V6.863c0-.418.415-.712.811-.58C5.454 6.835 9.251 8 12 8s6.546-1.166 8.189-1.717a.615.615 0 0 1 .811.58"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </Svg>
  );
};
