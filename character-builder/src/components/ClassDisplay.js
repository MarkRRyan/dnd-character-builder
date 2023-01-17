const ClassDisplay = (props) => {
    return (
        <div>
            {
                props.classes.map((classes) => (
                    <div key={classes.index}>
                        <h2>{classes.name}</h2>
                    </div>
                ))
            }
        </div>
    )
}

export default ClassDisplay