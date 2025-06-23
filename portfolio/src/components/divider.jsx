import { motion } from 'framer-motion';

const Divider = () => (
  <section className="w-full overflow-hidden leading-none mt-20">
    <svg
      viewBox="0 0 1440 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-24 md:h-32"
      preserveAspectRatio="none"
    >
      <path
        d="M0,80 C360,160 1080,0 1440,100 L1440,180 L0,180 Z"
        fill="#055e90"
        opacity="1"
      />
    </svg>
  </section>
);
const Divider2 = () => (
  <section className="w-full overflow-hidden leading-none">
    <svg
      viewBox="0 0 1440 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-24 md:h-32"
      preserveAspectRatio="none"
    >
      <path
        d="M0,100 C360,0 1080,160 1440,80 L1440,0 L0,0 Z"
        fill="#055e90"
        opacity="1"
      />
    </svg>
  </section>
);
export { Divider, Divider2 };