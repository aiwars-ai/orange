import { useRoomContext } from '~/hooks/useRoomContext'

export function TranscriptPanel() {
    const {
        room: { transcripts },
    } = useRoomContext()

    if (transcripts.length === 0) {
        return null
    }

    return (
        <div className="max-h-40 overflow-y-auto p-2 text-sm bg-white/80 dark:bg-zinc-800/80">
            {transcripts.map((t, i) => (
                <p key={i}>{t}</p>
            ))}
        </div>
    )
}
