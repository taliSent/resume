import { animate, motion, useMotionValue, useTransform } from "motion/react"
import { useEffect } from "react"

type DigitProps = {
    finalValue: number;
    duration: number;
    withPlus?: boolean;
}

const Digit = ({finalValue, duration, withPlus = false} : DigitProps) => {
    const count = useMotionValue(0)
    const rounded = useTransform(() => Math.round(count.get()))

    useEffect(() => {
        const controls = animate(count, finalValue, { duration })
        return () => controls.stop()
    }, [])

    return <motion.pre>{rounded}</motion.pre>
}
export default Digit;