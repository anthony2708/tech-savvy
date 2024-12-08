import useBaseUrl from '@docusaurus/useBaseUrl';
// import React from 'react';
import clsx from 'clsx';
import styles from '../../css/HomepageFeatures.module.css';
import Translate, { translate } from '@docusaurus/Translate';
type FeatureItem = {
  title: string;
  image: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: translate({
      message: "Hữu xạ tự nhiên hương",
      id: "homepage.feature1.quote.title"
    }),
    image: "/img/docusaurus/undraw_docusaurus_tree.svg",
    description: (
      <Translate id="homepage.feature1.quote.desc">
        Một người lạc quan, chăm chỉ và có trách nhiệm. Đam mê lập trình Web
        và Mạng máy tính. Thích nghe nhạc, chơi đá bóng và xem TV.
      </Translate>
    ),
  },
  {
    title: translate({
      message: "IT Helpdesk Engineer",
      id: "homepage.feature2.job.title"
    }),
    image: "/img/favicon/5g.jpg",
    description: (
      <Translate id="homepage.feature2.job.desc">
        Chuyên viên hỗ trợ CNTT tại Five Group (2024). Chịu trách nhiệm về
        việc hỗ trợ kỹ thuật về CNTT cho doanh nghiệp.
      </Translate>
    ),
  },
  {
    title: translate({
      message: "CN Mạng Máy tính & Truyền thông",
      id: "homepage.feature3.network.title"
    }),
    image: "/img/favicon/logo_khtn_remake_1.svg",
    description: (
      <Translate id="homepage.feature3.network.desc">
        Khoa Công nghệ thông tin, Trường Đại học Khoa học Tự nhiên, Đại học Quốc
        gia Thành phố Hồ Chí Minh (VNUHCM_US, 2019 - 2023).
      </Translate>
    ),
  },
  {
    title: translate({
      message: "Chuyên Tiếng Anh - Khóa 23",
      id: "homepage.feature4.english.title"
    }),
    image: "img/favicon/logo_HLK.svg",
    description: (
      <Translate id='homepage.feature4.english.desc'>
        Trường Trung học phổ thông Chuyên Hoàng Lê Kha - Tây Ninh (2016 - 2019).
        Nhận học bổng khuyến khích trong cả 3 năm học.
      </Translate>
    ),
  },
];

function Feature({ title, image, description }: FeatureItem) {
  return (
    <div className={clsx('col col--3')}>
      <div className="text--center">
        <img
          className={styles.featureSvg}
          alt={title}
          src={useBaseUrl(image)}
        />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
