import React from 'react';

const TwoColumnLayout: React.FC<{ left: React.ReactNode; right: React.ReactNode }> = ({ left, right }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="col-span-1">
                {left}
            </div>
            <div className="col-span-1">
                {right}
            </div>
        </div>
    );
};

export default TwoColumnLayout;