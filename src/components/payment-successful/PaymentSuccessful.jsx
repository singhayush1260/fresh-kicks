
import { useSearchParams } from "react-router-dom"
const PaymentSuccessful = () => {

    const seachQuery = useSearchParams()[0]

    const referenceNum = seachQuery.get("reference")
    return (
        <div>
            payment successfull : {referenceNum}
        </div>
    )
}

export default PaymentSuccessful