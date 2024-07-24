import React from 'react';
import { AnimalsProvider } from './AnimalsContext';
import Animals from './Animals';

const AnimalsContainer = () => {
    return (
        <div>
            <AnimalsProvider>
                <Animals />
            </AnimalsProvider> 
        </div>
    );
};

export default AnimalsContainer;