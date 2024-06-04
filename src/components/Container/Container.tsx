import { ReactNode } from 'react';

type Props = {
    children: ReactNode;
};


export function Container({ children }: Props) {

    return (
        <div className='px-2 md:px-5 py-4 max-w7xl mx-auto w-full'>
            {children}
        </div>
    )
}