import { motion } from "framer-motion";

const StatsCard = ({
  title,
  count,
  icon,
}) => {
  return (
    <motion.div
      className="stats-card"
      whileHover={{
        scale: 1.05,
      }}
    >
      <div className="stats-icon">
        {icon}
      </div>

      <h3>{title}</h3>

      <h1>{count}</h1>
    </motion.div>
  );
};

export default StatsCard;