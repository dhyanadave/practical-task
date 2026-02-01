import * as React from 'react';
import Svg, {
  ForeignObject,
  G,
  Rect,
  Path,
  Defs,
  ClipPath,
} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: div */
const BackIcon = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}>
    <ForeignObject width={200} height={200} x={-80} y={-80}></ForeignObject>
    <G data-figma-bg-blur-radius={80}>
      <Rect width={40} height={40} fill="#F4F4F4" rx={20} />
      <Path
        stroke="#272727"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d="m19.46 17.293-1.747 1.747a1.324 1.324 0 0 0 0 1.867l4.347 4.346m0-10.56-.693.694"
      />
    </G>
    <Defs>
      <ClipPath id="a" transform="translate(80 80)">
        <Rect width={40} height={40} rx={20} />
      </ClipPath>
    </Defs>
  </Svg>
);
export default BackIcon;
