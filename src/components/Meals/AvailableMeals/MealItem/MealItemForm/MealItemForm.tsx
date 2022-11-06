import React, { FC } from 'react';
import styles from './MealItemForm.module.css';

interface MealItemFormProps {}

const MealItemForm: FC<MealItemFormProps> = () => (
  <div className={styles.MealItemForm}>
    MealItemForm Component
  </div>
);

export default MealItemForm;
