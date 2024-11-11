// import React from 'react';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import styles from '../../css/HomepageFeatures.module.css';
type ContactItem = {
    image: JSX.Element;
    link: string;
}

const ContactList: ContactItem[] = [
    {
        image: <FontAwesomeIcon icon={icon({ name: 'facebook', style: 'brands' })} size='2x' />,
        link: 'https://www.facebook.com/buile.tuananh',
    },
    {
        image: <FontAwesomeIcon icon={icon({ name: 'instagram', style: 'brands' })} size='2x' />,
        link: 'https://instagram.com/yourlove.anthony2708'
    },
    {
        image: <FontAwesomeIcon icon={icon({ name: 'github', style: 'brands' })} size='2x' />,
        link: 'https://github.com/anthony2708'
    },
    {
        image: <FontAwesomeIcon icon={icon({ name: 'linkedin', style: 'brands' })} size='2x' />,
        link: 'https://www.linkedin.com/in/anthony2708/'
    },
    {
        image: <FontAwesomeIcon icon={icon({ name: 'youtube', style: 'brands' })} size='2x' />,
        link: 'https://www.youtube.com/@yourlove.anthony2708'
    },
    {
        image: <FontAwesomeIcon icon={icon({ name: 'phone', style: 'solid' })} size='2x' />,
        link: 'tel:+84937826135'
    },
    {
        image: <FontAwesomeIcon icon={icon({ name: 'envelope', style: 'regular' })} size='2x' />,
        link: 'mailto:builetuananh2708@gmail.com'
    },
    {
        image: <FontAwesomeIcon icon={icon({ name: 'house-user', style: 'solid' })} size='2x' />,
        link: 'mailto:builetuananh27082001@gmail.com'
    }
]

function Contact({ image, link }: ContactItem) {
    return (
        <div className="col col--3">
            <div className="text--center">
                <div className={styles.contact}>
                    <Link href={link}>{image}</Link>
                </div>
            </div>
        </div>
    );
}

export default function ContactFeatures(): JSX.Element {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="text--center padding-horiz--md">
                    <h2><Translate id="homepage.contact">Thông tin liên hệ</Translate></h2>
                </div>
                <div className="row">
                    {ContactList.map((props, idx) => (
                        <Contact key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}