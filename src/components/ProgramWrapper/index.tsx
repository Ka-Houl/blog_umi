import React from 'react';
import styles from './index.less';
// url : string
//   name: string
//   description: string
interface IProps {
  data: {
    url: string;
    name: string;
    description: string;
    img?: string;
  };
}

const ProgramWrapper: React.FC<IProps> = ({ data }) => {
  return (
    <a
      className={styles.wrapper}
      href={data.url}
      target="_blank"
      // onClick={() => {
      //   window.open(data.href);
      // }}
    >
      <div className={styles.title}>{data.name}</div>
      <div className={styles.des}>{data.description}</div>
    </a>
  );
};

export default ProgramWrapper;
