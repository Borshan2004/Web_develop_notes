import React from 'react';

const Loading = ({
    type = 'spinner',
    size = 'md',
    color = 'primary',
    label = ''
}) => {
    // Mapping DaisyUI classes for convenience
    const sizeClasses = {
        xs: 'loading-xs',
        sm: 'loading-sm',
        md: 'loading-md',
        lg: 'loading-lg',
    };

    const typeClasses = {
        spinner: 'loading-spinner',
        dots: 'loading-dots',
        ring: 'loading-ring',
        ball: 'loading-ball',
        bars: 'loading-bars',
        infinity: 'loading-infinity',
    };

    const colorClasses = {
        primary: 'text-primary',
        secondary: 'text-secondary',
        accent: 'text-accent',
        info: 'text-info',
        success: 'text-success',
        warning: 'text-warning',
        error: 'text-error',
    };

    return (
        <div className="flex flex-col items-center justify-center gap-2">
            <span className={`loading ${typeClasses[type]} ${sizeClasses[size]} ${colorClasses[color]}`}></span>
            {label && <p className="text-sm font-medium animate-pulse">{label}</p>}
        </div>
    );
};

export default Loading;