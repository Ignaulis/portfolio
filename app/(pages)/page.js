// imports
import Shapes from '../threejs/model';

export default function Home() {
    return (
        <div className='relative w-screen h-screen overflow-hidden'>
            {/* canvas */}
            <div className='absolute inset-0'>
                <Shapes />
            </div>

            {/* main content */}
            <div className='absolute inset-0 z-10 h-screen overflow-y-auto'>
                {/* <h3 className='text-white text-5xl'>
                    Hi, I'm Ignas
                </h3> */}

            </div>
        </div>
    );
}