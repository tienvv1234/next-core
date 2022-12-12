import { HeaderDesktop } from './header-desktop';
import { HeaderMobile } from './header-mobile';

export function Header() {
    console.log('render header');

    return (
        <>
            <HeaderMobile />
            <HeaderDesktop />
        </>
    );
}