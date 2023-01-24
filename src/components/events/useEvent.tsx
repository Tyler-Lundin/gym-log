import { useEffect, useState } from "react";

const getEvent = async () => {
    const response = await fetch("/api/events");
    const event = await response.json();
    return event;
    };

const useEvent = () => {
    const [event, setEvent] = useState<Event | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchEvent = async () => {
        const event = await getEvent();
        setEvent(event);
        setLoading(false);
        };
        fetchEvent();
    }, []);

    return { event, loading };
    }

export default useEvent;


