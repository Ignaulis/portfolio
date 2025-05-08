// 'use client';
// import { motion, useMotionValue, useAnimate } from 'framer-motion';
// import { useEffect } from 'react';

// const Slider = () => {
//     const images = [
//         'https://via.placeholder.com/600x300?text=Image+1',
//         'https://via.placeholder.com/600x300?text=Image+2',
//         'https://via.placeholder.com/600x300?text=Image+3',
//     ];
//     const containerWidth = images.length * 600;
//     const [scope, animate] = useAnimate();

//     useEffect(() => {
//         animate(
//             scope.current,
//             { x: -600 },
//             {
//                 repeat: Infinity,
//                 repeatType: 'loop',
//                 duration: 3, // Sureguliuokite greitį
//                 ease: 'linear',
//                 onComplete: () => {
//                     animate(scope.current, { x: 0 }, { duration: 0 }); // Akimirksniu grąžiname į pradinę padėtį
//                 },
//             },
//         );

//         return () => {
//             animate.stop();
//         };
//     }, [scope, animate]);

//     return (
//         <div className='w-full overflow-hidden relative' ref={scope}>
//             <motion.div
//                 style={{
//                     display: 'flex',
//                     width: `${containerWidth * 2}px`,
//                 }}
//             >
//                 {/* Pirmosios nuotraukos */}
//                 {images.map((image, index) => (
//                     <motion.img
//                         key={index}
//                         src={image}
//                         alt={`Image ${index + 1}`}
//                         style={{ width: '600px', height: '300px' }}
//                     />
//                 ))}

//                 {/* Klonuotos nuotraukos */}
//                 {images.map((image, index) => (
//                     <motion.img
//                         key={`clone-${index}`}
//                         src={image}
//                         alt={`Image ${index + 1}`}
//                         style={{ width: '600px', height: '300px' }}
//                     />
//                 ))}
//             </motion.div>
//         </div>
//     );
// };

// export default Slider;
