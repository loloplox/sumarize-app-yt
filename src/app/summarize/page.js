import {
    Card,
    CardContent,
    CardHeader,
    Chip,
    Stack,
    Typography,
} from "@mui/material"
import {
    CalendarMonth,
    Person,
    Summarize as SummarizeIcon,
    Timer,
    Visibility,
} from "@mui/icons-material"
import { getSummarize, getVideoInfo } from "@/lib/youtube"

export default async function SummarizePage({ searchParams }) {
    const infoVideo = await getVideoInfo(searchParams.url)

    getSummarize(searchParams.url)

    return (
        <Card sx={{ width: "800px" }}>
            <CardHeader
                avatar={<SummarizeIcon color="success" />}
                title={
                    <Typography maxWidth="728px" variant="h5" noWrap>
                        {infoVideo.title}
                    </Typography>
                }
            />
            <CardContent>
                <Stack direction="row" spacing={1.5}>
                    <Chip
                        icon={<Person />}
                        label={infoVideo.channel_name}
                        color="primary"
                    />
                    <Chip
                        icon={<Visibility />}
                        label={infoVideo.view}
                        color="secondary"
                    />
                    <Chip
                        icon={<Timer />}
                        label={infoVideo.video_length}
                        color="warning"
                    />
                    <Chip
                        icon={<CalendarMonth />}
                        label={infoVideo.date}
                        color="success"
                    />
                </Stack>
            </CardContent>
        </Card>
    )
}
