import { useState } from "react";

export type TweetProps = {
    text?: string;
    description: string;
}

export function Tweet(props: TweetProps) {

    // const [tweetss, setTweetss] = useState<[]>([]);

    
    return (
        <div style={{borderWidth: '3px'}} className="rounded border-gray-300 p-3 m-5 bg-slate-200 border-slate-50">
            <h3>{props.text}</h3>
            <p>{props.description}</p>
        </div>
    )
}