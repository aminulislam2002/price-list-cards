import React from 'react';
import './Feature.css'
import { CheckCircleIcon } from '@heroicons/react/24/solid'

const Feature = ({feature}) => {
    return (
        <div className='flex items-center'>
            <CheckCircleIcon className="h-6 w-6 text-green-700" />
            <span className='pl-3'>{feature}</span>
        </div>
    );
};

export default Feature;