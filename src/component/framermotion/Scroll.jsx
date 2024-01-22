import { motion, useScroll } from "framer-motion"
import './scroll.css'

function Scroll() {
  const { scrollYProgress } = useScroll();
  
  return (
    <motion.div style={{ scaleX: scrollYProgress }} />  
  )
}
export default Scroll;