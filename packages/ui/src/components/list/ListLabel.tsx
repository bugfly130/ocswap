import classNames from 'classnames'
import React, { FC, ReactNode } from 'react'

export interface ListLabelProps {
  children: ReactNode
  className?: string
}

export const ListLabel: FC<ListLabelProps> = ({ children, className }) => {
  return (
    <span
      className={classNames(
        className,
        'flex justify-start text-xs font-medium dark:text-gray-500 text-slate-400 px-2',
      )}
    >
      {children}
    </span>
  )
}
