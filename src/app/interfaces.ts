//Fotos populares interface
export interface RespFotos {
    page:          number;
    per_page:      number;
    photos:        Photo[];
    total_results: number;
    next_page:     string;
}

export interface Photo {
    id:               number;
    width:            number;
    height:           number;
    url:              string;
    photographer:     string;
    photographer_url: string;
    photographer_id:  number;
    avg_color:        string;
    src:              Src;
    liked:            boolean;
    alt:              string;
}

export interface Src {
    original:  string;
    large2x:   string;
    large:     string;
    medium:    string;
    small:     string;
    portrait:  string;
    landscape: string;
    tiny:      string;
}

//Videos populares interface

export interface RespVideos {
    page:          number;
    per_page:      number;
    videos:        Video[];
    total_results: number;
    next_page:     string;
    url:           string;
}

export interface Video {
    id:             number;
    width:          number;
    height:         number;
    duration:       number;
    full_res:       null;
    tags:           any[];
    url:            string;
    image:          string;
    avg_color:      null;
    user:           User;
    video_files:    VideoFile[];
    video_pictures: VideoPicture[];
}

export interface User {
    id:   number;
    name: string;
    url:  string;
}

export interface VideoFile {
    id:        number;
    quality:   Quality;
    file_type: FileType;
    width:     number | null;
    height:    number | null;
    link:      string;
}

export enum FileType {
    VideoMp4 = "video/mp4",
}

export enum Quality {
    HD = "hd",
    HLS = "hls",
    SD = "sd",
}

export interface VideoPicture {
    id:      number;
    nr:      number;
    picture: string;
}


