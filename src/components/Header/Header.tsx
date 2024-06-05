
import { Container } from '../Container/Container';
import backgroundImage from '../../assets/img/6883672-ai 1.png'
import { HeaderTitle } from "./HeaderTitle"
import { Button } from '../Button/Button';

export function Header() {

    return (



        <header
            style={{
                backgroundImage: `url(${backgroundImage})`
            }} className='w-auto bg-cover bg-center bg-no-repeat'>
            <Container>
                <HeaderTitle />
                <div className='mt-28'>
                    <p className='text-7xl font-bold text-evergreen'>
                        Encotre livros<br /> que seja a sua cara!</p>
                    <p className='text-gray-500 my-5 text-xl'>
                        Lorem ipsum</p>
                    <Button title='Find Books' />
                </div>
            </Container>
        </header>
    );
}