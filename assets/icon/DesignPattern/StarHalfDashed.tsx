import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const StarHalfDashed = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke="#131927"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M12.815 3.004a.911.911 0 0 0-1.63 0l-.496.998M12 18.678l-1.572.822M5.671 19.369l-.185 1.072c-.127.739.653 1.302 1.32.953l.847-.443M6.253 16l.225-1.308-.695-.673M3.699 12l-1.423-1.378a.902.902 0 0 1 .503-1.542l1.11-.161M7 8.467l1.587-.231.804-1.618" />
        <Path d="m15.413 8.236-2.598-5.232A.9.9 0 0 0 12 2.5v16.178l5.195 2.716c.666.349 1.446-.214 1.319-.953l-.992-5.75 4.202-4.07a.902.902 0 0 0-.503-1.54z" />
      </G>
    </Svg>
  );
};
