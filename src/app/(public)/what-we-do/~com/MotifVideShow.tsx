import VideoPlayer from '@/components/shared/VideoPlayer';
import React from 'react';


const MotifVideShow = () => {
    return (
        <div className='mt-12 md:mt-20'>
            <VideoPlayer
                className=''
                url='https://player.vimeo.com/video/900891985'
                muted={true}
                autoplay={true}
                loop={true}
            />
        </div>
    );
};

export default MotifVideShow;