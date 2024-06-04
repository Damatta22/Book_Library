

import backgroundImage from '../../assets/img/6883672-ai 1.png'
import { HeaderTitle } from "./HeaderTitle"

export function Header() {

    return (



        <header
            style={{
                backgroundImage: `url(${backgroundImage})`
            }}>

            <HeaderTitle />
            <div>
                <p>Encotre livros que seja a sua cara!</p>
                <p>Lorem ipsum</p>
            </div>
        </header>
    );
}