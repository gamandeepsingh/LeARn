import React, { useEffect } from 'react';
import ModelViewer from 'react-model-viewer';
import 'focus-visible/dist/focus-visible';

function ModelView() {
    useEffect(() => {
        // Code that relies on focus-visible can go here
        // For example, you can add event listeners or manipulate the DOM
    }, []);

    return(
        <div>
            {/* Your component JSX */}
            <ModelViewer
                src="https://cdn.glitch.global/867e03a7-f9d6-4d21-8a9d-0dfb207a1721/medieval_fantasy_book.glb?v=1706272676110"
                iosSrc="https://cdn.glitch.global/867e03a7-f9d6-4d21-8a9d-0dfb207a1721/Medieval_Fantasy_Book.usdz?v=1706272676838"
                poster="https://cdn.glitch.global/867e03a7-f9d6-4d21-8a9d-0dfb207a1721/Screenshot_2024-01-26_180310-removebg-preview.png?v=1706272832184"
                alt="A 3D model of a Book"
                shadowIntensity={1}
                cameraControls
                autoRotate
                ar
            />
        </div>
    );
}

export default ModelView;
