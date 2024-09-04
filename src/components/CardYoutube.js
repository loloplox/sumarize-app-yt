"use client"

import { useState } from "react"
import {
    Box,
    Button,
    Card,
    CardContent,
    CardHeader,
    TextField,
    Typography,
} from "@mui/material"
import { YouTube } from "@mui/icons-material"
import { useRouter } from "next/navigation"

export default function CardYoutube() {
    const [url, setUrl] = useState("")
    const [error, setError] = useState(false)
    const router = useRouter()

    const handleChange = e => {
        setUrl(e.target.value)
    }

    const handleClick = () => {
        if (url) {
            setError(false)
            console.log("aa")
            router.push(`/summarize?url=${url}`)
        } else {
            setError(true)
        }
    }

    return (
        <>
            <Card sx={{ width: "600px" }}>
                <CardHeader
                    avatar={<YouTube fontSize="large" color="error" />}
                    title={
                        <Typography variant="h5">
                            Resumen de videos de Youtube
                        </Typography>
                    }
                />
                <CardContent>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "20px",
                        }}
                    >
                        <TextField
                            value={url}
                            onChange={handleChange}
                            label="URL del video de YouTube"
                            error={error}
                            fullWidth
                            required
                        />

                        <Button
                            variant="outlined"
                            size="large"
                            fullWidth
                            onClick={handleClick}
                        >
                            Resumir
                        </Button>
                    </Box>
                </CardContent>
            </Card>
        </>
    )
}
