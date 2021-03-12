
const CarITem = (props) => {
    console.log(props.car)
    return (
        <section id="car-item">
            <h1>{props.car}</h1>
            <h3>{props.carModel}</h3>
            <h4>{props.carYear}</h4>
        </section>
    );
}

export default CarITem;