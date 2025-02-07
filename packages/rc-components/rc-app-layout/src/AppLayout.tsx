import React from 'react';
import classNames from 'classnames';
import Nav from './Nav';
import * as S from './styles';
import { IAppLayoutProps } from './types/IAppLayoutProps.type';

export type { IAppLayoutProps };

/**
 * @public
 */
const AppLayout: React.FC<IAppLayoutProps> = ({
  nav,
  navCollapsible,
  navCollapsed,
  defaultNavCollapsed,
  onNavCollapseTriggerClick,
  adjustHeight = 'consoleBaseTopbarRoot',
  children,
  className,
  style,
}) => {
  return (
    <S.AppLayout
      adjustHeight={adjustHeight}
      className={classNames(
        'wind-rc-app-layout',
        'windcc-app-layout',
        className,
      )}
      style={style}
    >
      {nav && (
        <Nav
          collapsible={navCollapsible}
          collapsed={navCollapsed}
          defaultCollapsed={defaultNavCollapsed}
          onCollapseTriggerClick={onNavCollapseTriggerClick}
        >
          {nav}
        </Nav>
      )}
      <S.Content className="windcc-app-layout__content">{children}</S.Content>
    </S.AppLayout>
  );
};

export default AppLayout;
