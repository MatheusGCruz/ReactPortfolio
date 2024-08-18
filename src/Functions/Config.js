import { useState } from 'react';

const useConfigs = () => {
  const [config] = useState({
        videoFiles:"http://api.antares.ninja/videoFiles/",
        mkvVideos:"http://api.antares.ninja/mkv-videos/",
        musicFiles:"http://api.antares.ninja/musicFiles/",
        videos:"http://api.antares.ninja/videos/",
        music:"http://api.antares.ninja/music/"
  });

  return config;
};

export default useConfigs;