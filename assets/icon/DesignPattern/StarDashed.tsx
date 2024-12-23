import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const StarDashed = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="m13.806 5-.99-1.996a.911.911 0 0 0-1.631 0l-.495.998M15.012 7.427l.401.809 1.453.211M19.77 8.87l1.452.21a.902.902 0 0 1 .502 1.542l-1.05 1.017M18.572 13.674l-1.05 1.018.247 1.437M18.264 19.004l.248 1.437c.128.739-.652 1.302-1.319.953l-1.299-.679M10.428 19.5 12 18.678l1.299.679M5.671 19.369l-.185 1.072c-.127.739.653 1.302 1.32.953l.847-.443M6.253 16l.225-1.308-.695-.673M3.699 12l-1.423-1.378a.902.902 0 0 1 .503-1.542l1.11-.161M7 8.467l1.587-.231.804-1.618" />
      </G>
    </Svg>
  );
};
