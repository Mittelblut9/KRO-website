export interface VodPostgresInterface {
    transcript: string;
    vodid: string;
    title: string;
    date: string;
    url: string;
    thumbnail: string;
    view_count: string;
    online_intend_date: string;
    duration: number;
}

export interface VodInterface {
    title: string;
    date: string;
    url: string;
    thumbnail: string;
    view_count: string;
    online_intend_date: string;
    duration: number;
    vodid: string;
}

export interface Stream {
    id: string;
    user_id: string;
    user_login: string;
    user_name: string;
    game_id: string;
    game_name: string;
    type: 'live' | 'offline';
    title: string;
    viewer_count: number;
    started_at: string;
    language: string;
    thumbnail_url: string;
    tag_ids: string[];
    tags: string[];
    is_mature: boolean;
    lastVod?: VodInterface;
  }

export interface StreamsResponse {
data: Stream[];
pagination: any;
}

export interface TokenResponse { 
    access_token: string
    expires_in: number
    token_type: string
}