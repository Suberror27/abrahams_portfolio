import { useEffect, useRef, useState } from 'react';
import styles from './SkillBars.module.css'; // Import the CSS Module

const skills = [
    { title: "HTML", color: "#e34f26", value: 90 },
    { title: "CSS", color: "#1572b6", value: 80 },
    { title: "jQuery", color: "#0769ad", value: 70 },
    { title: "Python", color: "#306998", value: 85 },
    { title: "MySQL", color: "#4479a1", value: 75 },
];

const SkillBars = () => {
    const progressRefs = useRef([]);
    const [tagPositions, setTagPositions] = useState({});

    useEffect(() => {
        const positions = {};
        progressRefs.current.forEach((ref, index) => {
            if (ref) {
                const rect = ref.getBoundingClientRect();
                // Calculate the position where the tag should be placed
                positions[index] = rect.left + rect.width / 3.5;
            }
        });
        setTagPositions(positions);
    }, []);

    return (
        <div className={styles.skillBars}>
            {skills.map((skill, index) => (
                <div key={skill.title} className={styles.bar}>
                    <div className={styles.info}>
                        <span>{skill.title}</span>
                    </div>
                    <div className={styles.progressWrapper}>
                        <div className={styles.progressLine}>
                            <span
                                ref={el => progressRefs.current[index] = el}
                                className={styles.progressFill}
                                style={{ width: `${skill.value}%`, backgroundColor: skill.color }}
                            ></span>
                        </div>
                        <div
                            className={styles.floatingTag}
                            style={{ left: `${tagPositions[index] || 0}px` }}
                        >
                            {skill.value}%
                            <div className={styles.tagTail}></div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SkillBars;
