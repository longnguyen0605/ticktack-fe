import Svg, { Path, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const HerSlips = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <Path
        stroke={props.stroke?props.stroke:"#131927"}
        d="M1 4.6a.6.6 0 0 1 .6-.6h20.8a.6.6 0 0 1 .6.6v3.912c0 .284-.199.53-.476.595-1.052.247-3.635.914-5.524 1.893-3.444 1.786-3.93 6.655-3.993 8.382a.637.637 0 0 1-.626.618h-.761a.637.637 0 0 1-.627-.618C10.931 17.655 10.443 12.786 7 11c-1.889-.98-4.472-1.646-5.524-1.893A.614.614 0 0 1 1 8.512z"
        strokeWidth="1.5"
      />
    </Svg>
  );
};
