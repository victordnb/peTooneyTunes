import React, { FC } from 'react';
import styles from './menuHead.module.css';

interface MenuHeadProps {}

const MenuHead: FC<MenuHeadProps> = () => (
  <div className={styles.MenuHead} data-testid="MenuHead">
    <h2>MenuHead Component</h2>
    
  </div>
);

export default MenuHead;
