import ytv from "ytv"
import { YoutubeTranscript } from "youtube-transcript"

export async function getVideoInfo(url) {
    const { title, channel_name, video_length, view, date } =
        await ytv.get_info(url)

    return { title, channel_name, video_length, view, date }
}

async function getTranscription(url) {
    return await YoutubeTranscript.fetchTranscript(url)
}

export async function getSummarize(url) {}
