import classNames from 'classnames'
import { Children, FC, ReactNode, cloneElement, isValidElement } from 'react'

export interface IconListProps {
  children: ReactNode
  iconWidth: number
  iconHeight: number
}

export const IconList: FC<IconListProps> = ({
  children,
  iconWidth,
  iconHeight,
}) => {
  return (
    <div className="flex items-center">
      <div className={classNames('inline-flex')}>
        {Children.map(children, (child, index) => {
          if (isValidElement(child)) {
            return (
              <div
                className="rounded-full inline-flex z-10 border-2 border-slate-700"
                style={{ marginLeft: index > 0 ? -iconWidth / 3 : 0 }}
              >
                {cloneElement(child, {
                  ...child.props,
                  width: iconWidth || child.props.width,
                  height: iconHeight || child.props.height,
                })}
              </div>
            )
          }
        })}
      </div>
    </div>
  )
}
