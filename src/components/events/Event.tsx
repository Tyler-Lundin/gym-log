

const Event = (props:any) => {
    const { event } = props;
    return (
        <div>
            <h3>{event.name}</h3>
            <p>{event.description}</p>
        </div>
    );
};

export default Event;

