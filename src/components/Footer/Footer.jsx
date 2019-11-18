import React from 'react';
import s from "./Footer.module.sass";

class Footer extends React.Component {
    render() {
        return (
            <div className={s.footerContainer}>
                <div className={s.footerContainer__cafeName}>
                    <p>Vice Hookah</p>
                </div>
                <div className={s.footerContainer__phoneNumber}>
                    <p>8-(800)-110-0444</p>
                </div>
            </div>
        )
    }
}

export default Footer;