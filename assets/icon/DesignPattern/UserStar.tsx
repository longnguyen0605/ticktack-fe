import Svg, { Path, G, type SvgProps } from "react-native-svg";

interface IProps extends SvgProps {}

export const UserStar = (props: IProps) => {
  return (
    <Svg width="24" height="24" fill="none" viewBox="0 0 24 24" {...props}>
      <G
        stroke={props.stroke?props.stroke:"#131927"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <Path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8" />
        <Path d="M5 20v-1a7 7 0 0 1 10-6.326M16.635 16.415l1.039-2.203a.357.357 0 0 1 .652 0l1.04 2.203 2.323.356c.298.045.416.429.2.649l-1.68 1.713.396 2.421c.051.311-.26.548-.527.401L18 20.812l-2.078 1.143c-.267.147-.578-.09-.527-.4l.396-2.422-1.68-1.713c-.216-.22-.098-.604.2-.65z" />
      </G>
    </Svg>
  );
};
