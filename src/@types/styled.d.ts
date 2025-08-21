import 'styled-components';
import {defaultTheme} from '../styles/themes/default'

type ThemeType = typeof defaultTheme; 

declare module 'styled-components' {
    //ignoral esse erro do DefaultTheme
    export interface DefaultTheme extends ThemeType {}
} 

