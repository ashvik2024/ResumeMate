import React, { useEffect } from 'react'

const ChatPage = () => {
    useEffect(() => {
        const fetchChat = async () => {
            try {
                const res = await fetch("")
                const data = await res.json()
                console.log(data)
                console.log("fetching chat data...")
            } catch (error) {
                console.error("Error fetching chat data:", error)

            }
        };
        fetchChat();
    },[])

    return (
        <div>
            <h1>Api testing</h1>
        </div>
    )
}

export default ChatPage