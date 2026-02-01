import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const FavouriteIcon = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}>
    <Path
      stroke="#272727"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.727 3.315c.586.66.94 1.526.94 2.48 0 4.666-4.32 7.42-6.254 8.086-.226.08-.6.08-.826 0-1.934-.666-6.254-3.42-6.254-8.086 0-2.06 1.66-3.727 3.707-3.727 1.213 0 2.287.587 2.96 1.493a3.687 3.687 0 0 1 2.96-1.493"
    />
  </Svg>
);
export default FavouriteIcon;
