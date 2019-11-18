import React from 'react';
import s from "./Main.module.sass";

class Main extends React.Component {
    render() {
        return (
            <div className={s.mainContainer}>
                <div className={s.mainContainer__adBlock}>
                    <div className={s.mainContainer__ad1}>
                        <div className={s.mainContainer__ad2}>
                            <div className={s.mainContainer__eventPic}>
                                <img src={require("../../content/xs/img/2.jpg")} alt="add1" />
                            </div>
                            <div className={s.mainContainer__eventDescription}>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae nobis, veritatis ut.</p>
                            </div>
                        </div>
                        <div className={s.mainContainer__ad2}>
                            <div className={s.mainContainer__eventDescription}>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae nobis, veritatis ut.</p>
                            </div>
                            <div className={s.mainContainer__eventPic}>
                                <img src={require("../../content/xs/img/2.jpg")} alt="add2" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Main;