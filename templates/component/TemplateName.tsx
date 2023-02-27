import React, { FC } from 'react';
import styles from './TemplateName.module.css';

interface TemplateNameProps {
  templateNameProps: string;
}

const TemplateName: FC<TemplateNameProps> = () => {
  return (
    <div className={styles.TemplateName} data-testid="template-name">
      TemplateName Component
    </div>
  );
};

export default TemplateName;
