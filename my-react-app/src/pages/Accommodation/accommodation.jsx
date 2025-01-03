import { useParams } from "react-router-dom";
function Accommodation() {
    const { accommodationId } = useParams();
    return <div>Logement {accommodationId}</div>;
}
export default Accommodation;